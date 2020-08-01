import { entity } from "./Entity";
import { Aseprite } from "./Aseprite";
import { asset } from "./Assets";
import { GameScene } from "./scenes/GameScene";
import { NPC } from './NPC';
import { particles, valueCurves, ParticleEmitter } from './Particles';
import { rnd, rndItem } from './util';
import { DOUBLE_JUMP_COLORS, GRAVITY, PLAYER_ACCELERATION_AIR } from "./constants";
import { Environment } from './World';
import conversation from '../assets/dialog/bird.dialog.json';
import { Conversation } from './Conversation';

enum BirdState {
    WAITING_LEFT,
    FLYING_RIGHT,
    WAITING_RIGHT,
    FLYING_LEFT
}

const WAITING_TIME = 5;
const JUMP_INTERVAL = 0.3;
const MAX_SPEED = 4;

@entity("bird")
export class Bird extends NPC {
    @asset("sprites/bird.aseprite.json")
    private static sprite: Aseprite;
    private doubleJumpEmitter: ParticleEmitter;
    private move: 0 | 1 | -1  = 1;
    private minAltitude: number;
    private jumpHeight = 1.5;
    private waitTimer = 0;
    private state = BirdState.WAITING_LEFT;
    private jumpTimer = 0;

    public constructor(scene: GameScene, x: number, y:number) {
        super(scene, x, y, 28, 24);
        this.minAltitude = y;
        this.conversation = new Conversation(conversation, this);

        this.doubleJumpEmitter = particles.createEmitter({
            position: {x: this.x, y: this.y},
            velocity: () => ({ x: rnd(-1, 1) * 90, y: rnd(-1, 0) * 100 }),
            color: () => rndItem(DOUBLE_JUMP_COLORS),
            size: rnd(1, 2),
            gravity: {x: 0, y: -120},
            lifetime: () => rnd(0.4, 0.6),
            alphaCurve: valueCurves.trapeze(0.05, 0.2)
        });
        this.setMaxVelocity(MAX_SPEED)
    }

    private isWaiting (): boolean {
        return this.state === BirdState.WAITING_LEFT || this.state === BirdState.WAITING_RIGHT;
    }
    
    protected jump (): void {
        this.jumpTimer = JUMP_INTERVAL;
        this.setVelocityY(Math.sqrt(2 * this.jumpHeight * GRAVITY));
        this.doubleJumpEmitter.setPosition(this.x, this.y + 20);
        this.doubleJumpEmitter.emit(20);
    }

    protected canJump (): boolean {
        return this.jumpTimer === 0;
    }

    protected updatePosition(newX: number, newY: number): void {
        this.x = newX;
        this.y = newY;

        // Check collision with the environment and correct player position and movement
        if (this.pullOutOfGround() !== 0 || this.pullOutOfCeiling() !== 0) {
            this.setVelocityY(0);
        }
        if (this.pullOutOfWall() !== 0) {
            this.setVelocityX(0);
        }
    }

    private pullOutOfGround(): number {
        let pulled = 0, col = 0;
        if (this.getVelocityY() <= 0) {
            const world = this.scene.world;
            const height = world.getHeight();
            col = world.collidesWith(this.x, this.y, [ this ], [ Environment.WATER ]);
            while (this.y < height && col) {
                pulled++;
                this.y++;
                col = world.collidesWith(this.x, this.y);
            }
        }
        return pulled;
    }

    private pullOutOfCeiling(): number {
        let pulled = 0;
        const world = this.scene.world;
        while (this.y > 0 && world.collidesWith(this.x, this.y + this.height, [ this ],
                [ Environment.PLATFORM, Environment.WATER ])) {
            pulled++;
            this.y--;
        }
        return pulled;
    }

    private pullOutOfWall(): number {
        let pulled = 0;
        const world = this.scene.world;
        if (this.getVelocityX() > 0) {
            while (world.collidesWithVerticalLine(this.x + this.width / 2, this.y + this.height * 3 / 4,
                    this.height / 2, [ this ], [ Environment.PLATFORM, Environment.WATER ])) {
                this.x--;
                pulled++;
            }
        } else {
            while (world.collidesWithVerticalLine(this.x - this.width / 2, this.y + this.height * 3 / 4,
                    this.height / 2, [ this ], [ Environment.PLATFORM, Environment.WATER ])) {
                this.x++;
                pulled++;
            }
        }
        return pulled;
    }

    private nextState (): void {
        if (this.state === BirdState.FLYING_LEFT) {
            this.state = BirdState.WAITING_LEFT;
        } else {
            this.state = this.state + 1;
        }
    }

    public isReadyForConversation(): boolean | null {
        const superResult = super.isReadyForConversation();
        return (superResult && this.isWaiting());
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.x, -this.y);
        if (this.direction < 0) {
            ctx.scale(-1, 1);
        }
        Bird.sprite.drawTag(ctx, "idle", -Bird.sprite.width >> 1, -Bird.sprite.height, this.scene.gameTime * 1000);
        ctx.restore();
        if (this.scene.showBounds) this.drawBounds();
        this.speechBubble.draw(ctx);
    }

    update(dt: number): void {
        super.update(dt);
        this.move = 0;

        // Triggers
        const triggerCollisions = this.scene.world.getTriggerCollisions(this);

        if (this.jumpTimer > 0) {
            this.jumpTimer -= dt;
            if (this.jumpTimer < 0) {
                this.jumpTimer = 0;
            }
        }

        if ((this.state === BirdState.WAITING_LEFT || this.state === BirdState.WAITING_RIGHT) && !this.hasActiveConversation()) {
            this.waitTimer += dt;
            if (this.waitTimer >= WAITING_TIME) {
                this.waitTimer = 0;
                this.nextState();
            }
        }

        if (this.state === BirdState.FLYING_RIGHT || this.state === BirdState.FLYING_LEFT) {
            this.move = this.state === BirdState.FLYING_RIGHT ? 1 : -1;
            if (this.y < this.minAltitude && this.canJump()) {
                this.jump();
            }

            if (this.state === BirdState.FLYING_RIGHT && triggerCollisions.length > 0 && triggerCollisions.find(t => t.name === 'bird_nest_right')) {
                this.nextState();
            }
            if (this.state === BirdState.FLYING_LEFT && triggerCollisions.length > 0 && triggerCollisions.find(t => t.name === 'bird_nest_left')) {
                this.nextState();
            }
        }

        // Bird acceleration
        if (this.move !== 0) {
            this.direction = this.move;
            this.accelerateX(PLAYER_ACCELERATION_AIR * dt * this.move);
        } else {
            if (this.getVelocityX() > 0) {
                this.decelerateX(PLAYER_ACCELERATION_AIR * dt);
            } else {
                this.decelerateX(-PLAYER_ACCELERATION_AIR * dt);
            }
        }

        this.speechBubble.update(this.x, this.y);
    }
}

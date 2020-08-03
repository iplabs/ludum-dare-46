import { Entity } from './Entity';
import { Aseprite } from './Aseprite';
import { RenderingLayer } from './Renderer';

export type AnimationConfig = {
    loop?: boolean;
    callback?: Function;
}

export type CurrentAnimationState = {
  tag: string;
  start: number;
  finished: boolean;
  duration: number;
  config?: AnimationConfig;
  direction?: number;
}

/**
 * The Animator class can be used to orchestrate and draw aseprite animations of an entity
 */
export class Animator {
  private entity: Entity;
  private sprite?: Aseprite;

  private currentAnimation: CurrentAnimationState = {
    tag: '',
    start: 0,
    duration: 0,
    finished: false,
  }

  public constructor (entity: Entity) {
    this.entity = entity;
  }

  public assignSprite (sprite: Aseprite): void {
    this.sprite = sprite;
  }

  /**
   * Updates the animation if all conditions are met regarding the currently playing animation.
   *
   * @param tag    - The animation tag to draw.
   * @param config - Optional animation configuration.
   */
  private updateAnimation (tag: string, config?: AnimationConfig): void {
    // Early out if animation tag is already set as current animation
    if (!this.sprite) return;

    // Animation Update Logic
    // If current animation has a fixed duration, check if it was reached.
    // If so, the animation is set to finished.
    if (!this.currentAnimation.finished && this.currentAnimation.duration > 0) {
        const animationTime = (this.entity.scene.gameTime * 1000) - this.currentAnimation.start;
        if (animationTime + (this.entity.scene.dt * 1000) >= this.currentAnimation.duration) {
           this.currentAnimation.finished = true;
           console.log('finished!');
           if (this.currentAnimation.config?.callback) {
               console.log('calling callback');
               this.currentAnimation.config.callback();
           }
        }
    }

    // Leave function if the provided animation tag is the one that is already playing
    // since there is no need to update the current animation settings.
    if (this.currentAnimation.tag === tag) return;

    // Update Animation with new payload
    console.log('updating current animation with tag', tag);
    this.currentAnimation.tag = tag;
    this.currentAnimation.start = this.entity.scene.gameTime * 1000;
    this.currentAnimation.config = config;
    this.currentAnimation.finished = false;
    this.currentAnimation.duration = this.sprite.getAnimationDurationByTag(tag) || 0;
    console.log('New animation duration is', this.currentAnimation.duration);
  }

  /**
   * Method to call from draw method of the entity to draw a specific animation by tag.
   *
   * @param tag    - The animation tag to draw.
   * @param ctx    - The canvas context to draw to.
   * @param config - Optional animation configuration.
   */
  public play (tag: string, direction: number, config?: AnimationConfig) {
    this.currentAnimation.direction = direction;
    this.updateAnimation(tag, config);

    let animationTime = (this.entity.scene.gameTime * 1000) - this.currentAnimation.start;

    /**
     * Forcefully stop the loop at the last frame, if looping is disabled.
     * We substract an arbitrary small number the animation duration, since the exact animation duration time
     * will play frame 1 of the animation.
     */
    if (config?.loop === false) {
        const lastFrameTime = this.currentAnimation.duration - 1;
        animationTime = Math.min(lastFrameTime, animationTime);
    }

    /**
     * Zero Aniamtion timer fix.
     * Sometimes (?), an animation time of zero does not play the first but the last frame, thus we just skip 0.
     */
    if (animationTime === 0) animationTime += 1;

    this.draw(animationTime);
  }

  private draw (animationTime: number): void {
    if (this.sprite) {
        console.log(`Drawing Aseprite of tag ${this.currentAnimation.tag} with Animation Time of ${animationTime}`);
        this.entity.scene.renderer.addAseprite(
            this.sprite, this.currentAnimation.tag, this.entity.x, this.entity.y, RenderingLayer.ENTITIES, this.currentAnimation.direction, animationTime
        )
    }
  }
}

import { NPC } from './NPC';
import { FaceModes } from './Face';
import type { DialogJSON } from "*.dialog.json";
import fire0 from '../assets/dialog/fire0.dialog.json';
import fire1 from '../assets/dialog/fire1.dialog.json';
import fire2 from '../assets/dialog/fire2.dialog.json';
import fire3 from '../assets/dialog/fire3.dialog.json';
import stone1 from '../assets/dialog/stone1.dialog.json';
import stone2 from '../assets/dialog/stone2.dialog.json';
import seed1 from '../assets/dialog/seed1.dialog.json';
import tree0 from '../assets/dialog/tree0.dialog.json';
import tree1 from '../assets/dialog/tree1.dialog.json';
import tree2 from '../assets/dialog/tree2.dialog.json';
import spider1 from '../assets/dialog/spider1.dialog.json';
import flameboy1 from '../assets/dialog/flameboy1.dialog.json';
import flameboy2 from '../assets/dialog/flameboy2.dialog.json';
import wing1 from '../assets/dialog/wing1.dialog.json';
import { Conversation } from './Conversation';
import { valueCurves } from './Particles';
import { Signal } from "./Signal";
import { Milestone } from './Player';
import { GameScene } from "./scenes/GameScene";

export type CampaignState = "start" | "finished";

const allDialogs: Record<string, DialogJSON> = {
    "fire0": fire0,
    "fire1": fire1,
    "fire2": fire2,
    "fire3": fire3,
    "stone1": stone1,
    "stone2": stone2,
    "seed1": seed1,
    "tree0": tree0,
    "tree1": tree1,
    "tree2": tree2,
    "spider1": spider1,
    "flameboy1": flameboy1,
    "flameboy2": flameboy2,
    "wing1": wing1,
};

export class Campaign {
    public onStatesChanged = new Signal<CampaignState[]>();
    public states: CampaignState[] = ["start"];

    constructor(public scene: GameScene) {
        setTimeout(() => {
            this.begin();
        });
    }

    private begin() {
        // Setup initial NPC dialogs
        this.runAction("enable", null, ["fire", "fire0"]);
        this.runAction("enable", null, ["tree", "tree0"]);
        this.runAction("enable", null, ["stone", "stone1"]);
        this.runAction("enable", null, ["flameboy", "flameboy1"]);
        this.runAction("enable", null, ["wing", "wing1"]);
        this.runAction("enable", null, ["spider", "spider1"]);
    }

    public hasState(state: CampaignState) {
        return this.states.includes(state);
    }

    public setStates(states: CampaignState[]) {
        this.states = states;
        this.onStatesChanged.emit(this.states);
    }

    public removeState(state: CampaignState) {
        if (this.hasState(state)) {
            this.states.splice(this.states.indexOf(state), 1);
            this.onStatesChanged.emit(this.states);
        }
    }

    public addState(state: CampaignState) {
        if (!this.hasState(state)) {
            this.states.push(state);
            this.onStatesChanged.emit(this.states);
        }
    }

    public runAction(action: string, npc?: NPC | null, params: string[] = []): void {
        switch(action) {
            case "angry":
                npc?.face?.setMode(FaceModes.ANGRY);
                break;
            case "neutral":
                npc?.face?.setMode(FaceModes.NEUTRAL);
                break;
            case "bored":
                npc?.face?.setMode(FaceModes.BORED);
                break;
            case "amused":
                npc?.face?.setMode(FaceModes.AMUSED);
                break;
            case "sad":
                npc?.face?.setMode(FaceModes.SAD);
                break;

            case "zoomin":
                this.scene.camera.zoom += 1
                break;
            case "zoomout":
                this.scene.camera.zoom -= 1
                break;
            case "treezoom":
                const forestPointer = this.scene.pointsOfInterest.find(poi => poi.name === 'forest');
                if (forestPointer) {
                    this.scene.camera.focusOn(8, forestPointer.x, forestPointer.y, 1, 0, valueCurves.cos(0.35));
                }
                break;
            case "mountainzoom":
                const mountainPointer = this.scene.pointsOfInterest.find(poi => poi.name === 'mountain');
                if (mountainPointer) {
                    this.scene.camera.focusOn(8, mountainPointer.x, mountainPointer.y, 1, 0, valueCurves.cos(0.35));
                }
                break;
            case "riverzoom":
                const riverPointer = this.scene.pointsOfInterest.find(poi => poi.name === 'river');
                if (riverPointer) {
                    this.scene.camera.focusOn(8, riverPointer.x, riverPointer.y, 1, 0, valueCurves.cos(0.35));
                }
                break;
            case "crazyzoom":
                this.scene.player.achieveMilestone(Milestone.APOCALYPSE_STARTED);
                const duration = 12;
                this.scene.camera.focusOn(duration, this.scene.fire.x, this.scene.fire.y + 15, 8,
                    -2 * Math.PI, valueCurves.cubic).then(() => this.scene.beginApocalypse());
                this.scene.fire.conversation = null;
                this.scene.fireFuryEndTime = this.scene.gameTime + duration + 8;
                break;
            case "gotFireQuest":
                this.scene.player.achieveMilestone(Milestone.GOT_QUEST_FROM_FIRE);
                this.scene.campaign.runAction("enable", null, ["tree", "tree1"]);
                break;
            case "givebeard":
                this.scene.player.setBeard(true);
                break;
            case "endgame":
                this.scene.player.achieveMilestone(Milestone.BEAT_GAME);
                this.scene.fire.conversation = null;
                setTimeout(() => {
                    this.scene.gameOver();
                }, 2000);
                break;

            case "game":
                this.addState(params[0] as any);
                break;
            case "doublejump":
                this.scene.player.achieveMilestone(Milestone.GOT_QUEST_FROM_TREE);
                this.scene.player.doubleJump = true;
                break;
            case "multijump":
                this.scene.player.achieveMilestone(Milestone.GOT_MULTIJUMP);
                this.scene.player.multiJump = true;
                break;
            case "spawnseed":
                this.scene.tree.spawnSeed();
                break;
            case "spawnwood":
                this.scene.player.achieveMilestone(Milestone.TREE_DROPPED_WOOD);
                this.scene.tree.spawnWood();
                break;
            case "talkedToStone":
                if (this.scene.player.getMilestone() === Milestone.PLANTED_SEED) {
                    this.scene.player.achieveMilestone(Milestone.TALKED_TO_STONE);
                }
                break;
            case "pickupstone":
                this.scene.stone.pickUp();
                break;
            case "talkedToFireWithWood":
                if (this.scene.player.getMilestone() === Milestone.GOT_WOOD) {
                    this.scene.player.achieveMilestone(Milestone.TALKED_TO_FIRE_WITH_WOOD);
                }
                break;
            case "dance":
                setTimeout(() => {
                    this.scene.player.startDance(+params[0] || 1);
                }, 500);
                break;
            case "togglegender":
                this.scene.player.toggleGender();
                break;
            case "enable":
                const char = params[0], dialogName = params[1];
                const npcMap: Record<string, NPC> = {
                    "fire": this.scene.fire,
                    "stone": this.scene.stone,
                    "tree": this.scene.tree,
                    "seed": this.scene.seed,
                    "flameboy": this.scene.flameboy,
                    "wing": this.scene.wing,
                    "spider": this.scene.spider
                };
                const targetNpc = npcMap[char];
                const dialog = allDialogs[dialogName];
                if (targetNpc && dialog) {
                    targetNpc.conversation = new Conversation(dialog, targetNpc);
                }
                break;
            case "disable":
                const char1 = params[0];
                const npcMap1: Record<string, NPC> = {
                    "fire": this.scene.fire,
                    "stone": this.scene.stone,
                    "tree": this.scene.tree,
                    "seed": this.scene.seed,
                    "flameboy": this.scene.flameboy,
                    "wing": this.scene.wing,
                    "spider": this.scene.spider
                };
                const targetNpc1 = npcMap1[char1];
                if (targetNpc1) {
                    targetNpc1.conversation = null;
                }
                break;
        }
    }
}

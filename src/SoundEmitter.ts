import { AmbientSoundId, GameScene } from './scenes/GameScene';
import { calculateVolume } from './util';
import { Entity } from './Entity';
import { GameObjectInfo } from './MapInfo';
import { Point, Size } from './Geometry';
import { Sound } from './Sound';

/**
 * Sound emitters are invisible entities that emit a sound in relation to the player distance.
 * Might be better to set the volume according the camera center in the future.
 */
export class SoundEmitter extends Entity {
    private sound: Sound;
    private maxVolume: number;
    private intensity: number;

    public constructor(scene: GameScene, position: Point, sound: Sound, maxVolume: number, intensity: number) {
        super(scene, position, new Size(1, 1));

        this.sound = sound;
        this.maxVolume = maxVolume;
        this.intensity = intensity;
    }

    public draw () {}

    public update(dt: number): void {
        const vol = calculateVolume(this.distanceToPlayer, this.maxVolume, this.intensity);
        if (vol) {
            this.sound.setVolume(vol);
            if (!this.sound.isPlaying()) this.sound.play();
        } else {
            this.sound.stop();
        }
    }

    public static fromGameObjectInfo(scene: GameScene, gameObjectInfo: GameObjectInfo): SoundEmitter {
        const soundId = gameObjectInfo.properties.sound;
        const volume = gameObjectInfo.properties.volume || 1;
        const intensity = gameObjectInfo.properties.intensity || 1;

        if (soundId) {
            const sound = scene.ambientSounds[soundId as AmbientSoundId];
            if (sound) {
                return new SoundEmitter(
                    scene, new Point(gameObjectInfo.x, gameObjectInfo.y), sound, volume, intensity
                );
            } else {
                throw new Error(`Cannot create sound emitter because '${soundId}' is not a valid ambient sound id`);
            }
        } else {
            throw new Error(`Cannot create sound emitter because 'sound' property is empty`);
        }
    }
}

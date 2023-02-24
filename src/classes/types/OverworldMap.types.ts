import { GameObject } from "../GameObject";

export interface OverworldMapConfig {
  gameObjects: { [key: string]: GameObject };
  backgroundSrc: string;
  foregroundSrc: string;
}

import { GameObject } from "../GameObject";

export interface IAnimations {
  "idle-down"?: number[][];
  "walk-down"?: number[][];
}

export interface SpriteConfig {
  animations?: IAnimations;
  currentAnimation?: string;
  animationFrameLimit?: number;
  src: string;
  gameObject: GameObject;
}

import { GameObject } from "../GameObject";

export interface IAnimations {
  idleDown?: number[][];
}

export interface SpriteConfig {
  animations?: IAnimations;
  currentAnimation?: string;
  src: string;
  gameObject: GameObject;
}

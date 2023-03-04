import { FPS } from "../constants";
import { IDLE_DOWN } from "./constants/macro.constants";
import { SHADOW } from "./constants/src.constants";
import { GameObject } from "./GameObject";
import { IAnimations, SpriteConfig } from "./types/Sprite.types";

export class Sprite {
  public image: HTMLImageElement;
  public shadow: HTMLImageElement;
  public animationFrameProgress: number;
  private animations: IAnimations;
  private currentAnimation: string;
  private currentAnimationFrame: number;
  private animationFrameLimit: number;
  private isLoaded: boolean;
  private isShadowLoaded: boolean;
  private useShadow: boolean;
  private gameObject: GameObject;

  constructor(config: SpriteConfig) {
    this.isLoaded = false;
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.isShadowLoaded = false;
    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) this.shadow.src = SHADOW;
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
    };

    this.currentAnimation = config.currentAnimation || IDLE_DOWN;
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || FPS;
    this.animationFrameProgress = this.animationFrameLimit;

    this.gameObject = config.gameObject;
  }

  get frame(): number[] {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    const x: number = this.gameObject.x - 8;
    const y: number = this.gameObject.y - 18;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}

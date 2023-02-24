import { HERO } from "./constants/src.constants";
import { Sprite } from "./Sprite";
import { GameObjectConfig } from "./types/GameObject.types";

export enum EDirections {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

export class GameObject {
  public x: number;
  public y: number;
  public direction: string;
  public sprite: Sprite;

  constructor(config: GameObjectConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || EDirections.Down;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || HERO,
    });
  }

  update(state: any): void {}
}

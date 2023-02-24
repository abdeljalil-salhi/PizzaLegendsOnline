import { Sprite } from "./Sprite";
import { GameObjectConfig } from "./types/GameObject.types";

export class GameObject {
  public x: number;
  public y: number;
  public sprite: Sprite;

  constructor(config: GameObjectConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "assets/characters/people/hero.png",
    });
  }
}

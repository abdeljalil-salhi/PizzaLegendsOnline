import { GameObject } from "./GameObject";
import { OverworldConfig } from "./types/Overworld";

export class Overworld {
  private element: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;

  constructor(config: OverworldConfig) {
    this.element = config.element;
    this.canvas = this.element.querySelector(
      ".game__canvas"
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.x = 5;
    this.y = 6;
  }

  init() {
    const image: HTMLImageElement = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "assets/maps/DemoLower.png";

    const hero: GameObject = new GameObject({
      x: 5,
      y: 6,
    });
    const npc1: GameObject = new GameObject({
      x: 7,
      y: 9,
      src: "assets/characters/people/npc1.png",
    });

    hero.sprite.draw(this.ctx);
    npc1.sprite.draw(this.ctx);
  }

  moveHero(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.init();
  }

  moveHeroUp() {
    this.moveHero(this.x, this.y - 1);
  }

  moveHeroDown() {
    this.moveHero(this.x, this.y + 1);
  }

  moveHeroLeft() {
    this.moveHero(this.x - 1, this.y);
  }

  moveHeroRight() {
    this.moveHero(this.x + 1, this.y);
  }
}

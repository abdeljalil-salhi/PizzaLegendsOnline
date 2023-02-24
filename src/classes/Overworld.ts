import { OverworldMap, OverworldMaps } from "./OverworldMap";
import { OverworldConfig } from "./types/Overworld.types";

export class Overworld {
  private element: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private map: OverworldMap;

  constructor(config: OverworldConfig) {
    this.element = config.element;
    this.canvas = this.element.querySelector(
      ".game__canvas"
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.map = null as unknown as OverworldMap;
  }

  init() {
    this.map = new OverworldMap(OverworldMaps.Kitchen);
    this.gameLoop();
  }

  gameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.map.drawBackground(this.ctx);
      Object.values(this.map.gameObjects).forEach((gameObject) => {
        gameObject.sprite.draw(this.ctx);
      });
      this.map.drawForeground(this.ctx);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }
}

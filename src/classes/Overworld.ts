import { OverworldMap, OverworldMaps } from "./OverworldMap";
import { PersonMovements } from "./PersonMovements";
import { OverworldConfig } from "./types/Overworld.types";

export class Overworld {
  private element: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private map: OverworldMap;
  private directionInput: PersonMovements;

  constructor(config: OverworldConfig) {
    this.element = config.element;
    this.canvas = this.element.querySelector(
      ".game__canvas"
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.map = null as unknown as OverworldMap;
    this.directionInput = null as unknown as PersonMovements;
  }

  init(): void {
    this.map = new OverworldMap(OverworldMaps.Kitchen);

    this.directionInput = new PersonMovements();
    this.directionInput.init();

    this.gameLoop();
  }

  gameLoop(): void {
    const step = (): void => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.map.drawBackground(this.ctx);
      Object.values(this.map.gameObjects).forEach((gameObject) => {
        gameObject.update({
          arrow: this.directionInput.direction,
        });
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

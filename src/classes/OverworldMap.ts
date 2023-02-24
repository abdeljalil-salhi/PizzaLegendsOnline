import { withGrid } from "../utils/grid";
import {
  DEMO_LOWER,
  DEMO_UPPER,
  KITCHEN_LOWER,
  KITCHEN_UPPER,
  NPC1,
  NPC2,
} from "./constants/src.constants";
import { GameObject } from "./GameObject";
import { Person } from "./Person";
import { OverworldMapConfig } from "./types/OverworldMap.types";

export class OverworldMap {
  public gameObjects: { [key: string]: GameObject };
  private background: HTMLImageElement;
  private foreground: HTMLImageElement;

  constructor(config: OverworldMapConfig) {
    this.gameObjects = config.gameObjects;

    this.background = new Image();
    this.background.src = config.backgroundSrc;

    this.foreground = new Image();
    this.foreground.src = config.foregroundSrc;
  }

  drawBackground(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.background, 0, 0);
  }

  drawForeground(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.foreground, 0, 0);
  }
}

export const OverworldMaps = {
  DemoRoom: {
    gameObjects: {
      hero: new Person({
        isControlled: true,
        x: withGrid(5),
        y: withGrid(6),
      }),
      npc1: new Person({
        x: withGrid(6),
        y: withGrid(6),
        src: NPC1,
      }),
    },
    backgroundSrc: DEMO_LOWER,
    foregroundSrc: DEMO_UPPER,
  },
  Kitchen: {
    gameObjects: {
      hero: new Person({
        isControlled: true,
        x: withGrid(3),
        y: withGrid(5),
      }),
      npc1: new Person({
        x: withGrid(4),
        y: withGrid(5),
        src: NPC1,
      }),
      npc2: new Person({
        x: withGrid(10),
        y: withGrid(8),
        src: NPC2,
      }),
    },
    backgroundSrc: KITCHEN_LOWER,
    foregroundSrc: KITCHEN_UPPER,
  },
};

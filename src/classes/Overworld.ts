interface OverworldConfig {
  element: HTMLDivElement;
}

export class Overworld {
  element: HTMLDivElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;

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

    const shadow: HTMLImageElement = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0,
        0,
        32,
        32,
        this.x * 16 - 8,
        this.y * 16 - 18,
        32,
        32
      );
    };
    shadow.src = "assets/characters/shadow.png";

    const hero: HTMLImageElement = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0,
        0,
        32,
        32,
        this.x * 16 - 8,
        this.y * 16 - 18,
        32,
        32
      );
    };
    hero.src = "assets/characters/people/hero.png";
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

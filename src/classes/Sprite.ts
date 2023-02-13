import { GameObject } from "./GameObject";
import { IAnimations, SpriteConfig } from "./types/Sprite";

export class Sprite {
  public image: HTMLImageElement;
  private animations: IAnimations;
  private currentAnimation: string;
  private currentAnimationFrame: number;
  private isLoaded: boolean;
  private gameObject: GameObject;

  constructor(config: SpriteConfig) {
    /*
     * The image property is an Image object that contains the sprite sheet.
     * The image is loaded asynchronously, so we need to set a flag to indicate
     * when the image has finished loading.
     */
    this.isLoaded = false;
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    /*
     * The animations property is an object that contains all the animations
     * for the sprite. Each animation is an array of frames, where each frame
     * is an array of two numbers. The first number is the x coordinate of the
     * frame in the sprite sheet, and the second number is the y coordinate.
     */
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    /*
     * The currentAnimation property is a string that contains the name of the
     * current animation. This is used to look up the current animation in the
     * animations object.
     */
    this.currentAnimation = config.currentAnimation || "idleDown";
    /*
     * The currentAnimationFrame property is a number that contains the index
     * of the current frame in the current animation.
     */
    this.currentAnimationFrame = 0;

    /*
     * The gameObject property is a reference to the game object that the
     * sprite is attached to. This is used to get the position of the game
     * object so that the sprite can be drawn in the correct position.
     */
    this.gameObject = config.gameObject;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    /*
     * If the image is not loaded yet, don't try to draw it.
     */
    if (!this.isLoaded) return;

    /*
     * The x and y variables are numbers that contain the position of the
     * sprite on the canvas. The sprite is drawn 8 pixels to the left of the
     * game object's position, and 18 pixels above the game object's position.
     * This is because the game object's position is the center of the game
     * object, but the sprite is drawn from the top left corner.
     */
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 18;

    /*
     * The drawImage() method of the CanvasRenderingContext2D interface draws
     * an image, canvas, or video onto the canvas.
     */
    ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}

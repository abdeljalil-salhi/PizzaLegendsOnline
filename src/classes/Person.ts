import { SCALE } from "../constants";
import { GameObject } from "./GameObject";
import { GameObjectConfig } from "./types/GameObject.types";

export class Person extends GameObject {
  public movingProgressRemaining: number;
  public directionUpdate: { [key: string]: ["x" | "y", number] };
  private isControlled: boolean;

  constructor(config: GameObjectConfig) {
    super(config);
    this.isControlled = config.isControlled || false;
    this.movingProgressRemaining = 0;
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state: any): void {
    this.updatePosition();

    if (
      this.isControlled &&
      this.movingProgressRemaining === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movingProgressRemaining = SCALE;
    }
  }

  updatePosition(): void {
    if (this.movingProgressRemaining > 0) {
      const [property, change]: ["x" | "y", number] =
        this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }
}

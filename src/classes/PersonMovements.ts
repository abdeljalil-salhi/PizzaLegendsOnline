import { EDirections } from "./GameObject";

export class PersonMovements {
  private heldDownKeys: string[];
  private map: { [key: string]: string };

  constructor() {
    this.heldDownKeys = [];
    this.map = {
      ArrowUp: EDirections.Up,
      KeyW: EDirections.Up,
      ArrowDown: EDirections.Down,
      KeyS: EDirections.Down,
      ArrowLeft: EDirections.Left,
      KeyA: EDirections.Left,
      ArrowRight: EDirections.Right,
      KeyD: EDirections.Right,
    };
  }

  get direction(): string {
    return this.heldDownKeys[0];
  }

  init(): void {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      const dir: string = this.map[e.code];
      if (dir && this.heldDownKeys.indexOf(dir) === -1) {
        this.heldDownKeys.unshift(dir);
      }
    });
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      const dir: string = this.map[e.code];
      const index: number = this.heldDownKeys.indexOf(dir);
      if (index > -1) {
        this.heldDownKeys.splice(index, 1);
      }
    });
  }
}

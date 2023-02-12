import { FC, useEffect } from "react";
import { Overworld } from "../classes/Overworld";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  useEffect(() => {
    const overworld = new Overworld({
      element: document.querySelector(".game__container") as HTMLDivElement,
    });
    overworld.init();

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          overworld.moveHeroUp();
          break;
        case "ArrowDown":
          overworld.moveHeroDown();
          break;
        case "ArrowLeft":
          overworld.moveHeroLeft();
          break;
        case "ArrowRight":
          overworld.moveHeroRight();
          break;
      }
    });
  }, []);

  return (
    <div>
      <div className="game__container">
        <canvas className="game__canvas" width={352} height={198}>
          Your browser does not support the canvas element. Please use a modern
          browser.
        </canvas>
      </div>
    </div>
  );
};

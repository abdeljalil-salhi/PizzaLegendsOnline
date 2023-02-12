import { FC, useEffect } from "react";
import { Overworld } from "../classes/Overworld";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  useEffect(() => {
    const overworld = new Overworld({
      element: document.querySelector(".game__container") as HTMLDivElement,
    });
	overworld.init();
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

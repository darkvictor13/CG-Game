import { useState, useEffect } from "react";

export type PlayerControls = {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};

function getPlayerControlsField(key: string): keyof PlayerControls {
  switch (key) {
    case "ArrowLeft":
      return "left";

    case "ArrowRight":
      return "right";

    case "ArrowUp":
      return "up";

    case "ArrowDown":
      return "down";

    default:
      return "down";
  }
}

export default function usePlayerControls(): PlayerControls {
  const [playerControls, setPlayerControls] = useState<PlayerControls>({
    left: false,
    right: false,
    up: false,
    down: false,
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      const field = getPlayerControlsField(event.key);
      setPlayerControls((prev) => ({ ...prev, [field]: true }));
    }

    function handleKeyUp(event: KeyboardEvent): void {
      const field = getPlayerControlsField(event.key);
      setPlayerControls((prev) => ({ ...prev, [field]: false }));
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return (): void => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return playerControls;
}

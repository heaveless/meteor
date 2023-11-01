// import Environment from "./environment";

import { useEffect, useRef } from "preact/hooks";

export function App() {
  // const draw = (ctx: any, frameCount: number) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.fillStyle = "#000000";
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

  const ref = useRef<any>(null);

  const draw = () => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
  };

  useEffect(() => {
    draw();
  }, [draw]);

  return (
    <canvas ref={ref} />
    // <Environment
    //   draw={draw}
    //   options={{
    //     width: 760,
    //     height: 570,
    //   }}
    // />
  );
}

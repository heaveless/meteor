import Environment from "./environment";

export function App() {
  const draw = (ctx: any, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <Environment
      draw={draw}
      options={{
        width: 760,
        height: 570,
      }}
    />
  );
}

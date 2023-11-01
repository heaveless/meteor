import useCanvas from "./useCanvas";

export type EnvironmentProps = {
  draw: Function;
  options: any;
};
const Environment = (props: EnvironmentProps) => {
  const { draw, options } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...options} />;
};

export default Environment;

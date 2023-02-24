type ContainerProps = {
  // style 속성 타입 지정하는법
  styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text content goes here</div>;
};

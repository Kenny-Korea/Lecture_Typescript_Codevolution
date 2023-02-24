type HeadingProps = {
  // 컴포넌트의 children(태그 사이에 들어가는 녀석)의 타입 지정 가능
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};

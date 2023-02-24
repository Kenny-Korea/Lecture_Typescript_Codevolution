type OscarProps = {
  // 컴포넌트 태그 사이에 다른 컴포넌트가 들어갈 경우
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

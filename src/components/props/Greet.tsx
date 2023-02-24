type GreetProps = {
  name: string;
  messageCount?: number; // messageCount가 들어올 수도 있고 아닐 수도 있음
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  // default value를 설정해주기 위해 아래와 같이 선언
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hey {props.name}! You have {props.messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};

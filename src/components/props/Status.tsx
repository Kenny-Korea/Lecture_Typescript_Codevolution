type StatusProps = {
  status: "loading" | "success" | "error"; // 타입을 텍스트로도 지정 가능함
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <h2>Status - {message}</h2>;
};

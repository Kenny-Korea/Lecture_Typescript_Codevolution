type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// props.value 가 아니라 {value} 이런 식으로 props 인자로 받는거는
// destructuring 문법 사용하는거임
export const Input = ({ value, handleChange }: InputProps) => {
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event)
  // }
  return <input type="text" value={value} onChange={handleChange} />;
};

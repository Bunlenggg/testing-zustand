import { MyStore } from "./store/store";

const Button = () => {
  const { setCount } = MyStore();
  return <button onClick={setCount}>Click Me</button>;
};

export default Button;

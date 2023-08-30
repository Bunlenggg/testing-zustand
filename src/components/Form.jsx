import { useRef } from "react";
import { MyStore } from "./store/store";
const Form = () => {
  const { setTasks } = MyStore();
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") return;
    setTasks(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button type="submit"> Submit</button>
      </form>
    </>
  );
};

export default Form;

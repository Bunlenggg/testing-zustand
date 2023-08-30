import "./App.css";
import Button from "./components/Button";
import { MyStore } from "./components/store/store";
import Form from "./components/Form";
import Delete from "./components/Delete";

function App() {
  const { count, tasks } = MyStore();
  return (
    <>
      <Form />
      <p>{count}</p>
      <Button />
      <ul>
        {tasks.map((each) => (
          <li key={each.id}>
            {each.title} <Delete id={each.id} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

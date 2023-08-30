import "./App.css";
import Button from "./components/Button";
import { MyStore } from "./components/store/store";
import Form from "./components/Form";

function App() {
  const { count, tasks } = MyStore();
  return (
    <>
      <Form />
      <p>{count}</p>
      <Button />
      <ul>
        {tasks.map((each) => (
          <li key={each.id}>{each.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

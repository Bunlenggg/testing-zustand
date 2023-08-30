import "./App.css";
import Button from "./components/Button";
import { MyStore } from "./components/store/store";
import Form from "./components/Form";
import Delete from "./components/Delete";

function App() {
  const { count, tasks, setEditTitle, setEditID, isOpen, setOpen, editTitle } =
    MyStore();
  const catchOldInfo = (id, title) => {
    setEditTitle(title);
    setEditID(id);
    setOpen();
  };
  return (
    <>
      <Form />
      <p>{count}</p>
      <Button />
      <ul>
        {tasks.map((each) => (
          <li key={each.id}>
            {each.title} <Delete id={each.id} />{" "}
            <button onClick={() => catchOldInfo(each.id, each.title)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <form>
          <input defaultValue={editTitle} type="text" />
          <button>Update</button>
        </form>
      )}
    </>
  );
}

export default App;

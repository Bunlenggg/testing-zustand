import { MyStore } from "./store/store";

const Delete = ({id}) => {
    const {setDelete} = MyStore()
  return <>

  <button onClick={()=> setDelete(id)}>del</button>
  </>;
};

export default Delete;

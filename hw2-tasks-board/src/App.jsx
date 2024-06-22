import { tasks } from "./data/tasksData";
import ListContainer from "./components/ListContainer/ListContainer";

const App = () => {
  return (
    <>
      <ListContainer list={tasks} />
    </>
  );
};

export default App;

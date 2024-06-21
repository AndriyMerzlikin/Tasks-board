import List from "./components/List/List";
import { tasks } from "./data/tasksData";
import {
  STATUS_TODO,
  STATUS_IN_PROGRESS,
  STATUS_DONE,
} from "./constants/statusConstants";

const App = () => {
  return (
    <div className="app-container">
      <List list={tasks} status={STATUS_TODO}/>
      <List list={tasks} status={STATUS_IN_PROGRESS}/>
      <List list={tasks} status={STATUS_DONE}/>
    </div>
  );
};

export default App;

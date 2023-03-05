import { useState } from "react";
import BugList from "./components/BugList";
import CreateBug from "./components/CreateBug";
import Nav from "./components/Nav";

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="App pt-10 flex flex-col items-center">
      <Nav showForm={showForm} setShowForm={setShowForm} />
      {showForm && <CreateBug showForm={showForm} setShowForm={setShowForm} />}
      <BugList />
    </div>
  );
}

export default App;

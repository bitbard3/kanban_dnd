import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kanban from "./pages/Kanban";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Kanban />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import UserTypePage from "./pages/user-type";

function App() {
  return (
    <Routes>
      <Route path="/" element={UserTypePage()} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import UserTypePage from "./pages/user-type";
import InterestsPage from "./pages/intereset";

function App() {
  return (
    <Routes>
      <Route path="/" element={UserTypePage()} />
      <Route path="/intereset" element={InterestsPage()} />
    </Routes>
  );
}

export default App;

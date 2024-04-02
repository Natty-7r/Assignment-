import { Route, Routes } from "react-router-dom";
import UserTypePage from "./pages/user-type";
import InterestsPage from "./pages/intereset";
import ProgressOne from "./pages/progress-one";
import MathLevelPage from "./pages/math-level";
import ProgressTwoPage from "./pages/progress-two";
import LearningPathPage from "./pages/learning-path";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTypePage />} />
      <Route path="/interest" element={<InterestsPage />} />
      <Route path="/progress-one" element={<ProgressOne />} />
      <Route path="/math-level" element={<MathLevelPage />} />
      <Route path="/progress-two" element={<ProgressTwoPage />} />
      <Route path="/learning-path" element={<LearningPathPage />} />
    </Routes>
  );
}

export default App;

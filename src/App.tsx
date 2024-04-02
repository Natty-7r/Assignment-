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
      <Route path="/select-interest" element={<InterestsPage />} />
      <Route path="/after-interest" element={<ProgressOne />} />
      <Route path="/select-math-level" element={<MathLevelPage />} />
      <Route path="/after-math-level" element={<ProgressTwoPage />} />
      <Route path="/finished" element={<LearningPathPage />} />
    </Routes>
  );
}

export default App;

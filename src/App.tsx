import NavBar from "./Components/Navigation/NavBar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import DataExplorerPage from "./Components/DataExplorerPage/DataExplorerPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data-explorer" element={<DataExplorerPage />} />
      </Routes>
    </>
  );
}

export default App;

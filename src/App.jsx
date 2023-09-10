import "./App.css";
import { Routes, Route } from "react-router-dom";
import CallbackPage from "./pages/CallbackPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-900">
        <main className="flex">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/callback/" element={<CallbackPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;

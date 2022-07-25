import "./index.css";
import Home from "../src/pages/Home";
import Quiz from "./pages/Quiz";
import Tutorial from "./pages/Tutorial"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Helmet>
        <title>Gamernation</title>
        <meta name="decription"
          content="Get info all the games in gamernation"
        />
        <meta name="keywords" content="Games , gaming videos, gaming tutorial"/>
      </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/tutorial" element={<Tutorial/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

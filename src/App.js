import { Container } from "react-bootstrap";
import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

//import Component
import Header from "./components/header/header";

//import pages
import HomePage from "./pages/home";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/contact"}>Contact</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found!</h1>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

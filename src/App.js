import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import Alert from "./componants/Alert";
import About from "./componants/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // Function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Function to toggle dark/light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
      document.title = "My-App Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "My-App Light Mode";
    }
  };

  return (
    <Router>
      <Navbar title="My-App" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* Home route rendering TextForm */}
          <Route
            path="/"
            element={
              <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
            }
          />
          {/* About route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

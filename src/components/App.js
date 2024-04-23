import React from "react";
import NavBar from "./NavBar"; // Importing NavBar component
import Home from "./Home"; // Importing Home component
import About from "./About"; // Importing About component

function App() {
  return (
    <div>
      <NavBar /> {/* Render NavBar component */}
      <Home /> {/* Render Home component */}
      <About /> {/* Render About component */}
    </div>
  );
}

export default App;

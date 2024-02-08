import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adopt me !</h1>
        <SearchParams />
        <Pet name="Tiggi" animal="cat" breed="tawny" />
        <Pet name="Titu" animal="dog" breed="pug" />
        <Pet name="Piku" animal="bird" breed="cuckatoo" />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

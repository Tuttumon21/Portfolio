import { useState } from "react";
import WelcomeText from "./components/WelcomeText";
import LetterGlitch from "./blocks/Backgrounds/LetterGlitch/LetterGlitch";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen min-w-screen">
        <WelcomeText />
      </div>
    </>
  );
}

export default App;

import React from "react";
import GamePanel from "./components/GamePanel";
import { PlayerStoreContextProvider } from "./Store";

function App() {
  
  return (
    <div className="App p-3">
      <h1 className="text-center p-3">Candy Lord</h1>
      <PlayerStoreContextProvider>
        <GamePanel />
      </PlayerStoreContextProvider>
    </div>
  );
}

export default App;

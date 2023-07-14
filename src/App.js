import { setupIonicReact, IonButton } from "@ionic/react";
import "@ionic/react/css/core.css";

setupIonicReact();

function App() {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <IonButton>Click me !</IonButton>
      </main>
    </div>
  );
}

export default App;

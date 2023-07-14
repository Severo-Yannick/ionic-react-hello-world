import { setupIonicReact, IonButton, useIonToast } from "@ionic/react";
import "@ionic/react/css/core.css";

setupIonicReact();

function App() {
  const [presentToast] = useIonToast();

  const handleClick = () => {
    presentToast({
      message: "Hello Ionic 3 seconds !",
      duration: 3000,
    });
  };

  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <IonButton onClick={handleClick}>Click me !</IonButton>
      </main>
    </div>
  );
}

export default App;

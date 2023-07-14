import { setupIonicReact, IonButton, useIonToast, IonIcon } from "@ionic/react";
import { play } from "ionicons/icons";
import "@ionic/react/css/core.css";
import "./theme/colors.css";

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
        <IonButton color="primary" onClick={handleClick}>
          <IonIcon icon={play} slot="start" />
          Click me !
        </IonButton>
      </main>
    </div>
  );
}

export default App;

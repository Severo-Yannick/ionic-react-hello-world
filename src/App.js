import {
  setupIonicReact,
  IonButton,
  useIonToast,
  IonIcon,
  IonApp,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { play } from "ionicons/icons";
import "@ionic/react/css/core.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Custom styles */
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
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="primary" onClick={handleClick}>
          <IonIcon icon={play} slot="start" />
          Click me !
        </IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import * as datuakLortu from '../datuak/datuakLortu';
import * as datuakTratatu from '../datuak/datuakTratatu';
import './Tab1.css';

//var getdata= new datuakLortu.datuakLortu();
//var data=getdata.execute();
console.log(datuakTratatu.average());

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

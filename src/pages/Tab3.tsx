import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

//var data = localStorage.getItem('Bizilekua')

//localStorage.removeItem('Bizilekua');

const Tab3: React.FC = () => {
  return (
    <IonPage className='orria'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <p>Kontratatutako potentziarengatik ordaindutakoa:</p>
        <p>{localStorage.getItem('PotentziaKontratatua')} * 0.1233 €/kW eguneko :</p>

        <p>{localStorage.getItem('Bizilekua')}</p>
        <p>{localStorage.getItem('Elektriziztate_Konpainia')}</p>


      </IonContent>

    </IonPage>
  );
};


export default Tab3;

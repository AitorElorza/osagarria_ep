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

        <p>Bizilekuaren Geoi_id:{localStorage.getItem('Bizilekua')}</p>
        <p>Zure konpainia:{localStorage.getItem('Elektriziztate_Konpainia')}</p>
        <p>Prezio merkeena duen ordua:{localStorage.getItem('Prezio_merkeeneko_ordua')}</p>
        <p>24h konektatutako makinen gastua:{localStorage.getItem('Vatioak_24h')}</p>
        
      </IonContent>

    </IonPage>
  );
};


export default Tab3;

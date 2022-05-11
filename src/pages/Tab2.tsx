import { IonButton, IonCheckbox, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonSlide, IonSlides, IonTitle, IonToolbar, } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kontsumo optimizazioa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Kontsumo optimizazioa</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <form className="ion-padding">

          <IonSlides>

            <IonSlide>

              <IonItem>
                <IonLabel position='floating'>Bizilekua</IonLabel>
                <IonSelect name="a" id="a" multiple={false} cancelText="Ezeztatu" okText="Gorde">
                  <IonSelectOption value="PBK">Penintsula, Balearrak eta Kanarias</IonSelectOption>
                  <IonSelectOption value="CM">Ceuta eta Melilla</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position='floating'>Elektrizitate konpania</IonLabel>
                <IonSelect multiple={false} cancelText="Ezeztatu" okText="Gorde">
                  <IonSelectOption value="Endesa">Endesa</IonSelectOption>
                  <IonSelectOption value="Naturgy">Naturgy</IonSelectOption>
                  <IonSelectOption value="Repsol">Repsol</IonSelectOption>
                  <IonSelectOption value="EDP">EDP</IonSelectOption>
                  <IonSelectOption value="Holaluz">Holaluz</IonSelectOption>
                  <IonSelectOption value="Iberdrola">Iberdrola</IonSelectOption>
                </IonSelect>
              </IonItem>
              
              <IonItem>
                <IonLabel position="floating">Potentzia kontratatua (kW)</IonLabel>
                <IonInput/>
              </IonItem>

            </IonSlide>

            <IonSlide>

              {/*
              <IonItem>
                <IonLabel position='floating'>Etengabe konektatutako aparatu elektrikoak</IonLabel>
                <IonSelect multiple={true} cancelText="Ezeztatu" okText="Gorde">
                  <IonSelectOption value="Hozkailua">Hozkailua</IonSelectOption>
                  <IonSelectOption value="Izozkailua">Izozkailua</IonSelectOption>
                  <IonSelectOption value="Router">Router</IonSelectOption>
                  <IonSelectOption value="Alarma">Alarma</IonSelectOption>
                </IonSelect>
              </IonItem>
              */}

              <h2 className="sekzioTitulua">
                <b>Etengabe konektatutako tresnak</b>
              </h2>
              <h3 className="tresnak">
                Hozkailua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Izozkailua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Router
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

            </IonSlide>

            <IonSlide>

              {/*
              <IonItem>
                <IonLabel position='floating'>Etxetresna elektrikoak</IonLabel>
                <IonSelect multiple={true} cancelText="Ezeztatu" okText="Gorde">
                  <IonSelectOption value="Labea">Labea</IonSelectOption>
                  <IonSelectOption value="Garbigailua">Garbigailua</IonSelectOption>
                  <IonSelectOption value="Plater-ikuzgailua">Plater-ikuzgailua</IonSelectOption>
                  <IonSelectOption value="Aire girotua">Aire girotua</IonSelectOption>
                </IonSelect>
              </IonItem>
              */}

              <h2 className="sekzioTitulua">
                <b>Noizean behin jarritako tresnak</b>
              </h2>

              <h3 className="tresnak">
                Argiztatzea
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Labea
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Garbigailua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Plater-ikuzgailua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Aire girotua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Ordenagailua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Berogailua
              </h3>
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput/>
                  </IonItem>
                </IonCol>
              </IonRow>


              {/*
              <IonItem>
                <IonLabel position='floating'>Berokuntza elektrikoa?</IonLabel>
                <IonSelect multiple={true} cancelText="Ezeztatu" okText="Gorde">
                  <IonSelectOption value="Bai">Bai</IonSelectOption>
                  <IonSelectOption value="Ez">Ez</IonSelectOption>
                </IonSelect>
              </IonItem>
              */}

              <IonItem>
                <IonLabel position='floating'>Mugikor kopurua</IonLabel>
                <IonInput placeholder="Mugikor kopurua" type="number" min="0"></IonInput>
              </IonItem>

              {/*
              <IonItem>
                <IonLabel position='floating'>Ordenagailu kopurua</IonLabel>
                <IonInput placeholder="Ordenagailu kopurua" type="number" min="0"></IonInput>
              </IonItem>
              */}

              &nbsp;
              <IonItem lines="none">
                <IonLabel>Terminoak irakurri eta onartzen ditut</IonLabel>
                <IonCheckbox slot="start" />
              </IonItem>
              <IonButton className="ion-margin-top" type="submit" expand="block">
                Kalkulatu
              </IonButton>

            </IonSlide>

          </IonSlides>
        
          

          
          
        </form>

      </IonContent>
    </IonPage>
  );
};



export default Tab2;

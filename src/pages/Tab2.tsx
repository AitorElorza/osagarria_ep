import { IonButton, IonCheckbox, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonSlide, IonSlides, IonTitle, IonToolbar, } from '@ionic/react';
import { useForm } from "react-hook-form";
import './Tab2.css';

const Tab2: React.FC = () => {

  const { register, formState: {errors},  handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);


  return (
    <IonPage className='orria'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kontsumo optimizazioa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className='titulua' size="large">Kontsumo optimizazioa</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>

          <IonSlides>

            <IonSlide>

              <IonItem>
                <IonLabel position='floating'>Bizilekua</IonLabel>
                {errors.Bizilekua?.type === 'required' && <p className='error'> <br/>Beharrezko eremua</p>}
                <IonSelect multiple={false} cancelText="Ezeztatu" okText="Gorde" {...register("Bizilekua", { required: true})}>
                  <IonSelectOption value="PBK">Penintsula, Balearrak eta Kanarias</IonSelectOption>
                  <IonSelectOption value="CM">Ceuta eta Melilla</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position='floating'>Elektrizitate konpania</IonLabel>
                {errors.Elektriziztate_Konpainia?.type === 'required' && <p className='error'> <br/>Beharrezko eremua</p>}
                <IonSelect multiple={false} cancelText="Ezeztatu" okText="Gorde" {...register("Elektriziztate_Konpainia", { required: true})}>
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
                {errors.PotentziaKontratatua?.type === 'required' && <p className='error'> <br/>Beharrezko eremua</p>}
                {errors.PotentziaKontratatua?.type === 'pattern' && <p className='error'> <br/>Zenbaki positibo eta osoa izan behar da</p>}
                <IonInput {...register("PotentziaKontratatua", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
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
              {(errors.Hozkailu_Potentzia?.type === 'required' || errors.Hozkailu_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Hozkailu_Potentzia?.type === 'pattern' || errors.Hozkailu_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Hozkailu_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Hozkailu_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Izozkailua
              </h3>
              {(errors.Izozkailu_Potentzia?.type === 'required' || errors.Izozkailu_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Izozkailu_Potentzia?.type === 'pattern' || errors.Izozkailu_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Izozkailu_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Izozkailu_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Router
              </h3>
              {(errors.Ruter_Potentzia?.type === 'required' || errors.Router_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Ruter_Potentzia?.type === 'pattern' || errors.Router_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Ruter_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Router_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
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
              {(errors.Argiztatzea_Potentzia?.type === 'required' || errors.Argiztatzea_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Argiztatzea_Potentzia?.type === 'pattern' || errors.Argiztatzea_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Argiztatzea_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Argiztatzea_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Labea
              </h3>
              {(errors.Labea_Potentzia?.type === 'required' || errors.Labea_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Labea_Potentzia?.type === 'pattern' || errors.Labea_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Labea_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Labea_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Garbigailua
              </h3>
              {(errors.Garbigailua_Potentzia?.type === 'required' || errors.Garbigailua_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Garbigailua_Potentzia?.type === 'pattern' || errors.Garbigailua_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Garbigailua_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Garbigailua_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Plater-ikuzgailua
              </h3>
              {(errors.PlaterIkuzgailua_Potentzia?.type === 'required' || errors.PlaterIkuzgailua_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.PlaterIkuzgailua_Potentzia?.type === 'pattern' || errors.PlaterIkuzgailua_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("PlaterIkuzgailua_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("PlaterIkuzgailua_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Aire girotua
              </h3>
              {(errors.AireGirotua_Potentzia?.type === 'required' || errors.AireGirotua_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.AireGirotua_Potentzia?.type === 'pattern' || errors.AireGirotua_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("AireGirotua_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("AireGirotua_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Ordenagailua
              </h3>
              {(errors.Ordenagailua_Potentzia?.type === 'required' || errors.Ordenagailua_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Ordenagailua_Potentzia?.type === 'pattern' || errors.Ordenagailua_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Ordenagailua_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Ordenagailua_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
              </IonRow>

              <h3 className="tresnak">
                Berogailua
              </h3>
              {(errors.Berogailua_Potentzia?.type === 'required' || errors.Berogailua_Orduak?.type === 'required') && <p className='error'>Beharrezko eremua</p>}
              {(errors.Berogailua_Potentzia?.type === 'pattern' || errors.Berogailua_Orduak?.type === 'pattern') && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
              <IonRow>
                <IonCol col-3>
                  <IonItem>
                    <IonLabel>Potentzia:</IonLabel>
                    <IonInput {...register("Berogailua_Potentzia", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
                  </IonItem>
                </IonCol>
                <IonCol col-9>
                  <IonItem class="padding-left-2px">
                    <IonLabel>Orduak:</IonLabel>
                    <IonInput {...register("Berogailua_Orduak", { required: true, pattern:/^[1-9][0-9]*$/ })}/>
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
                {errors.Mugikor_kopurua?.type === 'required' && <p className='error'> <br/>Beharrezko eremua</p>}
                {errors.Mugikor_kopurua?.type === 'pattern' && <p className='error'>Zenbaki positibo eta osoa izan behar da</p>}
                <IonInput placeholder="Mugikor kopurua" type="number" min="0" {...register("Mugikor_kopurua", { required: true, pattern:/^[1-9][0-9]*$/ })}></IonInput>
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
              <IonButton className="ion-margin-top" href="../pages/Tab1" type="submit" expand="block">
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

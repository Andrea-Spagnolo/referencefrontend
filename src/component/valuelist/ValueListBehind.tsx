import { ValueList } from "../../models/Valuelist";
import { IonCol, IonGrid, IonHeader, IonFooter, IonItem, IonLabel, IonRow, IonTitle } from "@ionic/react";
import "./../../styles/Value.css"
import ValueListAdd from "./ValueListAdd";

interface OwnProps {
    valuelistbehind: ValueList[],
}

const ValueListBehind: React.FC<OwnProps> = ({ valuelistbehind }) => {


    if (valuelistbehind === undefined) {

        return (
            <div>
                <IonItem>
                    Nessun valore
                </IonItem>
            </div>
        )
    }

    return (
        <div>
            <IonHeader>
                <IonTitle>
                    VALUELIST MANAGEMENT
                </IonTitle>
            </IonHeader>
            <IonFooter>
                <IonGrid fixed={false}>
                    <IonRow class="ion-justify-content-center">
                        <IonCol size="5">
                            <b>  TYPE </b>
                        </IonCol>
                        <IonCol size="5">
                            <b>  SET </b>
                        </IonCol>
                    </IonRow>
                    <>
                        {
                            valuelistbehind.map((valuelist: ValueList, idx: number) => {

                                return <IonRow key={idx} class="ion-justify-content-center">
                                    <IonCol size="5">
                                        <pre className="pre">{valuelist.type}</pre>
                                    </IonCol>
                                    <IonCol className="Value" size="5">
                                        <pre className="pre">{valuelist.valueSet.join("\n")}</pre>
                                    </IonCol>
                                </IonRow>

                            })
                        }
                    </>
                </IonGrid>
            </IonFooter>
        </div>
    );
}

export default ValueListBehind;

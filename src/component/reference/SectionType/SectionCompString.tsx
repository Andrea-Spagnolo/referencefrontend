import { IonItem, IonLabel } from "@ionic/react";
import { SectionTemplate } from "../../../models/Template";

interface OwnProps {
    section: SectionTemplate
}

const SectionCompString: React.FC<OwnProps> = ({ section }) => {

    return (
        <>
            <IonItem>
                <IonLabel>{section.name}</IonLabel>
                <IonLabel>{section.type}</IonLabel>
            </IonItem>
        </>
    )
}

export default SectionCompString;
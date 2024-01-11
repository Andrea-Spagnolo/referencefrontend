import { IonItem, IonLabel, IonCol, IonAccordionGroup, IonAccordion } from "@ionic/react";
import { SectionTemplate } from "../../../models/Template";
import SectionList from "../SectionList";

interface OwnProps {
    section: SectionTemplate,
    section_object: any
}

const SectionCompObject: React.FC<OwnProps> = ({ section, section_object }) => {

    return (
        <>
            <IonItem>
                <IonLabel>{section.name}</IonLabel>
                <IonLabel>{section.type}</IonLabel>
            </IonItem>
            <IonAccordionGroup>
                <IonAccordion className="Subsectiondate" value="first">
                    <IonItem slot="header" color="light">
                        <IonLabel className="Subsection">{section.section_object_ref}</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        {
                            <SectionList sections={section_object[section.section_object_ref]} section_object={section_object} ></SectionList>
                        }
                    </div>
                </IonAccordion>
            </IonAccordionGroup>
        </>
    )
}

export default SectionCompObject;
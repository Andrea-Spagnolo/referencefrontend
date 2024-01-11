import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { ReferenceTemplate, SectionTemplate } from "../../models/Template";
import SectionList from "./SectionList";

interface OwnProps {
    template: ReferenceTemplate
}

const TemplateComp: React.FC<OwnProps> = ({ template }) => {

    if (template === undefined) {
        return (
            <div>
                <IonItem>
                    Nessun template
                </IonItem>
            </div>
        )
    }

    return (
        <div>
            <IonItem>
                <IonLabel>Reference's name</IonLabel>
                <IonLabel>{template.name}</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Reference version</IonLabel>
                <IonLabel>{template.version}</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Reference status</IonLabel>
                <IonLabel>{template.status}</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Sections</IonLabel>
            </IonItem>


            <SectionList sections={template.sections} section_object={template.section_objects} />
        </div>

    );
}

export default TemplateComp;
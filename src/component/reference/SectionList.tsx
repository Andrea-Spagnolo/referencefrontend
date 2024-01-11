import { IonItem, IonList } from '@ionic/react';
import { SectionTemplate } from '../../models/Template';
import './../../styles/variables.css';
import SectionCompDate from './SectionType/SectionCompDate';
import SectionCompMultiselect from './SectionType/SectionCompMultiselect';
import SectionCompNumber from './SectionType/SectionCompNumber';
import SectionCompObject from './SectionType/SectionCompObject';
import SectionCompObjectList from './SectionType/SectionCompObjectList';
import SectionCompString from './SectionType/SectionCompString';


interface OwnProps {
    sections: SectionTemplate[] | undefined,
    section_object: Map<string, SectionTemplate[]>
}

const SectionList: React.FC<OwnProps> = ({ sections, section_object }) => {
    if (sections === undefined || section_object === undefined) {
        return (
            <div>
                <IonItem>
                    Nessun sections
                </IonItem>
            </div>
        )
    }

    return (
        <IonList>
            <>
                {
                    sections.map((section: SectionTemplate, idx: number) => {
                        if (section.type === "STRING") {
                            return <SectionCompString section={section} key={idx} />

                        } else if (section.type === "SECTION_OBJECT") {

                            return <SectionCompObject section={section} key={idx} section_object={section_object} />

                        } else if (section.type === "SECTION_OBJECT_LIST") {

                            return <SectionCompObjectList section={section} key={idx} section_object={section_object} />

                        } else if (section.type === "DATE") {

                            return <SectionCompDate section={section} key={idx} />

                        } else if (section.type === "MULTISELECT") {

                            return <SectionCompMultiselect section={section} key={idx} />

                        } else if (section.type === "NUMBER") {

                            return <SectionCompNumber section={section} key={idx} />

                        }
                    })
                }
            </>
        </IonList>
    );
}

export default SectionList;
export interface ReferenceTemplate {
    name: string,
    version: string,
    status: string,
    sections: SectionTemplate [],
    section_objects: Map <string,SectionTemplate[]>
}

export interface SectionTemplate {
    name: string,
    type: string,
    section_object_ref: string,
    value_list_key: string
}



import { ReferenceTemplate } from "../models/Template";
import { ValueList } from "../models/Valuelist";

const referencetemplateurl = '/assets/mockdata/template.json';

export async function getReferencetemplate() {
    const options = {
        method: 'GET',
        headers: new Headers({ 'Authorization': "token" })
    }
    const response = await Promise.all([fetch(referencetemplateurl, options)]);
    const responseData = await response[0].json();
    return responseData as ReferenceTemplate;
}

const valuelisttemplateurl = '/assets/mockdata/valuelist.json';

export async function getValuelisttemplate() {
    const options = {
        method: 'GET',
        headers: new Headers({ 'Authorization': "token" })
    }
    const response = await Promise.all([fetch(valuelisttemplateurl, options)]);
    const responseData = await response[0].json();
    return responseData as ValueList[];
}

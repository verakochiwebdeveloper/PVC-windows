import menu from './modules/menu';
import modal from './modules/modal';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

menu()
modal()
tabs()
slider()
calc(100)
sendForm({
    formId:'form1',
     someElem:[
        {
            type: 'block',
            id: 'total'
        }
     ]})
     sendForm({
        formId:'form2',
         someElem:[
            {
                type: 'block',
                id: 'total'
            }
         ]})
         sendForm({
            formId:'form3',
             someElem:[
                {
                    type: 'block',
                    id: 'total'
                }
             ]})
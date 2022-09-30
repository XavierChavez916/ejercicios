import React from 'react';
import { Contacto } from '../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = () => {
    
    const defaultContact = new Contacto('Xavier', 'Chavez', 'xachavez1@utoled.uec.ec', false);

    // const changeState = () => {
    //     console.log('TODO: Cambiar estado de una tarea')
    // }


    return (
        <div>
            <div>
            <h1>
                Tus contactos: 
            </h1>
                
            </div>
            <ContactoComponent contacto={defaultContact}/>
        </div>
    );
};



export default ContactoListComponent;

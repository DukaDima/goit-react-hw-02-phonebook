import React from "react";
import s from './ContactsList.module.css'

const ContactsList = ({ contacts, onDeleteContact} ) => {
  
    return (<ul className={s.ContactList}>
        {contacts.map(({ id, name, phone }) => {
            return (
        
                <li key={id} className={s.ContactList__item}>

                    <p className={s.ContactList__text}>{name}</p>
                    <p className={s.ContactList__text}>{phone}</p>
                    <button type="button" className={s.ContactsList__Button} onClick={() => onDeleteContact(id)}>Delete</button>

                </li>

            )
 
        })}</ul>)
}
export default ContactsList
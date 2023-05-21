import React from 'react';
import classes from "./Contacts.module.css";

const Contacts = ({phone,email}) => {
    return (
        <div className={classes.wrapperContacts}>
            <div  className={classes.wrapperContactsTitle}>
                <h1 className={classes.ContactsTitle}>Контакты</h1>
                <img src="Vector_Pen.svg" alt="icon"/>
            </div>
            <hr style={{border: "1px solid transparent", borderTop: '1px solid #4B6EB9',marginBottom:34}}/>
            <div className={classes.wrapperContactsPhoneEmail}>
                <h1 className={classes.ContactsTitlePhone}>Номер телефона:</h1>
                <p className={classes.ContactsTextPhone}>{phone}</p>
            </div>
            <div className={classes.wrapperContactsPhoneEmail}>
                <h1 className={classes.ContactsTitlePhone}>Электронная почта:</h1>
                <p className={classes.ContactsTextEmail}>{email}</p>
            </div>
        </div>
    );
};

export default Contacts;
import React, {useState} from 'react';
import classes from "./MenuForm.module.css";
import Vacancy from "./Vacancy/Vacancy";
import PersonalData from "./PersonalData/PersonalData";
import Contacts from "./Contacts/Contacts";

const MenuForm = () => {

    const [profile,setProfile] = useState(
        {
            post:'Преподаватель иностранного языка',
            division:'Факультет базовых компетенций',
            employment:'Полная',
            surname:'Петров',
            name:'Аркадий',
            middleName:'Владимирович',
            paul:'Мужской',
            data:'01.04.2000',
            phone:'+7-ХХХ-ХХХ-ХХ-ХХ',
            email:'solongexample@gmail.com'
        }
    );

    return (
        <div className={classes.wrapperMenuForm}>
            <Vacancy
                post={profile.post}
                division={profile.division}
                employment={profile.employment}
            />
            <div className={classes.wrapperPersonalContacts}>
                <PersonalData
                    surname={profile.surname}
                    name={profile.name}
                    middleName={[profile.middleName]}
                    paul={profile.paul}
                    data={profile.data}
                />
                <Contacts
                    phone={profile.phone}
                    email={profile.email}
                />
            </div>
        </div>
    );
};

export default MenuForm;
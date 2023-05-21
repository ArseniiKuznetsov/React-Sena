import React, {useEffect, useState} from 'react';
import classes from "./Navbar.module.css";
import Graph from "./Graph/Graph";
import NavLinks from "./NavLinks/NavLinks";


const Navbar = () => {

    const [profile, setProfile] = useState({
        name: 'Петров Аркадий',
        post: 'Должность',
        profession: 'Преподаватель иностранного',
        reduceName: ''
    });

    useEffect(() => {
        let acronym = profile.name.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')
        setProfile({...profile, reduceName: acronym})
    }, [setProfile])

    return (
        <div className={classes.wrapperNavbarPosition}>
            <div>
                <img src="polytech_logotext.svg" alt="polytech_logo"/>
            </div>
            <div className={classes.wrapperProfile}>
                <div className={classes.wrapperProfileInitials}>
                    <h1 className={classes.profileInitials}>{profile.reduceName}</h1>
                </div>
                <div>
                    <h2 className={classes.profileName}>{profile.name}</h2>
                    <h3 className={classes.profilePost}>{profile.post}</h3>
                    <p className={classes.profileProfession}>{profile.profession} <br/> языка</p>
                </div>
                <NavLinks/>
                <div className={classes.wrapperGraphPercentages}>
                    <Graph/>
                    <h1 className={classes.GraphPercentagesText}>Подать документы на трудоустройство</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
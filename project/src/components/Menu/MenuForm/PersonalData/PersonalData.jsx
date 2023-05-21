import React from 'react';
import classes from "./PersonalData.module.css";

const PersonalData = ({surname,name,middleName,paul,data}) => {
    return (
        <div className={classes.wrapperPersonalData}>
            <div className={classes.wrapperPersonalDataTitle}>
                <h1 className={classes.personalDataTitle}>Личные данные</h1>
                <img src="Vector_Pen.svg" alt="icon"/>
            </div>
            <hr style={{border: "1px solid transparent", borderTop: '1px solid #4B6EB9'}}/>
            <div className={classes.wrapperNames}>
                <div className={classes.namesItems}>
                    <div className={classes.wrapperItemsNames}>
                        <h1 className={classes.sFormTitle}>Фамилия:</h1>
                        <p className={classes.sFormText}>{surname}</p>
                    </div>
                    <div className={classes.wrapperItemsNames}>
                        <h1 className={classes.sFormTitle}>Имя:</h1>
                        <p className={classes.sFormText}>{name}</p>
                    </div>
                    <div className={classes.wrapperItemsNames}>
                        <h1 className={classes.sFormTitle}>Отчество:</h1>
                        <p className={classes.sFormText}>{middleName}</p>
                    </div>
                </div>
                <div  className={classes.namesItems}>
                    <div className={classes.wrapperItemsNames}>
                        <h1 className={classes.sFormTitle}>Пол:</h1>
                        <p className={classes.sFormText}>{paul}</p>
                    </div>
                    <div className={classes.wrapperItemsNames}>
                        <h1 className={classes.sFormTitle}>Дата рождения:</h1>
                        <p className={classes.sFormText}>{data}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
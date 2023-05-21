import React from 'react';
import classes from "./Vacancy.module.css";

const Vacancy = ({post,division,employment}) => {

    return (
        <div className={classes.wrapperVacancy}>
            <h1 className={classes.vacancy}>Вакансия</h1>
            <hr style={{border: "1px solid transparent", borderTop: '1px solid #4B6EB9'}}/>
            <div>
                <div className={classes.wrapperPositionStats}>
                    <div className={classes.wrapperStatsTitle}>
                        <h1 className={classes.statsTitle}>Должность:</h1>
                    </div>
                    <p className={classes.statsText}>{post}</p>
                </div>
                <div className={classes.wrapperPositionStats}>
                    <div className={classes.wrapperStatsTitle}>
                        <h1 className={classes.statsTitle}>Подразделение:</h1>
                    </div>
                    <p className={classes.statsText}>{division}</p>
                </div>
                <div className={classes.wrapperPositionStats}>
                    <div className={classes.wrapperStatsTitle}>
                        <h1 className={classes.statsTitle}>Вид занятости:</h1>
                    </div>
                    <p className={classes.statsText}>{employment}</p>
                </div>
            </div>
        </div>
    );
};

export default Vacancy;
import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell} from "recharts";
import classes from "./Graph.module.css";

const COLORS = ['#E9EDF6', '#4B6EB9'];

const Graph = () => {

    const [number, setNumber] = useState(10);
    const [percent, setPercent] = useState(100);

    const [data, setData] = useState([
        {name: 'Group A', value: percent},
        {name: 'Group D', value: number},
    ]);

    useEffect(() => {
        setPercent(100 - number);
        setData([
            {name: 'Group A', value: percent},
            {name: 'Group D', value: number},
        ]);
    }, [setData])

    return (
        <div className={classes.positionGraph}>
            <div className={classes.wrapperGraph}>
                <PieChart width={70} height={70}>
                    <Pie
                        data={data}
                        cx={30}
                        cy={30}
                        innerRadius={25}
                        outerRadius={35}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <span className={classes.graphPercent}>{number}%</span>
        </div>
    );
};

export default Graph;
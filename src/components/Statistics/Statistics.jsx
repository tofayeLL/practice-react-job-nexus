import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicationInLs } from "../../utility/localstorage";

import { PieChart, Pie,  Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const Statistics = () => {
    // all jobs from json file
    const jobs = useLoaderData();


    // get all stored id in Local storage
    const [getLsId, setLsId] = useState([])
    useEffect(() => {
        const storedIdsInLs = getStoredJobApplicationInLs();
        setLsId(storedIdsInLs);

    }, []);
    console.log(getLsId);


    // piechatr

    const data = [
        { name: 'All jobs Application', value: jobs.length },
        { name: 'Applied JOb Application', value: jobs.length - getLsId.length },

    ];

    const COLORS = ['#e72929', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };


    return (
        <div className="w-[100vh] h-[100vh] flex flex-col justify-center items-center mx-auto">
           <h1 className="text-xl font-bold mt-10 p-6 bg-purple-300 rounded-md">Here Is The Pie Chart for Applied jobs From All jobs</h1>



            <ResponsiveContainer  >
                <PieChart >
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </PieChart>

               
                
            </ResponsiveContainer>
           




        </div>
    );
};

export default Statistics;
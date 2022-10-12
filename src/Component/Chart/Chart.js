import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
const Chart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const chartLoaded = data.data.data

                const chartData = chartLoaded.map(charts => {

                    const singleChart = {
                        name: charts.name,
                        total: charts.total
                    }
                    return singleChart
                })
                setChart(chartData);
            })
    }, [])
    return (

        <BarChart width={250} height={200} data={chart}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </BarChart>
    );
};

export default Chart;
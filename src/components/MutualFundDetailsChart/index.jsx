import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    Text,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
const data = [{ name: 'Page A', uv: 40, }];


const RenderChartList = ({ currentMutualFundData }) => {
    const [chartData, setChartData] = useState([])
    console.log(currentMutualFundData)
    const currentData = (currentMutualFundData) ? currentMutualFundData : []

    currentData.map(item => {
        if (item.date === "03-04-2006" || item.date === "03-10-2006" || item.date === "03-04-2007" || item.date === "01-10-2007" || item.date === "01-04-2008") {
            console.log(chartData)
            const chartDefaultName = { name: '', uv: 0 }
            chartDefaultName.name = item.date;
            chartDefaultName.date = item.nav;
            const uChart = chartData.push(chartDefaultName)
        }
    }
    )

    chartData.sort((a, b) => {
        const dtA = a.date.split('-');
        const dateA = dtA[2] + "-" + dtA[1] + "-" + dtA[0];
        const dtB = b.date.split('-');
        const dateB = dtB[2] + "-" + dtB[1] + "-" + dtB[0];
        return new Date(dateA) - new Date(dateB);
    })
    console.log(chartData, "Sorted")


    return (
        <div style={{ width: "90%", boxSizing: "border-box", margin: "20px auto", border: "1px solid gray", padding: "10px", position: "relative" }}>
            <p className="nav_yaxis" style={{ position: "absolute", top: "100px" }}>NAV</p>
            {console.log(chartData)}
            {chartData.length === 5 && <ResponsiveContainer width="100%" height={240}><BarChart
                data={chartData}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" angle={-10} tick={{ fontSize: "12px" }} label={<Text width={30} />} />
                <YAxis tickCount={20} interval={1} />
                <Tooltip />
                <Legend />
                <Bar dataKey="date" fill="#82ca9d" tick={{ width: "10px" }} barSize={14} />
            </BarChart></ResponsiveContainer>}
        </div>
    );
}

export default RenderChartList;


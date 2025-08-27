"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Fev',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 7500,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 4780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 6890,
        expense: 4800,
    },
    {
        name: 'Jun',
        income: 6390,
        expense: 3800,
    },
    {
        name: 'Jul',
        income: 5490,
        expense: 4300,
    },
    {
        name: 'Aug',
        income: 7490,
        expense: 4300,
    },
    {
        name: 'Sep',
        income: 8490,
        expense: 6870,
    },
    {
        name: 'Oct',
        income: 9490,
        expense: 5930,
    },
    {
        name: 'Nov',
        income: 8190,
        expense: 6290,
    },
    {
        name: 'Dec',
        income: 6690,
        expense: 7300,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>

            {/* CHART */}
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" stroke='#ddd' />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                        tickMargin={10} />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false} 
                        tickMargin={20}/>
                    <Tooltip
                        contentStyle={{ borderRadius: "10px", borderColor: "lightGray" }} />
                    <Legend
                        align='center'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#FAE27C"
                        strokeWidth={3} />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#C3EBFA"
                        strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart
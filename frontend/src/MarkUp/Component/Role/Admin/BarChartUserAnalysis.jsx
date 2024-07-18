import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
const data = [
    {
        name: 'Trainer',
        value: 40,
    },
    {
        name: 'Trainee',
        value: 60,
    },
    {
        name: 'Total Number',
        value: 100,
    },
];
function BarChartUserAnalysis() {
    return (
        <>
            <div className="w-full md:w-[68%] mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Monthly Analysis</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#3cac6c" barSize={40} radius={[8, 8, 0, 0]}>
                                <LabelList dataKey="value" position="top" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default BarChartUserAnalysis
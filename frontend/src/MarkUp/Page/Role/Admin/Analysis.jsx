import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { Card } from "flowbite-react";
import MonthlyFitnessGoals from './MonthlyFitnessGoals';
import cardio from '../../../../assets/cardio.png'

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


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

const datachart = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
];

const size = {
    width: 400,
    height: 350,
};


function Analysis() {
    return (
        <div className="w-full ">


            {/* card section */}

            <div className="flex flex-wrap justify-between items-start px-4 mb-8">
                <div className=" md:w-[100%] mb-4 flex flex-wrap justify-between">
                    <div className="w-full md:w-[30%] mb-4">
                        <Card href="#" className="max-w-xs shadow-md rounded-lg overflow-hidden bg-gray-100">
                            <div className="p-2">
                                <h5 className="text-xl text-center font-semibold mb-2">Total Trainer</h5>
                                <p className="text-gray-700 text-center text-lg">40</p>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full md:w-[30%] mb-4">
                        <Card href="#" className="max-w-xs shadow-md rounded-lg overflow-hidden bg-gray-100">
                            <div className="p-2">
                                <h5 className="text-xl text-center font-semibold mb-2">Total Trainee</h5>
                                <p className="text-gray-700 text-center text-lg">60</p>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full md:w-[30%] mb-4">
                        <Card href="#" className="max-w-xs shadow-md rounded-lg overflow-hidden bg-gray-100">
                            <div className="p-2">
                                <h5 className="text-xl text-center font-semibold mb-2">Total Users</h5>
                                <p className="text-gray-700 text-center text-lg">100</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>


            {/* monthly analysis */}

            <div className="w-full  flex flex-wrap justify-between px-4 gap-3">
                {/* barchar */}
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
                {/* summery */}
                <div className="w-full md:w-[30%] mb-8">
                    <MonthlyFitnessGoals />
                </div>
            </div>


            {/* popular activty */}

            <div className='flex w-full gap-5'>
                <div className='w-[23%]'>
                    <p className='text-lg font-semibold mb-2'>Popular fitness activities</p>
                    {/* activities */}
                    <div className="w-full  mb-4">
                        <Card href="#" className=" shadow-md rounded-lg overflow-hidden bg-gray-100">
                            <div className="">
                                <h5 className="text-xl text-center font-semibold mb-2">Cardio strenght </h5>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className="text-gray-700 text-lg">30 Trainee</p>
                                        <p className="text-gray-700 text-lg">14 Trainer</p>
                                    </div>
                                    <div>
                                        <img src={cardio} alt="" className='w-[40px]' />
                                    </div>

                                </div>

                            </div>
                        </Card>
                    </div>
                    <div className="w-full  mb-4">
                        <Card href="#" className=" shadow-md rounded-lg overflow-hidden bg-gray-100">
                            <div className="">
                                <h5 className="text-xl text-center font-semibold mb-2">Cardio strenght </h5>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className="text-gray-700 text-lg">30 Trainee</p>
                                        <p className="text-gray-700 text-lg">14 Trainer</p>
                                    </div>
                                    <div>
                                        <img src={cardio} alt="" className='w-[40px]' />
                                    </div>

                                </div>

                            </div>
                        </Card>
                    </div>
                    <div className="w-full  mb-4">
                        <Card href="#" className=" shadow-md rounded-lg overflow-hidden bg-gray-100">
                            <div className="">
                                <h5 className="text-xl text-center font-semibold mb-2">Cardio strenght </h5>
                                <div className='flex justify-between'>
                                    <div>
                                        <p className="text-gray-700 text-lg">30 Trainee</p>
                                        <p className="text-gray-700 text-lg">14 Trainer</p>
                                    </div>
                                    <div>
                                        <img src={cardio} alt="" className='w-[40px]' />
                                    </div>

                                </div>

                            </div>
                        </Card>
                    </div>
                </div>
                {/* pieChar */}
                <div>
                    <PieChart
                        series={[
                            {
                                arcLabel: (item) => `${item.label} (${item.value})`,
                                arcLabelMinAngle: 45,
                                data,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontWeight: 'bold',
                            },
                        }}
                        {...size}
                    />
                </div>

                {/* popular trainers */}

                <div>
                    <p>Popular Trainers</p>
                </div>
            </div>



        </div>
    );
}

export default Analysis;

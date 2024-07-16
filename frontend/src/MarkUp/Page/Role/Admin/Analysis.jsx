import React from 'react';


import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const pieConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#ef0617", "#ff8f00", "#00897b", "#1e8825", "#d81660"],
        legend: {
            show: false,
        },
    },
};

const chartConfig = {
    type: "line",
    height: 280,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617"],
        stroke: {
            lineCap: "round",
            curve: "smooth",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

function Analysis() {
    return (
        <div className="py-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Statistics Cards */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Active Trainers */}
                    <Card>
                        <CardHeader className='bg-cyan-700 text-white' contentPosition="top">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-cyan-700 text-white rounded-full flex justify-center items-center">
                                    {/* <Square3Stack3DIcon className="h-6 w-6" /> */}
                                </div>
                                <Typography variant="h6" color="bg-cyan-700">
                                    Active Trainers
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h2" color="blue">
                                40
                            </Typography>
                        </CardBody>
                    </Card>

                    {/* Active Trainees */}
                    <Card>
                        <CardHeader className='bg-cyan-800 text-white' contentPosition="top">
                            <div className="flex items-center">
                                <div className="w-10 h-10 text-white rounded-full flex justify-center items-center">
                                    <Square3Stack3DIcon className="h-6 w-6" />
                                </div>
                                <Typography variant="h6" color="blue-gray">
                                    Active Trainees
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h2" color="green">
                                80
                            </Typography>
                        </CardBody>
                    </Card>

                    {/* Total Users */}
                    <Card>
                        <CardHeader className='bg-cyan-900 text-white' contentPosition="top">
                            <div className="flex items-center">
                                <div className="w-10 h-10  text-white rounded-full flex justify-center items-center">
                                    {/* <Square3Stack3DIcon className="h-6 w-6" /> */}
                                </div>
                                <Typography variant="h6" color="blue-gray">
                                    Total Users
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h2" color="purple">
                                120
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                {/* Charts */}
                <Card className="col-span-1 md:col-span-2">
                    <CardHeader className='bg-cyan-700 text-white' contentPosition="top">
                        <div className="flex items-center">
                            <div className="w-10 h-10  text-white rounded-full flex justify-center items-center">
                                {/* <Square3Stack3DIcon className="h-6 w-6" /> */}
                            </div>
                            <Typography variant="h6" color="blue-gray">
                                Line Chart
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Chart {...chartConfig} />
                    </CardBody>
                </Card>

                <Card className="col-span-1">
                    <CardHeader className='bg-cyan-700 text-white' contentPosition="top">
                        <div className="flex items-center">
                            <div className="w-10 h-10  text-white rounded-full flex justify-center items-center">
                                {/* <Square3Stack3DIcon className="h-6 w-6" /> */}
                            </div>
                            <Typography variant="h6" color="blue-gray">
                                Pie Chart
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="grid place-items-center">
                        <Chart {...pieConfig} />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Analysis;

import React, { useState } from 'react';

const MonthlyFitnessGoals = () => {
    const [trainers, setTrainers] = useState(10);
    const [trainees, setTrainees] = useState(50);
    const [total, setTotal] = useState(60);

    const handleTrainersChange = (event) => {
        setTrainers(event.target.value);
    };

    const handleTraineesChange = (event) => {
        setTrainees(event.target.value);
    };

    const handleTotalChange = (event) => {
        setTotal(event.target.value);
    };

    return (
        <div className=" items-center justify-center p-6 rounded-sm bg-gray-100">
            <h1 className="text-xl font-semibold mb-8 ">Monthly Fitness Goals</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <div className=" items-center mb-4">
                    <div className='flex justify-between'>
                        <p htmlFor="trainers" className="font-semibold w-24 ">
                            Trainers:
                        </p>
                        <p className="font-bold ml-4 "> {trainers}</p>
                    </div>

                    <input
                        type="range"
                        id="trainers"
                        min="0"
                        max="50"
                        value={trainers}
                        onChange={handleTrainersChange}
                        className="w-full"
                    />

                </div>
                <div className="items-center mb-4">
                    <div className='flex justify-between'>
                        <p htmlFor="trainers" className="font-semibold w-24 ">
                            trainees:
                        </p>
                        <p className="font-bold ml-4 "> {trainees}</p>
                    </div>
                    <input
                        type="range"
                        id="trainees"
                        min="0"
                        max="200"
                        value={trainees}
                        onChange={handleTraineesChange}
                        className="w-full"
                    />

                </div>
                <div className=" items-center mb-8">
                    <div className='flex justify-between'>
                        <p htmlFor="trainers" className="font-semibold w-24 ">
                            Total:
                        </p>
                        <p className="font-bold ml-4 "> {total}</p>
                    </div>

                    <input
                        type="range"
                        id="total"
                        min="0"
                        max="250"
                        value={total}
                        onChange={handleTotalChange}
                        className="w-full"
                    />

                </div>

            </div>
        </div>
    );
};

export default MonthlyFitnessGoals;
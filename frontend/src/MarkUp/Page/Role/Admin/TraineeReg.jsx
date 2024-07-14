import React, { useState } from 'react';
import { useTrainer } from '../../../../Context/UserContext';

function TraineeReg() {
    const { trainees, setTrainees } = useTrainer();
    const Base_urlTrainee = "http://localhost:8001";

    const [traineeFname, setTraineeFname] = useState("");
    const [traineeLname, setTraineeLname] = useState("");
    const [traineeEmail, setTraineeEmail] = useState("");
    const [traineePhonenum, setTraineePhonenum] = useState("");
    const [traineeAddress, setTraineeAddress] = useState("");
    const [traineeAge, setTraineeAge] = useState("");
    const [traineegender, setTraineegender] = useState("");
    const [medicalInfo, setMedicalInfo] = useState("");
    const [traineeWeight, setTraineeWeight] = useState("");
    const [traineeHeight, setTraineeHeight] = useState("");
    const [traineeBMI, setTraineeBMI] = useState("");
    const [traineeGoalWeight, setTraineeGoalWeight] = useState("");

    async function handleRegister(e) {
        e.preventDefault();
        const traineeInfo = {
            traineeFname,
            traineeLname,
            traineeEmail,
            traineePhonenum,
            traineeAddress,
            traineeAge,
            traineegender,
            medicalInfo,
            traineeWeight,
            traineeHeight,
            traineeBMI,
            traineeGoalWeight
        };

        try {
            const res = await fetch(`${Base_urlTrainee}/trainee`, {
                method: 'POST',
                body: JSON.stringify(traineeInfo),
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setTrainees([...trainees, traineeInfo]);
        } catch (error) {
            console.error("There was an error adding user data:", error);
        }
    }

    function calaBMI() {
        if (traineeWeight && traineeHeight) {
            const weight = parseFloat(traineeWeight);
            const height = parseFloat(traineeHeight) / 100; // Convert height to meters
            const bmi = (weight / (height * height)).toFixed(2);
            setTraineeBMI(bmi);
        }
    }

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-cyan-700">Online Trainee Registration Form</h2>
                        <p className="text-gray-700 mt-4">Join our online fitness training and start your fitness journey today! Please fill out the form to register.</p>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    id="fname"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineeFname(e.target.value)}
                                    value={traineeFname}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    id="lname"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineeLname(e.target.value)}
                                    value={traineeLname}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineeEmail(e.target.value)}
                                    value={traineeEmail}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineePhonenum(e.target.value)}
                                    value={traineePhonenum}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    id="address"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineeAddress(e.target.value)}
                                    value={traineeAddress}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                                <input
                                    id="age"
                                    type="number"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineeAge(e.target.value)}
                                    value={traineeAge}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    id="gender"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineegender(e.target.value)}
                                    value={traineegender}
                                    required
                                >
                                    <option value="">Select gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
                                <input
                                    id="weight"
                                    type="number"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => {
                                        setTraineeWeight(e.target.value);
                                        calaBMI();
                                    }}
                                    value={traineeWeight}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
                                <input
                                    id="height"
                                    type="number"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => {
                                        setTraineeHeight(e.target.value);
                                        calaBMI();
                                    }}
                                    value={traineeHeight}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                                <input
                                    id="bmi"
                                    type="text"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={traineeBMI}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="goalWeight" className="block text-sm font-medium text-gray-700">Goal Weight</label>
                                <input
                                    id="goalWeight"
                                    type="number"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setTraineeGoalWeight(e.target.value)}
                                    value={traineeGoalWeight}
                                    required
                                />
                            </div>


                        </div>
                        <div className="mt-8 mb-3">
                            <p className="  font-semibold my-3 text-xl">Medical Information</p>
                            <p className="   mt-1">Do you have any medical conditions or allergies?</p>
                            <div className="    mt-3 my-8">
                                <span className='me-3'>
                                    <input type="radio" value="yes" /> Yes</span>
                                <span className='me-3'>
                                    <input type="radio" value="no" /> No
                                </span>

                            </div>


                        </div>
                        <div className="mb-4 mt-2 col-span-2">
                            <label htmlFor="medicalInfo" className="block text-sm font-medium text-gray-700">Medical Information</label>
                            <textarea
                                id="medicalInfo"
                                rows="3"
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter medical information (if any)"
                                onChange={(e) => setMedicalInfo(e.target.value)}
                                value={medicalInfo}
                            ></textarea>
                        </div>

                        <div className="mt-8">
                            <p className="   mt-1">Are you a current cigarette smoker?</p>
                            <div className="  mt-3 ">
                                <span className='me-3'>
                                    <input type="radio" value="yes" /> Yes</span>
                                <span className='me-3'>
                                    <input type="radio" value="no" /> No
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <p className="   mt-1">Your current diet could be best characterized as:</p>
                            <div className="   mt-3 ">
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Low-fat</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Low-carb</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>High-protein</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Vegetarian/Vegan</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Other</label>
                                </div>

                            </div>


                        </div>
                        <div className="mt-8">
                            <p className="   mt-1">What following goals does best fit in with your goals?</p>
                            <div className="   mt-3 ">
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Improved health</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Improved endurance</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Increased strength</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Increased muscle mass</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Fat loss</label>
                                </div>
                                <div>
                                    <input type="checkbox" /><label htmlFor="" className='px-2'>Other</label>
                                </div>

                            </div>


                        </div>


                        <div className="mt-6">
                            <div className="flex items-center">
                                <input
                                    id="agreement"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
                                    required
                                />
                                <label htmlFor="agreement" className="ml-2 block text-sm text-gray-900">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <button type="submit" className="bg-cyan-700 hover:bg-cyan-800 text-white w-1/2 px-4 py-3 rounded-lg text-xl">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TraineeReg;

import React, { useState } from 'react';
import { useTrainer } from '../../../../Context/UserContext';
import FormValidator from '../../../../Utility/FormValidator';

function TraineeReg() {
    const {
        fname, lname, email, phonenumber, city, region, dateOfBirth,
        gender, setFname, setLname, setEmail, setPhonenumber, setCity, setRegion, setGender, setDateOfBirth,
        weight, height, medicalCondtion, medication, bmi, allergic, goalWeight,
        setGoalWeight, setAllergic, setBmi, setMedicalCondition, setMedication, setHeight, setWeight,
        addtrainee
    } = useTrainer();



    function calaBMI() {
        if (weight && height) {
            const weight = parseFloat(weight);
            const height = parseFloat(height)
            const bmi = (weight / (height * height))
            setBmi(bmi);
            console.log(bmi)
        }

    }


    function calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    function handleDateOfBirthChange(value) {
        setDateOfBirth(value);
        console.log(dateOfBirth)
    }

    const [error, setError] = useState({
        fname: "", lname: "", email: "", phonenumber: "", city: "", region: "", dateOfBirth: "",
        gender: "", weight: "", height: "", medicalCondtion: "", medication: "", bmi: "", allergic: "", goalWeight: ""

    });
    const [form, setForm] = useState({
        fname: "", lname: "", email: "", phonenumber: "", city: "", region: "", dateOfBirth: "",
        gender: "", weight: "", height: "", medicalCondtion: "", medication: "", bmi: "", allergic: "", goalWeight: ""

    });

    const handleRegister = async () => {
        const isvalid = FormValidator.adduser(form);
        if (!isvalid.success) {
            setError(isvalid.error);
            console.log("error");
        } else {
            setError(isvalid.error);
            addtrainee();
            console.log("correct")
        }
    };




    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-4xl p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-cyan-700">Online Trainee Registration Form</h2>
                        <p className="text-gray-700 mt-4">Join our online fitness training and start your fitness journey today! Please fill out the form to register.</p>
                    </div>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="mb-4">
                                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    id="fname"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={fname}
                                    onChange={(e) => {
                                        setFname(e.target.value);
                                        setForm({ ...form, fname: e.target.value });
                                    }}

                                />
                                {error.fname && <p className="text-red-500 text-[14px]">{error.fname}</p>}

                            </div>
                            <div className="mb-4">
                                <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    id="lname"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={lname}
                                    onChange={(e) => {
                                        setLname(e.target.value);
                                        setForm({ ...form, lname: e.target.value });
                                    }}

                                />
                                {error.lname && <p className="text-red-500 text-[14px]">{error.lname}</p>}

                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setForm({ ...form, email: e.target.value });
                                    }}
                                />
                                {error.email && <p className="text-red-500 text-[14px]">{error.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={phonenumber}
                                    onChange={(e) => {
                                        setPhonenumber(e.target.value);
                                        setForm({ ...form, phonenumber: e.target.value });
                                    }}
                                />
                                {error.phonenumber && <p className="text-red-500 text-[14px]">{error.phonenumber}</p>}
                            </div>
                            <div>
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                                    value={dateOfBirth}
                                    min="2002-01-01"
                                    onChange={(e) => handleDateOfBirthChange(e.target.value)}
                                />
                                {error.email ? (
                                    <p className="text-red-500 text-[14px]">{error.calculateAge}</p>
                                ) : (
                                    <p className="mt-2 text-sm text-gray-700">Age: {calculateAge(dateOfBirth)}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    id="gender"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={gender}
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                        setForm({ ...form, gender: e.target.value });
                                    }}
                                >
                                    <option value="">Select gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                                {error.gender && <p className="text-red-500 text-[14px]">{error.gender}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    id="city"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={city}
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                        setForm({ ...form, city: e.target.value });
                                    }}
                                />
                                {error.city && <p className="text-red-500 text-[14px]">{error.city}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
                                <input
                                    id="region"
                                    type="text"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setRegion(e.target.value)}
                                    value={region}

                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
                                <input
                                    id="weight"
                                    type="number"
                                    min={40}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => {
                                        setWeight(e.target.value);
                                        calaBMI();
                                        setForm({ ...form, weight: e.target.value });

                                    }}
                                    value={weight}

                                />
                                {error.weight && <p className="text-red-500 text-[14px]">{error.weight}</p>}

                            </div>
                            <div className="mb-4">
                                <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
                                <input
                                    id="height"
                                    type="number"
                                    min={1}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => {
                                        setHeight(e.target.value);
                                        calaBMI();
                                    }}
                                    value={height}

                                />
                                {error.height && <p className="text-red-500 text-[14px]">{error.height}</p>}

                            </div>
                            <div className="mb-4">
                                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                                <input
                                    id="bmi"
                                    type="text"
                                    className="mt-1 p-2 border text-black border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={bmi}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="goalWeight" className="block text-sm font-medium text-gray-700">Goal Weight</label>
                                <input
                                    id="goalWeight"
                                    type="number"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setGoalWeight(e.target.value)}
                                    value={goalWeight}

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
                                placeholder="Write any allergies you have and any medications you use (if any)"
                                onChange={(e) => setMedicalCondition(e.target.value)}
                                value={medicalCondtion}
                            ></textarea>
                            {error.medicalCondtion && <p className="text-red-500 text-[14px]">{error.medicalCondtion}</p>}

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
                            <button type="submit" className="bg-cyan-700 hover:bg-cyan-800 text-white w-1/2 px-4 py-3 rounded-lg text-xl" onClick={handleRegister}>
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

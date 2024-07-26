import React, { useState } from 'react';
import { useTrainer } from '../../../../Context/UserContext';
import FormValidator from '../../../../Utility/FormValidator';

function TrainerRegistration() {
    const {
        fname, lname, email, phonenumber, city, region, dateOfBirth,
        gender, certfication, yearofExpriance, introductionVideo, categories,
        setFname, setLname, setEmail, setPhonenumber, setCity, setRegion, setGender,
        setDateOfBirth, setyearofExpriance, setCertfication, setIntroductionVideo, setCategories,
        addtrainer
    } = useTrainer();


    const [trainerAge, setTreainerage] = useState("")

    const [error, setError] = useState({
        fname: "",
        lname: "",
        email: "",
        phonenumber: "",
        city: "",
        region: "",
        dateOfBirth: "",
        gender: "",
        certfication: "",
        yearofExpriance: "",
        introductionVideo: "",
        categories: "",
    });
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        phonenumber: "",
        city: "",
        region: "",
        dateOfBirth: "",
        gender: "",
        certfication: "",
        yearofExpriance: "",
        introductionVideo: "",
        categories: "",
    });

    const handleAdd = async () => {
        const isvalid = FormValidator.adduser(form);
        if (!isvalid.success) {
            setError(isvalid.error);
            console.log("error");
        } else {
            setError(isvalid.error);
            addtrainer();
            console.log("correct")
        }
    };


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
        setTreainerage(calculateAge(value));
        console.log(dateOfBirth)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Trainer Registration Form</h2>
                <p className="text-gray-600 text-center mb-8">
                    Please fill out the form to register as a trainer.
                </p>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                        <label htmlFor="trainerFirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            id="trainerFirstName"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your first name"
                            value={fname}
                            onChange={(e) => {
                                setFname(e.target.value);
                                setForm({ ...form, fname: e.target.value });
                            }}
                        />
                        {error.fname && <p className="text-red-500 text-[14px]">{error.fname}</p>}
                    </div>
                    <div>
                        <label htmlFor="trainerLastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            id="trainerLastName"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your last name"
                            value={lname}
                            onChange={(e) => {
                                setLname(e.target.value);
                                setForm({ ...form, lname: e.target.value });
                            }}
                        />
                        {error.lname && <p className="text-red-500 text-[14px]">{error.lname}</p>}

                    </div>
                    <div>
                        <label htmlFor="trainerPhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            id="trainerPhoneNumber"
                            type="tel"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your phone number"
                            value={phonenumber}
                            onChange={(e) => {
                                setPhonenumber(e.target.value);
                                setForm({ ...form, phonenumber: e.target.value });
                            }}
                        />
                        {error.phonenumber && <p className="text-red-500 text-[14px]">{error.phonenumber}</p>}

                    </div>
                    <div>
                        <label htmlFor="trainerEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="trainerEmail"
                            type="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setForm({ ...form, email: e.target.value });
                            }}
                        />
                        {error.email && <p className="text-red-500 text-[14px]">{error.email}</p>}

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                            id="dateOfBirth"
                            type="date"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            value={dateOfBirth}
                            min="1950-07-26"
                            max="2004-07-26"
                            onChange={(e) => handleDateOfBirthChange(e.target.value)}
                        />
                        {error.email ? (
                            <p className="text-red-500 text-[14px]">{error.calculateAge}</p>
                        ) : (
                            <p className="mt-2 text-sm text-gray-700">Age: {calculateAge(dateOfBirth)}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="trainerGender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            id="trainerGender"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
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
                    <div>
                        <label htmlFor="trainerCity" className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            id="trainerCity"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"

                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                                setForm({ ...form, city: e.target.value });
                            }}
                        />                                {error.gender && <p className="text-red-500 text-[14px]">{error.gender}</p>}
                        {error.city && <p className="text-red-500 text-[14px]">{error.city}</p>}

                    </div>
                    <div>
                        <label htmlFor="trainerRegion" className="block text-sm font-medium text-gray-700">Region</label>
                        <input
                            id="trainerRegion"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            value={region}
                            onChange={(e) => {
                                setRegion(e.target.value);
                                setForm({ ...form, region: e.target.value });
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">Categories</label>
                        <select
                            id=""
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            value={categories}
                            onChange={(e) => {
                                setCategories(e.target.value);
                                setForm({ ...form, categories: e.target.value });
                            }}                        >
                            <option value="">Select Categories</option>
                            <option value="BodyBuilding">BodyBuilding</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Cardio Strength">Cardio Strength</option>
                            <option value="Flexibility">Flexibility</option>
                            <option value="Aerobic exercise">Aerobic exercise</option>
                            <option value="Stretching">Stretching</option>
                        </select>
                        {error.categories && <p className="text-red-500 text-[14px]">{error.categories}</p>}
                    </div>
                    <div></div>
                    <div>
                        <label htmlFor="trainerExp" class="block text-sm font-medium text-gray-700">
                            Years of Experience
                        </label>
                        <input
                            id="trainerExp"
                            type="number"
                            min="1"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your years of experience"
                            value={form.yearofExpriance}
                            onChange={(e) => {
                                const value = parseInt(e.target.value);
                                setForm({ ...form, yearofExpriance: value });
                                setyearofExpriance(e.target.value)

                            }}
                        />
                        {error.yearofExpriance && <p className="text-red-500 text-[14px]">{error.yearofExpriance}</p>}

                    </div>
                    <div></div>

                    <div>
                        <label htmlFor="trainerExp" className="block text-sm font-medium text-gray-700">Introduction Video</label>
                        <input
                            id="introductionVideo"
                            type="file"
                            accept="video/*"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            value={introductionVideo}
                            onChange={(e) => {
                                setIntroductionVideo(e.target.value);
                                setForm({ ...form, introductionVideo: e.target.value });
                            }}
                        />
                        {error.introductionVideo && <p className="text-red-500 text-[14px]">{error.introductionVideo}</p>}

                    </div>
                    <div></div>

                    <div>
                        <label htmlFor="trainerExp" className="block text-sm font-medium text-gray-700">Certfication</label>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className=" rounded-lg pb-4 py-1">
                                <input type="file" accept="image/*"
                                    value={certfication}
                                    onChange={(e) => {
                                        setCertfication(e.target.value);
                                        setForm({ ...form, certfication: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        {error.certfication && <p className="text-red-500 text-[14px]">{error.certfication}</p>}
                    </div>
                </div>
                <div className="mt-8">
                    <button
                        type="button"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#0f5858] hover:bg-[#0f6060] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                        onClick={handleAdd}
                    >
                        Register
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TrainerRegistration;

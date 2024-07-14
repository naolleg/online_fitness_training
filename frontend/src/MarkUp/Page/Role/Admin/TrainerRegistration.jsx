import React from 'react';
import { useTrainer } from '../../../../Context/UserContext';

function TrainerRegistration() {
    const {
        trainerFname, trainerLname, trainergender, traineraddress, trainerage,
        traineremail, trainerphonenum, traineryearofExpriance,
        setTreainerFname, setTreainerLname, setTreainergender, setTreaineraddress,
        setTreaineremail, setTreainerphonenum, setTreaineryearofExpriance, setTreainerage,
        addtrainer
    } = useTrainer();

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
                            value={trainerFname}
                            onChange={(e) => setTreainerFname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="trainerLastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            id="trainerLastName"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your last name"
                            value={trainerLname}
                            onChange={(e) => setTreainerLname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="trainerPhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            id="trainerPhoneNumber"
                            type="tel"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your phone number"
                            value={trainerphonenum}
                            onChange={(e) => setTreainerphonenum(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="trainerEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="trainerEmail"
                            type="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your email address"
                            value={traineremail}
                            onChange={(e) => setTreaineremail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="trainerAge" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            id="trainerAge"
                            type="number"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your age"
                            value={trainerage}
                            onChange={(e) => setTreainerage(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="trainerExp" className="block text-sm font-medium text-gray-700">Years of Experience</label>
                        <input
                            id="trainerExp"
                            type="number"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            placeholder="Enter your years of experience"
                            value={traineryearofExpriance}
                            onChange={(e) => setTreaineryearofExpriance(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="trainerGender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            id="trainerGender"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
                            value={trainergender}
                            onChange={(e) => setTreainergender(e.target.value)}
                        >
                            <option value="">Select gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="trainerAddress" className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            id="trainerAddress"
                            type="text"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-800 sm:text-sm"
                            placeholder="Enter your address"
                            value={traineraddress}
                            onChange={(e) => setTreaineraddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <button
                        type="button"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                        onClick={addtrainer}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrainerRegistration;

import React, { useState } from 'react';
import { useTrainer } from '../../../../Context/UserContext';
import { FaSearch } from 'react-icons/fa';

function TraineeList() {
    const { trainees } = useTrainer();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTrainees = trainees.filter(trainee => {
        return (
            (trainee.fname && trainee.fname.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (trainee.lname && trainee.lname.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (trainee.email && trainee.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (trainee.phonenumber && trainee.phonenumber.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className="bg-gray-100 text-gray-800 rounded-lg shadow-md overflow-hidden mb-8 mt-2 mx-4">
            <div className="py-4 px-6">
                <h3 className="text-2xl">Trainee List</h3>
            </div>
            <div className="p-6">
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search trainees"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 bg-white text-gray-800 placeholder-gray-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-left">
                        <thead className="bg-gray-200 text-gray-800">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Id</th>
                                <th className="px-4 py-3 font-semibold">Full Name</th>
                                <th className="px-4 py-3 font-semibold">Age</th>
                                <th className="px-4 py-3 font-semibold">Gender</th>
                                <th className="px-4 py-3 font-semibold">BMI</th>
                                <th className="px-4 py-3 font-semibold">Email</th>
                                <th className="px-4 py-3 font-semibold">Phone Number</th>
                                <th className="px-4 py-3 font-semibold">Address</th>
                                <th className="px-4 py-3 font-semibold">Medical Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredTrainees.map((trainee, index) => (
                                <tr
                                    key={trainee.id}
                                    className={`transition-all hover:bg-gray-100 hover:w-[110%] ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                                >
                                    <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">{trainee.fname} {trainee.lname}</td>
                                    <td className="px-4 py-3">{trainee.dateOfBirth}</td>
                                    <td className="px-4 py-3">{trainee.gender}</td>
                                    <td className="px-4 py-3">{trainee.bmi}</td>
                                    <td className="px-4 py-3">{trainee.email}</td>
                                    <td className="px-4 py-3">{trainee.phonenumber}</td>
                                    <td className="px-4 py-3">{trainee.city}, {trainee.region}</td>
                                    <td className="px-4 py-3">{trainee.medicalInfo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TraineeList;

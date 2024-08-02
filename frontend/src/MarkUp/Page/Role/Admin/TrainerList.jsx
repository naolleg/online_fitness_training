import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'; // Import icons from react-icons
import avatar from '../../../../assets/avater.png';

function TrainerList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [trainers, setTrainers] = useState([]);

    // useEffect(() => {
    //     async function fetchTrainers() {
    //         try {
    //             const res = await fetch("http://localhost:5173/api/trainer/getAll");
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! status: ${res.status}`);
    //             }
    //             const data = await res.json();
    //             console.log("Fetched trainers:", data);
    //             setTrainers(data);
    //         } catch (error) {
    //             console.error("Error while fetching the data:", error);
    //         }
    //     }

    //     fetchTrainers();
    // }, []);

    useEffect(() => {
        async function fetchTrainers() {
            try {
                const res = await fetch("http://localhost:5173/api/trainer/getAll");

                const data = await res.json()
                console.log("Fetched trainers:", data);
                setTrainers(data);

                throw new Error('Response is not JSON');

            } catch (error) {
                console.error("Error while fetching the data:", error);
            }
        }

        fetchTrainers();
    }, []);


    const filteredTrainers = trainers.filter((trainer) => {
        return (
            (trainer.fname && trainer.fname.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (trainer.lname && trainer.lname.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (trainer.email && trainer.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (trainer.phonenumber && trainer.phonenumber.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className="bg-gray-100 text-gray-800 rounded-lg shadow-md overflow-hidden mb-3 mx-4">
            <div className="flex justify-between items-center pt-1 pb-4 px-6">
                <h3 className="text-2xl">Trainers List</h3>
                <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded">
                    <Link to="/trainerReg">Add</Link>
                </button>
            </div>
            <div className="p-3">
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search trainers"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400 bg-white text-gray-800 placeholder-gray-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-left">
                        <thead className="bg-gray-200 text-gray-800">
                            <tr>
                                <th className="px-2 py-3 font-semibold">Id</th>
                                <th className="px-2 py-3 font-semibold">Full Name</th>
                                <th className="px-2 py-3 font-semibold">Email</th>
                                <th className="px-2 py-3 font-semibold">Phone Number</th>
                                <th className="px-2 py-3 font-semibold">Address</th>
                                <th className="px-2 py-3 font-semibold">Year of Experience</th>
                                <th className="px-2 py-3 font-semibold">Categories</th>
                                <th className="px-2 py-3 font-semibold">Status</th>
                                <th className="px-2 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredTrainers.map((trainer, index) => (
                                <tr
                                    key={trainer.id}
                                    className={`transition-all hover:bg-gray-300 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                                >
                                    <td className="px-2 py-3">{index + 1}</td>
                                    <td className="px-2 py-3 flex items-center">
                                        <img src={avatar} alt="Avatar" className="h-8 w-8 rounded-full mr-2" />
                                        {trainer.fname} {trainer.lname}
                                    </td>
                                    <td className="px-2 py-3">{trainer.email}</td>
                                    <td className="px-2 py-3">{trainer.phonenumber}</td>
                                    <td className="px-2 py-3">{trainer.city},{trainer.region}</td>
                                    <td className="px-2 py-3">{trainer.yearofExpriance}</td>
                                    <td className="px-2 py-3">{trainer.categories}</td>
                                    <td className="px-2 py-3">
                                        <select className="px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="active" className="text-green-500 font-medium">Active</option>
                                            <option value="inactive" className="text-red-500 font-medium">Inactive</option>
                                        </select>
                                    </td>
                                    <td className="py-3">
                                        <div className="flex justify-center">
                                            <button className="text-black font-medium py-2 rounded mr-2" title="Edit">
                                                <BsPencilSquare />
                                            </button>
                                            <button>
                                                <BsTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TrainerList;

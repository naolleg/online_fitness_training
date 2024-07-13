import React, { useState } from 'react'
import { useTrainer } from '../../../../Context/UserContext'
import { Link } from 'react-router-dom';
function TrainerList() {

    const { trainers, deleteuser } = useTrainer()

    function handleDelete(id) {
        deleteuser(id);
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden my-8 mx-4">
            <div className='flex justify-between mr-3 my-4'>
                <p className='text-[25px]'>Trainers list</p>
                <button className="bg-cyan-800 hover:bg-cyan-900 text-white font-medium py-2 px-4 rounded mr-2">
                    <Link to="/trainerReg">Add</Link>
                </button>
            </div>
            <div>

            </div>
            <table className="w-[100%] text-center">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-5 py-4 font-bold">Id</th>
                        <th className="px-5 py-4 font-bold flex items-center">
                            Full Name
                        </th>
                        <th className="px-5 py-4 font-bold">Email</th>
                        <th className="px-5 py-4 font-bold">Phone Number</th>
                        <th className="px-5 py-4 font-bold">Address</th>
                        <th className="px-5 py-4 font-bold">Status</th>
                        <th className="px-5 py-4 font-bold">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {trainers.map((users) => (
                        <tr className="hover:bg-gray-100 transition-colors duration-300" key={users.id}>
                            <td className="px-5 py-4 text-gray-700">1</td>
                            <td className="px-5 py-4 text-gray-700 flex items-center">
                                <img className="h-8 w-8 rounded-full mr-2" src="" alt="" />
                                {users.trainerFname} {users.trainerLname}
                            </td>
                            <td className="px-5 py-4 text-gray-700">{users.traineremail}</td>
                            <td className="px-5 py-4 text-gray-700">{users.trainerphonenum}</td>
                            <td className="px-5 py-4 text-gray-700">{users.traineraddress}</td>
                            <td className="px-5 py-4 text-gray-700">
                                <select className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="active" className="text-green-500 font-medium">Active</option>
                                    <option value="inactive" className="text-red-500 font-medium">Inactive</option>
                                </select>
                            </td>
                            <td className="px-5 py-4 text-gray-700">
                                <div className="flex justify-end">
                                    <button className="  text-white font-medium py-2 px-4 rounded mr-2">
                                        ✒️
                                    </button>
                                    <button className=" text-white font-medium py-2 px-4 rounded"
                                        onClick={() => handleDelete(users.id)}
                                    >
                                        ❌
                                    </button>
                                </div>
                            </td>
                        </tr>))}


                </tbody>
            </table>
        </div>
    )
}

export default TrainerList
import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { useTrainer } from '../../../../Context/UserContext';


const Listes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState("");
    const [filter, setFilter] = useState('All');
    const { trainees } = useTrainer();

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchQuery(value);
        setData(
            trainees.filter(
                (item) =>
                    item.name.toLowerCase().includes(value) ||
                    item.age.toString().includes(value) ||
                    item.gender.toLowerCase().includes(value)
            )
        );
    };

    const handleFilter = (filterType) => {
        setFilter(filterType);
        if (filterType === 'Active') {
            setData(initialData.filter(member => member.status === 'Active'));
        } else {
            setData(initialData);
        }
    };

    return (
        <>
            <p className='mb-8  text-4xl font-semibold'>Trainee list</p>
            <div className="flex space-x-4  ">

                <button
                    onClick={() => handleFilter('All')}
                    className={`px-4 py-1 rounded-tr-3xl transition-colors duration-300 ${filter === 'All' ? 'bg-[#285376] text-white' : ' text-gray-700 bg-white hover:bg-blue-400 hover:text-white'}`}
                >
                    All Trainees
                </button>
                <button
                    onClick={() => handleFilter('Active')}
                    className={`px-4 py-1 rounded-tr-3xl  transition-colors duration-300 ${filter === 'Active' ? 'bg-[#37e083] text-white' : ' text-gray-700 bg-white hover:bg-green-400 hover:text-white'}`}
                >
                    Active Trainees
                </button>
                <button
                    className={`px-6 py-1 rounded-tr-3xl  transition-colors duration-300 bg-white`}>
                    Schedule
                </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-r-xl">

                <div className="w-full md:w-auto my-3 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="ps-5 w-full md:w-[88%] border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 h-8 shadow-sm"
                    />
                </div>
                <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                            <tr>
                                {['Name', 'Age', 'Gender', 'Start Date', 'End Date', 'Status', 'Chat'].map((header) => (
                                    <th
                                        key={header}
                                        className="px-4 py-2 border-b text-left text-sm font-semibold tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {trainees.map((item, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition duration-150">
                                    <td className="px-4 py-2 border-b text-sm text-gray-800">{item.fname} {item.lname}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-800">{item.dateOfBirth}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-800">{item.gender}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-800">{item.startDate}</td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-800">{item.endDate}</td>
                                    {/* <td className="px-4 py-2 border-b text-sm text-gray-800">
                                        <span
                                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td> */}
                                    <td className="px-2 py-3">
                                        <select className="px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="active" className="text-green-500 font-medium">Active</option>
                                            <option value="inactive" className="text-red-500 font-medium">Inactive</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-2 border-b text-sm text-gray-800">
                                        <FaRegCommentDots className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-700 transition duration-150" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
};

export default Listes;
import React from 'react'

function AdminProfile() {
    return (
        <>

            <div className="">
                <div className="flex justify-center items-center ">

                    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full max-w-md">
                        <div className="p-6">
                            <span className='flex justify-end'><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><g fill="none" stroke="#3b3b3b" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"></path></g></svg></span>

                            <div className="flex justify-center">
                                <img className="rounded-full w-32 h-32 object-cover border-4 border-white" src="https://via.placeholder.com/150" alt="Admin Profile Picture" />
                            </div>
                            <h2 className="text-2xl font-bold text-center text-gray-800 mt-4">Mr Naol legese</h2>
                            <p className="text-gray-600 text-center">@kiya</p>

                            <p className="text-gray-700 mt-4 text-center">Admin for online fitness traing website</p>
                            <div className="bg-gray-200 px-4 py-3 mt-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">Name:</span>
                                    <span className="text-gray-900">Mr Naol legese</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">Username:</span>
                                    <span className="text-gray-900 ">@kiya</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">Role:</span>
                                    <span className="text-gray-900 ">Admin</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700">Location:</span>
                                    <span className="text-gray-900">Addis Ababa, Ethiopa</span>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default AdminProfile
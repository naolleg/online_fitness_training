import React from 'react'

function TrainerProfile() {
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

                            <p className="text-gray-700 mt-1 text-center">(Bodybuilder)</p>
                            <div className="bg-gray-200 px-4 py-3 mt-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-2">

                                    <span className="text-gray-700 flex gap-1">
                                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24"><path fill="#3b3b3b" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg></span>
                                        Name:</span>
                                    <span className="text-gray-900">Mr Naol legese</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700 flex gap-1">  <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 256 256"><path fill="#3b3b3b" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"></path></svg>
                                    </span> Phone number:</span>
                                    <span className="text-gray-900 ">0912121222</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-700 flex gap-1">
                                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24"><path fill="#3b3b3b" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg></span>
                                        Username:</span>
                                    <span className="text-gray-900 ">@kiya</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainerProfile
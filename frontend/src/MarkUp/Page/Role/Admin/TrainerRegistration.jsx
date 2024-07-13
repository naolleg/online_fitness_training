import React, { useState } from 'react'
import { useTrainer } from '../../../../Context/UserContext'

function TrainerRegistration() {
    const { trainerFname, trainerLname, trainergender, traineraddress, trainerage, traineremail, trainerphonenum, traineryearofExpriance, setTreaineraddress,
        setTreaineremail, setTreainergender, setTreainerFname, setTreainerLname, setTreainerphonenum, setTreaineryearofExpriance, setTreainerage,
        addtrainer } = useTrainer()

    // console.log(trainername)


    return (
        <>
            <div className='text-white h-100vh bg-cyan-900'>
                <div className='  px-[5%] py-4'>
                    <h2 className='text-[25px]'> <span className='h text-[#830808]'>Trainers </span>Registration from</h2>
                    <p className='pt-1 pb-3'>Join our gym and start your fitness journey today! Please fill out the form to register.</p>
                </div>
                <hr className='' />


                {/* ////////////////////////////////////////////////////// */}


                <div>

                    <div className="myinfoForm py-[20px] shadow-lg shadow-blue-500 ">
                        <div className="">
                            <div>
                                <p className="mx-[5%] md:mx-[10%] font-semibold">Full name</p>

                                <div className=" md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto md:mt-[12px] mb-[30px]">
                                    <div className="">
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            className="p-2 border-[1.25px] my-4 md:my-0 border-gray-200 text-black w-[95%] outline-none"
                                            onChange={(e) => setTreainerFname(e.target.value)}
                                            value={trainerFname}

                                        />
                                        <p className=" text-gray-400"></p>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            className="p-2 border-[1.25px] text-black border-gray-200  w-[95%] outline-none"
                                            onChange={(e) => setTreainerLname(e.target.value)}
                                            value={trainerLname}
                                        />
                                        <p className=" text-gray-400 mt-5 md:mt-0"></p>
                                    </div>
                                </div>
                            </div><div className="mt-5">
                                <div className="  md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto ">
                                    <div className="">
                                        <p className="mb-[10px] font-semibold">Contact Number</p>
                                        <input
                                            type="number"
                                            className="p-2 border-[1.25px] border-gray-200 text-black  w-[95%] outline-none"
                                            onChange={(e) => setTreainerphonenum(e.target.value)}
                                            value={trainerphonenum}
                                        />
                                    </div>
                                    <div>
                                        <p className="mb-[10px] font-semibold mt-5 md:mt-0">Email</p>
                                        <input

                                            type="email"
                                            className="p-2 border-[1.25px] text-black border-gray-200  w-[95%] outline-none"
                                            onChange={(e) => setTreaineremail(e.target.value)}
                                            value={traineremail}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[20px] mb-[35px]">
                                <div className="">
                                    <p className="mb-[10px] font-semibold">Age</p>
                                    <input
                                        type="number"
                                        className="p-2 text-black border-[1.25px] border-gray-200  w-[95%] outline-none"
                                        onChange={(e) => setTreainerage(e.target.value)}
                                        value={trainerage}
                                    />
                                </div>
                                <div>
                                    <p className="mb-[10px] font-semibold mt-5 md:mt-0">Year of expriance</p>
                                    <input
                                        type="number"
                                        className="p-2 text-black border-[1.25px] border-gray-200  w-[95%] outline-none"
                                        onChange={(e) => setTreaineryearofExpriance(e.target.value)}
                                        value={traineryearofExpriance}
                                    />
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[20px] mb-[35px]">
                                <div className="">
                                    <p className="mb-[10px] font-semibold">Gender</p>
                                    <select
                                        id="gender"
                                        name="gender"
                                        className='p-2 text-black border-[1.25px] border-gray-200  w-[95%] outline-none'
                                        value={trainergender}
                                        onChange={(e) => setTreainergender(e.target.value)}
                                        required >
                                        <option value="">Select gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div>

                            </div>


                            <div className="mt-8">
                                <p className=" mx-[5%] md:mx-[10%] font-semibold">Address</p>
                                <div className=" md:grid md:grid-cols-2  w-[90%] md:w-[80%] mx-auto mt-[10px]">
                                    <div className="">
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            className="p-2 border-[1.25px] text-black border-gray-200  w-[95%] outline-none"
                                            onChange={(e) => setTreaineraddress(e.target.value)}
                                            value={traineraddress}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[6%] mx-auto flex justify-center ">
                            <button className="bg-[#137E8F] mx-auto w-[40%] px-4 py-[6px] text-white rounded-lg text-xl" onClick={addtrainer} >Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainerRegistration
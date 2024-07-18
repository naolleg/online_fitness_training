import React from 'react'
import { Card } from "flowbite-react";
import cardio from '../../../../assets/cardio.png'

function PopularActivity() {
    return (
        <>
            <div className="w-full mb-4">
                <Card href="#" className="w-[180px] h-[100px] shadow-md rounded-lg overflow-hidden bg-gray-50">
                    <div className=" p-0">
                        <h5 className="text-lg text-center font-semibold mb-2">Cardio strenght </h5>
                        <div className='flex justify-between'>
                            <div>
                                <p className="text-gray-700 text-sm">30 Trainee</p>
                                <p className="text-gray-700 text-sm">14 Trainer</p>
                            </div>
                            <div>
                                <img src={cardio} alt="" className='w-[40px]' />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default PopularActivity
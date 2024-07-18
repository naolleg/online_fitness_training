import React from 'react'
import { Card } from "flowbite-react";

function TotalNumerUsers(props) {
    return (
        <div className="w-full md:w-[30%] mb-4 ">
            <Card href="#" className="max-w-xs shadow-md rounded-lg overflow-hidden bg-gray-50">
                <div className="p-2">
                    <h5 className="text-xl text-center font-semibold mb-2">{props.title}</h5>
                    <p className="text-gray-700 text-center text-lg">{props.number}</p>
                </div>
            </Card>
        </div>
    )
}

export default TotalNumerUsers
import React from 'react';
import MonthlyFitnessGoals from '../../../Component/Role/Admin/MonthlyFitnessGoals';
import TotalNumerUsers from '../../../Component/Role/Admin/TotalNumerUsers';
import BarChartUserAnalysis from '../../../Component/Role/Admin/BarChartUserAnalysis';
import PopularActivity from '../../../Component/Role/Admin/PopularActivity';
import PieCharAnalysis from '../../../Component/Role/Admin/PieCharAnalysis';
import Ad from '../../../Component/Role/Admin/Ad';

function Analysis() {
    return (
        <div className="w-full px-10 ">
            {/* card section */}
            <div className="flex flex-wrap justify-between items-start px-4 mb-8">
                <div className=" md:w-[100%] mb-4 flex flex-wrap justify-between">
                    <TotalNumerUsers
                        title="Total trainer"
                        number="40"
                    />
                    <TotalNumerUsers
                        title="Total trainee"
                        number="60"
                    />
                    <TotalNumerUsers
                        title="Total users"
                        number="100"
                    />
                </div>
            </div>

            {/* monthly analysis */}

            <div className="w-full  flex flex-wrap justify-around px-4 gap-3">
                {/* barchar */}
                <BarChartUserAnalysis />
                {/* summery */}
                <div className="w-full md:w-[30%] mb-8">
                    <MonthlyFitnessGoals />
                </div>
            </div>

            {/* popular activty */}
            <div className='flex w-full  gap-3'>
                <div className='w-[22%]'>
                    <p className='text-lg font-semibold mb-6'>Popular fitness activities</p>
                    {/* activities */}
                    <PopularActivity />
                    <PopularActivity />
                    <PopularActivity />
                </div>
                {/* pieChar */}
                <PieCharAnalysis />
                {/* popular trainers */}
                <div className='w-[30%]'>

                </div>

            </div>



        </div>
    );
}

export default Analysis;

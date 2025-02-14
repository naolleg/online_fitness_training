import React from 'react'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
];
const size = {
    width: 400,
    height: 350,
};
function PieCharAnalysis() {
    return (
        <>
            <div>
                <PieChart
                    series={[
                        {
                            arcLabel: (item) => `${item.label} (${item.value})`,
                            arcLabelMinAngle: 45,
                            data,
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontWeight: 'bold',
                        },
                    }}
                    {...size}
                />
            </div>
        </>
    )
}

export default PieCharAnalysis
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import cardio from "../../../assets/cardioStrength.png";
import strength from "../../../assets/strength.png";
import yoga from "../../../assets/yoga.png";
import bodybuliding from "../../../assets/bodybuilding.png";

const data = [
    {
        title: "Cardio Strength",
        image: cardio,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae"
    },
    {
        title: "Strength",
        image: strength,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae"
    },
    {
        title: "Yoga",
        image: yoga,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae"
    },
    {
        title: "Bodybuilding",
        image: bodybuliding,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae"
    }
];

function Categories() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {data.slice(0, isSmallScreen ? 2 : data.length).map((category) => (
                <Card key={category.title} sx={{ maxWidth: 270 }} style={{}}>
                    <div className="bg-[#f5f5f3] rounded-lg shadow-md">
                        <div className="px-7 py-5 flex justify-center">
                            <img src={category.image} alt="" className="w-[40%] h-[40%] md:w-[30%] md:h-[30%]" />
                        </div>
                        <div className="bg-[#f5f5f3] rounded-b-lg px-4 pb-6 pt-3">
                            <h4 className="text-2xl font-bold mb-2">{category.title}</h4>
                            <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default Categories;
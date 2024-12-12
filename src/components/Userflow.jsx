import React, { useState } from 'react';
import Records from "../data/CaseData";

const Userflow = () => {
    
    const [activeColor, setActiveColor] = useState('red');
    const [isVisible, setIsVisible] = useState(true);
    const [Userflow, setUserflow] = useState(Records[0]); // Select the first record by default

    const handleButtonClick = (color) => {
        setIsVisible(false); // Start the fade-out effect
        setTimeout(() => {
            setActiveColor(color);
            setIsVisible(true); // Start the fade-in effect
        }, 500); // Match this duration with the CSS transition duration
    };

    return (
        <>
            <div className="grid grid-cols-2 rounded-lg overflow-hidden min-h-[70vh]">
                {/* Buttons Section */}
                <div className="grid grid-cols-1 gap-10">
                    {Userflow.Userflow.map(({ Title, Desc, Mock }) => (
                        <div key={Title} className="flex items-center rounded-lg overflow-hidden">
                            <div className={`p-[2px] bg-gradient-to-r w-full rounded-lg ${activeColor === 'red' ? 'from-shade_2 via-shade_1 to-shade_2' : 'from-shade_2 via-shade_4 to-shade_2'}`}>
                                <button
                                    className="bg-shade_4 shadow-inner shadow-shade_2 text-white p-2 rounded w-full h-[5rem]"
                                    onClick={() => handleButtonClick('red')}
                                >
                                    {Desc}
                                    {Mock}
                                </button>
                            </div>
                            <div
                                className={`line w-full h-1 mt-1 ${activeColor === 'red' ? 'bg-gradient-to-r from-shade_2 via-shade_1 to-shade_2' : 'bg-shade_4'}`}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Containers Section */}
                <div className="flex h-full w-full bg-shade_4 rounded-xl">
                    {Userflow.Userflow.map(({ Title, Desc, Mock }) => (
                        <div
                            key={Title}
                            className={`w-full h-full border-2 border-shade_3 rounded-lg p-4 transition-opacity duration-500 ${activeColor === 'red' && isVisible ? 'opacity-100' : 'opacity-0'} ${activeColor === 'red' ? 'block' : 'hidden'}`}
                        >
                            {Title}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Userflow;
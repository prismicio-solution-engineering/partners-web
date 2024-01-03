import React from 'react';
import { FaCircle } from 'react-icons/fa';

const Timeline = () => {
    const events = [
        {
            title: 'Step 1',
            description: 'This is the first step of the process where important things happen.',
            image: 'https://source.unsplash.com/random/128x128?sig=1',
        },
        {
            title: 'Step 2',
            description: 'During step two, we further elaborate on the details and refine our approach.',
            image: 'https://source.unsplash.com/random/128x128?sig=2',
        },
        {
            title: 'Step 3',
            description: 'Finally, we come to the conclusion with the final step wrapping up everything.',
            image: 'https://source.unsplash.com/random/128x128?sig=3',
        },
    ];

    return (
        <div className="flex flex-col items-center py-12 space-y-12 bg-[#E8F8F3]">
            <div className="text-center">
                <h1 className="text-[64px] leading-[72px] font-bold text-[#50d71e] mb-4">Our Timeline</h1>
                <p className="text-[#303030]">Discover the journey and each step involved in our streamlined process.</p>
            </div>
            <div className="relative w-full max-w-screen-lg p-6">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#50d71e]"></div>
                {events.map((event, index) => (
                    <div key={index} className={`flex ${(index % 2 === 0) ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}>
                        <div className={`w-1/2 px-8 ${(index % 2 === 0) ? 'text-right' : 'text-left'}`}>
                            <img className={`hidden md:block object-cover w-1/2 aspect-square min-h-[24px] mb-4 rounded-md ${(index % 2 === 0) ? 'ml-auto' : 'mr-auto'}`} src={event.image} alt={`Step ${index + 1}`} />
                            <h5 className="text-[20px] leading-[26px] font-medium text-[#50d71e]">{event.title}</h5>
                            <p className="text-[#505050]">{event.description}</p>
                        </div>
                        <div className="absolute -ml-3 left-1/2 transform">
                            <FaCircle className="text-[#50d71e]" size={24} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
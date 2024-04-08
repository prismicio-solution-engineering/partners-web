'use client'
import React, { useEffect, useState } from 'react';

const Scaler = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [scale, setScale] = useState(0);

    const adjustScale = () => {
        const scaleValue = Math.min(
            window.innerWidth / 1280, window.innerHeight / 715, 1.3
        );
        setScale(scaleValue*0.9);
    };

    useEffect(() => {
        adjustScale();
        window.addEventListener('resize', adjustScale);

        return () => window.removeEventListener('resize', adjustScale);
    }, []);

    return (
        <div className="relative w-full max-w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center"
                style={{ transform: `scale(${scale})` }}>
                {children}
                {/* <div>
                    <div
                        className={`w-[1280px] h-[715px] mx-auto relative border border-1 border-silver-base shadow-sm p-10 rounded-lg mb-5 bg-quaternary-orange`}
                    >
                        <div className="flex gap-10 flex-row w-full inset-0 mb-10 overflow-clip justify-between">
                            <div className="w-1/2 flex flex-col justify-between">
                                <img src="https://images.prismic.io/prismic-partners-web/ZfMeVrTwE6aM1J7e_illu-library_simple-43.png?auto=format%2Ccompress&rect=130%2C0%2C367%2C388&w=1200&fit=max" className="w-[72px] h-[72px] object-contain" />
                                <p>Your text goes here. This text will scale with the div.</p>
                                <div className="text-left flex flex-col content-end">
                                    <p
                                        className={`text-primary-orange text-2xl font-sans font-bold`}
                                    >
                                        12/12/2002
                                    </p>
                                    <h2 className="text-7xl font-bold font-sans mt-10 text-gray-darker">
                                        Your text goes here. This text will scale with the div.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-1/2 h-full border border-1 border-gray-darker rounded-xl">
                                <img src="https://images.prismic.io/prismic-partners-web/ZfMeVrTwE6aM1J7e_illu-library_simple-43.png?auto=format%2Ccompress&rect=130%2C0%2C367%2C388&w=1200&fit=max" className="w-full h-full object-contain rounded-xl " />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Scaler;

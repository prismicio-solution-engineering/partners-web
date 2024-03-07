import { Button } from "@/components/Button";
import { PrismicRichText } from "@/components/PrismicRichText";
import type { Content } from "@prismicio/client";

const HeroDefault = ({ slice }: { slice: Content.HeroBannerSliceDefault }) => {
  return (
    <div className='relative pt-16 pb-16 overflow-hidden'>
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F5F5F5] rounded-lg'>
                <div className='flex flex-wrap items-center -mx-4 px-4'>
                    <div className='w-full lg:w-1/2 px-4'>
                        <h1 className='text-black text-center lg:text-left text-4xl lg:text-5xl font-sans font-bold mb-6'>
                            Empower Your Agency With Prismic
                        </h1>
                        <p className='text-[#171717] text-center lg:text-left mb-8'>
                            Join our Prismic Partner Program to leverage the full potential of content management for your clients.
                        </p>
                        <div className='text-center lg:text-left'>
                            <button className='bg-[#8E44EC] rounded-lg text-white font-sans font-bold text-sm border-2 py-3 px-6 rounded-8 hover:bg-[#B382F2] transition duration-500 ease-in-out'>
                                Get Certified
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-4 mt-8 lg:mt-0'>
                        <div className='bg-white rounded-lg overflow-hidden'>
                            <img
                                className='w-full h-auto object-cover object-center'
                                src='https://images.prismic.io/website-factory-instance-1/191b0da5-480f-43cc-a8e2-d9477230df15_Screenshot+2024-01-30+at+16.35.08.png?auto=compress,format'
                                alt='Hero'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default HeroDefault;

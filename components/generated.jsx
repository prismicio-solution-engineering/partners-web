"use client"
import React, { useState } from 'react';
import homeIllustration from "../assets/home__for-developers-illustration.png"

export const HeroBanner = () => {
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

export const FeaturesSlice = () => {
    const features = [
        {
            name: "Collaborative Editing",
            description: "Work simultaneously with your team on the same document without fear of data loss.",
            image: "https://source.unsplash.com/random/300x300",
        },
        {
            name: "Custom Type Builder",
            description: "Create content structures tailored to your needs and requirements.",
            image: "https://source.unsplash.com/random/301x301",
        },
        {
            name: "Multi-language Support",
            description: "Easily manage your content in multiple languages for a broader audience reach.",
            image: "https://source.unsplash.com/random/302x302",
        },
        // ... additional features
    ];
    return (
        <>

            <div className="py-24 bg-white">
                <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[#171717] uppercase font-sans font-bold text-lg mb-4">Features</h2>
                        <h3 className="text-black text-3xl lg:text-4xl font-sans font-bold mb-6">Why Partner with Prismic?</h3>
                        <p className="text-lg text-[#171717]">
                            Discover the benefits of joining the Prismic Partner Program and how it can transform your agency’s operations.
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {features.map((feature, index) => (
                            <div key={index} className="md:w-1/2 lg:w-1/3 px-4 mb-8">
                                <div className="rounded-lg overflow-hidden mb-4">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src={feature.image}
                                        alt={feature.name}
                                    />
                                </div>
                                <h4 className="text-[#171717] text-2xl font-sans font-bold mb-4">{feature.name}</h4>
                                <p className="text-md mb-4 text-[#171717]">{feature.description}</p>
                                <button className="bg-[#8E44EC] text-white font-sans uppercase font-bold text-sm border-2 hover:bg-[#B382F2] py-3 px-6 rounded-lg hover:skew-y-3 transition duration-500 ease-in-out">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


// Using the same design, make a Featured partners logo cloud. The logos should have the same tilting effect on hover and inspire trust

export const FeaturedPartners = () => {
    const partners = [1, 2, 3, 4, 5]; // Dummy array to represent partner logos

    return (
        <div className="relative px-8 md:px-[84px] py-[80px]">
            <div
                className="absolute inset-0 -z-10"
                style={{ background: "#F5F5F5", clipPath: "polygon(0 0%, 100% 15%, 100% 100%, 0 85%)" }}
            ></div>
            <h2 className="text-[#171717] text-3xl font-sans font-bold mb-[64px] text-center">
                Featured Partners
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[48px]">
                {partners.map((partner) => (
                    <div
                        key={partner}
                        className="flex justify-center items-center bg-[#FFFFFF] shadow hover:rotate-3 transition duration-300"
                        style={{ height: '120px' }}
                    >
                        <img
                            className="max-h-full max-w-full object-contain"
                            src={`https://source.unsplash.com/random/200x200?sig=${partner}`}
                            alt={`Partner ${partner}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


// Partnership tiers

// Based on this design, create a section that displays the 3 different partnership tiers (bronze, silver and gold). Make the design like a pricing table but simpler. Partners should be able to know right away what are the different partnership tiers and their key incentives. The Gold tier being the most important, make it stand out and place it in the middle.
// Reuse and enhance the design of this component : 
// ```
// <div className="grid gap-6 md:grid-cols-3 p-4 md:p-6">
//       <div className="relative group overflow-hidden rounded-lg shadow-lg">
//         <div className="bg-white p-4 dark:bg-gray-950">
//           <h3 className="font-bold text-xl">Silver Tier</h3>
//           <p className="text-sm text-gray-500">Ideal for small businesses</p>
//           <ul className="list-disc list-inside mt-4">
//             <li>Access to basic features</li>
//             <li>5 user accounts</li>
//             <li>Email support</li>
//           </ul>
//         </div>
//       </div>
//       <div className="relative group overflow-hidden rounded-lg shadow-lg">
//         <div className="bg-white p-4 dark:bg-gray-950">
//           <h3 className="font-bold text-xl">Gold Tier</h3>
//           <p className="text-sm text-gray-500">Perfect for growing businesses</p>
//           <ul className="list-disc list-inside mt-4">
//             <li>Access to all basic features</li>
//             <li>20 user accounts</li>
//             <li>Priority email support</li>
//             <li>Access to new features</li>
//           </ul>
//         </div>
//       </div>
//       <div className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-primary">
//         <div className="bg-white p-4 dark:bg-gray-950">
//           <h3 className="font-bold text-xl text-primary">Platinum Tier</h3>
//           <p className="text-sm text-gray-500">For large enterprises</p>
//           <ul className="list-disc list-inside mt-4">
//             <li>Unlimited access to all features</li>
//             <li>Unlimited user accounts</li>
//             <li>24/7 priority support</li>
//             <li>Access to beta features</li>
//             <li>Dedicated account manager</li>
//           </ul>
//         </div>
//       </div>
//     </div>
// ```
// Give a bigger height to the cards. Also give a fixed height to each part of the cards so they all have the same space for titles, same space for descriptions, same space for incentives. This way the CTAs should look aligned between the cards.


// Align the 3 tiers in the same row.
// Add a featured property to the tiers, the gold tier being the most important, it will be featured : true.

//Based on that, enhance the make the PartnershipTiersComponent to match the design of the TimelineComponent.
// Here's the TimelineComponent :
// ```
// const TimelineComponent = () => {
//     const milestones = [
//         {
//             step: "01",
//             title: "Submit Your Application",
//             description: "Send in your application to express your interest in becoming a partner with our agency."
//         },
//         {
//             step: "02",
//             title: "Meet & Greet",
//             description: "We will have a session to get to know each other and discuss collaboration possibilities."
//         },
//         {
//             step: "03",
//             title: "Training & Certification",
//             description: "Go through training sessions to understand our product and services, followed by a certification."
//         },
//         {
//             step: "04",
//             title: "Launch Projects",
//             description: "Start launching projects and campaigns as an official partner agency."
//         },
//         {
//             step: "05",
//             title: "Continuous Support",
//             description: "Get continuous support and updates to ensure ongoing success in our partnership."
//         }
//     ];

//     return (
//       <div className='flex flex-col items-center pt-16 pb-16'>
//         <h2 className='text-center text-4xl font-sans font-bold text-black mb-8'>Partnership Process</h2>
//         <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
//           {milestones.map((milestone, idx) => (
//             <div key={idx} className={`flex flex-col md:flex-row gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16`}>
//               <div className='md:w-2/5 px-4 mb-8 md:mb-0'>
//               <span className="font-sans font-bold text-[#8E44EC] text-xl mb-[24px] block">{milestone.step}</span>
//                 <h3 className='text-xl font-sans font-bold text-[#171717] mb-4'>{milestone.title}</h3>
//                 <p className='text-[#171717]'>{milestone.description}</p>
//               </div>
//               <div className='md:w-3/5 px-12'>
//                 <div className='bg-[#F5E6FF] border-2 border-[#171717] p-9 rounded-lg'>
//                     <img
//                         className='w-full h-80 rounded-lg object-cover'
//                         src={`https://source.unsplash.com/random/800x600?step=${idx}`}
//                         alt={milestone.title}
//                     />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
// ```
export const PartnershipTiersComponent = () => {
    const tiers = [
        {
            name: "Bronze Tier",
            description: "Great for startups",
            features: [
                "Basic partnership support",
                "Newsletter mentions",
                "Community access",
            ],
        },
        {
            name: "Gold Tier",
            description: "Popular among professionals",
            features: [
                "Extended partnership support",
                "Featured in marketing materials",
                "Priority on new features",
            ],
        },
        {
            name: "Silver Tier",
            description: "Best for growing businesses",
            features: [
                "Advanced partnership support",
                "Branded collaborations",
                "Sponsored events",
            ],
        },
    ];

    return (
        <div className='flex flex-col items-center pt-16 pb-16 bg-[#ffffff]'>
            <h2 className='text-center text-4xl font-sans font-bold text-[#171717] mb-8'>Partnership Tiers</h2>
            <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                {tiers.map((tier, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16`}>
                        <div className="md:w-2/5 px-4 mb-8 md:mb-0 text-[#171717]">
                            <h3 className='text-xl font-sans font-bold mb-4'>{tier.name}</h3>
                            <p className='text-sm mb-6'>{tier.description}</p>
                            <ul className="list-disc list-inside">
                                {tier.features.map((feature, featureIdx) => (
                                    <li key={featureIdx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:w-3/5 px-12'>
                            <div className="border-2border-[#171717] p-9 rounded-lg">
                                <img
                                    className='w-full h-80 rounded-lg object-cover'
                                    src={`https://source.unsplash.com/random/800x600?business=${idx}`}
                                    alt={`Image for ${tier.name}`}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// That's great, based on this, make a horizontal version that displays the tiers' cards in the same row in stead of a column.
export const PartnershipTiersComponentTwo = () => {
    const tiers = [
        {
            name: "Bronze Tier",
            description: "Great for startups",
            featured: false,
            features: [
                { description: "Basic partnership support", icon: '🤝' },
                { description: "Newsletter mentions", icon: '🤝' },
                { description: "Community access", icon: '🤝' },
            ],
        },
        {
            name: "Gold Tier",
            description: "Popular among professionals",
            featured: true,
            features: [
                { description: "Extended partnership support", icon: '🤝' },
                { description: "Featured in marketing materials", icon: '🤝' },
                { description: "Priority on new features", icon: '🤝' },
            ],
        },
        {
            name: "Silver Tier",
            description: "Best for growing businesses",
            featured: false,
            features: [
                { description: "Advanced partnership support", icon: '🤝' },
                { description: "Branded collaborations", icon: '🤝' },
                { description: "Sponsored events", icon: '🤝' },
            ],
        },
    ];
    return (
        <div className='flex flex-col items-center pt-16 pb-16 my-8 bg-[#ffffff]'>
            <h2 className='text-center text-4xl font-sans font-bold text-[#171717] mb-8'>Partnership Tiers</h2>
            <div className='w-full max-w-screen-xl mx-auto'>
                <div className="flex justify-between gap-6">
                    {tiers.map((tier, idx) => (
                        <div key={idx} className={`flex-shrink-0 w-full md:w-1/3 p-6  rounded-lg overflow-hidden ${tier.featured && "bg-[#E8F8F3]"} shadow-lg `}
                            style={{ maxWidth: "360px" }}>
                            <div className="flex flex-col items-start text-[#171717]">
                                <h3 className='text-xl font-sans font-bold'>{tier.name}</h3>
                                <p className='text-sm mb-6 text-center text-gray-500 min-h-[40px]'>{tier.description}</p>
                                <ul className="w-full">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center font-sans mb-[24px]">
                                            <span className="mr-[16px] text-2xl">{feature.icon}</span>
                                            {feature.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const PartnershipTiersComponentVertical = () => {
    const tiers = [
        {
            name: "Bronze Tier",
            description: "Great for startups",
            featured: false,
            imageUrl: "https://source.unsplash.com/random/300x200?business&bronze",
            features: [
                { description: "Basic partnership support", icon: "🤝" },
                { description: "Newsletter mentions", icon: "📰" },
                { description: "Community access", icon: "👥" },
            ],
        },
        {
            name: "Gold Tier",
            description: "Popular among professionals",
            featured: true,
            imageUrl: "https://source.unsplash.com/random/300x200?business&gold",
            features: [
                { description: "Extended partnership support", icon: "💼" },
                { description: "Featured in marketing materials", icon: "🌟" },
                { description: "Priority on new features", icon: "⚙️" },
            ],
        },
        {
            name: "Silver Tier",
            description: "Best for growing businesses",
            featured: false,
            imageUrl: "https://source.unsplash.com/random/300x200?business&silver",
            features: [
                { description: "Advanced partnership support", icon: "🚀" },
                { description: "Branded collaborations", icon: "🏆" },
                { description: "Sponsored events", icon: "🎉" },
            ],
        },
    ];

    return (
        <div className='flex flex-col items-center pt-16 pb-16 my-8 bg-[#ffffff]'>
            <h2 className='text-center text-4xl font-sans font-bold text-[#171717] mb-8'>Partnership Tiers</h2>
            <p className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]">
                Understand the key steps to becoming a partner with our organization and be ready for successful collaborations.
            </p>
            <div className='w-full max-w-screen-xl mx-auto'>
                {tiers.map((tier, idx) => (
                    <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-10 gap-12 p-10 md:p-16 last:mb-0 rounded-lg overflow-hidden ${tier.featured && "bg-[#E8F8F3]"} shadow-lg`}>
                        <div className='md:w-3/5 px-12'>
                            <div className='bg-[#ffffff] border-2 border-[#171717] p-9 rounded-lg'>
                                <img
                                    src={tier.imageUrl}
                                    alt={`${tier.name}`}
                                    className="w-full h-80 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className={`flex-1 p-6 text-[#171717] ${idx % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                            <h3 className='text-xl font-sans font-bold mb-4'>{tier.name}</h3>
                            <p className='text-sm mb-6'>{tier.description}</p>
                            <ul>
                                {tier.features.map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-center mb-4">
                                        <span className="mr-2 text-lg">{feature.icon}</span>
                                        {feature.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



// ArticleCarousel
// Now generate a featured blog articles carousel using the same design guidelines, articles being displayed as cards with a "Read more" CTA with tilting effect on hover

// Show the articles as cards. Also add the article date and author.

// Okay that's good but don't forget to add the tilting effect on the articles' button and add 3 more articles in the articles array

// Each article card is nice so keep their design, however display them as a carousel

export const ArticleCarousel = () => {
    const articles = [
        {
            id: 1,
            title: "Getting Started with Prismic",
            excerpt: "Learn the basics of setting up your Prismic repository and start your project the right way.",
            imageUrl: "https://source.unsplash.com/random/300x200",
            date: "March 10, 2023",
            author: "Jane Doe",
            category: "Best practices",
        },
        {
            id: 2,
            title: "Prismic & SEO: Best Practices",
            excerpt: "Optimize your Prismic-powered website to reach the top of search engine results.",
            imageUrl: "https://source.unsplash.com/random/301x201",
            date: "April 5, 2023",
            author: "John Smith",
            category: "Use case",
        },
        {
            id: 3,
            title: "Integrating Prismic with Modern Frameworks",
            excerpt: "A look at how Prismic integrates with React, Vue, and other popular frontend frameworks.",
            imageUrl: "https://source.unsplash.com/random/302x202",
            date: "May 14, 2023",
            author: "Alice Johnson",
            category: "Tutorial",
        },
        {
            id: 4,
            title: "Content Modeling in Prismic",
            excerpt: "Understanding the power of content modeling and how it can elevate your website's structure.",
            imageUrl: "https://source.unsplash.com/random/303x203",
            date: "June 20, 2023",
            author: "Gary White",
            category: "Use case",
        },
        {
            id: 5,
            title: "Prismic Workflows and Collaboration",
            excerpt: "Foster collaboration among your team with workflows that streamline content creation.",
            imageUrl: "https://source.unsplash.com/random/304x204",
            date: "July 3, 2023",
            author: "Emma Brown",
            category: "Tutorial",
        },
        {
            id: 6,
            title: "Advanced Techniques in Prismic",
            excerpt: "Dive deeper into Prismic's advanced features to unlock its full potential.",
            imageUrl: "https://source.unsplash.com/random/305x205",
            date: "July 22, 2023",
            author: "Oliver Green",
            category: "Best practices",
        }]

    const scrollContainerRef = React.useRef(null);

    const scroll = (shift) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += shift;
        }
    };

    return (
        <div className="bg-white py-[80px] px-4 md:px-[84px] relative max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-sans font-bold text-center text-black mb-[64px]">
                Featured Blog Articles
            </h2>
            <button
                onClick={() => scroll(-300)}
                className="absolute left-0 z-10 text-[#8E44EC] rounded-r-[8px] p-[16px] hidden md:block"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                aria-label="Scroll left"
            >
                &#9664;
            </button>
            <button
                onClick={() => scroll(300)}
                className="absolute right-0 z-10 text-[#8E44EC] rounded-l-[8px] p-[16px] hidden md:block"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                aria-label="Scroll right"
            >
                &#9654;
            </button>
            <div
                ref={scrollContainerRef}
                className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-4"
            >
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="inline-block bg-white  rounded-xl shadow overflow-hidden mr-6 mb-8 w-32 sm:w-auto"
                        style={{ maxWidth: '300px' }}
                    >
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-auto object-cover"
                            style={{ height: '200px' }}
                        />
                        <div className="p-8 whitespace-normal">
                            <div className='flex justify-between items-center gap-4'>
                                <span className={`h-6 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${article.category === "Use case" && "bg-[#E6F7FE] text-[#59B5F8]"} ${article.category === "Best practices" && "bg-[#E8F8F3] text-[#3BBB96]"} ${article.category === "Tutorial" && "bg-[#FEF1E9] text-[#ED6B22]"}`}>{article.category}</span>
                                <span className='shrink-0'>{article.date}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#171717]">{article.title}</h3>
                            <p className="mb-8 text-[#171717] text-base">{article.excerpt}</p>
                            <div className="mb-8 text-sm text-[#171717]">
                                <span>{article.date}</span> by <span>{article.author}</span>
                            </div>
                            <button
                                className="text-[#171717] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4"
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Make a timeline component that will help agencies in the partnership process understand the different steps they need no go through in order to become partners. Each milestone has a title and a short description.

export const PartnershipProcessComponentVerticalTimeline = () => {
    const timelineData = [
        {
            id: 1,
            title: "Application Submission",
            description: "Fill out the application form to submit your interest in the partner program."
        },
        {
            id: 2,
            title: "Initial Review",
            description: "Our team will review your application to ensure a good fit for both parties."
        },
        {
            id: 3,
            title: "Partnership Training",
            description: "Complete our training program to learn the ins and outs of working with Prismic."
        },
        {
            id: 4,
            title: "Certification Exam",
            description: "Pass the certification exam to validate your expertise with Prismic technology."
        },
        {
            id: 5,
            title: "Welcome Aboard",
            description: "Congratulations! Start enjoying the benefits of being a Prismic certified partner."
        }
    ];

    return (
        <div className="bg-[#FFFFFF] mx-auto max-w-screen-xl">
            <div className="mx-auto relative">
                <div className="border-l-2 border-[#8E44EC]">
                    {timelineData.map((milestone, index) => (
                        <div key={milestone.id} className={`ml-4 pb-[56px] ${index !== timelineData.length - 1 ? 'mb-[56px]' : ''}`}>
                            <div className="absolute -left-[11px] mt-1 bg-[#8E44EC] w-[22px] h-[22px] rounded-full border-4 border-[#FFFFFF]"></div>
                            <h3 className="text-xl font-sans font-bold text-[#171717] mb-[16px]">{milestone.title}</h3>
                            <p className="font-sans text-[#171717]">{milestone.description}</p>
                            <button
                                className="text-[#171717] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4"
                            >
                                Read more
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// Make a component that will help agencies in the partnership process understand the different steps they need no go through in order to become partners. The section has a title and a description. Each milestone should be a card with step number, title and short description.

export const PartnershipProcessComponent = () => {
    const milestones = [
        {
            step: "01",
            title: "Submit Your Application",
            description: "Send in your application to express your interest in becoming a partner with our agency."
        },
        {
            step: "02",
            title: "Meet & Greet",
            description: "We will have a session to get to know each other and discuss collaboration possibilities."
        },
        {
            step: "03",
            title: "Training & Certification",
            description: "Go through training sessions to understand our product and services, followed by a certification."
        },
        {
            step: "04",
            title: "Launch Projects",
            description: "Start launching projects and campaigns as an official partner agency."
        },
        {
            step: "05",
            title: "Continuous Support",
            description: "Get continuous support and updates to ensure ongoing success in our partnership."
        }
    ];

    return (
        <section className="bg-[#FFFFFF] my-16">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-6">
                    Partnership Process
                </h2>
                <p className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]">
                    Understand the key steps to becoming a partner with our organization and be ready for successful collaborations.
                </p>
                <div className="flex flex-wrap justify-start gap-10">
                    {milestones.map(milestone => (
                        <div key={milestone.step} className="flex flex-col items-center p-8 w-[30%] bg-[#F7F7F7] rounded-lg text-center shadow-sm">
                            <span className="font-sans font-bold text-[#8E44EC] text-xl mb-[8px]">{milestone.step}</span>
                            <h3 className="text-2xl font-sans font-bold text-[#171717] mb-4">{milestone.title}</h3>
                            <p className="font-sans text-base text-[#171717]">{milestone.description}</p>
                            <button
                                className="text-[#171717] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4 mt-3"
                            >
                                Read more
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Make a component that will help agencies in the partnership process understand the different steps they need no go through in order to become partners. The section has a title and a description. Each milestone should be an asymmetric  card with step number, title and short description.

export const PrismicSlice = () => {
    const features = [
        {
            name: 'Collaborative Editing',
            description: 'Work simultaneously with your team on the same document without fear of data loss.',
            image: 'https://source.unsplash.com/random/300x300',
        },
        {
            name: 'Custom Type Builder',
            description: 'Create content structures tailored to your needs and requirements.',
            image: 'https://source.unsplash.com/random/301x301',
        },
        {
            name: 'Multi-language Support',
            description: 'Easily manage your content in multiple languages for a broader audience reach.',
            image: 'https://source.unsplash.com/random/302x302',
        },
        // ... additional features
    ];
    return (
        <>
            {/* CTA or hero */}
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
                                <button className='bg-[#171717] rounded-lg text-white font-sans text-lg py-3 px-6 rounded-8 font-bold hover:bg-[#505050] transition duration-500 ease-in-out'>
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

            {/* Features */}
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] py-16 rounded-lg'>
                <div className='text-center mb-12'>
                    <h2 className='text-[#171717] uppercase font-sans font-bold text-sm mb-2'>Features</h2>
                    <h3 className='text-black text-3xl lg:text-4xl font-sans font-bold mb-6'>Why Partner with Prismic?</h3>
                    <p className='text-lg text-[#171717]'>
                        Discover the benefits of joining the Prismic Partner Program and how it can transform your agency's operations.
                    </p>
                </div>
                <div className='flex flex-wrap -mx-4'>
                    {features.map((feature, index) => (
                        <div key={index} className='md:w-1/2 lg:w-1/3 px-4 mb-8'>
                            <div className='rounded-16 overflow-hidden mb-4'>
                                <img
                                    className='w-full h-48 object-cover'
                                    src={feature.image}
                                    alt={feature.name}
                                />
                            </div>
                            <h4 className='text-[#171717] text-2xl font-sans font-bold mb-4'>{feature.name}</h4>
                            <p className='text-md mb-4 text-[#171717]'>{feature.description}</p>
                            <button className='bg-[#171717] rounded-lg text-white font-sans text-lg py-3 px-6 rounded-8 font-bold hover:bg-[#505050] transition duration-500 ease-in-out'>
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export const PrismicCta = () => {
    return (<div className='bg-white pb-16'>
        <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 border border-[#505050] py-24 rounded-lg'>
            <div className='flex flex-col items-center'>
                <h2 className='text-black text-3xl lg:text-4xl font-sans font-bold mb-8 text-center'>
                    Ready to Elevate Your Agency?
                </h2>
                <button className='bg-[#171717] rounded-lg text-white font-sans text-lg py-3 px-6 rounded-8 font-bold hover:bg-[#505050] transition duration-500 ease-in-out'>
                    Become a Partner
                </button>
            </div>
        </div>
    </div>)
}
// Using the same design, make a timeline component that will help agencies in the partnership process understand the different steps they need no go through in order to become partners. Each milestone has a title and a short description.
export const TimelineComponent = () => { // OK
    const milestones = [
        {
            step: "01",
            title: "Submit Your Application",
            description: "Send in your application to express your interest in becoming a partner with our agency."
        },
        {
            step: "02",
            title: "Meet & Greet",
            description: "We will have a session to get to know each other and discuss collaboration possibilities."
        },
        {
            step: "03",
            title: "Training & Certification",
            description: "Go through training sessions to understand our product and services, followed by a certification."
        },
        {
            step: "04",
            title: "Launch Projects",
            description: "Start launching projects and campaigns as an official partner agency."
        },
        {
            step: "05",
            title: "Continuous Support",
            description: "Get continuous support and updates to ensure ongoing success in our partnership."
        }
    ];

    return (
        <div className='flex flex-col items-center my-16'>
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-4">
                Partnership Process
            </h2>
            <p className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]">
                Understand the key steps to becoming a partner with our organization and be ready for successful collaborations.
            </p>
            <div className='w-full max-w-screen-xl mx-auto '>
                {milestones.map((milestone, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16`}>
                        <div className='md:w-2/5 px-4 mb-8 md:mb-0'>
                            <span className="font-sans font-bold text-[#8E44EC] text-xl mb-[24px] block">{milestone.step}</span>
                            <h3 className='text-xl font-sans font-bold text-[#171717] mb-4'>{milestone.title}</h3>
                            <p className='text-[#171717]'>{milestone.description}</p>
                            <button
                                className="text-[#171717] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4"
                            >
                                Read more
                            </button>
                        </div>
                        <div className='md:w-3/5 px-12'>
                            <div className='bg-[#F5E6FF] border-2 border-[#171717] p-9 rounded-lg'>
                                <img
                                    className='w-full h-80 rounded-lg object-cover'
                                    src={`https://source.unsplash.com/random/800x600?step=${idx}`}
                                    alt={milestone.title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Based on this design, make a partners logo carousel. Logos need also to be clickable so we can redirect to the partner's website. They should also grow on hover like a CTA.

// That's good, but I need to see 5 logos max and scroll to display the next ones like a carousel
export const PartnerLogoCarousel = () => {
    const partners = [
        { name: 'Partner 1', logo: 'https://source.unsplash.com/random/200x150?sig=1', url: '#partner1' },
        { name: 'Partner 2', logo: 'https://source.unsplash.com/random/200x150?sig=2', url: '#partner2' },
        { name: 'Partner 3', logo: 'https://source.unsplash.com/random/200x150?sig=3', url: '#partner3' },
        { name: 'Partner 4', logo: 'https://source.unsplash.com/random/200x150?sig=4', url: '#partner4' },
        { name: 'Partner 5', logo: 'https://source.unsplash.com/random/200x150?sig=5', url: '#partner5' },
        { name: 'Partner 6', logo: 'https://source.unsplash.com/random/200x150?sig=6', url: '#partner6' },
        { name: 'Partner 7', logo: 'https://source.unsplash.com/random/200x150?sig=7', url: '#partner7' },
        { name: 'Partner 8', logo: 'https://source.unsplash.com/random/200x150?sig=8', url: '#partner8' },
        { name: 'Partner 9', logo: 'https://source.unsplash.com/random/200x150?sig=9', url: '#partner9' },
        { name: 'Partner 10', logo: 'https://source.unsplash.com/random/200x150?sig=10', url: '#partner10' },
        // Add more partners as needed
    ];
    return (
        <div className="bg-[#ffffff] my-16 max-w-screen-xl mx-auto">
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-4">
                Our partners
            </h2>
            <p className="font-sans text-[#171717] max-w-2xl text-center mx-auto mb-10">
                A selection of our esteemed partners who embrace our smoooth payment experience
            </p>
            <div className="container ">
                <div
                    className="flex flex-row gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {partners.map((partner, i) => (
                        <div
                            key={i}
                            className="flex-none w-1/5 min-w-1/5"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <a href={partner.url}
                                className="block h-24 rounded-lg overflow-hidden bg-[#171717] cursor-pointer transform hover:scale-110 transition-transform duration-300">
                                <img
                                    className="mx-auto h-full w-full object-cover"
                                    src={partner.logo}
                                    alt={partner.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


//Based on that design, generate a call to action section with title, description and CTA button. 
export const CallToActionSection = () => {
    return (
        <div className='bg-[#ffffff] text-[#171717] max-w-screen-xl mx-auto my-10'>
            <div className='flex flex-col items-center px-6 py-16 border-2 border-gray-400 rounded-xl'>
                <h2 className="text-4xl font-sans font-bold text-center mb-6">
                    Ready to Partner with Us?
                </h2>
                <p className="font-sans text-lg text-center max-w-2xl mx-auto mb-10">
                    Start your journey towards growth and innovation. Join our partner program today.
                </p>
                <button className='bg-[#8E44EC] rounded-lg text-white font-sans font-bold text-sm border-2 hover:bg-[#B382F2] py-3 px-6 transition duration-500 ease-in-out transition-opacity transition-colors'>
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

// Based on that design, generate a 2 columns call to action section with a large title on the left and a description and CTA button on the right. 

export const CallToActionTwoColumns = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-[#ffffff] my-16 rounded-xl max-w-screen-xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-sans font-bold text-[#171717] mb-8">
                    Ready to Start Your Journey?
                </h2>
            </div>
            <div className="md:w-1/2">
                <p className="font-sans text-lg text-[#171717] mb-6">
                    Join our partner program today and let's build exceptional experiences together.
                </p>
                <button className="bg-[#8E44EC] text-white font-sans font-bold rounded-md px-6 py-3 hover:bg-[#B382F2] transition-colors duration-150">
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

//   Based on that design, generate a call to action section with title, description and CTA button. Also add a background image.

// Based on that component design, generate a 2 columns call to action section. The title and description on the left. On the right, 2 CTA buttons horizontally aligned, one should be a primary button and one should be secondary button.

export const CallToActionTwoColumnsMultipleCtas = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center pt-16 pb-16 bg-[#E8F8F3] max-w-screen-xl rounded-xl mx-auto my-16'>
            <div className='md:w-1/2 p-8'>
                <h2 className="text-4xl font-sans font-bold text-[#171717] mb-6">
                    Become a Partner Today
                </h2>
                <p className="font-sans text-lg text-[#171717] mr-2">
                    Join our partner program to gain exclusive access to resources that can help grow your business with us.
                </p>
            </div>
            <div className='md:w-1/2 flex items-center justify-center p-8'>
                <div className='flex gap-4'>
                    <button className="bg-[#8E44EC] text-white font-sans font-bold text-sm py-3 px-6 rounded-md shadow hover:bg-[#B382F2] transition-colors">
                        Get Started
                    </button>
                    <button className="bg-transparent text-[#8E44EC] font-sans font-bold text-sm border-2 py-3 px-6 rounded-md  border-[#8E44EC] hover:bg-[#8E44EC] hover:text-white transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

// Based on that design, generate a call to action section with a background image. Title, description and CTA button should be left aligned. 
export const CallToActionSectionWithBackgroundImage = () => (
    <div
        className="bg-[url('https://source.unsplash.com/random/1920x1080?business')] bg-cover bg-center"
        style={{ backgroundAttachment: 'fixed' }}
    >
        <div
            className="bg-[#ffffff] bg-opacity-75 text-[#171717] p-16 flex"
        // style={{ backdropFilter: 'blur(5px)' }}
        >
            <div className="max-w-screen-xl">
                <h2 className="text-4xl font-sans font-bold mb-8">
                    Become a Partner Today
                </h2>
                <p className="font-sans text-lg mb-12 max-w-md">
                    Join our partnership program to leverage the power of collaboration and innovation. Let's thrive together!
                </p>
                <button className='bg-[#171717] rounded-lg text-white font-sans font-bold text-sm border-2 py-3 px-6 rounded-8 hover:bg-[#505050] transition duration-500 ease-in-out focus:outline-none focus:ring-[#F5E6FF] group focus:ring-4 transition-opacity transition-colors hover:bg-opacity-75'>
                    Get started
                </button>
            </div>
        </div>
    </div>
);


//Based on that design, generate a feature slice that will describe a featured benefit for partners. It should have an eyebrow, title, description, a list of incentives and an image

export const FeatureSliceComponent = () => {
    const featuredBenefit = {
        eyebrow: "Exclusive Benefits",
        title: "Premier Support and Incentives",
        description: "As a Prismic Partner, enjoy direct access to our support team along with a range of incentives designed to boost your agency's growth and success.",
        incentives: [
            "Dedicated account management",
            "Access to partner-only events",
            "Enhanced exposure on our platforms",
            "Early access to new features",
            "Co-marketing opportunities"
        ],
        imageUrl: "https://source.unsplash.com/random/800x600?business"
    };

    return (
        <div className='bg-[#ffffff] px-4 sm:px-6 lg:px-8 py-16'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16'>
                <div className='md:w-1/2'>
                    <div className="max-w-fit text-center font-sans font-semibold text-sm uppercase text-[#171717] rounded-lg bg-[#E8F8F3] px-3 py-1 mb-4">
                        {featuredBenefit.eyebrow}
                    </div>
                    <h2 className="text-4xl font-sans font-bold text-[#171717] mb-6">
                        {featuredBenefit.title}
                    </h2>
                    <p className="font-sans text-lg text-[#171717] mb-8">
                        {featuredBenefit.description}
                    </p>
                    <ul className="space-y-4">
                        {featuredBenefit.incentives.map((incentive, idx) => (
                            <li key={idx} className="text-[#171717] font-sans text-lg list-disc list-inside">
                                {incentive}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:w-1/2'>
                    <img
                        className='w-full h-80 md:h-auto rounded-lg object-cover bg-[#B382F2]'
                        src={featuredBenefit.imageUrl}
                        alt="Featured benefit"
                    />
                </div>
            </div>
        </div>
    )
}

export const FeatureSliceComponentReversed = () => {
    const featuredBenefit = {
        eyebrow: "Exclusive Benefits",
        title: "Premier Support and Incentives",
        description: "As a Prismic Partner, enjoy direct access to our support team along with a range of incentives designed to boost your agency's growth and success.",
        incentives: [
            "Dedicated account management",
            "Access to partner-only events",
            "Enhanced exposure on our platforms",
            "Early access to new features",
            "Co-marketing opportunities"
        ],
        imageUrl: "https://source.unsplash.com/random/800x600?business"
    };

    return (
        <div className='bg-[#ffffff] px-4 sm:px-6 lg:px-8 py-16'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16'>
                <div className='md:w-1/2'>
                    <img
                        className='w-full h-80 md:h-auto rounded-lg object-cover bg-[#B382F2]'
                        src={featuredBenefit.imageUrl}
                        alt="Featured benefit"
                    />
                </div>
                <div className='md:w-1/2'>
                    <div className="max-w-fit text-center font-sans font-semibold text-sm uppercase text-[#171717] rounded-lg bg-[#E8F8F3] px-3 py-1 mb-4">
                        {featuredBenefit.eyebrow}
                    </div>
                    <h2 className="text-4xl font-sans font-bold text-[#171717] mb-6">
                        {featuredBenefit.title}
                    </h2>
                    <p className="font-sans text-lg text-[#171717] mb-8">
                        {featuredBenefit.description}
                    </p>
                    <ul className="space-y-4">
                        {featuredBenefit.incentives.map((incentive, idx) => (
                            <li key={idx} className="text-[#171717] font-sans text-lg list-disc list-inside">
                                {incentive}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
// Based on that design, generate a feature slice that will describe a featured benefit for partners. It should have an eyebrow, title, description at the top centered. Under add a list of incentives and an image.

export const FeatureSliceComponentCentered = () => { // TODO : add borders
    const featuredBenefit = {
        eyebrow: "Exclusive Benefits",
        title: "Premier Support and Incentives",
        description: "As a Prismic Partner, enjoy direct access to our support team along with a range of incentives designed to boost your agency's growth and success.",
        incentives: [
            "Dedicated account management",
            "Access to partner-only events",
            "Enhanced exposure on our platforms",
            "Early access to new features",
            "Co-marketing opportunities"
        ],
        imageUrl: "https://source.unsplash.com/random/800x600?business"
    };

    return (
        <div className='bg-[#ffffff] px-4 sm:px-6 lg:px-8 py-16'>
            <div className='max-w-screen-xl mx-auto text-center'>
                <div className="max-w-fit mx-auto mb-4 text-center font-sans font-semibold text-sm uppercase text-[#171717] rounded-lg bg-[#E8F8F3] px-3 py-1">
                    {featuredBenefit.eyebrow}
                </div>
                <h2 className="text-3xl text-[#171717] font-bold mb-4">
                    {featuredBenefit.title}
                </h2>
                <p className="text-base text-[#171717] mb-16">
                    {featuredBenefit.description}
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <ul className="space-y-4 text-left">
                        {featuredBenefit.incentives.map((incentive, idx) => (
                            <li key={idx} className="text-[#171717] text-lg list-disc list-inside">
                                {incentive}
                            </li>
                        ))}
                    </ul>
                    <img
                        className='w-full h-64 md:h-auto rounded-lg object-cover'
                        src={featuredBenefit.imageUrl}
                        alt="Featured benefit"
                    />
                </div>
            </div>
        </div>
    );
};


// Based on that design, generate a feature slice that will describe a featured benefit for partners. At the top it should have an eyebrow centered. Under it, add a large title on left and a description of incentives on the right.
export const FeatureSliceComponentTwoColumns = () => {
    const feature = {
        eyebrow: "Featured Benefit",
        title: "Exclusive Partner Incentives",
        description: "As a Prismic Partner, you’ll gain access to exclusive incentives including co-marketing opportunities, a dedicated account manager, and potential leads that can help you grow your business. Our partnership is designed to be mutually beneficial, providing the support and resources you need to succeed."
    };

    return (
        <div className="bg-[#ffffff] py-16 sm:px-6 lg:px-8 flex flex-col items-center gap-y-8">
            <div className="max-w-fit text-center font-sans font-semibold text-sm uppercase text-[#171717] rounded-lg bg-[#F5E6FF] px-3 py-1">
                {feature.eyebrow}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto ">
                <div className="mb-8 md:mb-0 md:w-1/2">

                    <h2 className="text-left font-sans text-4xl font-bold text-[#171717]">
                        {feature.title}
                    </h2>
                </div>
                <div className="md:w-1/2">
                    <p className="font-sans text-lg text-[#171717] leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

// FAQ
const faqs = [
    {
        question: 'How do I become a Prismic Partner?',
        answer:
            'To become a Prismic Partner, register through our website’s partner program section and fulfill the certification requirements.',
    },
    {
        question: 'What are the benefits of partnering with Prismic?',
        answer:
            'Partnership with Prismic offers access to exclusive training, resources, and support to ensure you get the most out of our products.',
    },
    {
        question: 'Are there different levels of partnership?',
        answer:
            'Yes, we offer various levels of partnership based on the agency size, expertise, and commitment to using Prismic in projects.',
    },
];

function AccordionItem({ faq, index, toggle, active }) {
    const isActive = active === index;

    return (
        <div
            className={`my-4 bg-[#F7F7F7] p-6 rounded-lg text-left ${isActive ? 'shadow-md' : ''
                }`}
        >
            <h3
                className="text-[#171717] font-sans text-lg cursor-pointer flex justify-between font-bold"
                onClick={() => toggle(index)}
            >
                <span>
                    {faq.question}
                </span>
                <span>{isActive ? '-' : '+'}</span>

            </h3>
            <div
                className={`font-sans text-base text-[#171717] transition-max-height duration-500 ease-in-out ${isActive ? 'max-h-96' : 'max-h-0 overflow-hidden'
                    }`}
            >
                <p className={`pt-4 ${isActive ? 'block' : 'hidden'}`}>{faq.answer}</p>
            </div>
        </div>
    );
}

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    faq={faq}
                    active={activeIndex}
                    toggle={toggle}
                    index={index}
                />
            ))}
        </div>
    );
}

export function FAQSection() {
    return (
        <section className="bg-[#ffffff] text-center py-12 max-w-screen-xl mx-auto rounded-lg">
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-6">
                Frequently Asked Questions
            </h2>
            <div className="max-w-screen-xl mx-auto">
                <Accordion />
            </div>
        </section>
    );
}

export const AccordionComponentWithImage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How does the partner program work?",
            answer:
                "Our partner program is designed to help agencies grow by providing them with resources, training, and support. As a partner, you will have access to exclusive materials and be a part of a community of like-minded professionals."
        },
        {
            question: "What are the benefits of being a partner?",
            answer:
                "Partners benefit from a range of things including co-marketing activities, a dedicated Partner Manager, training sessions, and much more. We are committed to your growth!"
        },
        {
            question: "How can I join the partner program?",
            answer:
                "Joining is simple: submit your application through our website and we will get back to you with the next steps!"
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='flex flex-col md:flex-row items-center my-16 max-w-screen-xl mx-auto'>
            <div className='w-full md:w-1/2'>
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={`https://source.unsplash.com/random/800x600?programming`}
                    alt="FAQ discussion"
                />
            </div>
            <div className='flex flex-col w-full md:w-1/2 px-12'>
                <div className="text-center md:text-left p-4">
                    <span className="text-[#8E44EC] font-sans font-semibold uppercase text-sm mb-2 block">FAQ</span>
                    <h2 className="font-sans font-bold text-3xl text-[#171717]">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-sans text-lg text-[#171717] my-5">
                        Here you'll find answers to the most common questions asked about our partner program.
                    </p>
                </div>
                <div>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b-[1px] border-[#D1D5DB] ${index === activeIndex ? '' : 'mb-[48px]'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left py-5 focus:outline-none"
                            >
                                <div className="flex justify-between items-center">
                                    <span className='text-xl font-sans font-semibold text-[#171717]'>
                                        {faq.question}
                                    </span>
                                    <span className='text-xl font-sans text-[#8E44EC]'>
                                        {index === activeIndex ? '-' : '+'}
                                    </span>
                                </div>
                            </button>
                            <div
                                className={`${index === activeIndex ? 'block' : 'hidden'
                                    } pb-4 animate-fade-in-down`}
                            >
                                <p className="text-base font-sans text-[#171717]">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const AccordionComponentTwoColumns = () => {
    const faqs = [
        {
            question: "What is the Prismic Partner Program?",
            answer: "The Prismic Partner Program is designed for agencies looking to expand their capabilities with Prismic and collaborate on exciting projects.",
        },
        {
            question: "How do I apply for the Partner Program?",
            answer: "You can apply through our online form. Once submitted, we'll get in touch to discuss the next steps.",
        },
        {
            question: "What are the benefits of partnering with Prismic?",
            answer: "Benefits include access to exclusive training, support, and co-marketing opportunities to help grow your business.",
        },
        {
            question: "Is there a cost associated with the Partner Program?",
            answer: "No, joining the Prismic Partner Program is free. We aim to build a mutually beneficial relationship.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 px-8 py-16'>
            <div className='w-full lg:w-1/2'>
                <p className='text-[#8E44EC] font-sans text-lg mb-4'>FAQs</p>
                <h2 className='text-3xl font-bold font-sans text-[#171717] mb-8'>Frequently Asked Questions</h2>
                <p className='text-[#171717] font-sans text-lg'>
                    Everything you need to know about the partnership process and how it can benefit your agency.
                </p>
            </div>
            <div className='w-full lg:w-1/2'>
                {faqs.map((faq, index) => (
                    <div key={index} className='mb-6 last:mb-0'>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className='flex justify-between items-center w-full py-4 px-6 bg-[#E8F8F3] text-left rounded-[16px] font-sans font-bold text-[#171717]'
                        >
                            <span>{faq.question}</span>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        <div role="region" id={`sect${index}`} aria-labelledby={`accordion${index}`} className={`py-4 px-6 mt-2 text-[#171717] rounded-b-[16px] transition-height ${activeIndex === index ? 'block' : 'hidden'}`}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Testimonials
export const TestimonialsSlider = () => {
    const testimonials = [
        {
            quote: "Since partnering with Prismic, we've been able to scale our content delivery and simplify our workflows, positively impacting our bottom line.",
            author: "Alex Johnson",
            role: "Content Strategy Head at Creative Solutions",
            picture: "https://source.unsplash.com/random/100x100?person-1"
        },
        {
            quote: "The support and insights from the Prismic team have been game changers for our agency. Our clients are thrilled with the results!",
            author: "Maria Garcia",
            role: "CTO at InnovateTech",
            picture: "https://source.unsplash.com/random/100x100?person-2"
        },
        {
            quote: "Prismic has transformed the way we approach website development. It's an integral part of our toolkit now.",
            author: "Liam Wong",
            role: "CEO at PixelPerfect",
            picture: "https://source.unsplash.com/random/100x100?person-3"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="bg-[#FFE5EA] py-20 my-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-sans font-bold text-[#171717]">
                    What our partners say
                </h2>
            </div>
            <div className="overflow-hidden relative">
                <div
                    className="whitespace-nowrap transition-transform duration-500"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="inline-block w-full px-4 md:px-24 text-center"
                        >
                            <blockquote className="text-xl font-sans text-[#171717] italic mb-8">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="inline-flex items-center justify-center">
                                <img
                                    className="w-20 h-20 rounded-full object-cover mr-4"
                                    src={testimonial.picture}
                                    alt={testimonial.author}
                                />
                                <div className="text-left">
                                    <p className="text-lg font-sans font-bold text-[#171717]">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-[#171717]">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 left-8 -translate-y-1/2 bg-[#8E44EC] p-4 rounded-full text-white"
                    onClick={prevTestimonial}
                >
                    &#8592;
                </button>
                <button
                    className="absolute top-1/2 right-8 -translate-y-1/2 bg-[#8E44EC] p-4 rounded-full text-white"
                    onClick={nextTestimonial}
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
};

export const TestimonialSingle = () => {
    const testimonial = {
        agency: "Agency Name",
        agencyLogo: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
        quote: "This is an example of a quote by someone from the agency. Working with Prismic has been transformative for our work.",
        authorName: "Jane Doe",
        authorRole: "CEO of Agency",
        authorPicture: "https://source.unsplash.com/random/200x200?person"
    }
    return (
        <div className="bg-[#F8F8F8] shadow rounded-lg p-8 md:p-12 max-w-screen-xl mx-auto my-10">
            <div className="flex justify-start mb-4">
                <img
                    className="h-12 object-contain"
                    src={testimonial.agencyLogo}
                    alt={testimonial.agency}
                />
            </div>
            <div className="mb-4 flex flex-col sm:flex-row sm:gap-8 mt-10">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-4 shrink-0"><path d="M10.895 5H6.528L2 18.639h8.14L10.895 5ZM22 5h-4.367l-4.528 13.639h8.14L22 5Z" fill="currentColor"></path></svg>
                <blockquote className="italic text-xl text-[#171717]">{testimonial.quote}</blockquote>
            </div>
            <div className="flex items-center mt-4">
                <div className="flex-shrink-0 mr-4">
                    <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.authorPicture}
                        alt={testimonial.authorName}
                    />
                </div>
                <div className="flex-grow">
                    <div className="text-lg font-sans font-bold text-[#171717]">{testimonial.authorName}</div>
                    <p className="text-sm font-sans text-[#8E44EC]">{testimonial.authorRole}</p>
                </div>
            </div>
        </div>
    );
};

// Slides
export const SlidesComponent = () => {
    const slides = [
        {
            id: 1,
            title: "Innovative Ideas",
            bulletPoints: ["Cutting-edge technologies", "Creative solutions", "Strategic thinking"],
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?business"
        },
        {
            id: 2,
            title: "Dedicated Support",
            bulletPoints: ["24/7 assistance", "Expert team", "Customer success focus"],
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?support"
        },
        {
            id: 3,
            title: "Growth Opportunities",
            bulletPoints: ["Expand your reach", "Increase revenue", "Build brand recognition"],
            mediaType: "video",
            mediaSrc: "https://source.unsplash.com/random/800x600?growth"
        }
    ];

    return (
        <div className='flex flex-col w-full h-screen'>
            {slides.map((slide) => (
                <div key={slide.id} className='flex flex-col md:flex-row w-full h-screen items-center justify-center'>
                    <div className="text-left flex flex-col justify-center md:w-1/2 h-full px-12 py-16 bg-[#E8F8F3]">
                        <h2 className="text-4xl font-sans font-bold text-[#171717] mb-8">{slide.title}</h2>
                        <ul className="list-none space-y-4 mb-8">
                            {slide.bulletPoints.map((point, index) => (
                                <li key={index} className="text-lg font-sans text-[#171717] before:content-['•'] before:pr-2 before:text-[#8E44EC]">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center md:w-1/2 h-full p-8 bg-[#F5E6FF]">
                        {slide.mediaType === "image" && (
                            <img
                                className='w-full h-full object-cover rounded-xl'
                                src={slide.mediaSrc}
                                alt={slide.title}
                            />
                        )}
                        {slide.mediaType === "video" && (
                            <video
                                className='w-full h-full object-cover rounded-xl'
                                src={slide.mediaSrc}
                                alt={slide.title}
                                controls
                            ></video>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export const SlidesComponentSimple = () => {
    const slides = [
        {
            id: 1,
            title: "Innovative Solutions",
            points: [
                "Creative problem solving",
                "Unique design methodologies",
                "Forward-thinking strategies"
            ],
            image: "https://source.unsplash.com/random/800x600?business"
        },
        {
            id: 2,
            title: "Expert Team",
            points: [
                "Certified professionals",
                "Industry-leading expertise",
                "Dedicated support"
            ],
            image: "https://source.unsplash.com/random/800x600?team"
        },
        {
            id: 3,
            title: "Results-Driven",
            points: [
                "Performance-focused campaigns",
                "Measurable outcomes",
                "Continuous optimization"
            ],
            image: "https://source.unsplash.com/random/800x600?results"
        },
        {
            id: 4,
            title: "Collaborative Approach",
            points: [
                "Client-centered process",
                "Transparent communication",
                "Joint venture opportunities"
            ],
            image: "https://source.unsplash.com/random/800x600?collaboration"
        },
    ];

    return (
        <div className="flex flex-col w-full h-screen">
            {slides.map((slide, index) => (
                <div key={slide.id} className={`flex flex-1 ${index % 2 === 0 ? 'flex-col-reverse md:flex-row' : 'flex-col md:flex-row-reverse'} items-center justify-between`}>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full p-12 flex flex-col justify-center">
                        <h2 className="text-3xl text-[#171717] font-sans font-bold mb-8">{slide.title}</h2>
                        <ul className="text-[#171717] font-sans list-disc pl-5 mb-8">
                            {slide.points.map((point, idx) => <li key={idx}>{point}</li>)}
                        </ul>
                        <button className="bg-[#8E44EC] text-white font-sans rounded-lg px-12 py-4 text-lg self-start hover:bg-[#B382F2] transition-colors">Learn More</button>
                    </div>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full">
                        <img
                            className="w-full h-full object-cover"
                            src={slide.image}
                            alt={slide.title}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export const SlidesComponentSlider = () => {
    const slidesInfo = [
        {
            title: "Innovation & Creativity",
            bulletPoints: [
                "Cutting-edge solutions",
                "Creative approaches to problem-solving",
                "Future-forward thinking",
            ],
            media: 'image',
            mediaSrc: `https://source.unsplash.com/random/800x600?innovation`
        },
        {
            title: "Collaboration Efforts",
            bulletPoints: [
                "Team synergy and support",
                "Partnership and networking",
                "Combining strengths for better results",
            ],
            media: 'video',
            mediaSrc: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        // more slides...
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => prev - 1 >= 0 ? prev - 1 : slidesInfo.length - 1);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => prev + 1 < slidesInfo.length ? prev + 1 : 0);
    };

    return (
        <div className='flex flex-col items-center my-16'>
            <div className={`flex items-center mb-[88px] overflow-hidden relative w-full max-w-screen-xl mx-auto`}>
                {slidesInfo.map((slide, index) => (
                    <div
                        key={index}
                        className={`flex absolute transition-transform duration-500 ease-in-out w-full ${index === currentSlide ? 'transform translate-x-0' : 'transform translate-x-full'}`}
                        style={{ left: index % 2 === 0 ? '0' : 'auto', right: index % 2 === 0 ? 'auto' : '0' }}
                    >
                        <div className={`flex flex-row ${index % 2 === 0 ? 'flex-row-reverse' : ''} w-full`}>
                            <div className={`w-1/2 flex flex-col justify-center p-12 bg-[#F5E6FF]`}>
                                <h2 className="text-3xl font-sans font-bold text-[#171717] mb-8">{slide.title}</h2>
                                <ul className="list-disc list-inside mb-8 space-y-4 text-[#171717]">
                                    {slide.bulletPoints.map((point, pointIdx) => (
                                        <li key={pointIdx}>{point}</li>
                                    ))}
                                </ul>
                                <button
                                    className="mt-auto bg-[#8E44EC] text-white py-3 px-6 rounded-lg hover:bg-[#B382F2] transition-colors"
                                >
                                    Learn More
                                </button>
                            </div>
                            <div className={`w-1/2 bg-[#FFE5EA] flex items-center justify-center p-12`}>
                                {slide.media === 'image' ? (
                                    <img
                                        className='w-full h-80 rounded-lg object-cover'
                                        src={slide.mediaSrc}
                                        alt={slide.title}
                                    />
                                ) : (
                                    <video
                                        className='w-full h-80 rounded-lg object-cover'
                                        src={slide.mediaSrc}
                                        controls
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute left-4 top-1/2 bg-[#8E44EC] text-white px-5 py-2 rounded-md transform -translate-y-1/2"
                onClick={prevSlide}
                style={{ visibility: currentSlide === 0 ? 'hidden' : 'visible' }}
            >
                Previous
            </button>
            <button
                className="absolute right-4 top-1/2 bg-[#8E44EC] text-white px-5 py-2 rounded-md transform -translate-y-1/2"
                onClick={nextSlide}
                style={{ visibility: currentSlide === slidesInfo.length - 1 ? 'hidden' : 'visible' }}
            >
                Next
            </button>
        </div>
    );
};


export const SlidesCarouselComponent = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
        );
    };


    const slidesData = [
        {
            title: "Introduction to Our Partnership Program",
            content: "Learn about the benefits and opportunities of partnering with us.",
            mediaType: "image", // or "video"
            mediaSrc: "https://source.unsplash.com/random/800x600?business",
        },
        {
            title: "Certification Requirements",
            content: "Understand the steps to become a certified partner.",
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?certification",
        },
        {
            title: "Best Practices",
            content: "Discover how to maximize your success with our products.",
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?bestPractices",
        },
        {
            title: "Upcoming Events",
            content: "Stay informed about upcoming partner events and webinars.",
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?events",
        },
        {
            title: "Continuous Support",
            content: "Learn about the ongoing support we offer to our partners.",
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?support",
        }
    ];


    return (
        <div className="flex flex-col items-center my-16">
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-8">
                Key Concepts for Agencies
            </h2>
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4 md:px-8">
                    <button onClick={prevSlide} className="bg-[#8E44EC] text-white rounded-full p-4 focus:outline-none">
                        Previous
                    </button>
                    <button onClick={nextSlide} className="bg-[#8E44EC] text-white rounded-full p-4 focus:outline-none">
                        Next
                    </button>
                </div>
                {slidesData.map((slide, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0 bg-[#F5E6FF] rounded-lg overflow-hidden`}>
                        <div className={`md:w-1/2 p-10 md:p-16 ${idx % 2 === 0 ? 'order-1' : 'order-2'}`}>
                            <h3 className="text-2xl font-sans font-bold text-[#171717] mb-4">{slide.title}</h3>
                            <ul className="list-disc pl-5 text-[#171717]">
                                {slide.content.split('. ').map((item, itemIdx) => (
                                    <li key={itemIdx} className="mb-2">{item}.</li>
                                ))}
                            </ul>
                        </div>
                        <div className={`md:w-1/2 ${idx % 2 === 0 ? 'order-2' : 'order-1'}`}>
                            {slide.mediaType === 'image' ? (
                                <img
                                    className="w-full h-auto object-cover"
                                    src={slide.mediaSrc}
                                    alt={slide.title}
                                />
                            ) : (
                                <video className="w-full h-auto" autoPlay loop muted>
                                    <source src={slide.mediaSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const SlideCarousel = () => {
    const slides = [
        {
            title: "Welcome to Our Partner Program",
            content: "Discover the benefits of partnering with us and how our program can help your agency grow.",
            image: "https://source.unsplash.com/random/800x600?business",
        },
        {
            title: "Certification Requirements",
            content: "Learn about our certification process to ensure you meet our partnership criteria.",
            image: "https://source.unsplash.com/random/800x600?certification",
        },
        {
            title: "Product Best Practices",
            content: "Get insights into leveraging our product for your agency's maximum benefit.",
            image: "https://source.unsplash.com/random/800x600?best-practices",
        },
        {
            title: "Latest News and Updates",
            content: "Stay informed with the latest updates and news in our partner ecosystem.",
            image: "https://source.unsplash.com/random/800x600?news",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex flex-col items-center my-16">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <button onClick={previousSlide} className="text-[#171717] bg-[#8E44EC] hover:bg-[#B382F2] font-bold py-2 px-4 rounded-lg">
                        Previous
                    </button>
                    <button onClick={nextSlide} className="text-[#171717] bg-[#8E44EC] hover:bg-[#B382F2] font-bold py-2 px-4 rounded-lg">
                        Next
                    </button>
                </div>
                <div className="flex flex-col md:flex-row bg-[#FFFFFF] rounded-lg shadow-md">
                    <div className="md:w-1/2 p-8">
                        <h2 className="font-sans font-bold text-[#171717] text-xl mb-4">{slides[currentSlide].title}</h2>
                        <ul className="list-disc ml-4 mb-4">
                            {slides[currentSlide].content.split('. ').map((item, index) => (
                                <li key={index} className="text-[#171717] mb-2">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            className="rounded-r-lg object-cover w-full h-full"
                            src={slides[currentSlide].image}
                            alt="Slide image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export const SlidesComponentAlternated = () => {
    const slides = [
        {
            id: 1,
            title: "Innovative Ideas",
            bulletPoints: ["Cutting-edge technologies", "Creative solutions", "Strategic thinking"],
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?business"
        },
        {
            id: 2,
            title: "Dedicated Support",
            bulletPoints: ["24/7 assistance", "Expert team", "Customer success focus"],
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?support"
        },
        {
            id: 3,
            title: "Growth Opportunities",
            bulletPoints: ["Expand your reach", "Increase revenue", "Build brand recognition"],
            mediaType: "video",
            mediaSrc: "https://source.unsplash.com/random/800x600?growth"
        }
    ];

    const alternateLayout = (slide, index) => {
        const textSection = (
            <div className="text-left flex flex-col justify-center md:w-1/2 h-full px-12 py-16 ">
                <h2 className="text-4xl font-sans font-bold text-[#171717] mb-8">{slide.title}</h2>
                <ul className="list-none space-y-4 mb-8">
                    {slide.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-lg font-sans text-[#171717] before:content-['•'] before:pr-2 before:text-[#8E44EC]">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        );

        const mediaSection = (
            <div className="flex items-center justify-center md:w-1/2 h-full p-8 ">
                {slide.mediaType === "image" && (
                    <img
                        className='w-full h-full object-cover rounded-xl'
                        src={slide.mediaSrc}
                        alt={slide.title}
                    />
                )}
                {slide.mediaType === "video" && (
                    <video
                        className='w-full h-full object-cover rounded-xl'
                        src={slide.mediaSrc}
                        alt={slide.title}
                        controls
                    ></video>
                )}
            </div>
        );

        // Alternate layout by checking if the slide index is even or odd
        return index % 2 === 0 ? [mediaSection, textSection] : [textSection, mediaSection];
    };

    return (
        <div className='flex flex-col w-full'>
            {slides.map((slide, index) => (
                <div key={slide.id} className='flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh]'>
                    {alternateLayout(slide, index)}
                </div>
            ))}
        </div>
    );
};

export const SlideCarouselIndicators = () => {
    // const slides = [
    //     {
    //         title: "Welcome to Our Partner Program",
    //         content: "Discover the benefits of partnering with us and how our program can help your agency grow.",
    //         image: "https://source.unsplash.com/random/800x600?business",
    //     },
    //     {
    //         title: "Certification Requirements",
    //         content: "Learn about our certification process to ensure you meet our partnership criteria.",
    //         image: "https://source.unsplash.com/random/800x600?certification",
    //     },
    //     {
    //         title: "Product Best Practices",
    //         content: "Get insights into leveraging our product for your agency's maximum benefit.",
    //         image: "https://source.unsplash.com/random/800x600?best-practices",
    //     },
    //     {
    //         title: "Latest News and Updates",
    //         content: "Stay informed with the latest updates and news in our partner ecosystem.",
    //         image: "https://source.unsplash.com/random/800x600?news",
    //     },
    // ];

    const slides = [
        {
            id: 1,
            title: "Innovative Ideas",
            bulletPoints: ["Cutting-edge technologies", "Creative solutions", "Strategic thinking"],
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?business"
        },
        {
            id: 2,
            title: "Dedicated Support",
            bulletPoints: ["24/7 assistance", "Expert team", "Customer success focus"],
            mediaType: "image",
            mediaSrc: "https://source.unsplash.com/random/800x600?support"
        },
        {
            id: 3,
            title: "Growth Opportunities",
            bulletPoints: ["Expand your reach", "Increase revenue", "Build brand recognition"],
            mediaType: "video",
            mediaSrc: "https://source.unsplash.com/random/800x600?growth"
        }
    ];

    const alternateLayout = (slide, index) => {
        const textSection = (
            <div className="text-left flex flex-col justify-center md:w-1/2 h-full px-12 py-16 ">
                <h2 className="text-4xl font-sans font-bold text-[#171717] mb-8">{slide.title}</h2>
                <ul className="list-none space-y-4 mb-8">
                    {slide.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-lg font-sans text-[#171717] before:content-['•'] before:pr-2 before:text-[#8E44EC]">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        );

        const mediaSection = (
            <div className="flex items-center justify-center md:w-1/2 h-full p-8 ">
                {slide.mediaType === "image" && (
                    <img
                        className='w-full h-full object-cover rounded-xl'
                        src={slide.mediaSrc}
                        alt={slide.title}
                    />
                )}
                {slide.mediaType === "video" && (
                    <video
                        className='w-full h-full object-cover rounded-xl'
                        src={slide.mediaSrc}
                        alt={slide.title}
                        controls
                    ></video>
                )}
            </div>
        );

        // Alternate layout by checking if the slide index is even or odd
        return index % 2 === 0 ? [mediaSection, textSection] : [textSection, mediaSection];
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden relative">
                {/* {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={` inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slide.image} alt={slide.title} className="w-full" />

                    </div>
                ))} */}
                {slides.map((slide, index) => (
                    <div key={index}
                        // className='flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh]'
                        className={`flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh] inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'}`}
                    >
                        {alternateLayout(slide, index)}
                    </div>
                ))}
            </div>
            <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2 px-3">
                <button
                    onClick={prevSlide}
                    className="bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 focus:outline-none"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 focus:outline-none"
                >
                    &#10095;
                </button>
            </div>
            <div className="absolute w-full flex justify-center bottom-0 p-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-white'} focus:outline-none`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export const NewsletterSubscriptionForm = () => {
    return (
        <div className="flex flex-col items-center my-16 bg-[#FFE5EA] rounded-lg p-8">
            <h3 className="text-2xl font-sans font-bold text-[#171717] mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-md font-sans text-[#171717] mb-8">Get the latest news, updates, and best practices delivered to your inbox.</p>
            <form className="w-full max-w-md">
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-4 text-[#171717] bg-[#F5E6FF] rounded-lg mb-4 border-2 border-[#8E44EC]"
                />
                <button
                    type="submit"
                    className="w-full p-4 bg-[#8E44EC] text-white font-bold rounded-lg hover:bg-[#B382F2] transition-colors"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex flex-col items-center my-16 bg-[#E8F8F3] rounded-lg p-8">
            <h3 className="text-2xl font-sans font-bold text-[#171717] mb-6">{isSignUp ? "Sign Up" : "Log In"}</h3>
            <form className="w-full max-w-md">
                {isSignUp && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-4 text-[#171717] bg-[#F5E6FF] rounded-lg mb-4 border-2 border-[#8E44EC]"
                    />
                )}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 text-[#171717] bg-[#F5E6FF] rounded-lg mb-4 border-2 border-[#8E44EC]"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-4 text-[#171717] bg-[#F5E6FF] rounded-lg mb-6 border-2 border-[#8E44EC]"
                />
                <button
                    type="submit"
                    className="w-full p-4 bg-[#8E44EC] text-white font-bold rounded-lg hover:bg-[#B382F2] transition-colors mb-4"
                >
                    {isSignUp ? "Sign Up" : "Log In"}
                </button>
                <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="w-full p-4 bg-[#87D9FD] text-[#171717] font-bold rounded-lg hover:bg-[#B3E5FC] transition-colors"
                >
                    {isSignUp ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
                </button>
            </form>
        </div>
    );
};

const getCategoryStyle = (category) => {
    switch (category) {
        case 'Best practices':
            return 'bg-[#8E44EC] text-[#FFFFFF]';
        case 'Use case':
            return 'bg-[#87D9FD] text-[#171717]';
        // Define more categories and styles here
        default:
            return 'bg-[#171717] text-[#FFFFFF]';
    }
};
export const ArticleListComponent = () => {

    const articles = [
        // Mock articles data
        {
            id: 1,
            title: "Best Practices for Optimizing Web Content with Prismic",
            category: "Best practices",
            date: "February 20, 2024",
            author: {
                name: "Jane Doe",
                picture: "https://source.unsplash.com/random/100x100?face=1"
            },
            image: "https://source.unsplash.com/random/800x600?tech"
        },
        {
            id: 2,
            title: "How to Implement a Multi-language Site with Prismic",
            category: "Use case",
            date: "February 15, 2024",
            author: {
                name: "John Smith",
                picture: "https://source.unsplash.com/random/100x100?face=2"
            },
            image: "https://source.unsplash.com/random/800x600?website"
        },
        // Add more articles here
    ];

    const [filteredCategory, setFilteredCategory] = useState('All');

    const filteredArticles = articles.filter(article =>
        filteredCategory === 'All' || article.category === filteredCategory
    );

    return (
        <div className="flex flex-col items-center my-16">
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-4">Latest Articles</h2>
            <div className="my-8">
                <button
                    className={`mx-4 font-sans font-bold text-base text-[#171717] ${filteredCategory === 'All' ? 'underline' : ''}`}
                    onClick={() => setFilteredCategory('All')}
                >
                    All
                </button>
                <button
                    className={`mx-4 font-sans font-bold text-base text-[#171717] ${filteredCategory === 'Best practices' ? 'underline' : ''}`}
                    onClick={() => setFilteredCategory('Best practices')}
                >
                    Best Practices
                </button>
                <button
                    className={`mx-4 font-sans font-bold text-base text-[#171717] ${filteredCategory === 'Use case' ? 'underline' : ''}`}
                    onClick={() => setFilteredCategory('Use case')}
                >
                    Use Cases
                </button>
            </div>
            <div className="w-full max-w-screen-xl mx-auto">
                {filteredArticles.map((article) => (
                    <div key={article.id} className="flex flex-col md:flex-row gap-12 items-center mb-10 last:mb-0 bg-[#FFFFFF] rounded-lg shadow-md p-10 md:p-16">
                        <div className="md:w-3/5 px-4 mb-8 md:mb-0">
                            <img
                                className="w-full h-48 md:h-80 rounded-lg object-cover"
                                src={article.image}
                                alt={article.title}
                            />
                        </div>
                        <div className="md:w-2/5">
                            <div className={`inline-block px-3 py-1 text-sm rounded-full ${getCategoryStyle(article.category)}`}>
                                {article.category}
                            </div>
                            <h3 className="text-xl font-sans font-bold text-[#171717] mt-2 mb-4">{article.title}</h3>
                            <p className="text-[#171717] font-sans text-sm mb-2">{article.date}</p>
                            <div className="flex items-center mt-4">
                                <img
                                    className="w-10 h-10 rounded-full object-cover mr-4"
                                    src={article.author.picture}
                                    alt={article.author.name}
                                />
                                <p className="text-[#171717] font-sans">{article.author.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// New & updates
export const ArticleListComponentNews = ({ articles }) => {
    const [filteredArticles, setFilteredArticles] = useState(articles);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const filterArticlesByDate = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const result = articles.filter(article => {
            const articleDate = new Date(article.date);
            return articleDate >= start && articleDate <= end;
        });
        setFilteredArticles(result);
    };

    return (
        <div className='flex flex-col items-center my-16'>
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-4">
                Prismic Announcements
            </h2>
            <div className="flex justify-center mb-[88px]">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border-2 border-[#171717] p-2 rounded-lg mr-2"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border-2 border-[#171717] p-2 rounded-lg"
                />
                <button
                    onClick={filterArticlesByDate}
                    className="bg-[#8E44EC] text-white font-bold py-2 px-4 rounded-lg ml-2"
                >
                    Filter
                </button>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'>
                {filteredArticles.map((article, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-12 items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16">
                        <div className='md:w-3/5 px-4 mb-8 md:mb-0'>
                            <h3 className='text-xl font-sans font-bold text-[#171717] mb-4'>{article.title}</h3>
                            <p className='text-[#171717] mb-4'>{article.excerpt}</p>
                            <span className="text-[#171717] mb-4 block">{article.date} - {article.category}</span>
                            <button
                                className="text-[#8E44EC] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4"
                            >
                                Read more
                            </button>
                        </div>
                        <div className='md:w-2/5 px-12'>
                            <div className='bg-[#F5E6FF] border-2 border-[#171717] p-9 rounded-lg'>
                                <img
                                    className='w-full h-80 rounded-lg object-cover'
                                    src={article.featuredImage}
                                    alt={article.title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {filteredArticles.length === 0 && (
                    <p className="text-lg text-[#171717]">No articles found for the selected date range.</p>
                )}
            </div>
        </div>
    );
};

export const NewsArticleListComponent = () => {
    // Dummy articles array
    const [articles] = useState([
        {
            id: 1,
            title: 'How to Improve Website Conversion Rates with Prismic',
            excerpt: 'Learn the best practices for boosting your website conversion rates using Prismic...',
            imageUrl: 'https://source.unsplash.com/random/800x600?business&1',
            category: 'Business of Web Development',
            publicationDate: '2023-07-19',
            author: 'Lea Thomas',
            readTime: '6'
        },
        {
            id: 2,
            title: 'How to win an award for your website',
            excerpt: 'Awards can lend credibility to your work. Find out how to make your website stand out...',
            imageUrl: 'https://source.unsplash.com/random/800x600?business&2',
            category: 'Design Inspiration',
            publicationDate: '2023-01-05',
            author: 'Coner Murphy',
            readTime: '7'
        },
        {
            id: 3,
            title: 'How much should you charge for a website in 2023?',
            excerpt: 'Pricing your services can be tricky. Get insights into pricing strategies for this year...',
            imageUrl: 'https://source.unsplash.com/random/800x600?business&3',
            category: 'Freelancing Career Tips',
            publicationDate: '2022-12-01',
            author: 'Alex Trost',
            readTime: '12'
        },
        // You can add more dummy articles here
    ]);

    // State for the filtered articles after applying date filter
    const [filteredArticles, setFilteredArticles] = useState(articles);

    // State for the start and end date for the filter
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Handle filtering of articles based on date
    const handleDateFilter = () => {
        const start = startDate ? new Date(startDate).getTime() : 0;
        const end = endDate ? new Date(endDate).getTime() : Date.now();

        const filtered = articles.filter(article => {
            const publicationDate = new Date(article.publicationDate).getTime();
            return publicationDate >= start && publicationDate <= end;
        });

        setFilteredArticles(filtered);
    };

    return (
        <div className='container mx-auto my-16 px-4'>
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-12">
                Prismic News Articles
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex gap-4 mb-4 md:mb-0">
                    <input
                        type="date"
                        className="border border-[#171717] p-2 rounded-lg"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="border border-[#171717] p-2 rounded-lg"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                    />
                </div>
                <button
                    className="bg-[#8E44EC] text-white font-bold py-2 px-4 rounded-lg"
                    onClick={handleDateFilter}
                >
                    Apply Date Filter
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, idx) => (
                    <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img
                            className="w-full h-48 object-cover"
                            src={article.imageUrl}
                            alt={article.title}
                        />
                        <div className="p-6">
                            <p className="text-xs text-[#87D9FD] uppercase mb-1">{article.category}</p>
                            <p className="text-xs text-[#171717] mb-2">{new Date(article.publicationDate).toLocaleDateString()}</p>
                            <h3 className="text-lg font-semibold text-[#171717] mb-2">{article.title}</h3>
                            <p className="text-xs text-[#171717] mb-4">By {article.author}</p>
                            <p className="text-xs text-[#171717]">{article.readTime} min read</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

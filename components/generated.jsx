"use client"
import React, { useState } from "react";

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
        <div className="flex flex-col items-center pt-16 pb-16 my-8 bg-[#ffffff]">
            <h2 className="text-center text-4xl font-sans font-bold text-[#171717] mb-8">Partnership Tiers</h2>
            <p className="font-sans text-lg text-[#171717] max-w-2xl text-center mx-auto mb-[88px]">
                Understand the key steps to becoming a partner with our organization and be ready for successful collaborations.
            </p>
            <div className="w-full max-w-screen-xl mx-auto">
                {tiers.map((tier, idx) => (
                    <div key={idx} className={`flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-10 gap-12 p-10 md:p-16 last:mb-0 rounded-lg overflow-hidden ${tier.featured && "bg-[#E8F8F3]"} shadow-lg`}>
                        <div className="md:w-3/5 px-12">
                            <div className="bg-[#ffffff] border-2 border-[#171717] p-9 rounded-lg">
                                <img
                                    src={tier.imageUrl}
                                    alt={`${tier.name}`}
                                    className="w-full h-80 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className={`flex-1 p-6 text-[#171717] ${idx % 2 === 0 ? "pl-12" : "pr-12"}`}>
                            <h3 className="text-xl font-sans font-bold mb-4">{tier.name}</h3>
                            <p className="text-sm mb-6">{tier.description}</p>
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
            excerpt: "Understanding the power of content modeling and how it can elevate your websites structure.",
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
            excerpt: "Dive deeper into Prismics advanced features to unlock its full potential.",
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
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Scroll left"
            >
                &#9664;
            </button>
            <button
                onClick={() => scroll(300)}
                className="absolute right-0 z-10 text-[#8E44EC] rounded-l-[8px] p-[16px] hidden md:block"
                style={{ top: "50%", transform: "translateY(-50%)" }}
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
                        style={{ maxWidth: "300px" }}
                    >
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-auto object-cover"
                            style={{ height: "200px" }}
                        />
                        <div className="p-8 whitespace-normal">
                            <div className="flex justify-between items-center gap-4">
                                <span className={`h-6 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${article.category === "Use case" && "bg-[#E6F7FE] text-[#59B5F8]"} ${article.category === "Best practices" && "bg-[#E8F8F3] text-[#3BBB96]"} ${article.category === "Tutorial" && "bg-[#FEF1E9] text-[#ED6B22]"}`}>{article.category}</span>
                                <span className="shrink-0">{article.date}</span>
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
        <div className="flex flex-col w-full h-screen">
            {slides.map((slide) => (
                <div key={slide.id} className="flex flex-col md:flex-row w-full h-screen items-center justify-center">
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
                                className="w-full h-full object-cover rounded-xl"
                                src={slide.mediaSrc}
                                alt={slide.title}
                            />
                        )}
                        {slide.mediaType === "video" && (
                            <video
                                className="w-full h-full object-cover rounded-xl"
                                src={slide.mediaSrc}
                                alt={slide.title}
                                controls
                            ></video>
                        )}
                    </div>
                </div>
            ))}
        </div >
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
                <div key={slide.id} className={`flex flex-1 ${index % 2 === 0 ? "flex-col-reverse md:flex-row" : "flex-col md:flex-row-reverse"} items-center justify-between`}>
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
            media: "image",
            mediaSrc: `https://source.unsplash.com/random/800x600?innovation`
        },
        {
            title: "Collaboration Efforts",
            bulletPoints: [
                "Team synergy and support",
                "Partnership and networking",
                "Combining strengths for better results",
            ],
            media: "video",
            mediaSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
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
        <div className="flex flex-col items-center my-16">
            <div className={`flex items-center mb-[88px] overflow-hidden relative w-full max-w-screen-xl mx-auto`}>
                {slidesInfo.map((slide, index) => (
                    <div
                        key={index}
                        className={`flex absolute transition-transform duration-500 ease-in-out w-full ${index === currentSlide ? "transform translate-x-0" : "transform translate-x-full"}`}
                        style={{ left: index % 2 === 0 ? "0" : "auto", right: index % 2 === 0 ? "auto" : "0" }}
                    >
                        <div className={`flex flex-row ${index % 2 === 0 ? "flex-row-reverse" : ""} w-full`}>
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
                                {slide.media === "image" ? (
                                    <img
                                        className="w-full h-80 rounded-lg object-cover"
                                        src={slide.mediaSrc}
                                        alt={slide.title}
                                    />
                                ) : (
                                    <video
                                        className="w-full h-80 rounded-lg object-cover"
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
                style={{ visibility: currentSlide === 0 ? "hidden" : "visible" }}
            >
                Previous
            </button>
            <button
                className="absolute right-4 top-1/2 bg-[#8E44EC] text-white px-5 py-2 rounded-md transform -translate-y-1/2"
                onClick={nextSlide}
                style={{ visibility: currentSlide === slidesInfo.length - 1 ? "hidden" : "visible" }}
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
                    <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-16 last:mb-0 bg-[#F5E6FF] rounded-lg overflow-hidden`}>
                        <div className={`md:w-1/2 p-10 md:p-16 ${idx % 2 === 0 ? "order-1" : "order-2"}`}>
                            <h3 className="text-2xl font-sans font-bold text-[#171717] mb-4">{slide.title}</h3>
                            <ul className="list-disc pl-5 text-[#171717]">
                                {slide.content.split(". ").map((item, itemIdx) => (
                                    <li key={itemIdx} className="mb-2">{item}.</li>
                                ))}
                            </ul>
                        </div>
                        <div className={`md:w-1/2 ${idx % 2 === 0 ? "order-2" : "order-1"}`}>
                            {slide.mediaType === "image" ? (
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
            content: "Get insights into leveraging our product for your agencys maximum benefit.",
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
                            {slides[currentSlide].content.split(". ").map((item, index) => (
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
            </div >
        );

        const mediaSection = (
            <div className="flex items-center justify-center md:w-1/2 h-full p-8 ">
                {slide.mediaType === "image" && (
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src={slide.mediaSrc}
                        alt={slide.title}
                    />
                )}
                {slide.mediaType === "video" && (
                    <video
                        className="w-full h-full object-cover rounded-xl"
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
        <div className="flex flex-col w-full">
            {slides.map((slide, index) => (
                <div key={slide.id} className="flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh]">
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
    //         content: "Get insights into leveraging our product for your agency"s maximum benefit.",
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
            </div >
        );

        const mediaSection = (
            <div className="flex items-center justify-center md:w-1/2 h-full p-8 ">
                {slide.mediaType === "image" && (
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src={slide.mediaSrc}
                        alt={slide.title}
                    />
                )}
                {slide.mediaType === "video" && (
                    <video
                        className="w-full h-full object-cover rounded-xl"
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
                        className={` inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        <img src={slide.image} alt={slide.title} className="w-full" />

                    </div>
                ))} */}
                {slides.map((slide, index) => (
                    <div key={index}
                        // className="flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh]"
                        className={`flex flex-col md:flex-row w-full items-center justify-center bg-[#E8F8F3] h-[60vh] inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 hidden"}`}
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
                        className={`h-3 w-3 mx-1 rounded-full ${index === currentSlide ? "bg-blue-600" : "bg-white"} focus:outline-none`}
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
                    {isSignUp ? "Already have an account? Log In" : "Dont have an account? Sign Up"}
                </button>
            </form>
        </div>
    );
};

const getCategoryStyle = (category) => {
    switch (category) {
        case "Best practices":
            return "bg-[#8E44EC] text-[#FFFFFF]";
        case "Use case":
            return "bg-[#87D9FD] text-[#171717]";
        // Define more categories and styles here
        default:
            return "bg-[#171717] text-[#FFFFFF]";
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

    const [filteredCategory, setFilteredCategory] = useState("All");

    const filteredArticles = articles.filter(article =>
        filteredCategory === "All" || article.category === filteredCategory
    );

    return (
        <div className="flex flex-col items-center my-16">
            <h2 className="text-4xl font-sans font-bold text-[#171717] text-center mb-4">Latest Articles</h2>
            <div className="my-8">
                <button
                    className={`mx-4 font-sans font-bold text-base text-[#171717] ${filteredCategory === "All" ? "underline" : ""}`}
                    onClick={() => setFilteredCategory("All")}
                >
                    All
                </button>
                <button
                    className={`mx-4 font-sans font-bold text-base text-[#171717] ${filteredCategory === "Best practices" ? "underline" : ""}`}
                    onClick={() => setFilteredCategory("Best practices")}
                >
                    Best Practices
                </button>
                <button
                    className={`mx-4 font-sans font-bold text-base text-[#171717] ${filteredCategory === "Use case" ? "underline" : ""}`}
                    onClick={() => setFilteredCategory("Use case")}
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
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

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
        <div className="flex flex-col items-center my-16">
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
            <div className="w-full max-w-screen-xl mx-auto">
                {filteredArticles.map((article, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-12 items-center mb-10 last:mb-0 bg-[#F5F5F5] rounded-lg p-10 md:p-16">
                        <div className="md:w-3/5 px-4 mb-8 md:mb-0">
                            <h3 className="text-xl font-sans font-bold text-[#171717] mb-4">{article.title}</h3>
                            <p className="text-[#171717] mb-4">{article.excerpt}</p>
                            <span className="text-[#171717] mb-4 block">{article.date} - {article.category}</span>
                            <button
                                className="text-[#8E44EC] font-sans font-bold text-base underline underline-offset-8 hover:underline-offset-4"
                            >
                                Read more
                            </button>
                        </div>
                        <div className="md:w-2/5 px-12">
                            <div className="bg-[#F5E6FF] border-2 border-[#171717] p-9 rounded-lg">
                                <img
                                    className="w-full h-80 rounded-lg object-cover"
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
            title: "How to Improve Website Conversion Rates with Prismic",
            excerpt: "Learn the best practices for boosting your website conversion rates using Prismic...",
            imageUrl: "https://source.unsplash.com/random/800x600?business&1",
            category: "Business of Web Development",
            publicationDate: "2023-07-19",
            author: "Lea Thomas",
            readTime: "6"
        },
        {
            id: 2,
            title: "How to win an award for your website",
            excerpt: "Awards can lend credibility to your work. Find out how to make your website stand out...",
            imageUrl: "https://source.unsplash.com/random/800x600?business&2",
            category: "Design Inspiration",
            publicationDate: "2023-01-05",
            author: "Coner Murphy",
            readTime: "7"
        },
        {
            id: 3,
            title: "How much should you charge for a website in 2023?",
            excerpt: "Pricing your services can be tricky. Get insights into pricing strategies for this year...",
            imageUrl: "https://source.unsplash.com/random/800x600?business&3",
            category: "Freelancing Career Tips",
            publicationDate: "2022-12-01",
            author: "Alex Trost",
            readTime: "12"
        },
        // You can add more dummy articles here
    ]);

    // State for the filtered articles after applying date filter
    const [filteredArticles, setFilteredArticles] = useState(articles);

    // State for the start and end date for the filter
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

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
        <div className="container mx-auto my-16 px-4">
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

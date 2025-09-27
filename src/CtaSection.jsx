import React from "react";

export default function CtaSection() {
    const avatars = [
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/women/22.jpg",
        "https://randomuser.me/api/portraits/women/33.jpg",
        "https://randomuser.me/api/portraits/men/44.jpg",
    ];

    return (
        <div className="p-10 ">
            <section className="w-full bg-gradient-to-r from-cyan-400 to-sky-500 relative overflow-hidden rounded-md">
                {/* Background Waves - Keep styling for visual appeal */}
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-transparent border-[100px] border-sky-400/20 rounded-full translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 lg:px-10 py-12 text-white">
                    {/* Left Content - Updated */}
                    <div className="text-center md:text-left max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                            Ready to Score Band 7+? <br /> Your Journey Starts Now! {" "}
                            <span role="img" aria-label="rocket">
                                🚀
                            </span>
                        </h2>
                        <p className="mt-4 text-white/90">
                            Join the **thousands** of students who achieved their dream score.
                        </p>

                        {/* Avatars */}
                        <div className="flex items-center mt-4 justify-center md:justify-start">
                            <div className="flex -space-x-3">
                                {avatars.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt="Successful student avatar"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                    />
                                ))}
                            </div>
                            <a href="/testimonials" className="ml-4 underline cursor-pointer hover:text-white">
                                See more success stories →
                            </a>
                        </div>
                    </div>

                    {/* Right Button - Updated */}
                    <div className="mt-8 md:mt-0">
                        <button className="bg-white text-sky-500 font-medium px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition">
                            Enroll Today & Start Your Prep
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
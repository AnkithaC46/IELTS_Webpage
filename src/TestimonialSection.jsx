import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
    const testimonials = [
        {
            text: "The mock tests and AI feedback really boosted my confidence. I felt fully prepared on exam day!",
            name: "Riya Sharma",
            // The role is now the achieved score for credibility
            role: "Scored Band 8.0", 
            image:
                "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder image
            rating: 5,
        },
        {
            text: "The trainers were so supportive and gave personalized tips for my weak areas. Highly recommend!",
            name: "Arjun Mehta",
            role: "Scored Band 7.5",
            image:
                "https://randomuser.me/api/portraits/men/2.jpg", // Placeholder image
            rating: 5,
        },
        {
            text: "The speaking practice sessions were amazing. I improved my fluency within weeks.",
            name: "Sofia D’Souza",
            role: "Scored Band 8.5",
            image:
                "https://randomuser.me/api/portraits/women/3.jpg", // Placeholder image
            rating: 5,
        },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full bg-blue-50 py-16 px-6 lg:px-20 lg:py-20 min-h:[80vh]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content - Updated for IELTS Mastery */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#034D82] leading-snug">
                        Hear It From Our <br /> High Scorers 🏆
                    </h2>
                    <p className="text-gray-500 mt-4">
                        Our students consistently achieve their target scores, opening doors 
                        to top universities and careers worldwide.
                    </p>
                </div>

                {/* Right Testimonial Slider (No functional changes, only data driven) */}
                <div className="lg:w-1/2 relative">
                    <div className="bg-blue-50">
                        <Quote className="text-blue-800 w-10 h-10 mb-2" />
                        <div className="flex items-center text-yellow-400 mb-4">
                            {/* Star rating rendering remains the same */}
                            {Array.from({ length: testimonials[current].rating }).map(
                                (_, i) => (
                                    <span key={i}>★</span>
                                )
                            )}
                        </div>
                        <p className="text-gray-700 italic mb-6 max-w-xl">
                            “{testimonials[current].text}”
                        </p>

                        <div className="flex items-center gap-3">
                            <img
                                src={testimonials[current].image}
                                alt={testimonials[current].name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-semibold text-blue-900">
                                    {testimonials[current].name}
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    {testimonials[current].role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation remains the same */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full hover:bg-gray-200 transition"
                        >
                            <ChevronLeft className="w-6 h-6 text-blue-900" />
                        </button>
                        <div className="flex space-x-2">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${
                                        i === current ? "bg-blue-900" : "bg-gray-300"
                                    }`}
                                ></span>
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-blue-900 text-white shadow-md hover:scale-105 transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
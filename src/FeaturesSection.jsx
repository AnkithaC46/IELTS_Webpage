import React from "react";
// Replaced the original icons with more relevant ones for education/testing
import { Users, Clock, Zap, Target } from "lucide-react"; 

export default function FeaturesSection() {
    const features = [
        {
            title: "Speaking Practice with Experts",
            description: "Enhance fluency and pronunciation through live speaking sessions with certified trainers.",
            // Using Users icon for expert trainers
            icon: <Users className="w-6 h-6 text-white" />,
            bg: "from-blue-500 to-blue-600", // Blue for learning/guidance
        },
        {
            title: "Mock Tests with Real Exam Patterns",
            description: "Simulate real test conditions with our timed mock tests and detailed feedback.",
            // Using Clock icon for timed tests/simulation
            icon: <Clock className="w-6 h-6 text-white" />,
            bg: "from-teal-500 to-teal-600", // Teal for structure/testing
        },
        {
            title: "AI-Powered Band Score Prediction",
            description: "Instant AI analysis of your performance to estimate your IELTS band score.",
            // Using Zap icon for instant/AI technology
            icon: <Zap className="w-6 h-6 text-white" />,
            bg: "from-purple-500 to-purple-600", // Purple for technology/innovation
        },
        {
            title: "Flexible Learning Plans",
            description: "Choose from weekend, evening, or fast-track batches designed for your schedule.",
            // Using Target icon for goals/scheduling
            icon: <Target className="w-6 h-6 text-white" />,
            bg: "from-orange-500 to-orange-600", // Orange for options/flexibility
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-6 lg:px-20 text-center min-h[80vh]">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#034D82]">
                Your Success is Our Feature
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                We focus on the methods that deliver guaranteed results. Experience a smarter, 
                more effective way to prepare for the IELTS exam.
            </p>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition text-left"
                    >
                        {/* Icon */}
                        <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.bg} flex items-center justify-center`}
                        >
                            {item.icon}
                        </div>
                        {/* Title */}
                        <h3 className="mt-4 text-lg font-semibold text-[#034D82]">
                            {item.title}
                        </h3>
                        {/* Description */}
                        <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
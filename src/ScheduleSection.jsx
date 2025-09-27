import React from "react";
import { CheckCircle } from "lucide-react";
import { assets } from "./assets/assets";

export default function ScheduleSection() {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20 lg:py-25">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#034D82] leading-snug">
            Train on Your Schedule, <br /> Not Ours 
          </h2>
          <p className="text-gray-600 mt-4">
            Don't let a busy schedule derail your IELTS goals. Our flexible plans are designed to fit your life, ensuring you get the expert coaching you need. Choose from:
          </p>

          {/* Features List */}
          <ul className="mt-6 space-y-3 text-gray-700">
            {["Weekday Evening Classes", "Self-Paced Video Modules", "Fast-Track 30-Day Courses"].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500 w-5 h-5" />
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Link */}
          <a
            href="#"
            className="inline-block mt-6 text-blue-600 font-medium hover:underline"
          >
            Explore All Course Schedules →
            
          </a>
        </div>

        {/* Right Side - Laptop Mockup */}
       <div>
            <img src={assets.lap} alt="" />
          </div>
      </div>
    </section>
  );
}

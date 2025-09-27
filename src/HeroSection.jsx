
import DashboardMockup from './DashboardMockup';

const HeroSection = () => {
  return (
    <div className="relative bg-blue-500 min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#27C0EF] to-[#27C0EF]  "></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content Section */}
        <div className="text-white text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl sm:text-5xl md:text-5xl font-extrabold leading-tight mb-4">
            Achieve Your <br />  Dream IELTS Score with <br /> Confidence
            <span className="relative inline-block ml-2">
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C30 0 70 0 100 5" stroke="#fff" strokeWidth="2"/>
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0">
            Personalized training, AI-powered assessments, and expert guidance to help you succeed in your IELTS journey.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              See how it works
            </button>
            <button className="text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center">
              Get a free demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>

     

                <div className="lg:w-1/2 flex justify-center">
                  {/* <img src={assets.dashboard} alt=""/> */}
                  <DashboardMockup />
                </div>
                </div>
                </div>
     
               
  );
};

export default HeroSection;
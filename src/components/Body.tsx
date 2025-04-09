import Feature from "./Feature";
import Shorter from "./Shorter";

export default function Body() {
  
  return (
    <div className="relative">
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-center md:justify-around items-center py-22 ">
        <div className="flex flex-col gap-4 w-[80%] md:w-[40%] ">
          <h1 className="text-5xl font-bold text-[#3b3054]">
            More than just shorter links
          </h1>
          <p className="text-[#4f545e]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-[#2acfcf] text-white px-4 py-2 rounded-4xl w-2/4 md:w-1/4 self-center md:self-start">
            Get started
          </button>
        </div>
        <img
          src="/images/illustration-working.svg"
          alt="hero"
          className="w-[80%] md:w-[40%]"
        />
        
      </div>
      
      <div className="features bg-gray-100 flex flex-col items-center gap-12 relative   py-12">
      <Shorter />
      
        <div className=" flex flex-col items-center gap-8 pt-24">
          <h2 className="text-2xl text-[#3b3054] font-bold">
            Advanced Statistics
          </h2>
          <p className="text-grayishViolet font-bold w-3/4 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center items-center ">
          <Feature
            image="/images/icon-brand-recognition.svg"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <div className="bg-cyan h-[70px] md:h-[10px] w-[10px] md:w-[50px]"></div>
          <Feature
            image="/images/icon-detailed-records.svg"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <div className="bg-cyan h-[70px] md:h-[10px] w-[10px] md:w-[50px]"></div>
          <Feature
            image="/images/icon-fully-customizable.svg"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
       
      </div>
      
      <div className="bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-no-repeat  bg-center bg-darkViolet flex flex-col items-center py-12 gap-4">
        <h1 className="text-2xl font-bold text-white">
          Boost your links today
        </h1>
        <button className="bg-[#2acfcf] text-white px-4 py-2 rounded-4xl w-2/4 md:w-1/4 self-center md:self-center">
          Get started
        </button>
      </div>
    </div>
  );
}

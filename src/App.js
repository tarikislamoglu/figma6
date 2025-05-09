import React from "react";

const App = () => {
  return (
    <div className="bg-[#000000] h-screen w-full relative flex justify-center items-center">
      <div className="bg-[#27B902CC] triangle absolute top-[105px] left-[130px] rotate-[-50deg] w-[116px] h-[121px] lg:block hidden "></div>
      <div className="bg-[#27B902CC] triangle absolute top-[500px] left-[1123.66px] rotate-[50deg] w-[116px] h-[121px] lg:block hidden"></div>
      <div className="right-paralelogram top-[-350px] left-[1000px] w-[700px] h-[900px]  bg-gradient-to-b  to-[#FF0000] from-[#000AFF] opacity-40 absolute rounded-bl-[113px] lg:block hidden"></div>
      <div className="left-paralelogram top-[250px] left-[-275px] w-[700px] h-[900px] bg-gradient-to-b from-[#000AFF] to-[#0235B9] opacity-40 absolute rounded-tr-[113px] lg:block hidden"></div>

      <div className="h-3/5 md:w-1/3 w-2/3 bg-[#FFFFFF0D] z-10 shadow-lg">
        <form className="flex flex-col space-y-5 p-5 ">
          <h3 className="font-bold text-[50px] text-[#8A8A8A] md:w-1/2 w-full text-center md:text-start ">
            LOGIN
          </h3>
          <input
            placeholder="Username"
            className="p-2 border-1 rounded-md border-[#FFFFFF00]  bg-[#000] text-[#8A8A8A]"
          />
          <input
            placeholder="Password"
            className="p-2 border-1 rounded-md border-[#FFFFFF00]  bg-[#000] text-[#8A8A8A]"
          />
          <button className="p-2 bg-[#FFFFFF1A] md:w-1/2 text-[#8A8A8A] w-full rounded-[10px]">
            LOGIN
          </button>
          <div className="flex items-center w-full ">
            <div className="flex-grow h-px bg-[#8A8A8A] "></div>
            <span className="px-4 text-[#8A8A8A]">OR</span>
            <div className="flex-grow h-px bg-[#8A8A8A]"></div>
          </div>
          <div className="flex space-x-10 justify-center">
            <a href="">
              <img src="/google.png" width={25} height={25} />
            </a>
            <a href="">
              <img src="/facebook.png" width={25} height={25} />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

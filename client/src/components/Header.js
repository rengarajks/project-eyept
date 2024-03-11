import { useCallback } from "react";

const Header = () => {
  const onFunWindowTextClick = useCallback(() => {
    // Please sync "Fun window page" to the project
  }, []);

  const onOnlineTestTextClick = useCallback(() => {
    // Please sync "Online test page" to the project
  }, []);

  return (

    <>
    
    <div className="fixed top-2 rounded-31xl [background:linear-gradient(159.65deg,_#3d3d46,_#222228)] [backdrop-filter:blur(35px)] box-border w-[1864px] h-[68px] opacity-[0.2] mix-blend-normal border-[1px] border-solid border-black" />
      
    <div className=" fixed top-0 flex justify-between items-center  w-full h-[84px] overflow-hidden text-left text-3xs text-white font-noto-sans">
      
      
      <div className="ml-4">
      
      <b className=" text-5xl font-lexend">
        <span>EYEP</span>
        <span className="text-violet">O</span>
        <span>INT</span>
      </b>
      <div className=" font-extralight font-inter">
        Eye Tracking Technology
      </div>
      </div>



      <div className=" top-[17px] left-[653px] bg-gray-300 w-1/3 overflow-hidden flex flex-row items-center justify-between py-[17px] px-[31px] box-border text-center text-base">
        
        <div
          className="relative font-medium text-gray-600 inline-block w-[97px] shrink-0 cursor-pointer"
          onClick={onFunWindowTextClick} >
          Fun Window
        </div>

        <div
          className="relative font-medium text-gray-600 inline-block w-[88px] shrink-0 cursor-pointer"
          onClick={onOnlineTestTextClick}>
          Online Test
        </div>

        <div className="relative leading-[24px]">Home</div>

        <div className="relative leading-[24px] inline-block w-[58px] shrink-0">
          Contact
        </div>
        
        <div className="relative leading-[24px]">About</div>



        

      </div>

      <div className="p-8">
        <img className="mr-6 p-4 w-5 h-5" alt="" src="/vector1.svg"/>
      </div>


    </div>
    </>
  );
};

export default Header;

import { useCallback } from "react";
import FeatureContainer from "../components/FeatureContainer";
import Property1Default from "../components/Property1Default";
import Header from '../components/Header'

const HomePage = () => {
  const onFunWindowTextClick = useCallback(() => {
    // Please sync "Fun window page" to the project
  }, []);

  const onOnlineTestTextClick = useCallback(() => {
    // Please sync "Online test page" to the project
  }, []);

  return (
    <div className="relative bg-gray-200 w-full h-[7500px] overflow-hidden text-center text-base text-white font-poppins">
      <div className="" />
      <img
        className="absolute top-[538px] left-[282px] w-[1440px] h-[810px] object-cover"
        alt=""
        src="/divheroblackholemaskgroup@2x.png"
      />
      <img
        className="absolute top-[166px] left-[279px] w-[1440px] h-[810px] object-cover hidden"
        alt=""
        src="/divheroblackholemaskgroup1@2x.png"
      />
      <img
        className="absolute top-[4460px] left-[615px] w-[744px] h-[837px] object-contain"
        alt=""
        src="/divpricingbackground@2x.png"
      />
      <img
        className="absolute top-[4755px] left-[490.5px] rounded-31xl w-[1352px] h-[900px] opacity-[0.2] mix-blend-normal"
        alt=""
        src="/rectangle-83.svg"
      />
      <div className="absolute top-[-266px] left-[86px] w-[212.3px] h-[62.8px] text-left text-sm font-roboto">
        <div className="absolute w-[23.88%] top-[calc(50%_-_31.4px)] left-[0%] leading-[24px] font-semibold inline-block h-[62.8px]">
          Home
        </div>
        <div className="absolute w-[23.88%] top-[calc(50%_-_31.4px)] left-[38.15%] leading-[24px] font-semibold inline-block h-[62.8px]">
          About
        </div>
        <div className="absolute w-[30.76%] top-[calc(50%_-_31.4px)] left-[69.24%] leading-[24px] font-semibold inline-block h-[62.8px]">
          Contact
        </div>
      </div>
      <div className="absolute top-[643px] left-[509px] text-smi leading-[60px] text-left inline-block w-[985px]">
         An interactive application displaying real-time visualization of user’s
        gaze, enhancing user engagement and providing a unique interactive
        experience.
      </div>
      <div className="absolute top-[421px] left-[349px] text-[61px] tracking-[0.15em] leading-[82px] flex items-center w-[1307px]">
        <span className="w-full">
          <p className="m-0">Precision Unveiled</p>
          <p className="m-0">
            <span className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Eye Tracking
            </span>

            
            <span className="text-white"> Excellence</span>
          </p>
        </span>
      </div>
      <b className="absolute top-[4137px] left-[530px] text-[32px] tracking-[0.02em] text-left">
        <span>{`“Unlock the possibilities with `}</span>
        <span className="text-yellowgreen">Precision</span>
        <span> Gaze Tracking”</span>
      </b>
      <div className="absolute top-[4460px] left-[701px] text-61xl font-black font-arial text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#d16ba5,_#86a8e7_50.5%,_#5ffbf1_99.08%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
        How it Works
      </div>
      <div className="absolute top-[4660px] left-[603px] w-[794px] h-[583px] text-left text-6xl">
        <div className="absolute top-[0px] left-[420px] w-[372px] flex flex-col items-start justify-start gap-[9px]">
          <div className="relative w-[50px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
            <div className="absolute top-[20px] left-[calc(50%_-_5.4px)] leading-[20px] font-black flex items-center w-2.5 h-2.5">
              1
            </div>
          </div>
          <div className="relative text-xl font-medium">Capture Gaze Data</div>
          <div className="self-stretch relative text-mini font-light">
            Employs cutting-edge algorithms for precise, real-time tracking of
            iris movement.
          </div>
        </div>
        <div className="absolute top-[173px] left-[0px] w-[370px] h-[164px] text-mini">
          <div className="absolute top-[95px] left-[0px] font-light text-center inline-block w-[370px]">
            The collected data is processed by advanced algorithms and software
            to interpret the user's gaze behavior.
          </div>
          <div className="absolute top-[59px] left-[191px] text-xl font-medium">
            Data Processing
          </div>
          <div className="absolute top-[0px] left-[305px] w-[50px] h-[50px] text-6xl">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
            <div className="absolute top-[15px] left-[calc(50%_-_7.4px)] leading-[20px] font-black flex items-center w-[15px]">
              2
            </div>
          </div>
        </div>
        <div className="absolute top-[351px] left-[422px] w-[372px] flex flex-col items-start justify-start gap-[9px]">
          <div className="relative w-[50px] h-[50px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
            <div className="absolute top-[15px] left-[calc(50%_-_7.4px)] leading-[20px] font-black">
              3
            </div>
          </div>
          <div className="relative text-xl font-medium">Visualization</div>
          <div className="self-stretch relative text-mini font-light">
            Provides an engaging and dynamic display feature for visualizing
            eye-tracking in real-time.
          </div>
        </div>
        <img
          className="absolute top-[14px] left-[383px] w-[13px] h-[569px]"
          alt=""
          src="/group-218.svg"
        />
      </div>
      <div className="absolute top-[7439px] left-[0px] w-[1920px] h-[61px] overflow-hidden text-left text-xs">
        <div className="absolute top-[24px] left-[16px] leading-[20px] whitespace-pre-wrap opacity-[0.36]">
          Copyright EyePoint © All rights reserved.
        </div>
        <div className="absolute top-[29px] left-[1495px] w-[141px] h-8 flex flex-row items-start justify-start py-0 pr-[1130px] pl-0 box-border mix-blend-normal">
          <div className="rounded box-border w-[47px] h-8 flex flex-col items-center justify-center mix-blend-normal border-r-[1px] border-solid border-gray-100">
            <img
              className="relative w-[22px] h-[22px] overflow-hidden shrink-0 mix-blend-normal"
              alt=""
              src="/icon.svg"
            />
          </div>
          <img
            className="relative rounded w-[47px] h-8 mix-blend-normal"
            alt=""
            src="/link-flex.svg"
          />
          <img
            className="relative rounded w-[47px] h-8 mix-blend-normal"
            alt=""
            src="/link-flex1.svg"
          />
        </div>
        <div className="absolute top-[10px] left-[1648px] w-60 h-[46.8px] mix-blend-normal text-whitesmoke font-inter">
          <div className="absolute top-[30.4px] left-[149.9px] rounded w-[90px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">
              Privacy Policy
            </div>
          </div>
          <div className="absolute top-[30.4px] left-[9.1px] rounded w-[109px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">
              Terms of Service
            </div>
          </div>
          <div className="absolute top-[-1px] left-[207px] rounded w-[33px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">Docs</div>
          </div>
          <div className="absolute top-[-1px] left-[104.3px] rounded w-[71px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">
              Changelog
            </div>
          </div>
          <div className="absolute top-[-1px] left-[34.5px] rounded w-[38px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">Home</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[6822px] left-[319px] text-61xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#f98888,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[1282px]">
        Embark on a journey of discovery in Eye Tracking Solutions with us!
      </div>
      <div className="absolute top-[1684px] left-[663px] text-29xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[631px]">
        Key Features
      </div>
      <FeatureContainer />
      <img
        className="absolute top-[3284px] left-[864px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/webcam@2x.png"
      />
      <div className="absolute top-[3356px] left-[828px] text-xl tracking-[-0.02em] font-light font-rubik flex items-center justify-center w-[111px] h-[61px]">
        Webcam
      </div>
      <img
        className="absolute top-[3266px] left-[845px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <div className="absolute top-[3356px] left-[1043px] text-xl tracking-[-0.02em] font-light font-rubik flex items-center justify-center w-[111px] h-[61px]">
        Internet
      </div>
      <img
        className="absolute top-[3266px] left-[1054px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3284px] left-[1074px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/internet@2x.png"
      />
      <div className="absolute top-[3563px] left-[687px] text-29xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[631px]">
        Features
      </div>
      <div className="absolute top-[3085px] left-[676px] text-[40px] leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[631px]">
        System Requirements
      </div>
      <div className="absolute top-[3829px] left-[437px] leading-[24px] flex items-center justify-center w-[172px] h-[61px]">
        Real-time Gaze Visualization
      </div>
      <img
        className="absolute top-[3732px] left-[471px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3732px] left-[1050px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3731px] left-[1428px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3731px] left-[1239px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3732px] left-[855px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <div className="absolute top-[3830px] left-[612px] leading-[24px] flex items-center justify-center w-[203px] h-[61px]">
        Pixel Highlighting Animation
      </div>
      <div className="absolute top-[3847px] left-[1372px] leading-[24px] flex items-center justify-center w-[203px] h-[61px]">
        Compatibility with Different Screen Resolutions
      </div>
      <div className="absolute top-[3836px] left-[1199px] leading-[24px] flex items-center justify-center w-[180px] h-[61px]">
        Free head movements
      </div>
      <div className="absolute top-[3839px] left-[1017px] leading-[24px] flex items-center justify-center w-[203px] h-[61px]">
        User-Customizable Fun Window Themes
      </div>
      <div className="absolute top-[3847px] left-[815px] leading-[24px] flex items-center w-[203px] h-[61px]">
        <span className="w-full">
          <p className="m-0">Interactive Calibration Check</p>
        </span>
      </div>
      <img
        className="absolute top-[3732px] left-[666px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3747px] left-[491px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/look@2x.png"
      />
      <img
        className="absolute top-[3752px] left-[686px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/marker-pen@2x.png"
      />
      <img
        className="absolute top-[3752px] left-[873px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/my-location@2x.png"
      />
      <img
        className="absolute top-[3752px] left-[1066px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/paint-roller@2x.png"
      />
      <img
        className="absolute top-[3746px] left-[1257px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/human-head@2x.png"
      />
      <img
        className="absolute top-[3748px] left-[1448px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/monitor@2x.png"
      />
      <div className="absolute top-[943px] left-[297px] rounded-[63px] bg-gray-200 w-[1408px] h-[581px] overflow-hidden flex flex-col items-end justify-start py-0 pr-0 pl-[34px] box-border text-left text-[24.2px] text-whitesmoke font-inter">
        <div className="rounded-t-41xl rounded-b-none box-border w-[1408px] h-[569px] flex flex-col items-start justify-start py-[58.419921875px] pr-[52px] pl-[106px] gap-[11px] mix-blend-normal border-t-[2px] border-solid border-violet border-r-[2px] border-l-[2px]">
          <div className="w-[1196px] flex flex-col items-start justify-center mix-blend-normal">
          
          <b className="relative leading-[31.2px]">EYEPOINT</b>
          <div className=" w-full  text-[15.8px] leading-[20px] font-semibold font-poppins text-lightslategray">
                Track your screen with your eyes via webcam.
              </div>
           
           
            <div className="w-[297.4px] h-[71.2px] flex flex-col items-start justify-start pt-0 pb-[7979.421875px] pr-[0.0001250000059371814px] pl-0 box-border gap-[15.59px] mix-blend-normal">
              
              
              
              <div className="relative text-smi leading-[28px] font-poppins text-lightslategray inline-block w-[1250px] h-[183px] shrink-0">
            EyePoint is an advanced eye-tracking software that revolutionizes
            user interaction byenabling precise mapping of a user's gaze onto a
            computer monitor. Utilizing cutting-edge Al algorithms, EyePoint is
            adept at real-time iris tracking, even with standard webcams, making
            it a cost-effective alternative to more expensive systems. Its
            adaptability to various camera setups and lighting conditions,
            combined with an intuitive web-based calibration tool, ensures ease
            of use and consistent performance across diverse user environments.
            The 'Fun Window’ feature enhances user engagement with real-time
            gaze visualization, while robust data security measures safeguard
            user privacy. Designed for cross-platform compatibility, EyePoint's
            versatile applications range from enhancing userexperience in
            interactive learning to providing insights in user behavior
            research. Itsunique blend of precision, affordability, and
            user-centric design positions EyePoint as atransformative tool in
            the eye-tracking technology landscape, making advanced gaze tracking
            accessible for a wide array of applications.
          </div>
            </div>
          </div>
          
        </div>
      </div>
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="5711px"
        property1DefaultLeft="421px"
      />
     
  <Header/>


      
    </div>
  );
};

export default HomePage;

import Default from "./Default";

const FeatureContainer = () => {
  return (
    <div className="absolute top-[1814px] left-[552px] w-[855px] h-[824px] text-left text-5xl text-white font-poppins">
      <div className="absolute top-[2.3px] left-[0px] w-[348px] h-[355.9px]">
        <div className="absolute top-[35.1px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[110.6px] left-[26.5px] leading-[24px] font-semibold flex items-center w-[235.1px]">
          Advance Iris Tracking
        </div>
        <div className="absolute top-[177.2px] left-[25.9px] text-xl leading-[30px] font-light text-gray-400 flex items-center w-[242.2px] h-[114.6px]">
          AI Engine powers the eye tracking software to understand and respond
          to users' gaze behavior with accuracy.
        </div>
        <img
          className="absolute h-[25.54%] w-[30.86%] top-[0%] right-[57.87%] bottom-[74.46%] left-[11.26%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/neural-network.svg"
        />
      </div>
      <div className="absolute top-[0px] left-[507px] w-[348px] h-[358.2px]">
        <div className="absolute top-[37.4px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[104.9px] left-[27.5px] leading-[24px] font-semibold flex items-center w-[235.1px] h-[61.1px]">
          Real - time Gaze Mapping
        </div>
        <div className="absolute top-[179.5px] left-[25.9px] text-xl leading-[30px] font-light text-gray-400 flex items-center w-[232.8px] h-[114.6px]">
          Capable of calculating the exact point on the monitor being looked at
          within predefined x,y axis boundaries
        </div>
        <img
          className="absolute h-[26.02%] w-[27.47%] top-[0%] right-[62.39%] bottom-[73.98%] left-[10.14%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <Default
          itemNumber="02"
          showDiv={false}
          defaultWidth="130.1px"
          defaultHeight="75.6px"
          defaultPosition="absolute"
          defaultTop="265px"
          defaultLeft="217.9px"
        />
      </div>
      <div className="absolute top-[463.5px] left-[0px] w-[348px] h-[360.5px]">
        <div className="absolute top-[39.7px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[97.2px] left-[25.5px] leading-[24px] font-semibold flex items-center w-[235.1px] h-[61.1px]">
          Interactive Eye Movement Display
        </div>
        <div className="absolute top-[181.8px] left-[25.9px] text-xl leading-[30px] font-light text-gray-400 flex items-center w-[242.2px] h-[91.6px]">
          <span className="w-full">
            <p className="m-0">{`Provides an engaging and dynamic display feature for visualizing eye tracking in `}</p>
            <p className="m-0">real - time</p>
          </span>
        </div>
        <img
          className="absolute h-[25.21%] w-[30.86%] top-[0%] right-[57.87%] bottom-[74.79%] left-[11.26%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/neural-network.svg"
        />
      </div>
      <div className="absolute top-[464.3px] left-[507px] w-[348px] h-[359.7px]">
        <div className="absolute top-[38.9px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[95.4px] left-[25.5px] leading-[24px] font-semibold flex items-center w-[235.1px] h-[61.1px]">
          Cross-Platform Functionality
        </div>
        <div className="absolute top-[181px] left-[25.9px] text-xl leading-[30px] font-light text-gray-400 flex items-center w-[232.8px] h-[91.6px]">
          Ensures compatibility with various devices and operating systems,
          extending usability
        </div>
        <img
          className="absolute top-[0px] left-[28.2px] w-[94px] h-[91.6px] object-cover"
          alt=""
          src="/multiple-devices@2x.png"
        />
      </div>
    </div>
  );
};

export default FeatureContainer;

import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = ({text}) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.6)] z-[10000000]">
      <div className=" max-w-sm min-w-[300px] flex flex-col gap-10 p-4 py-8 justify-center items-center bg-white bg-gradient-to-r from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255)] bg-transparent shadow-2xl rounded-lg">
        {/* <ThreeCircles height="80" width="80" color="#FF900C" ariaLabel="loading" /> */}
        <ThreeCircles
          height="100"
          width="100"
          color="#ed8b00"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#ed8b00"
          innerCircleColor="#ffd100"
          middleCircleColor="#ed8b00"
        />
        <div className="flex justify-center items-center">
            {text ? (
                <p className="text-2xl">{text}...</p>
            ):(
                <p className="text-2xl">loading...</p>
            )}
            
        </div>
      </div>
    </div>
  );
};

export default Loader;

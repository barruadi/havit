import React from 'react';

interface ActivityBoxProps {
  activity?: string;
  date?: string;
}

const ActivityBox : React.FC<ActivityBoxProps> = ({ activity, date }) => {
    return (
        <div className="bg-[#83CCAB] w-[90%] h-[10%] flex rounded-lg shadow-lg p-[10px] m-[10px]" >
            <div className= "flex flex-col justify-start mx-[5px]">
                <h2 className="text-lg font-bold text-blue-900 ">{activity}</h2>
                <p className="text-sm text-white opacity-70">Selesai: {date}</p>
            </div>
            <div className="flex flex-row justify-end items-center gap-2">
                <span className="text-blue-900 font-bold">100</span>
                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
        </div>
    )
}

export default ActivityBox;
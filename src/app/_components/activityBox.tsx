import React from 'react';

interface ActivityBoxProps {
  activity?: string;
  finishedDate?: string;
  coin?: number;
}

const ActivityBox : React.FC<ActivityBoxProps> = ({ activity, finishedDate, coin }) => {
    const date = new Date(finishedDate || new Date().toISOString());

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    // Format as DD-MM-YYYY
    const formattedDate = `${day}-${month}-${year}`;
    return (
        <div className="bg-[#83CCAB] w-[90%] h-[10%] flex rounded-lg shadow-lg p-[10px] m-[10px]" >
            <div className= "flex flex-col justify-start mx-[5px]">
                <h2 className="text-lg font-bold text-blue-900 ">{activity}</h2>
                <p className="text-sm text-white opacity-70">Selesai: {formattedDate}</p>
            </div>
            <div className="flex flex-row justify-end items-center gap-2">
                <span className="text-blue-900 font-bold">{coin}</span>
                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
        </div>
    )
}

export default ActivityBox;
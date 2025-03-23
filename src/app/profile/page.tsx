"use client"; 

import { act, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { profile } from "console";
import ArrowBack from "../../../public/Arrow left.png"
import Profile from "../../../public/profile.png"
import Coin from "../../../public/coin.png"
import OrnamentTop from "../../../public/Vector 7.png"
import OrnamentBottom from "../../../public/Vector 6.png"
import Image from "next/image";
import { prisma } from "lib/prisma";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: any[] } | null>(null);
  const [habitData, setHabitData] = useState<{id : Number, email : string, username : string, habitName : string, status : string} | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/nutrition-condition/get"); // Call the API route
      const data = await res.json();
      setChartData({
        labels: ["Carbohydrate", "Protein", "Fat", "Vitamin"],
        datasets: [
          {
            label: "Nutrient Breakdown",
            data: [data.carbohydrate, data.protein, data.fat, data.vitamin],
            backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
          },
        ],
      });

      // set user data
      const habitData = await (await fetch("/api/habit/get")).json();
      setHabitData(habitData);

    }
    fetchData();
  }, []);
  console.log(habitData);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    // main container
      <main className="relative flex justify-center bg-fixed bg-[#C7F9CC]">
      <Image
          src={OrnamentTop}
          width={360}
          height={0}
          alt="OrnamentTop"
          className="fixed top-0  h-auto " // Move to the background
        />
        <Image
          src={OrnamentBottom}
          width={360}
          height={0}
          alt="OrnamentBottom"
          className="fixed bottom-0  h-auto " // Move to the background
        />

        
        {/* main container */}
        <div className="relative justify-center items-center h-[800px] w-[360px] ">

          {/* back arrow */}
          <div className="p-2">
            <Image
              src={ArrowBack}  // Make sure the image is inside the public folder
              alt={"Back Arrow"}
              width={24}  // Set appropriate width
              height={24} // Set appropriate height
              className=""
            />
          </div>

          {/* heading */}
          <div className="flex justify-center items-center p-2 font-sans text-[3rem] text-[#21577A] font-semibold">
            Profile
          </div>

          {/* profile pic and username */}
          <div>
            {/* profile pic */}
            <div>
                <Image
                    src={Profile}
                    width={60}
                    height={60}
                    alt="Profile Picture"
                />
            </div>
          </div>

          {/* daftar hobi */}
          <div>

          </div>

          {/* charts */}
          <div className="flex w-full p-2 h-[40%] justify-center items-center">
            {/* charts + legends*/}
            <div>
              {chartData ? <Pie data={chartData} /> : <p>Loading chart...</p>}

            </div>
          </div>

          {/* daftar hobi selanjutnya */}

          
          {/* acitivities and heading*/}


        </div>

      </main>
  );
}

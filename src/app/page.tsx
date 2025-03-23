"use client"; 

import { act, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { profile } from "console";
import ArrowBack from "../../public/Arrow left.png"
import Profile from "../../public/profile.png"
import TambahHobiIcon from "../../public/Plus square.png"
import CekMentalHarianIcon from "../../public/Heart.png"
import LeaderboardIcon from "../../public/Bar chart-2.png"
import PopQuizIcon from "../../public/Airplay.png"
import Coin from "../../public/coin.png"
import OrnamentTop from "../../public/Vector 7.png"
import OrnamentBottom from "../../public/Vector 6.png"
import Image from "next/image";
import { prisma } from "lib/prisma";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: any[] } | null>(null);
  const [userData, setUserData] = useState<{id : Number, name : string, email : string, username : string, birthdate : Date, password : string, coin : Number, picture : string} | null>(null);
  const [activityData, setActivityData] = useState<{
    id: number;
    username: string;
    email: string;
    activityName: string;
    date: Date;
    status: string;
    coin: number;
    habitName: string;
    activityPicture: string;
  } | null>(null);

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
      const user = await (await fetch("/api/users/get")).json();
      setUserData(user);

      //  Fetch activity data
      const activity = await (await fetch("/api/activities/get")).json();
      setActivityData(activity);
    }
    fetchData();
  }, []);


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

          {/* heading and profile */}
          <div className="flex justify-between items-center p-2">
            <div className="text-lg p-2 font-sans text-[#21577A] font-bold">
              Hi, {userData?.username}
            </div>

            <div className="p-2">
              <Image
                src={Profile}
                alt = "Profile Pic"
                width = {42}
                height = {42}
              />
            </div>
          </div>

          {/* charts */}
          <div className="flex w-full p-2 h-[40%] justify-center items-center">
            {/* charts + legends*/}
            <div>
              {chartData ? <Pie data={chartData} /> : <p>Loading chart...</p>}

            </div>
          </div>

          {/* menus */}
          <div className="flex justify-center items-center">
            {/* tambah hobi */}
            <div className="justify-center items-center bg-[#89CFAE] rounded-md m-2">
              {/* icon */}
              <div className="flex justify-center items-center p-1  ">
                <Image
                  src={TambahHobiIcon}
                  alt="Tambah Hobi"
                  width={30}
                  height={30}
                />
              </div>

              <div className="text-[0.9rem] flex justify-center items-center text-center font-sans text-[#21577A] font-bold">
                Tambah Hobi
              </div>

            </div>


            {/* cek mental harian */}
            <div className="justify-center items-center bg-[#89CFAE] rounded-md m-2">
              {/* icon */}
              <div className="flex justify-center items-center p-1  ">
                <Image
                  src={TambahHobiIcon}
                  alt="Tambah Hobi"
                  width={30}
                  height={30}
                />
              </div>

              <div className="text-[0.9rem] flex justify-center items-center text-center font-sans text-[#21577A] font-bold">
                Tambah Hobi
              </div>

            </div>

            {/* leaderboard */}
            <div className="justify-center items-center bg-[#89CFAE] rounded-md m-2">
              {/* icon */}
              <div className="flex justify-center items-center p-1  ">
                <Image
                  src={TambahHobiIcon}
                  alt="Tambah Hobi"
                  width={30}
                  height={30}
                />
              </div>

              <div className="text-[0.9rem] flex justify-center items-center text-center font-sans text-[#21577A] font-bold">
                Tambah Hobi
              </div>

            </div>

            {/* pop quiz */}
            <div className="justify-center items-center bg-[#89CFAE] rounded-md m-2">
              {/* icon */}
              <div className="flex justify-center items-center p-1  ">
                <Image
                  src={TambahHobiIcon}
                  alt="Tambah Hobi"
                  width={30}
                  height={30}
                />
              </div>

              <div className="text-[0.9rem] flex justify-center items-center text-center font-sans text-[#21577A] font-bold">
                Tambah Hobi
              </div>
            </div>
          </div>

          {/* acitivities and heading*/}
          <div>
            {/* heading */}
            <div className="font-sans px-2 text-lg text-[#21577A] font-bold">
              Activities
            </div>

            {/* activities */}
            <div className="p-2">

              {/* act 1*/}
              <div className="flex justify-center w-full bg-[#89CFAE] p-2 rounded-lg my-1">
                {/* Lari pagi */}
                <div className="w-[75%] flex justify-between items-center">
                  {activityData?.activityName}
                </div>

                {/* coin */}
                <div className="flex justify-center items-center">
                  {/* value */}
                  <div className="text-[#21577A] p-2 font-bold font-sans">
                    {activityData?.coin}
                  </div>
                  {/* coin image */}
                  <div>
                    <Image
                      src = {Coin}
                      alt="Coin"
                      width={30}
                      height={30}
                    />
                  </div>
                  
                </div>
              </div>

              {/* act 2 */}
              <div className="flex justify-center w-full bg-[#89CFAE] p-2 rounded-lg my-1">
                {/* Lari pagi */}
                <div className="w-[75%] flex justify-between items-center">
                  {activityData?.activityName}
                </div>

                {/* coin */}
                <div className="flex justify-center items-center">
                  {/* value */}
                  <div className="text-[#21577A] p-2 font-bold font-sans">
                    {activityData?.coin}
                  </div>
                  {/* coin image */}
                  <div>
                    <Image
                      src = {Coin}
                      alt="Coin"
                      width={30}
                      height={30}
                    />
                  </div>
                  
                </div>
              </div>


              {/* act 3 */}
              <div className="flex justify-center w-full bg-[#89CFAE] p-2 rounded-lg my-1">
                {/* Lari pagi */}
                <div className="w-[75%] flex justify-between items-center">
                  {activityData?.activityName}
                </div>

                {/* coin */}
                <div className="flex justify-center items-center">
                  {/* value */}
                  <div className="text-[#21577A] p-2 font-bold font-sans">
                    {activityData?.coin}
                  </div>
                  {/* coin image */}
                  <div>
                    <Image
                      src = {Coin}
                      alt="Coin"
                      width={30}
                      height={30}
                    />
                  </div>
                  
                </div>
              </div>


              {/* act 4 */}
              <div className="flex justify-center w-full bg-[#89CFAE] p-2 rounded-lg my-1">
                {/* Lari pagi */}
                <div className="w-[75%] flex justify-between items-center">
                  {activityData?.activityName}
                </div>

                {/* coin */}
                <div className="flex justify-center items-center">
                  {/* value */}
                  <div className="text-[#21577A] p-2 font-bold font-sans">
                    {activityData?.coin}
                  </div>
                  {/* coin image */}
                  <div>
                    <Image
                      src = {Coin}
                      alt="Coin"
                      width={30}
                      height={30}
                    />
                  </div>
                  
                </div>
              </div>


              {/* act 5 */}
              <div className="flex justify-center w-full bg-[#89CFAE] p-2 rounded-lg my-1">
                {/* Lari pagi */}
                <div className="w-[75%] flex justify-between items-center">
                  {activityData?.activityName}
                </div>

                {/* coin */}
                <div className="flex justify-center items-center">
                  {/* value */}
                  <div className="text-[#21577A] p-2 font-bold font-sans">
                    {activityData?.coin}
                  </div>
                  {/* coin image */}
                  <div>
                    <Image
                      src = {Coin}
                      alt="Coin"
                      width={30}
                      height={30}
                    />
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
  );
}

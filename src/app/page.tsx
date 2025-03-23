// 'use client';

import { profile } from "console";
import ArrowBack from "../../public/Arrow left.png"
import Profile from "../../public/profile.png"
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { prisma } from "lib/prisma";

export default async function Home() {

  // get username of user
  const userData = await prisma.user.findUnique({
    where : {
      username : "user1",
      email: "user1@example.com",
    },
  })

  // get the nutrition data of uesr
  const nutritionData = await prisma.kondisiGizi.findUnique({
    where : {
      username : "user1",
      email : "user1@example.com",
      date : new Date("2025-03-23T12:00:00Z"),
    }
  })

  // get the activity of the user

  return (
    // main container
      <main className="flex justify-center bg-fixed bg-[#C7F9CC]">
        {/* main container */}
        <div className="justify-center items-center h-[800px] w-[360px] border-2 border-solid border-black">

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
            <div>
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
          <div>

          </div>

          {/* menus */}
          <div>
            {/* tambah hobi */}

            {/* cek mental harian */}

            {/* leaderboard */}

            {/* pop quiz */}

          </div>

          {/* acitivities and heading*/}
          <div>
            {/* heading */}
            <div className="font-sans px-[5%] text-[#21577A] font-bold">
              Activities
            </div>

            {/* activities */}
            <div className="grid grid-cols-5 gap-4">
              {/* act 1*/}
              <div className="flex justify-center w-full">
                {/* Lari pagi */}
                <div className="w-[75%] flex justify-center items-start">
                  Lari pagi
                </div>

                {/* coin */}
                <div>
                  {/* value */}
                  <div className="text-[#21577A]">
                    100
                  </div>
                  {/* coin image */}
                  
                </div>
              </div>

              {/* act 2 */}
              <div>

              </div>

              {/* act 3 */}
              <div>

              </div>

              {/* act 4 */}
              <div>

              </div>

              {/* act 5 */}
              <div>

              </div>
            </div>
          </div>
        </div>

      </main>
  );
}

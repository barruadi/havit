'use client';
import { useState, useEffect } from "react";
import ActivityBox from "../_components/activityBox";

const fetchActivities = async (page: number) => {
  // data dummy
  const activities = [
    { activity: "Lari Pagi", date: "14 Februari 2025" },
    { activity: "Yoga", date: "15 Februari 2025" },
    { activity: "Mendaki Gunung", date: "16 Februari 2025" },
    { activity: "Berenang", date: "17 Februari 2025" },
    { activity: "Cycling", date: "18 Februari 2025" },
    { activity: "Fitness", date: "19 Februari 2025" },
    { activity: "Jogging", date: "20 Februari 2025" },
    { activity: "Meditation", date: "21 Februari 2025" },
    { activity: "Climbing", date: "22 Februari 2025" },
    { activity: "Running", date: "23 Februari 2025" },
    { activity: "Skiing", date: "25 Februari 2025" },
    { activity: "Hiking", date: "26 Februari 2025" },
  ];

  const activitiesPerPage = 7;
  const startIndex = (page - 1) * activitiesPerPage;
  const endIndex = startIndex + activitiesPerPage;

  return activities.slice(startIndex, endIndex);
};

export default function Home() {
  const [activities, setActivities] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedActivities = await fetchActivities(currentPage);
      setActivities(fetchedActivities);

      // 13: total data dummy, nnt cari length dr data
      setTotalPages(Math.ceil(13 / 7)); 
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="flex-row justify-center items-center p-4 bg-[#C7F9CC]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#2F6681]">Riwayat Aktivitas</h1>
      </div>

      <div>
        {activities.map((activity, index) => (
          <ActivityBox
            key={index}
            activity={activity.activity}
            date={activity.date}
          />
        ))}
      </div>

      <div className="flex justify-between w-[90%] m-[10px]">
        <button
          onClick={handlePreviousPage}
          className="bg-[#2F6681] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6AA7C5] transition"
          disabled={currentPage === 1}
        >
          Sebelum
        </button>
        <span className="text-[#2F6681] text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="bg-[#2F6681] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6AA7C5] transition"
          disabled={currentPage === totalPages}
        >
          Setelah
        </button>
      </div>
    </main>
  );
}

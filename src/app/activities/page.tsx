'use client';
import { useState, useEffect, useCallback } from "react";
// import { useSession } from "next-auth/react"; ini untuk tau session user
import ActivityBox from "../_components/activityBox";
import { useRouter } from "next/navigation";
import Link from "next/link"

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

export default function Activities() {
  const [activities, setActivities] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const username = "test";

  const fetchActivities = useCallback(async () => {
		if (username) {
			try {
				const response = await fetch(
					`/api/activities/get?username=${username}`
				);
				const activityData = await response.json();
				if (response.ok) {
					setActivities(activityData.records);
				} else {
					console.error(
						"Failed to fetch sleep history:",
						activityData.message
					);
				}
			} catch (error) {
				console.error("Error fetching sleep history:", error);
			}
		}
	}, [username]);

  useEffect(() => {
    fetchActivities();
  }, [currentPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(activities.length / 7));
  }, [activities]);

  const handleActivityClick = (activityId: string) => {
    showAlert(activityId);
    console.log("Clicked activity with ID:", activityId);
    router.push(`/activities/${activityId}`);
  };

  const showAlert = (id: string) => {
    alert("Clicked activity with ID:" + id);
  };

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
        {activities.map((activity) => (
        <a key={activity.id} onClick={() => handleActivityClick(activity.id)}>
          <ActivityBox
            activity={activity.activityName}
            date={activity.date}
            coin={activity.coin}
          />
          </a>
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

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Use useParams for dynamic routing

export default function AddActivity() {
  const [activityData, setActivityData] = useState<{
    id: string;
    activity: string;
    coin: number;
    status: string;
    image: File | string | null;
  }>({
    id: '',
    activity: '',
    coin: 0,
    status: 'Belum Selesai',
    image: null,
  });

  const { id } = useParams(); // Get the dynamic id from the URL
  console.log("Activity ID:", id);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          // Fetch activity data from API using the id
          console.log("Fetching data for activity id:", id);
          const response = await fetch(`/api/activities/${id}`);
          const data = await response.json();

          if (response.ok) {
            console.log("Fetched activity data:", data);
            setActivityData({
              id: data.activity.id,
              activity: data.activity.activityName,
              coin: data.activity.coin,
              status: data.activity.status,
              image: null, // Initial image is null
            });
          } else {
            console.error('Failed to fetch activity details:', data.message);
          }
        } catch (error) {
          console.error('Error fetching activity details:', error);
        }
      }
    };

    fetchData();
  }, [id]); // Fetch data when the `id` changes

  const handleUpdateActivity = async () => {
    const formData = new FormData();
    formData.append('status', activityData.status); // Update only the status for now

    if (activityData.image) {
      formData.append('image', activityData.image);
    }

    try {
      const response = await fetch('/api/activities/update', {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Activity updated successfully:', data);
        alert('Activity updated successfully!');
      } else {
        console.error('Failed to update activity:', data.message);
      }
    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
  
      // Convert the image to base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setActivityData((prevData) => ({
          ...prevData,
          image: base64Image,  // Store the base64 string
        }));
      };
      reader.readAsDataURL(file);  // Convert the file to a base64 string
    }
  };

  const handleSubmit = () => {
    handleUpdateActivity();
  };

  if (!activityData.id) return <div>Loading...</div>; // Show loading until the activity data is available

  return (
    <main className="flex-row justify-center items-center p-4 bg-[#C7F9CC]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#2F6681]">Catat Pencapaianmu</h1>
      </div>

      <div className="flex justify-between w-[90%] m-[10px]">
        <h2 className="text-sm text-[#2F6681] font-bold">{activityData.activity}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#2F6681] font-bold">{activityData.coin}</span>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      <div className="bg-[#83CCAB] text-center w-[90%] flex rounded-lg shadow-lg p-[10px] m-[10px]">
        <div className="flex flex-col justify-start mx-[5px]">
          <p className="text-sm text-white opacity-70">
            Lorem ipsum dolor sit amet. Ut assumenda explicabo et beatae amet rem quisquam deleniti ad alias distinctio ex neque provident et nihil debitis et architecto molestiae.
          </p>
        </div>
      </div>

      {/* upload gambar */}


      <div className="mt-6 w-[90%] flex flex-col justify-center items-center">
        <label
          htmlFor="image-upload"
          className="cursor-pointer bg-[#2F6681] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6AA7C5] transition w-[80%] text-center"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {activityData.image ? (
        <div className="mt-4 w-full flex justify-center">
            <img
            // Check if image is a base64 string or a File
            src={typeof activityData.image === 'string' 
                ? activityData.image  // If it's a base64 string, use it directly
                : URL.createObjectURL(activityData.image) // If it's a File, create an object URL
            }
            alt="Uploaded preview"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            />
        </div>
        ) : (
        <div className="mt-4 w-full h-[150px] bg-white rounded-lg flex justify-center items-center">
            <span className="text-sm text-gray-500">No Image Selected</span>
        </div>
        )}
      </div>

      {/* submit */}
      <div className="mt-4 text-center">
        <button
          onClick={handleSubmit}
          className="bg-[#2F6681] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#6AA7C5] transition"
        >
          Submit Activity
        </button>
      </div>
    </main>
  );
}

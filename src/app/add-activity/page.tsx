'use client';

import { useState, useEffect } from 'react';

export default function AddActivity() {
  const [activityData, setActivityData] = useState<{
    activity: string;
    coin: number;
    image: File | null; 
  }>({
    activity: 'Lari Pagi',
    coin: 100,
    image: null, 
  });

  // belom beres
  const handleAddActivity = async () => {
    const formData = new FormData();
    formData.append('activity', activityData.activity);
    formData.append('coin', activityData.coin.toString());
    
    if (activityData.image) {
      formData.append('image', activityData.image);
    }
  
    try {
      const response = await fetch("/api/activities/create", {
        method: "POST",
        body: formData, 
      });
  
      const data = await response.json();
      
      if (response.ok) {
        console.log("Activity added successfully:", data);
        alert('Activity added successfully!');
      } else {
        console.error("Failed to add activity:", data.message);
      }
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  };  

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        activity: 'Lari Pagi',
        coin: 100,
        image: null, 
      };

      setActivityData(data); 
    };

    fetchData();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setActivityData((prevData) => ({ ...prevData, image: file })); // ini gpt.... gk ngerti
    }
  };

  const handleSubmit = () => {
    console.log('Activity Data:', activityData);
    alert('Data sent to the database!');
  };

  return (
    <main className="flex-row justify-center items-center p-4 bg-[#C7F9CC]">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#2F6681]">Catat Pencapaianmu</h1>
      </div>

      <div className="flex justify-between w-[90%] m-[10px]">
        <h2 className="text-sm text-[#2F6681]">{activityData.activity}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#2F6681]">{activityData.coin}</span>
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

      {/* upload gambar (INI KNP GK DI TENGAH PDHL JUSTIFY) */}
      <img src="/lari_pagi.jpg" alt="Activity" className="mt-4 w-full h-auto object-cover rounded-lg" />

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
              src={URL.createObjectURL(activityData.image)}
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

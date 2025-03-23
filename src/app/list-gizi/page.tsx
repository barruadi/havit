"use client"

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import CardGizi from "./CardGizi"

type NutritionData = {
    id: string;
    makanan?: string;
    username: string;
    email: string;
    date: string;
    carbohydrate: number;
    protein: number;
    fat: number;
    vitamin: string[];
    calorie: number;
};

function ListGizi() {

    const { data: session, status } = useSession();
    const [nutritionData, setNutritionData] = useState<NutritionData[]>([]);
    const [loading, setLoading] = useState(true);

    const dummyData = [
        {
            makanan: 'Nasi',
            karbohidrat: 20,
            protein: 5,
            vitamin: ['A', 'B'],
            lemak: 3,
            kalori: 100
        },
        {
            makanan: 'Ayam',
            karbohidrat: 10,
            protein: 15,
            vitamin: ['C', 'D'],
            lemak: 5,
            kalori: 200
        },
        {
            makanan: 'Sayur',
            karbohidrat: 5,
            protein: 3,
            vitamin: ['E', 'K'],
            lemak: 1,
            kalori: 50
        }
    ]

    useEffect(() => {
        async function fetchNutritionData() {
            if (status === "authenticated" && session?.user?.email) {
                try {
                    // Fetch nutrition data for the logged-in user
                    const response = await fetch(`/api/nutrition-condition/get`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    console.log("response:", response);


                    if (!response.ok) {
                        throw new Error('Failed to fetch nutrition data');
                    }
                    
                    const data = await response.json();

                    const filtered = data.filter((item: NutritionData) => item.email === session.user.email);
                    setNutritionData(filtered);
                } catch (error) {
                    console.error("Error fetching nutrition data:", error);
                } finally {
                    setLoading(false);
                }
            } else if (status !== "loading") {
                setLoading(false);
            }
        }

        fetchNutritionData();
    }, [session, status]);


    return (
        <div>
            <div className="text-3xl text-[#21577A] font-bold my-8 text-center">
                List Gizi
            </div>
            <div className="flex flex-col py-4 px-4 gap-4">
                {nutritionData.map((data, index) => (
                    <CardGizi 
                        key={index}
                        karbohidrat={data.carbohydrate}
                        protein={data.protein}
                        vitamin={data.vitamin}
                        lemak={data.fat}
                        kalori={data.calorie}
                        date={new Date(data.date).toLocaleDateString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListGizi;
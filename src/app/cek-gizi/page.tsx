"use client"

import { model } from "../api/gemini/route";

import { useSession } from "next-auth/react";

import { use, useState } from "react"
import React from "react"

function CekGizi() {

    const { data: session, status } = useSession();

    const [inputGizi, setInputGizi] = useState("");
    
    type GiziType = {
        Kalori: number;
        Protein: number;
        Lemak: number;
        Karbohidrat: number;
        Vitamin: string[];
    }
    
    const [gizi, setGizi] = useState<GiziType>({
        Kalori: 0,
        Protein: 0,
        Lemak: 0,
        Karbohidrat: 0,
        Vitamin: []
    });
    
    const handleProcess = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(inputGizi);
        
        // fetch AI
        const prompt = `List estimasi gizi makanan dari menu berikut: ${inputGizi} with this JSON schema
        
        Gizi = {'Kalori': int, 'Protein': int, 'Lemak': int, 'Karbohidrat': int, 'Vitamin': [str]}
        Return: Array<Gizi>;
        `;

        const result = await model.generateContent(prompt);
        console.log(JSON.parse(result.response.text()));
        const json_result = JSON.parse(result.response.text())
        
        // add to list
        setGizi({
            Kalori: json_result[0].Kalori,
            Protein: json_result[0].Protein,
            Lemak: json_result[0].Lemak,
            Karbohidrat: json_result[0].Karbohidrat,
            Vitamin: json_result[0].Vitamin
        });

        const username = session?.user?.username || "guest";
        const email = session?.user?.email || "guest@mail.com";
        
        // POST method
        const response = await fetch("/api/nutrition-condition/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                date: new Date(),
                carbohydrate: json_result[0].Karbohidrat,
                protein: json_result[0].Protein,
                fat: json_result[0].Lemak,
                vitamin: json_result[0].Vitamin,
                calorie: json_result[0].Kalori
            })
        })
        
        const responseData = await response.json();
        console.log("Response:", responseData);
    }

    return (
        <div className="items-center text-center">
            <div className="text-3xl text-[#21577A] font-bold my-8">
                Gizi
            </div>
            {/* inputnya */}
            <div className="mx-5">
                <form action="">
                    <textarea 
                        value={inputGizi}
                        onChange={(e) => setInputGizi(e.target.value)}
                        className="py-3 w-full px-6 rounded-[14px] 
                        bg-[#83CCAB] text-white border border-[#83CCAB]
                        overflow-hidden placeholder:text-gray-300"
                        placeholder="Masukkan makanan"
                    />
                    
                    <div className="w-full text-center px-6 py-2">
                        <button
                            onClick={handleProcess}
                            className="w-full bg-[#21577A] p-3 rounded-[14px] text-white">
                                Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CekGizi
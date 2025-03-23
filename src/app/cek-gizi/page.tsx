"use client"

import { model } from "../api/gemini/route";

// import components
import BahanMakanan from "./BahanMakanan"
import Button from "../_components/button";

import { use, useState } from "react"
import React from "react"

function CekGizi() {

    const [inputGizi, setInputGizi] = useState("");
    const [listBahan, setListBahan] = useState<string[]>([]);
    
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
        const prompt = `List estimasi gizi makanan dari menu berikut: ${inputGizi}
        
        Gizi = {'Kalori': int, 'Protein': int, 'Lemak': int, 'Karbohidrat': int, 'Vitamin': [str]}
        Return: Gizi[];
        `;
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        
        // add to list
        // setListBahan(result);

    }

    const handleSubmit = (e: FormData) => {


        
        // clear input
        setInputGizi("");
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

                    <button
                        onClick={handleProcess}>
                            Submit
                    </button>
                </form>
            </div>

            {/* List bahan makanan */}
            <div className="px-6 py-2 flex flex-wrap gap-4">
                <BahanMakanan
                    bahan="Nasi Putih"
                />
                <BahanMakanan
                    bahan="Ayam Goreng"
                />
                <BahanMakanan
                    bahan="Nasi"
                />
                <BahanMakanan
                    bahan="Putih"
                />
                <BahanMakanan
                    bahan="Ayam"
                />
            </div>

            {/* submit button */}
            <div className="w-full text-center px-6 py-2">    
                <Button
                    text="selesai"
                    goto="/list-gizi"
                    className="w-full text-white"
                />
            </div>
        </div>
    )
}

export default CekGizi
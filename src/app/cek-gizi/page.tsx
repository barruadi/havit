"use client"

// import components
import BahanMakanan from "./BahanMakanan"
import Button from "../_components/button";

import { use, useState } from "react"

function CekGizi() {

    const [inputGizi, setInputGizi] = useState("");
    const [listBahan, setListBahan] = useState<string[]>([]);

    const handleProcess = (e: FormData) => {
        console.log(inputGizi);

        // fetch AI

        // add to list
        setListBahan([]);

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
                <textarea 
                    value={inputGizi}
                    onChange={(e) => setInputGizi(e.target.value)}
                    className="py-3 w-full px-6 rounded-[14px] 
                bg-[#83CCAB] text-white border border-[#83CCAB]
                overflow-hidden placeholder:text-gray-300"
                    placeholder="Masukkan makanan"
                />
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
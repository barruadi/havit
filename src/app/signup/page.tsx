"use client"

import Textbox from "../_components/textbox"
import Button from "../_components/button";


import { FormEvent, useState } from "react"

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log({ name, email, password });
    
        const body = { name, email, password, username: name, birthdate: null, coin: null, picture: "https://example.com/pic.jpg" };
    
        try {
            const res = await fetch('http://localhost:3000/api/users/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
    
            console.log("Response Status:", res.status);
    
            // Log full response before trying to parse JSON
            const textResponse = await res.text();
            console.log("Raw Response:", textResponse);
    
            if (!res.ok) {
                throw new Error(textResponse || "Failed to create user");
            }
    
            const data = JSON.parse(textResponse);
            console.log("User created successfully:", data);
        } catch (error) {
            console.error("Fail adding user", error);
        }
    };
    
  
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="text-3xl text-[#21577A] font-bold mb-4">
                Daftar
            </div>
            <div className="text-[#4A848F] mb-6">
                Buat akun baru
            </div>
            
            {/* form submission */}
            <form className="w-full flex flex-col items-center gap-6 justify-center">
                <Textbox
                    placeholder="Nama"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                <Textbox
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                <Textbox
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <div className="w-full text-center px-6" onClick={handleSubmit}>
                    <Button
                        text="daftar"
                        goto="/login"
                        className="w-full text-white font-bold"
                    />
                </div>

            </form>

            <div className="text-[#4A848F] text-sm mt-2">
                atau masuk dengan
            </div>

            {/* other method */}
            <div className="flex items-center gap-4 py-4">
                <div className="p-3 bg-[#83CCAB] rounded-[14px]">
                    <img src="/twitter.svg" alt="twitter" />
                </div>
                <div className="p-3 bg-[#83CCAB] rounded-[14px]">
                    <img src="/twitter.svg" alt="twitter" />
                </div>
                <div className="p-3 bg-[#83CCAB] rounded-[14px]">
                    <img src="/twitter.svg" alt="twitter" />
                </div>
            </div>

            <div className="flex flex-col text-sm">
                <div className="text-[#4A848F]"> 
                    Sudah punya akun?
                    <a href="/login" className="text-[#21577A] font-bold underline">Masuk</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
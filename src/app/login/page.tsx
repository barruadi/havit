"use client"

import Textbox from "../_components/textbox"
import Button from "../_components/button";

import twitterlogo from "public/twitter.svg"

import { FormEvent, useState } from "react"

import { useSession, signIn, signOut } from "next-auth/react";

function LogIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(name, email, password);

        // fetch API
    }
  
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="text-3xl text-[#21577A] font-bold mb-4">
                Masuk
            </div>
            <div className="text-[#4A848F] mb-6">
                Halo Lagi
            </div>
            
            {/* form submission */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6 justify-center">
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

                <div className="w-full text-center px-6">
                    <Button
                        text="masuk"
                        goto="/dashboard"
                        className="w-full text-white font-bold"
                    />
                </div>

            </form>

            <div className="text-[#4A848F] text-sm mt-2">
                atau masuk dengan
            </div>

            {/* other method */}
            <div className="flex items-center gap-4 py-4">
                <button 
                    onClick={() => signIn("google")}
                    className="p-3 bg-[#83CCAB] rounded-[14px]">
                        sign in with google
                </button>
                <div className="p-3 bg-[#83CCAB] rounded-[14px]">
                    <img src="/twitter.svg" alt="twitter" />
                </div>
                <div className="p-3 bg-[#83CCAB] rounded-[14px]">
                    <img src="/twitter.svg" alt="twitter" />
                </div>
            </div>

            <div className="flex flex-col text-sm">
                <div className="text-[#4A848F]"> 
                    Belum punya akun?  
                    <a href="/signup" className="text-[#21577A] font-bold underline">Daftar</a>
                </div>
            </div>
        </div>
    );
}

export default LogIn
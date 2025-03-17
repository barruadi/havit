interface BahanMakananProps {
    bahan: string;
}

function BahanMakanan ({
    bahan
}: BahanMakananProps) {
    return (
        <div className="w-fit rounded-xl bg-[#21577A] p-2 px-4 text-white flex items-center gap-4 drop-shadow-md">

            {/* nama bahannya */}
            <div className="">
                {bahan}
            </div>

            {/* remove */}
            <div className="">
                <img src="/xicon.svg" alt="Close Button"/>
            </div>

        </div>
    )
}

export default BahanMakanan;
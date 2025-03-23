interface CardGiziProps {
    // makanan: string;
    // foto: string;
    karbohidrat: number;
    protein: number;
    vitamin: string[];
    lemak: number;
    kalori: number;
    date: string;
}

function CardGizi({
        // makanan,
        karbohidrat,
        protein,
        vitamin,
        lemak,
        kalori,
        date
}: CardGiziProps) {
    return (
        <div className="flex justify-between bg-[#83CCAB] rounded-[14px] p-4 w-full">
            {/* sisi kiri */}
            <div className="">
                <div className="text-[#21577A] text-3xl">
                    {date}
                </div>
                <div className="text-white">
                    Karbohidrat: {karbohidrat}g
                </div>
                <div className="text-white">
                    Protein: {protein}g
                </div>
                <div className="text-white">
                    Vitamin: {vitamin.join(', ')}
                </div>
                <div className="text-white">
                    Lemak: {lemak}g
                </div>
                <div className="text-white">
                    Kalori: {kalori}
                </div>
            </div>
            
            {/* sisi kanan */}
            {/* <div className="">
                <img src="" alt="" />
            </div> */}

        </div>
    )
}

export default CardGizi;
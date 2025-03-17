import CardGizi from "./CardGizi"

function ListGizi() {

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

    return (
        <div>
            <div className="flex flex-col py-4 px-4 gap-4">
                {dummyData.map((data, index) => (
                    <CardGizi 
                    key={index}
                    {...data}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListGizi;
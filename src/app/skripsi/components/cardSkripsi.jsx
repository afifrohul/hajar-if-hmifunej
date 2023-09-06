import Link from "next/link"

export default function CardSkripsi(props) {
    return (
        <div className="lg:w-full mx-auto p-5 grid gap-y-4 lg:grid-cols-3 justify-items-center ">
            <div className="w-[319px] h-[150px] rounded-[10px] bg-[#D9D9D9]">
            </div>
            <div className="grid gap-y-1 lg:gap-0 col-span-2 text-justify">
                <p className="lg:text-[20px] font-bold">{props.title}</p>
                <h3 className="lg:text-lg text-sm text-[#B4B6BA]">{props.name} (Mahasiswa Informatika Angkatan {props.angkatan})</h3>
                <p className="text-[15px] lg:text-[20px] line-clamp-4">{props.abstrak}</p>
            </div>
        </div>
    )
}
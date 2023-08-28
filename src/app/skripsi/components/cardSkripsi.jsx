import Link from "next/link"

export default function CardSkripsi(props) {
    return (
        <div className="w-[300px] lg:w-full mx-auto p-5 pl-7 pr-10 rounded-2xl outline outline-4 bg-[#F7F7FD] shadow-md shadow-[rgb(142, 141, 208, 0.25)]">
            <div className="flex flex-col">
                <div className="flex flex-col pt-0 mt-0">
                    <p className="font-bold text-[30px] lg:text-[64px]">{props.name}</p>
                    <h2 className="text-[#B4B6BA] text-[15px] lg:text-[30px]">INFORMATIKA ANGKATAN {props.angkatan}</h2>
                    <p className="pt-6 text-[13px] lg:text-[22px] text-justify">{props.title}</p>
                </div>
                <div className="flex flex-col pt-4 text-[16px] lg:text-[21px]">
                    <h2 className="font-bold">Dosen Penguji:</h2>
                    <div className="text-[12px] lg:text-[19px] list-disc indent-3">
                        {props.penguji.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </div>
                    <h2 className="font-bold text-[16px] lg:text-[21px]">Dosen Pembimbing:</h2>
                    <div className="text-[12px] lg:text-[19px] list-disc indent-3">
                        {props.pembimbing.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </div>
                </div>
                <div className="w-full text-[15px] lg:text-[21px] pt-7 lg:grid grid-cols-4">
                    <div className="col-start-1 col-end-2">
                        <h4>Akses File Skripsi</h4>
                        <Link href={props.link} target="_blank" className="line-clamp-2 hover:underline underline-offset-4">{props.name.split(" ")[0]}.skripsi</Link>
                    </div>
                    <div className="text-end pt-10 col-end-7 col-span-2">
                        <h4>{props.date}</h4>
                        <h4>{props.time}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Link from "next/link"

export default function CardSkripsi(props) {
    return (
        <div className="w-full mx-auto p-5 pl-7 pr-10 rounded-2xl outline outline-4 bg-[#F7F7FD] shadow-md shadow-[rgb(142, 141, 208, 0.25)]">
            <div className="flex flex-col">
                <div className="flex flex-col pt-0 mt-0">
                    <p className="font-bold text-[64px]">{props.name}</p>
                    <h2 className="text-[#B4B6BA] text-[30px]">INFORMATIKA ANGKATAN {props.angkatan}</h2>
                    <p className="pt-6 text-[22px]">{props.title}</p>
                </div>
                <div className="flex flex-col pt-4">
                    <h2 className="font-bold text-[21px]">Dosen Penguji:</h2>
                    <div className="list-disc indent-3">
                        {props.penguji.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </div>
                    <h2 className="font-bold text-[21px]">Dosen Pembimbing:</h2>
                    <div className="list-disc indent-3">
                        {props.pembimbing.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </div>
                </div>
                <div className="w-full pt-7 grid grid-cols-4">
                    <div className="col-start-1 col-end-2">
                        <h4>Akses File Skripsi</h4>
                        <Link href={props.link} target="_blank" className="hover:underline underline-offset-4">{props.link}</Link>
                    </div>
                    <div className="col-end-7 col-span-2">
                        <h4>{props.date}</h4>
                        <h4 className="text-end">{props.time}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
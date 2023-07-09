import Link from "next/link";

export default function CardSkripsi(props) {
    return (<div className="mx-auto mt-8 p-3 rounded bg-[#F7F7FD] shadow-md shadow-[rgb(142, 141, 208, 0.25)] w-[380px]">
        <div className="flex flex-col items-baseline pt-3 p-2 text-justify">
            <h1 className="font-bold text-lg">{props.judul}</h1>
            <h2 className="pt-3 font-normal text-sm">{props.name} - {props.nim}</h2>
            <h2 className="pt-3 font-normal text-xs">{props.year}</h2>
        </div>
        <div className="flex items-center justify-end pt-4">
            <Link href={"/skripsi"} className="hover:bg-stone-200 p-2 rounded-full outline outline-1 bg-stone-100">Unduh File</Link>
        </div>
    </div>)
}
import Link from "next/link"
import parse from 'html-react-parser';
import Image from "next/image";

export default function CardSkripsi(props) {
    const parse = require('html-react-parser');

    return (
        <div className="mt-[40px] mb-[40px] ml-[60px] mr-[60px]">
            <div className="grid gap-y-1 lg:gap-0 col-span-2 text-justify">
                <p className="lg:text-[20px] font-bold">{props.title}</p>
                <h3 className="lg:text-lg text-sm text-[#B4B6BA]">{props.name} (Mahasiswa Informatika Angkatan {props.angkatan})</h3>
                <div className="text-[15px] lg:text-[20px] line-clamp-3">{parse(props.abstrak)}</div>
                <div className="flex gap-3 items-center mt-4">
                    <div className="flex justify-center items-center">
                        <Image className="lg:w-[40px] lg:h-[40px]" src={'/polygon.svg'} width={50} height={50} alt='' />
                        <Image className="absolute lg:w-[20px] lg:h-[20px]" src={'/landmark-solid.svg'} width={25} height={25} alt='' />
                    </div>
                    <p className="lg:text-[21px] text-[15px] font-medium leading-8">Repository Skripsi, <Link href={"#"} className="lg:text-[21px] text-gradient underline decoration-red-400 hover:decoration-red-600">Klik Disini! </Link></p>
                </div>
            </div>
        </div>
    )
}
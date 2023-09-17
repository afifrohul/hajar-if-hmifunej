import Image from "next/image"


export default async function SearchBar({ cols }) {

    return (
        <div className={`col-span-${cols}`}>
            <div className="h-[50px] w-[250px] flex gap-4 p-4 pl-8 lg:h-[60px] lg:w-full bg-white rounded outline outline-black outline-2">
                <button type="submit"><Image src={'/search.svg'} width={20} height={20} alt='' /></button>
                <input className="w-full text-black placeholder-black outline-none text-[12px] lg:text-[14px]" type="text" id="keywordSearch" name="keywordSearch" placeholder="Cari Referensi Skripsimu disini..."/>
            </div>
        </div>
    )
}
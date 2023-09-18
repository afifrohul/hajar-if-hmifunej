import Image from "next/image"

export default function DropDown({bidang, setValue}) {

    return (
        <div class="mt-4 lg:mt-0 h-[50px] w-[250px] relative flex items-center lg:h-[60px] lg:w-full bg-white rounded outline outline-black outline-2">
            <div className="absolute pl-6">
                <Image src={'/when-i-work.svg'} width={20} height={20} alt='' />
            </div>
            <select
                id="selectOption"
                className="pl-14 p-4 w-full h-full px-3 text-[12px] lg:text-[16px] leading-tight focus:outline-none focus:shadow-outline " onChange={(e)=>setValue(()=>e.target.value)}
            >
                <option value="">Berdasarkan Bidang</option>
                {bidang.map((option) => (
                    <option className="pl-0" key={option.id_bidang_skripsi} value={option.id_bidang_skripsi}>
                        {option.nama_bidang_skripsi}
                    </option>
                ))}
            </select>
        </div>
    )
}
import Image from "next/image"
import fetchAllBidangSkripsi from "@/hooks/skripsi/fetchAllBidangSkripsi";

const bidang = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

export default async function DropDown() {
    // const bidang = await fetchAllBidangSkripsi()

    return (
        <div class=" h-[50px] w-[250px] relative flex items-center lg:h-[60px] lg:w-full bg-white rounded outline outline-black outline-2">
            <div className="absolute pl-6">
                <Image src={'/when-i-work.svg'} width={20} height={20} alt='' />
            </div>
            <select
                id="selectOption"
                className="pl-14 p-4 appearance-none w-full h-full px-3 text-[16px] leading-tight focus:outline-none focus:shadow-outline "
            >
                {bidang.map((option) => (
                    <option className="pl-0" key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="absolute pl-[120px]">
                <Image src={'/arrow-down-2.svg'} width={20} height={20} alt='' />
            </div>
        </div>
    )
}
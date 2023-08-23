import Image from "next/image"

export default function CardLomba(props) {
    const { tim, mahasiswa, peraihan, nama_lomba, penyelenggara, deskripsi, foto, date, tingkat } = props

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 p-4 pt-8 duration-300 shadow-md rounded-xl hover:scale-105 lg:p-6 lg:flex-nowrap'>
            <div className="relative w-full mx-auto">
                <Image src={'/pattern.svg'} width={590} height={650} alt="" className="relative z-10 -translate-x-1/2 left-1/2" />
                <Image src={foto} width={404} height={506} alt="" className="absolute z-20 overflow-hidden -translate-x-1/2 -translate-y-1/2 shadow-md left-1/2 top-1/2 rounded-2xl" />
            </div>
            <div className="grid items-center py-4 md:py-2">
                <h2 className="text-4xl lg:text-[64px] leading-none font-bold">{peraihan} <span>{nama_lomba}</span></h2>
                <p className="py-6 text-lg lg:text-xl">{removeHtmlTags(deskripsi)}</p>
                <div className="grid gap-2 md:gap-6 md:grid-cols-2 lg:mx-0">
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/tim.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{tim}</p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/building.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{penyelenggara}</p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/tingkat.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{tingkat}</p>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-4">
                        <Image src={'/date.svg'} width={52} height={52} alt="" />
                        <p className="text-lg font-medium lg:text-xl">{date}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

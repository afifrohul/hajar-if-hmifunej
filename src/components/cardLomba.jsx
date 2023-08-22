import Image from "next/image"

export default function CardLomba(props) {
    const { tim, mahasiswa, peraihan, nama_lomba, penyelenggara, deskripsi, foto, date } = props

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }
    return (

        <div className='flex items-center'>
            <div className="relative w-full ">
                <Image src={'/pattern.svg'} width={590} height={590} alt="" className="relative z-10 right-10" />
                <Image src={foto} width={404} height={506} alt="" className="absolute left-0 z-20 overflow-hidden -translate-y-1/2 top-1/2 rounded-2xl" />
            </div>
            <div className="grid items-center">
                <h2 className="text-[64px] font-bold">{peraihan} {nama_lomba}</h2>
                <p className="py-6 text-xl">{deskripsi}</p>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                        <Image src={'/tim.svg'} width={52} height={52} alt="" />
                        <p className="text-xl font-medium">{tim}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={'/building.svg'} width={52} height={52} alt="" />
                        <p className="text-xl font-medium">{penyelenggara}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={'/date.svg'} width={52} height={52} alt="" />
                        <p className="text-xl font-medium">{date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={'/tingkat.svg'} width={52} height={52} alt="" />
                        <p className="text-xl font-medium">{tim}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

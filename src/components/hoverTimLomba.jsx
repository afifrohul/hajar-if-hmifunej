import Image from "next/image";

export default function HoverTimLomba(props) {
    const { mahasiswa } = props
    return (
        <div className="absolute bottom-2 shadow-xl left-0 p-4 bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] rounded-lg">
            <div className="flex gap-2">
                <Image src={'/info.svg'} width={24} height={24} alt="" />
                <h4 className="font-bold text-[#F8FAFC]">Nama Anggota:</h4>
            </div>
            <div className="pt-2 text-[#F8FAFC]">
                {
                    mahasiswa.map((value, index) => (
                        <p key={index}>{value}</p>
                    ))
                }
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[13px] triangle"></div>
        </div>
    )
}

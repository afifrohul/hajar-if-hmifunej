import Image from "next/image";

export default function TopLomba(props) {
    const { foto, peraihan, namaLomba, color } = props

    return (
        <div className="relative w-fit h-fit rounded-[26px] overflow-hidden shadow-2xl hover:scale-105 duration-100">
            <Image src={foto} width={410} height={505} alt="" className="object-fill" />
            <div style={{ backgroundImage: `linear-gradient(to bottom, transparent, #${color})` }} className=" w-full absolute bottom-0 h-[216px] opacity-70 ">
                <p className="absolute text-2xl font-bold text-center text-white -translate-x-1/2 left-1/2 bottom-8">{peraihan} {namaLomba}</p>
            </div>
        </div>
    )
}

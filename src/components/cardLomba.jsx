import Image from "next/image"

export default function CardLomba(props) {
    const { tim, mahasiswa, peraihan, nama_lomba, penyelenggara, deskripsi } = props

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }
    return (

        <div className='border-2 border-[#ED1C24] rounded-lg w-[700px] p-4 bg-white h-fit'>
            {
                tim == 'Personal' ? (
                    <div>
                        <div className='flex items-center gap-4'>
                            <Image src={'/medali.svg'} width={50} height={72} alt='' />
                            <div>
                                <h2 className='text-3xl font-semibold'>{mahasiswa}</h2>
                                <h3 className='text-[#B4B6BA] font-semibold text-xl'>{peraihan} {nama_lomba}</h3>
                            </div>
                        </div>
                        <p className="py-1 font-semibold"><span>Penyelenggara: </span>{penyelenggara}</p>
                        <p>{removeHtmlTags(deskripsi)}</p>
                    </div>
                ) : (
                    <div>
                        <div className='flex items-center gap-4'>
                            <Image src={'/medali.svg'} width={50} height={72} alt='' />
                            <div>
                                <h2 className='text-3xl font-semibold'>{tim}</h2>
                                <h3 className='text-[#B4B6BA] font-semibold text-xl'>{peraihan} {nama_lomba}</h3>
                            </div>
                        </div>
                        <div className='py-3 font-semibold'>
                            <p>Anggota:</p>
                            {
                                mahasiswa.map((mahasiswa, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <Image src={'/polygon-icon.svg'} width={30} height={30} alt='' />
                                        <p>{mahasiswa}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="py-1 font-semibold"><span>Penyelenggara: </span>{penyelenggara}</p>
                        <p>{removeHtmlTags(deskripsi)}</p>
                    </div>
                )
            }
        </div>

    )
}

import Image from 'next/image'
import Link from 'next/link'

export default function LombaNotFound() {
    return (
        <div className='container pt-40 pb-20 text-center'>
            <h2 className='text-6xl font-medium'>DATA TIDAK TERSEDIA</h2>
            <Image src={'/datanf.svg'} width={819} height={716} alt='Data not found' className='py-6 mx-auto' />
            <h2 className='text-6xl font-medium'>NANTIKAN INFORMASI SELANJUTNYA</h2>
            <Link href={'/lomba'}>
                <button className='flex items-center gap-2 border-b border-[#FF9B00] mx-auto pt-4 '>
                    <Image src={'/arrow.svg'} width={9} height={17} alt='' />
                    <p className='text-xl text-transparent bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] bg-clip-text'>Kembali</p>
                </button>
            </Link>
        </div>
    )
}

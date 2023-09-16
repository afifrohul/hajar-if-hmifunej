import Image from 'next/image'
import Link from 'next/link'

export default function LombaNotFound() {
    return (
        <div className='container pt-40 pb-20 text-center'>
            <h2 className='text-2xl font-medium lg:text-6xl'>DATA TIDAK TERSEDIA</h2>
            <Image src={'/datanf.svg'} width={819} height={716} alt='Data not found' className='py-6 mx-auto' />
            <h2 className='text-2xl font-medium lg:text-6xl'>NANTIKAN INFORMASI SELANJUTNYA</h2>
        </div>
    )
}

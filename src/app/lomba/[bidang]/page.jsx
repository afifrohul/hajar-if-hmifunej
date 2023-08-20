import Image from 'next/image'
import { fetchLomba } from "@/hooks/lomba/fetchLomba";
import Link from 'next/link';
import Search from '@/components/search';

export default async function LombaBidang({ params }) {
    const lomba = await fetchLomba(params.bidang)

    return (
        <div>
            <div className='flex flex-col items-center justify-center h-[500px] bg-no-repeat bg-cover bg-primary bg-grid'>
                <div className='grid justify-center text-white max-w-7xl'>
                    <h1 className='mb-12 font-bold text-center text-7xl'>{lomba[0].deskripsi_bidang_lomba} <br /> ({lomba[0].nama_bidang_lomba})</h1>
                    <Link href={'/lomba'} className='mx-auto'>
                        <button className='flex items-center gap-2 border-b border-[#FF9B00]'>
                            <Image src={'/arrow.svg'} width={9} height={17} alt='' />
                            <p className='text-xl text-transparent bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] bg-clip-text'>Kembali</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='mx-auto max-w-[1400px] py-10'>
                <Image src={'/badge.svg'} width={150} height={150} alt='' className='mx-auto' />
                <h2 className='font-bold text-[60px] text-center py-4'>Prestasi Mahasiswa Informatika Bidang {lomba[0].nama_bidang_lomba}</h2>
                <Search initialData={lomba} />
            </div>
        </div>
    )
}

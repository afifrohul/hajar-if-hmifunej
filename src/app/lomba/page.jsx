import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { fetchBidangLomba } from "@/hooks/lomba/fetchBidangLomba"
import { fetchTopPeserta } from '@/hooks/lomba/fetchTopPeserta'
import CardLomba from '@/components/cardLomba'

export default async function Lomba() {
    const bidangLomba = await fetchBidangLomba()
    const topPeserta = await fetchTopPeserta()

    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-primary bg-grid'>
                <div className='flex items-center px-4 mx-auto space-x-40'>
                    <div className='max-w-4xl text-white'>
                        <h1 className='mb-12 font-bold text-7xl'>Kumpulan Prestasi Perlombaan <br /> Mahasiswa Informatika</h1>
                    </div>
                    <div>
                        <Image src={'/hero-image.svg'} width={580} height={590} alt='Hero' />
                    </div>
                </div>
                <div className='absolute bottom-0 w-full overflow-hidden text-center py-14'>
                    <p className='py-1 text-[52px] w-[101%] -ml-2 font-bold bg-gradient-to-bl from-[#FF9B00] to-[#ED1C24] rotate-3 tracking-widest'>
                        <Marquee direction='right' speed={100}>
                            ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                        </Marquee>
                    </p>
                </div>
                <div className='absolute bottom-0 w-full overflow-hidden text-center py-14'>
                    <p className='py-1 text-[52px] w-[101%] -ml-2 font-bold bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] -rotate-3 tracking-widest'>
                        <Marquee direction='left' speed={100}>
                            ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                        </Marquee>
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center px-4 py-10'>
                <div>
                    <h2 className='font-bold text-[60px] text-center'>BIDANG PERLOMBAAN</h2>
                    <div className='flex flex-wrap justify-center gap-10 py-6 border-b border-[#ED1C24] px-4'>
                        {
                            bidangLomba.map((value, index) => (
                                <div key={index}>
                                    {
                                        index % 2 !== 0 ? (
                                            <Link href={`lomba/${value.slug_bidang}`}>
                                                <button className='bg-[#ED1C24] rounded-xl w-[180px] h-[70px] font-bold text-white text-3xl border-4 border-[#ED1C24] hover:text-black hover:bg-transparent '>{value.nama_bidang_lomba}</button>
                                            </Link>
                                        ) : (
                                            <Link href={`lomba/${value.slug_bidang}`}>
                                                <button className='bg-transparent rounded-xl w-[180px] h-[70px] font-bold text-black text-3xl border-4 border-[#ED1C24] hover:text-white hover:bg-[#ED1C24] '>{value.nama_bidang_lomba}</button>
                                            </Link>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='py-4'>
                    <h2 className='font-bold text-[60px] py-4'>Prestasi Terbaru Mahasiswa Informatika</h2>
                    <div className='grid justify-center gap-10 py-6'>
                        {
                            topPeserta.map((value, index) => (
                                <div key={index}>
                                    <div className='flex items-center justify-center gap-8'>
                                        <CardLomba tim={value.tim} mahasiswa={value.mahasiswa} peraihan={value.peraihan} nama_lomba={value.nama_lomba} penyelenggara={value.penyelenggara} deskripsi={value.deskripsi} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

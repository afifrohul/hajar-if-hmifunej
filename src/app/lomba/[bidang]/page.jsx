import Image from 'next/image'
import { fetchLomba } from "@/hooks/lomba/fetchLomba";
import Link from 'next/link';
import Search from '@/components/search';
import LombaIcon from '@/components/lombaIcon';
import LombaNotFound from '@/components/lombaNf';

export default async function LombaBidang({ params }) {
    const lomba = await fetchLomba(params.bidang)

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }

    return (
        <>
            {
                lomba.length > 0 ?
                    <>
                        <div className='flex items-center justify-start h-[500px] bg-no-repeat bg-cover bg-primary bg-grid'>
                            <div className='container grid grid-cols-2 mt-20 text-white'>
                                <h1 className='max-w-2xl mx-auto mb-12 font-bold text-7xl'>{removeHtmlTags(lomba[0].deskripsi_bidang_lomba)} <br /> <span>({lomba[0].nama_bidang_lomba})</span></h1>
                                <div className='mx-auto'>
                                    <LombaIcon />
                                </div>
                                <Link href={'/lomba'}>
                                    <button className='flex items-center gap-2 border-b border-[#FF9B00] ml-4'>
                                        <Image src={'/arrow.svg'} width={9} height={17} alt='' />
                                        <p className='text-xl text-transparent bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] bg-clip-text'>Kembali</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='mx-auto max-w-[1400px] py-10'>
                            <Search initialData={lomba} />
                        </div>
                    </> :
                    <LombaNotFound />
            }
        </>
    )
}

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
                        <div className='flex items-center justify-start xl:h-[500px] bg-no-repeat bg-cover bg-primary bg-grid py-10'>
                            <div className='container flex mt-20 text-white'>
                                <div>
                                    <h1 className='max-w-5xl mb-4 lg:mb-12 text-4xl font-bold lg:text-7xl'>Perlombaan Bidang {removeHtmlTags(lomba[0].nama_bidang_lomba)}</h1>
                                    <p className='font-medium opacity-70 max-w-4xl'>{removeHtmlTags(lomba[0].deskripsi_bidang_lomba)}</p>
                                </div>
                                <div className='hidden mx-auto xl:block'>
                                    <LombaIcon />
                                </div>
                            </div>
                        </div>
                        <div className='container py-4 md:py-10'>
                            <Search data={lomba} />
                        </div>
                    </> :
                    <LombaNotFound />
            }
        </>
    )
}

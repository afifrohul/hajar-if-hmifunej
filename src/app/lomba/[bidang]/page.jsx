'use client'

import { useFetchLomba } from "@/hooks/lomba/useFetchLomba";
import Search from '@/components/search';
import LombaIcon from '@/components/lombaIcon';
import LombaNotFound from '@/components/lombaNf';

export default function LombaBidang({ params }) {
    const { data, loading } = useFetchLomba(params.bidang)

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }
    return (
        <>
            {
                loading ?
                    <>
                        <div className='flex items-center justify-start bg-no-repeat bg-cover bg-primary bg-grid py-10'>
                            <div className='container grid lg:grid-cols-2 mt-20 mb-10 text-white'>
                                <div>
                                    <h1 className='mb-4 lg:mb-12 text-4xl font-bold lg:text-7xl'>Perlombaan Bidang <div className="fetch-loader mt-2"></div> </h1>
                                </div>
                                <div className='hidden mx-auto lg:block my-auto'>
                                    <LombaIcon />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="loader mx-auto m-10"></div>
                        </div>
                    </> :
                    data.length > 0 ?
                        <>
                            <div className='flex items-center justify-start  bg-no-repeat bg-cover bg-primary bg-grid py-10'>
                                <div className='container lg:grid-cols-2 grid mt-20 mb-10 text-white'>
                                    <div>
                                        <h1 className='mb-4 lg:mb-12 text-4xl font-bold lg:text-7xl'>Perlombaan Bidang {removeHtmlTags(data[0].nama_bidang_lomba)}</h1>
                                        <p className='font-medium opacity-70 max-w-4xl'>{removeHtmlTags(data[0].deskripsi_bidang_lomba)}</p>
                                    </div>
                                    <div className='hidden mx-auto lg:block lg:my-auto'>
                                        <LombaIcon />
                                    </div>
                                </div>
                            </div>
                            <div className='container py-4 md:py-10'>
                                <Search data={data} />
                            </div>
                        </> :
                        <LombaNotFound />
            }
        </>
    )
}

'use client'

import LombaNotFound from '@/components/lombaNf'
import Search from '@/components/mbkm/search'
import useFetchContentMbkm from '@/hooks/mbkm/useFetchContentMbkm'
import React from 'react'

export default function MbkmBidang({ params }) {
    const { data: content, loading } = useFetchContentMbkm(params.jenis)

    return (
        <>
            {
                loading ?
                    <>

                        <div className='flex items-center justify-start h-[400px] xl:h-[500px] bg-no-repeat bg-cover bg-primary bg-grid'>
                            <div className='container mt-20 text-white'>
                                <h1 className='max-w-7xl mb-6 lg:mb-12 text-4xl font-bold lg:text-7xl xl:text-[100px] xl:leading-[100px]'><div className="fetch-loader"></div></h1>
                            </div>
                        </div>
                        <div className="container">
                            <div className="loader mx-auto m-10"></div>
                        </div>
                    </>
                    :
                    content.length > 0 ?
                        <>
                            <div className='flex items-center justify-start h-[400px] xl:h-[500px] bg-no-repeat bg-cover bg-primary bg-grid'>
                                <div className='container mt-20 text-white'>
                                    <h1 className='max-w-7xl mb-6 lg:mb-12 text-4xl font-bold lg:text-7xl xl:text-[100px] xl:leading-[100px]'>Testimoni {content[0].nama_jenis_mbkm}</h1>
                                    <p className="max-w-4xl text-lg font-medium opacity-80">Bingung mau pilih {content[0].nama_jenis_mbkm} dimana? Nih testimoni {content[0].nama_jenis_mbkm} dari mahasiswa informatika. Simak informasinya ya!</p>
                                </div>
                            </div>
                            <div className='container py-4 md:py-10'>
                                <Search data={content} jenis_mbkm={params.jenis} />
                            </div>
                        </>
                        :
                        <LombaNotFound />
            }
        </>
    )
}

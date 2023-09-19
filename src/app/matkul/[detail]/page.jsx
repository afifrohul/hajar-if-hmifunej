'use client';

import React from 'react';
import { useFetchDetailMatkul } from '@/hooks/matkul/useFetchDetailMatkul';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@nextui-org/react';
import PageNotFound from '@/components/lombaNf';

export default function DetailMatkul({ params }) {
  const { data, loading } = useFetchDetailMatkul(params.detail);
  return (
    <>
      {
        loading ?
          <>
            <div className="overflow-hidden">
              <div className="flex flex-col items-center justify-center py-10 bg-no-repeat bg-cover bg-primary bg-grid">
                <div className="grid lg:grid-cols-2 items-center px-4 mx-auto mt-20 mb-10 space-x-40 container">
                  <div className="max-w-4xl text-white">
                    <h1 className="my-auto"><div className='fetch-loader'></div></h1>
                  </div>
                  <div className="hidden lg:block">
                    <Image src={'../matkul-kacang-abu-kembar.svg'} width={287} height={351} alt="Kacang Kembar" className='mx-auto my-auto' />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="loader mx-auto m-10"></div>
            </div>
          </>
          :
          data.length > 0 ?
            <>
              <div className="overflow-hidden">
                <div className="flex flex-col items-center justify-center py-10 bg-no-repeat bg-cover bg-primary bg-grid">
                  <div className="grid lg:grid-cols-2 items-center px-4 mx-auto mt-20 mb-10 space-x-40 container">
                    <div className="max-w-4xl text-white">
                      <h1 className="mb-6 lg:mb-12 font-bold text-4xl lg:text-7xl">{data[0].judul_matkul}</h1>
                      <p className="text-xl lg:text-2xl font-medium">{data[0].jumlah_sks} SKS</p>
                    </div>
                    <div className="hidden lg:block">
                      <Image src={'../matkul-kacang-abu-kembar.svg'} width={287} height={351} alt="Kacang Kembar" className='mx-auto my-auto' />
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-max bg-[#F7F5ED] flex justify-center container">
                <Accordion selectionMode="multiple" variant="shadow" className="w-full my-10 lg:my-20 text-xl">
                  {data.map((value, index) => (
                    <AccordionItem key={index} aria-label={value.judul_materi} title={value.judul_materi}>
                      <iframe src={value.file_materi} height="700px" width="100%" frameborder="0" className="h-[40%] lg:h-[700px]"></iframe>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </> :
            <PageNotFound />
      }
    </>
  );
}

'use client';

import React from 'react';
import { fetchDetailMatkul } from '@/hooks/matkul/fetchDetailMatkul';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default async function detailMatkul({ params }) {
  const namaMatkul = await fetchDetailMatkul(params.detail);

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-primary bg-grid">
          <div className="flex items-center px-4 mx-auto space-x-40">
            <div className="max-w-4xl text-white">
              <h1 className="mb-12 font-bold text-8xl">{namaMatkul[0].judul_matkul}</h1>
              <p className="text-2xl font-medium">{namaMatkul[0].jumlah_sks} SKS</p>
            </div>
            <div className="relative">
              <Image src={'../matkul-kacang-abu-kembar.svg'} width={387} height={451} alt="Kacang Kembar" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-max bg-[#F7F5ED] flex justify-center">
        <Accordion selectionMode='multiple' variant="shadow" className="w-[90%] my-20 text-xl">
          {namaMatkul.map((value, index) => (
            <AccordionItem key={value.id_materi} aria-label={value.judul_materi} title={value.judul_materi}>
              <iframe src={value.file_materi} height="700px" width="100%" frameborder="0"></iframe>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

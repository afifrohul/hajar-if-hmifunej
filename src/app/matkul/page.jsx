import Image from 'next/image';
import { fetchMatkul } from '@/hooks/matkul/fetchMatkul';
import SearchA from '@/components/matkul/search';

export default async function Matkul() {
  const matkul = await fetchMatkul();

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-primary bg-grid py-10">
          <div className="grid lg:grid-cols-2 items-center px-4 mx-auto space-x-40 container mt-20 mb-10">
            <div className="max-w-4xl text-white">
              <h1 className="mb-12 font-bold text-4xl lg:text-7xl">
                Mata Kuliah Informatika
              </h1>
              <p className="text-xl lg:text-xl">
                Rincian mata kuliah yang dapat ditempuh oleh mahasiswa program studi Informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.
              </p>
            </div>
            <div className="hidden lg:block ">
              <Image src={'matkul-kacang-abu-kembar.svg'} width={287} height={351} alt="Kacang Kembar" className='mx-auto my-auto' />
            </div>
          </div>
        </div>
        <SearchA data={matkul} />
      </div>
    </>
  );
}

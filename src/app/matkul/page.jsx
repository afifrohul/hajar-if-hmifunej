import Image from 'next/image';
import { fetchMatkul } from '@/hooks/matkul/fetchMatkul';
import SearchA from '@/components/matkul/search';

export default async function Matkul() {
  const matkul = await fetchMatkul();

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col items-center justify-center py-24 lg:h-screen bg-no-repeat bg-cover bg-primary bg-grid">
          <div className="flex items-center px-4 mx-auto space-x-40">
            <div className="max-w-4xl text-white">
              <h1 className="mb-12 font-bold text-4xl lg:text-8xl">
                Mata Kuliah <br></br>Informatika
              </h1>
              <p className="text-xl lg:text-2xl font-medium">
                Rincian mata kuliah yang dapat ditempuh oleh mahasiswa program studi Informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.
              </p>
            </div>
            <div className="hidden lg:block relative">
              <Image src={'matkul-kacang-abu-kembar.svg'} width={387} height={451} alt="Kacang Kembar" />
            </div>
          </div>
        </div>
        <SearchA data={matkul} />
      </div>
    </>
  );
}

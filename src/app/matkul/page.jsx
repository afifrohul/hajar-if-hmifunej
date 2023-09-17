import Image from 'next/image';
import { fetchMatkul } from '@/hooks/matkul/fetchMatkul';
import SearchA from '@/components/matkul/search';

export default async function Matkul() {
  const matkul = await fetchMatkul();

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-primary bg-grid">
          <div className="flex items-center px-4 mx-auto space-x-40">
            <div className="max-w-4xl text-white">
              <h1 className="mb-12 font-bold text-8xl">
                Mata Kuliah <br></br>Informatika
              </h1>
              <p className="text-2xl font-medium">
                Rincian mata kuliah yang dapat ditempuh oleh mahasiswa program studi Informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.
              </p>
            </div>
            <div className="relative">
              <Image src={'matkul-kacang-abu-kembar.svg'} width={387} height={451} alt="Kacang Kembar" />
            </div>
          </div>
        </div>

        <div className="w-screen h-[164px] bg-gradient-to-r from-[#FF9C01]/[.22] to-[#FBB84E]/[.0] flex items-center overflow-x-scroll no-scrollbar">
          <div className="w-[3000px] text-gray-700 text-2xl flex items-center justify-start gap-48 mx-40">
            <div className="whitespace-nowrap">Semua</div>
            <div className="whitespace-nowrap">Semester 1</div>
            <div className="whitespace-nowrap">Semester 2</div>
            <div className="whitespace-nowrap">Semester 3</div>
            <div className="whitespace-nowrap">Semester 4</div>
            <div className="whitespace-nowrap">Semester 5</div>
          </div>
        </div>

        <div className="h-max bg-[#F7F5ED]">
          <SearchA data={matkul} />
        </div>
      </div>
    </>
  );
}

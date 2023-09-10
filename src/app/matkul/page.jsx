import Image from 'next/image';
import Link from 'next/link';

export default function matkul() {
  return (
    <div className='overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-primary bg-grid">
        <div className="flex items-center px-4 mx-auto space-x-40">
          <div className="max-w-4xl text-white">
            <h1 className="mb-12 font-bold text-8xl">
              Mata Kuliah <br></br>Informatika
            </h1>
            <p className="text-2xl font-medium">Rincian mata kuliah yang dapat ditempuh oleh mahasiswa program studi Informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</p>
          </div>
          <div className='relative'>
            <div className="absolute flex justify-between w-[418px] my-10 px-10 py-6 -ml-32 overflow-hidden bg-black border border-white rounded-md">
              <input type="text" placeholder="Cari mata kuliahmu disini..." className="w-full px-2 py-1 text-white bg-black outline-none" />
              <Image src={'/search.svg'} width={31} height={31} alt="" />
            </div>
            <Image src={'matkul-kacang-abu-kembar.svg'} width={387} height={451} alt="Kacang Kembar" />
          </div>
        </div>
      </div>

      <div className="w-screen h-[164px] bg-gradient-to-r from-[#FF9C01]/[.22] to-[#FBB84E]/[.0] flex items-center overflow-x-scroll no-scrollbar">
        <div className="w-[3000px] text-gray-700 text-2xl flex items-center justify-start gap-48 mx-40">
          <div className='whitespace-nowrap'>Semua</div>
          <div className='whitespace-nowrap'>Semester 1</div>
          <div className='whitespace-nowrap'>Semester 2</div>
          <div className='whitespace-nowrap'>Semester 3</div>
          <div className='whitespace-nowrap'>Semester 4</div>
          <div className='whitespace-nowrap'>Semester 5</div>
          <div className='whitespace-nowrap'>Semester 6</div>
          <div className='whitespace-nowrap'>Semester 7</div>
          <div className='whitespace-nowrap'>Semester 8</div>
        </div>
      </div>
    </div>

  );

}

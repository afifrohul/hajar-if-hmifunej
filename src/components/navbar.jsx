import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="text-white bg-primary bg-opacity-80 backdrop-blur-xl w-full fixed flex justify-center z-50">
      <div className="w-full py-4 flex justify-center items-center gap-44">
        <div className="">
          <Image src={'/logo.svg'} width={178} height={42} alt="Hajar IF" />
        </div>
        <div className="text-lg justify-center items-center gap-14 flex">
          <Link href={'/'} className='focus:text-[#FF9702] hover:text-[#FF9702]'>
            Beranda
          </Link>
          <Link href={'/tentang'} className='focus:text-[#FF9702] hover:text-[#FF9702]'>
            Tentang
          </Link>
          <Link href={'/matkul'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
            Mata Kuliah
          </Link>
          <Link href={'/lomba'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
            Lomba
          </Link>
          <Link href={'/'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
            MBKM
          </Link>
          <Link href={'/'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
            Skripsi
          </Link>
        </div>
        <Link href="a">
          <button className="px-6 py-4 bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] rounded-full drop-shadow-glowBefore hover:drop-shadow-glowAfter">Hubungi Kami</button>
        </Link>
      </div>
    </div>
  );
}

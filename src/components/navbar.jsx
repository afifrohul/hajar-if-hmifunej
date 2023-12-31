'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const currentRoute = usePathname()
  const pathSegments = currentRoute.split('/')

  const handleNav = () => {
    setNav(!nav);
  };

  const ref = useRef()
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setNav(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div className="fixed z-50 flex text-white bg-primary bg-opacity-80 backdrop-blur-xl w-fit">
      <div className="flex items-center justify-between w-screen py-4 lg:justify-around">
        <div className="">
          <Image src={'/logo.svg'} width={178} height={42} layout="fixed" alt="Hajar IF" className='scale-[60%] lg:scale-100' />
        </div>
        <div className="items-center justify-between hidden gap-10 lg:text-lg lg:flex">
          <Link href={'/'} className={pathSegments[1] === '' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
            Beranda
          </Link>
          <Link href={'/tentang'} className={pathSegments[1] === 'tentang' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
            Tentang
          </Link>
          <Link href={'/matkul'} className={pathSegments[1] === 'matkul' ? "text-[#FF9702]" : " hover:text-[#FF9702] whitespace-nowrap"}>
            Mata Kuliah
          </Link>
          <Link href={'/lomba'} className={pathSegments[1] === 'lomba' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
            Lomba
          </Link>
          <Link href={'/mbkm'} className={pathSegments[1] === 'mbkm' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
            MBKM
          </Link>
          <Link href={'/skripsi'} className={pathSegments[1] === 'skripsi' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
            Skripsi
          </Link>
        </div>
        <Link href={'/hubungi'} className="">
          <button className="hidden lg:block whitespace-nowrap px-6 py-4 bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] rounded-full drop-shadow-glowBefore hover:drop-shadow-glowAfter">Hubungi Kami</button>
        </Link>
        <div onClick={handleNav} className="mr-[5vw] lg:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={nav ? 'fixed top-0 w-screen h-screen bg-black/60' : ''}>
        <div ref={ref} className="fixed top-0 w-screen p-4 h-fit bg-primary">
          <div onClick={handleNav} className="py-4 mr-[5vw] absolute right-0 top-3">
            <AiOutlineClose size={25} />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-lg lg:text-xl pt-10 pb-4">
            <Link href={'/'} onClick={() => setNav(!nav)} className={pathSegments[1] === '' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              Beranda
            </Link>
            <Link href={'/tentang'} onClick={() => setNav(!nav)} className={pathSegments[1] === 'tentang' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              Tentang
            </Link>
            <Link href={'/matkul'} onClick={() => setNav(!nav)} className={pathSegments[1] === 'matkul' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              Mata Kuliah
            </Link>
            <Link href={'/lomba'} onClick={() => setNav(!nav)} className={pathSegments[1] === 'lomba' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              Lomba
            </Link>
            <Link href={'/mbkm'} onClick={() => setNav(!nav)} className={pathSegments[1] === 'mbkm' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              MBKM
            </Link>
            <Link href={'/skripsi'} onClick={() => setNav(!nav)} className={pathSegments[1] === 'skripsi' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              Skripsi
            </Link>
            <Link href={'/hubungi'} onClick={() => setNav(!nav)} className={pathSegments[1] === 'hubungi' ? "text-[#FF9702]" : " hover:text-[#FF9702]"}>
              Hubungi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

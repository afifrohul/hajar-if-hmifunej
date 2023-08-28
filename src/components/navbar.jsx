'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white bg-primary bg-opacity-80 backdrop-blur-xl w-fit fixed flex z-50">
      <div className="w-screen py-4 flex justify-between lg:justify-around items-center">
        <div className="">
          <Image src={'/logo.svg'} width={178} height={42} layout="fixed" alt="Hajar IF" />
        </div>
        <div className="lg:text-lg justify-between items-center hidden lg:flex">
          <Link href={'/'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
            Beranda
          </Link>
          <Link href={'/tentang'} className="focus:text-[#FF9702] hover:text-[#FF9702] ml-10">
            Tentang
          </Link>
          <Link href={'/matkul'} className="focus:text-[#FF9702] hover:text-[#FF9702] ml-10 whitespace-nowrap">
            Mata Kuliah
          </Link>
          <Link href={'/lomba'} className="focus:text-[#FF9702] hover:text-[#FF9702] ml-10">
            Lomba
          </Link>
          <Link href={'/mbkm'} className="focus:text-[#FF9702] hover:text-[#FF9702] ml-10">
            MBKM
          </Link>
<<<<<<< HEAD
          <Link href={'/skripsi'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
=======
          <Link href={'/skripsi'} className="focus:text-[#FF9702] hover:text-[#FF9702] ml-10">
>>>>>>> 9135883b0f93afa695bf688273cf8ca338d9bd49
            Skripsi
          </Link>
        </div>
        <Link href="a" className="">
          <button className="hidden lg:block whitespace-nowrap px-6 py-4 bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] rounded-full drop-shadow-glowBefore hover:drop-shadow-glowAfter">Hubungi Kami</button>
        </Link>
        <div onClick={handleNav} className="mr-[5vw] lg:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={nav ? 'fixed top-0 w-screen h-screen bg-black/60' : ''}>
        <div className="fixed top-0 w-screen h-fit bg-primary p-4">
          <div onClick={handleNav} className="py-4 mr-[5vw] flex justify-end">
            <AiOutlineClose size={25} />
          </div>
          <div className="flex-col gap-6 justify-center items-center flex text-lg lg:text-xl">
            <Link href={'/'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
              Beranda
            </Link>
            <Link href={'/tentang'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
              Tentang
            </Link>
            <Link href={'/matkul'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
              Mata Kuliah
            </Link>
            <Link href={'/lomba'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
              Lomba
            </Link>
            <Link href={'/mbkm'} className="focus:text-[#FF9702] hover:text-[#FF9702]">
              MBKM
            </Link>
            <Link href={'/skripsi'} className="focus:text-[#FF9702] hover:text-[#FF9702] mb-2">
              Skripsi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

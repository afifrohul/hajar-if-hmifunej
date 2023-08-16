import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

export default function Lomba() {
    return (
        <div>
            <Hero
                title='Lomba-Lomba Informatika'
                description='Memberikan informasi terkait lomba-lomba yang berkaitan dengan Informatika'
                buttonLink='#'
            />
            <div className='flex flex-col items-center justify-center px-4 bg-secondary'>
                <div className='py-20'>
                    <Image src={'/badge.svg'} width={160} height={160} alt='' className='mx-auto' />
                    <h2 className='font-bold text-[60px]'>PERLOMBAAN DAN PRESTASI INFORMATIKA</h2>
                </div>
                <div>
                    <h2 className='font-bold text-[60px]'>Bidang Perlombaan di Jurusan Informatika</h2>
                    <div className='flex justify-center gap-10 py-16'>
                        <Link href={'#'}>
                            <button className='bg-[#ED1C24] rounded-2xl w-[180px] h-[70px] font-bold text-white text-3xl border-4 border-[#ED1C24] hover:text-black hover:bg-transparent '>PPL</button>
                        </Link>
                        <Link href={'#'}>
                            <button className='bg-transparent rounded-2xl w-[180px] h-[70px] font-bold text-black text-3xl border-4 border-[#ED1C24] hover:text-white hover:bg-[#ED1C24] '>UI/UX</button>
                        </Link>
                        <Link href={'#'}>
                            <button className='bg-[#ED1C24] rounded-2xl w-[180px] h-[70px] font-bold text-white text-3xl border-4 border-[#ED1C24] hover:text-black hover:bg-transparent '>Web Dev</button>
                        </Link>
                        <Link href={'#'}>
                            <button className='bg-transparent rounded-2xl w-[180px] h-[70px] font-bold text-black text-3xl border-4 border-[#ED1C24] hover:text-white hover:bg-[#ED1C24] '>CPC</button>
                        </Link>
                        <Link href={'#'}>
                            <button className='bg-[#ED1C24] rounded-2xl w-[180px] h-[70px] font-bold text-white text-3xl border-4 border-[#ED1C24] hover:text-black hover:bg-transparent '>PAP</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='text-white bg-primary'>
            <div className='bg-gradient-to-br from-[#FFE600] to-[#FF9702] '>
                <Marquee speed={100}>
                    <p className='font-bold text-base lg:text-[52px] py-4 lg:py-8 tracking-widest text-black'>
                        ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                    </p>
                </Marquee>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 container py-20 border-b border-[#FF9B00]'>
                <div className='max-w-xl'>
                    <Image src={'/logo.svg'} width={178} height={42} alt='Hajar IF' />
                    <p className='py-4 text-lg'>Menyediakan segala kebutuhan bahan belajar bagi mahasiswa program studi Informatika serta dokumentasi portofolio yang memiliki prestasi baik di perkuliahan maupun luar perkuliahan</p>
                    <div className='flex gap-8 pt-8'>
                        <Link href={'https://www.instagram.com/hmifunej/'} target='_blank' className='bg-[#FF9B00] w-8 h-8 rounded-full flex items-center justify-center'><FaInstagram className='w-5 h-5' /></Link>
                        <Link href={'https://www.linkedin.com/company/hmif-unej/'} target='_blank' className='bg-[#FF9B00] w-8 h-8 rounded-full flex items-center justify-center'><FaLinkedin target='_blank' className='w-5 h-5' /></Link>
                        <Link href={'https://www.youtube.com/@hmifunej'} target='_blank' className='bg-[#FF9B00] w-8 h-8 rounded-full flex items-center justify-center'><FaYoutube className='w-5 h-5' /></Link>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <h4 className='text-2xl font-medium'>Halaman</h4>
                    <ul className='grid grid-cols-3 pt-5 text-lg gap-x-10'>
                        <li><Link href={'/'} className='hover:text-[#FF9702]'>Beranda</Link></li>
                        <li><Link href={'/tentang'} className='hover:text-[#FF9702]'>Tentang</Link></li>
                        <li><Link href={'/mata-kuliah'} className='hover:text-[#FF9702]'>Mata Kuliah</Link></li>
                        <li><Link href={'/lomba'} className='hover:text-[#FF9702]'>Lomba</Link></li>
                        <li><Link href={'/mbkm'} className='hover:text-[#FF9702]'>MBKM</Link></li>
                        <li><Link href={'/skripsi'} className='hover:text-[#FF9702]'>Skripsi</Link></li>
                    </ul>
                </div>
            </div>
            <p className='py-10 text-sm lg:text-lg text-center'>© Made with love by HMIF UNEJ</p>
        </div>
    )
}

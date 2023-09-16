import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Hero(props) {
    const { title, description, buttonLink } = props
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-primary bg-grid'>
            <Image src={'/hero-image.svg'} width={220} height={220} alt='Hero' className='mt-10 lg:hidden'/>
            <div className='flex flex-wrap lg:flex-nowrap items-center px-4 mx-auto space-x-40'>
                <div className='max-w-4xl text-white'>
                    <h1 className=' mb-6 lg:mb-12 font-bold mt-12 lg:mt-0 text-4xl lg:text-7xl'>{title}</h1>
                    <p className='text-base lg:text-2xl font-medium'>{description}</p>
                    <Link href={buttonLink}>
                        <button className='text-sm py-2 px-3 lg:text-xl lg:px-8 lg:py-6 mt-8 bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] rounded-full drop-shadow-glowBefore hover:drop-shadow-glowAfter'>Selengkapnya</button>
                    </Link>
                </div>
                <div className='hidden lg:block'>
                    <Image src={'/hero-image.svg'} width={580} height={590} alt='Hero' className='lg:mx-auto'/>
                </div>
            </div>
            <div className='hidden lg:block absolute bottom-0 w-full overflow-hidden text-center py-14'>
                <p className='py-1 text-[52px] w-[101%] -ml-2 font-bold bg-gradient-to-bl from-[#FF9B00] to-[#ED1C24] rotate-3 tracking-widest'>
                    <Marquee direction='right' speed={100}>
                        ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                    </Marquee>
                </p>
            </div>
            <div className='hidden lg:block absolute bottom-0 w-full overflow-hidden text-center py-14'>
                <p className='py-1 text-[52px] w-[101%] -ml-2 font-bold bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] -rotate-3 tracking-widest'>
                    <Marquee direction='left' speed={100}>
                        ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                    </Marquee>
                </p>
            </div>
        </div>
    )
}

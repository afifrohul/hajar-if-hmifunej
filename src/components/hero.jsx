import Link from 'next/link'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Hero(props) {
    const { title, description, buttonLink } = props
    return (
        <div className='flex items-center justify-center bg-no-repeat bg-cover lg:h-screen bg-primary bg-grid'>
            <div className='container flex flex-col items-center justify-center py-10'>
                <Image src={'/hero-image.svg'} width={400} height={400} alt='Hero' className='px-10 mt-20 lg:hidden' />
                <div className='flex flex-wrap items-center px-4 mx-auto space-x-40 lg:flex-nowrap'>
                    <div className='max-w-4xl text-white'>
                        <h1 className='mt-12 mb-6 text-4xl font-bold lg:mb-12 lg:mt-0 lg:text-7xl'>{title}</h1>
                        <p className='text-base font-medium lg:text-2xl'>{description}</p>
                        <Link href={buttonLink}>
                            <button className='text-sm py-3 px-4 lg:text-xl lg:px-8 lg:py-6 mt-8 bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] rounded-full drop-shadow-glowBefore hover:drop-shadow-glowAfter'>Selengkapnya</button>
                        </Link>
                    </div>
                    <div className='hidden w-full lg:block'>
                        <Image src={'/hero-image.svg'} width={580} height={590} alt='Hero' className='lg:mx-auto' />
                    </div>
                </div>
                <div className='absolute bottom-0 hidden w-full overflow-hidden text-center lg:block py-14'>
                    <p className='py-1 text-[52px] w-[101%] -ml-2 font-bold bg-gradient-to-bl from-[#FF9B00] to-[#ED1C24] rotate-3 tracking-widest'>
                        <Marquee direction='right' speed={100}>
                            ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                        </Marquee>
                    </p>
                </div>
                <div className='absolute bottom-0 hidden w-full overflow-hidden text-center lg:block py-14'>
                    <p className='py-1 text-[52px] w-[101%] -ml-2 font-bold bg-gradient-to-br from-[#FF9B00] to-[#ED1C24] -rotate-3 tracking-widest'>
                        <Marquee direction='left' speed={100}>
                            ❤️KUMPULAN BAHAN BELAJAR INFORMATIKA❤️
                        </Marquee>
                    </p>
                </div>
            </div>
        </div>
    )
}

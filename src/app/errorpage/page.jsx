import Image from "next/image";
import Link from "next/link";


export default function Errorpage(){
    return(
        <div className="mx-auto">
            <div className='flex flex-col items-center justify-center h-screen bg-no-repeat bg-cover bg-primary bg-grid'>
                <div className='flex items-center px-4 mx-auto space-x-40'>
                    <div className='max-w-4xl text-white'>
                        <Image src={'/error404.svg'} width={1109} height={467}/>
                        <h1 className='mb-12 font-medium text-center text-xl'>Halaman yang kamu cari tidak ditemukan, untuk kembali ke tombol di bawah</h1>
                        <Link href={'/'}>
                            <p className='text-lg font-medium text-center opacity-80 from-amber-500 leading-7'>Kembali ke Beranda</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
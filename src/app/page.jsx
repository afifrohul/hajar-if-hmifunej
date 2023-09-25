import Hero from "@/components/hero";
import Link from "next/link";
import Image from "next/image";
import BlueChecklistIcon from "./assets/checklist-blue.svg"
import RedChecklistIcon from "./assets/checklist-red.svg"
import OrangeChecklistIcon from "./assets/checklist-orange.svg"
import GreenChecklistIcon from "./assets/checklist-green.svg"


export default function Home() {
    return (
        <div>
            <Hero
                title='Kumpulan Bahan Belajar Informatika'
                description='Menyediakan segala kebutuhan bahan belajar bagi mahasiswa program studi Informatika serta dokumentasi portofolio yang memiliki prestasi baik di perkuliahan maupun luar perkuliahan'
                buttonLink='tentang'
            />
            <div className="container flex flex-col items-center justify-center max-h-screen">
                <div className="items-center px-4 py-10 mx-auto">
                    <div className="flex flex-wrap gap-10 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                        <Link className="flex items-center justify-start gap-3" href={'matkul'}>
                            <Image
                                src={"/book.png"}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>MATA KULIAH INFORMATIKA</p>
                                <p>UNIVERSITAS JEMBER</p>
                            </div>

                        </Link>
                        <Link className="flex items-center justify-start gap-3" href={'lomba'}>
                            <Image
                                src={"/prestasi.png"}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>PERLOMBAAN DAN PRESTASI</p>
                                <p>INFORMATIKA</p>
                            </div>
                        </Link>

                        <Link className="flex items-center justify-start gap-3" href={'mbkm'}>
                            <Image
                                src={"/mbkm.png"}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>MERDEKA BELAJAR</p>
                                <p>KAMPUS MERDEKA</p>
                            </div>
                        </Link>

                        <Link className="flex items-center justify-start gap-3" href={'skripsi'}>
                            <Image
                                src={"/skripsi.png"}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>SKRIPSI INFORMATIKA</p>
                                <p>UNIVERSITAS JEMBER</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col items-center justify-center gap-1">
                <div className="max-w-screen-2xl">
                    <div className="flex items-center justify-start gap-40 mb-16 lg:mb-0">
                        <Image src={'/woman-hero-image.png'} width={580} height={590} alt="" className="hidden lg:block" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-2 leading-4 lg:gap-12">
                                <h1 className="text-3xl font-bold lg:text-6xl">Mata Kuliah Informatika Universitas Jember</h1>
                                <p className="text-lg leading-loose lg:text-xl">Rincian mata kulliah yang dapat ditempuh oleh mahasiswa program studi Informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Terbaru</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Sesuai Kurikulum</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Mudah Dipelajari</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Informatif</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-40 mb-16 lg:mb-0">
                        <Image src={'/man-hero-image.svg'} width={580} height={590} alt="" className="order-last hidden lg:block" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-2 leading-4 lg:gap-12">
                                <h1 className="text-3xl font-bold lg:text-6xl ">Perlombaan dan Prestasi Informatika</h1>
                                <p className="text-lg leading-loose lg:text-xl">Informasi seputar perlombaan yang pernah diikuti dan dapat diikuti oleh mahasiswa informatika serta prestasi-prestasi yang pernah diraih oleh mahasiswa informatika.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Informasi Lomba</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Data Prestasi</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Testimoni Lomba</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Informatika Jaya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-40 mb-16 lg:mb-0">
                        <Image src={'/woman-hero-image.png'} width={580} height={590} alt="" className="order-first hidden lg:block" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-2 leading-4 lg:gap-12">
                                <h1 className="text-3xl font-bold lg:text-6xl ">Merdeka Belajar Kampus Merdeka (MBKM)</h1>
                                <p className="text-lg leading-loose lg:text-xl">Informasi seputar MBKM seperti jenis MBKM, bidang yang dapat diambil, dan juga list mitra yang berhubungan dengan program studi informatika.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Magang/Praktek Kerja</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Testimoni Mahasiswa</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Studi Independent</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Informasi Mitra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-40 mb-16 lg:mb-0">
                        <Image src={'/skripsi-hero-image.svg'} width={580} height={590} alt="" className="order-last hidden lg:block" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-2 leading-4 lg:gap-12">
                                <h1 className="text-3xl font-bold lg:text-6xl ">Skripsi Informatika Universitas Jember</h1>
                                <p className="text-lg leading-loose lg:text-xl">Arsip skripsi mahasiswa informatika yang bisa dijadikan refensi bagi mahasiswa informatika lainnya. Beberapa indormasi yang dapat diakses seperti judul, deskripsi, dan file sempro.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Magang/Praktek Kerja</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Testimoni Mahasiswa</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Studi Independent</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                            className="w-8 lg:w-12"
                                        />
                                        <p>Informasi Mitra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 text-white bg-primary lg:px-0">
                <div className='bg-no-repeat bg-cover bg-grid'>
                    <div className='flex items-center justify-center gap-10 max-w-[1400px] mx-auto py-20'>
                        <Image src={'footer-image.svg'} width={600} height={600} alt='' className="hidden lg:block" />
                        <div>
                            <h3 className='text-3xl lg:text-5xl font-medium'>Yuk, Belajar Bersama Untuk Memajukan Informatika!!!</h3>
                            <p className='pt-6 text-base lg:text-xl'>Dengan adanya HAJAR IF, Mahasiswa Informatika dapat mempelajari materi dari mata kuliah secara detail yang ada di tiap semester dan jadi lebih paham tentang materi yang akan diajakan di semester depan ~</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Image from "next/image";
import BookIcon from "./assets/book.png"
import PrestasiIcon from "./assets/prestasi.png"
import MBKMIcon from "./assets/mbkm.png"
import SkripsiIcon from "./assets/skripsi.png"
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
                buttonLink='A'
            />
            <div className="flex flex-col items-center justify-center max-h-screen">
                <div className="items-center px-4 py-10 mx-auto space-x-40">
                    <div className="flex gap-40">
                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={BookIcon}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>MATA KULIAH INFORMATIKA</p>
                                <p>UNIVERSITAS JEMBER</p>
                            </div>

                        </div>
                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={PrestasiIcon}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>PERLOMBAAN DAN PRESTASI</p>
                                <p>INFORMATIKA</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={MBKMIcon}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>MERDEKA BELAJAR</p>
                                <p>KAMPUS MERDEKA</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start gap-3">
                            <Image
                                src={SkripsiIcon}
                                width={60}
                                height={60}
                                alt="Book"
                            />
                            <div className="">
                                <p>SKRIPSI INFORMATIKA</p>
                                <p>UNIVERSITAS JEMBER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="max-w-screen-2xl">
                    <div className="flex items-center justify-start gap-40 ">
                        <img src={'/woman-hero-image.svg'} width={580} height={590} alt="" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-12 leading-4">
                                <h1 className="text-6xl font-bold">Mata Kuliah Informatika Universitas Jember</h1>
                                <p className="text-xl leading-loose">Rincian mata kulliah yang dapat ditempuh oleh mahasiswa program studi Informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Terbaru</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Sesuai Kurikulum</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Mudah Dipelajari</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={BlueChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Informatif</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-40">
                        <img src={'/man-hero-image.svg'} width={580} height={590} alt="" className="order-last" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-12 leading-4">
                                <h1 className="text-6xl font-bold ">Perlombaan dan Prestasi Informatika</h1>
                                <p className="text-xl leading-loose">Informasi seputar perlombaan yang pernah diikuti dan dapat diikuti oleh mahasiswa informatika serta prestasi-prestasi yang pernah diraih oleh mahasiswa informatika.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Informasi Lomba</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Data Prestasi</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Testimoni Lomba</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={RedChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Informatika Jaya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-40">
                        <img src={'/woman-hero-image.svg'} width={580} height={590} alt="" className="order-first" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-12 leading-4">
                                <h1 className="text-6xl font-bold ">Merdeka Belajar Kampus Merdeka (MBKM)</h1>
                                <p className="text-xl leading-loose">Informasi seputar MBKM seperti jenis MBKM, bidang yang dapat diambil, dan juga list mitra yang berhubungan dengan program studi informatika.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Magang/Praktek Kerja</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Testimoni Mahasiswa</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Studi Independent</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={OrangeChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Informasi Mitra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-start gap-40">
                        <img src={'/skripsi-hero-image.svg'} width={580} height={590} alt="" className="order-last" />
                        <div className="items-center">
                            <div className="flex flex-col items-start justify-start gap-12 leading-4">
                                <h1 className="text-6xl font-bold ">Skripsi Informatika Universitas Jember</h1>
                                <p className="text-xl leading-loose">Arsip skripsi mahasiswa informatika yang bisa dijadikan refensi bagi mahasiswa informatika lainnya. Beberapa indormasi yang dapat diakses seperti judul, deskripsi, dan file sempro.</p>
                                <div className="grid items-center grid-cols-2 gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Magang/Praktek Kerja</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Testimoni Mahasiswa</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Studi Independent</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Image
                                            src={GreenChecklistIcon}
                                            width={60}
                                            height={60}
                                        />
                                        <p>Informasi Mitra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white bg-primary">
                <div className='bg-no-repeat bg-cover bg-grid'>
                    <div className='flex items-center justify-center gap-10 max-w-[1400px] mx-auto py-20'>
                        <Image src={'footer-image.svg'} width={600} height={600} alt='' />
                        <div>
                            <h3 className='text-5xl font-medium'>Yuk, Belajar Bersama Untuk Memajukan Informatika!!!</h3>
                            <p className='pt-6 text-xl'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
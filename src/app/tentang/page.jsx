import Image from "next/image";

export default function Tentang() {

    return (
        <>
            <section className="flex flex-warp items-center justify-center bg-no-repeat bg-cover bg-primary bg-grid h-[400px] lg:h-[500px]">
                <div className="max-w-[1400px] p-5 flex flex-wrap lg:flex-nowrap items-center justify-between w-full">
                    <div className="max-w-2xl text-white order-2 lg:order-1">
                        <h1 className="mb-6 lg:mb-12 font-bold text-3xl lg:text-7xl">Tentang K<span className="underline decoration-orange-500">ami</span></h1>
                        <p className="text-lg opacity-80">Cari tau lebih dalam agar kamu tidak salah paham. Kunjungi website kami buat tau info terbaru!</p>
                    </div>
                    <div className="lg:block hidden lg:order-2 lg:mb-0 mb-6">
                        <Image src={'/logo.svg'} width={520} height={200} alt="Hajar IF" className="mt-10 px-10 lg:px-0 lg:mt-0" />
                    </div>
                </div>
            </section>

            <section className="items-center justify-center">
                <div className="container py-10 lg:py-16">
                    <div className="text-xl lg:text-4xl bg-amber-500 rounded-2xl w-fit p-4 font-bold lg:mx-0 mx-auto mb-8">Apa itu &quot;Hajar IF&quot;?</div>
                    <div className="flex gap-36 items-center" data-aos='fade-up' data-aos-once={true}>
                        <Image
                            src={'woman-hero-image.svg'}
                            width={500}
                            height={200}
                            className="lg:block hidden"
                            alt=""
                        />
                        <p className="items-center justify-center lg:text-xl text-base lg:leading-9 lg:text-justify">
                            Hajar IF adalah sebuah platform digital yang berisi tentang refrensi pembelajaran untuk mahasiswa Informatika Universitas Jember. Hajar IF berisi tentang materi Mata Kuliah, testimoni MBKM, refrensi Skripsi, dan refrensi  hasil karya dalam perlombaan. Dengan adanya Hajar IF, diharapkan  dapat membantu teman-teman mahasiswa untuk mendapatkan wawasan atau bekal di dunia perkuliahan nantinya.
                        </p>
                    </div>
                </div>
                <div className="container py-10 lg:py-16">
                    <div className="flex justify-center items-center">
                        <h1 className="text-xl lg:text-4xl text-center bg-amber-500 rounded-2xl w-fit p-4 font-bold mb-6">Apa saja fitur di &quot;Hajar IF&quot;?</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-center lg:gap-36 gap-4 lg:mt-10" data-aos='fade-up' data-aos-once={true}>
                        <div className="">
                            <h1 className="text-xl font-bold">Mata Kuliah</h1>
                            <p className="text-base">Mata kuliah merupakan hal penting yang harus kamu ketahui biar ga tersesat.</p>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-bold">MBKM</h1>
                            <p className="text-base">Di fase ini, hidup tenang di awal, susah di belakang.</p>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-bold">Skripsi</h1>
                            <p className="text-base">Apalagi fase ini, kamu harus kuat biar bisa wisuda dan banggain orang tua.</p>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-bold">Lomba</h1>
                            <p className="text-base">Biar gabutmu berguna, mending ikut ikut lomba buat ngisi portofolio juga.</p>
                        </div>
                    </div>
                </div>
                <div className="container py-10 lg:py-16">
                    <div className="flex justify-end items-end">
                        <h1 className="text-2xl lg:text-4xl bg-amber-500 rounded-2xl w-fit p-4 font-bold mb-6 flex lg:mx-0 mx-auto">Manfaat &quot;Hajar IF&quot;?</h1>
                    </div>
                    <div className="flex gap-36 items-center" data-aos='fade-up' data-aos-once={true}>
                        <p className="items-center justify-center lg:text-xl text-base lg:leading-9 lg:text-justify">
                            Hajar IF sendiri dibuat untuk membantu mahasiswa Informatika dalam dunia perkuliahan. Dengan adanya Hajar If, mahasiswa Informatika dapat melihat materi dan mata kuliah secara detail yang ada di tiap semester. Selain itu, Hajar IF juga memberikan testimoni mahasiswa yang telah melaksanakan MBKM, sehingga diharapkan hal tersebut bisa menjadi pembelajaran untuk kita semua.
                        </p>
                        <Image
                            src={'man-hero-image.svg'}
                            width={500}
                            height={200}
                            className="lg:block hidden"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-warp items-center justify-center bg-no-repeat bg-cover bg-primary h-[500px] text-white">
                <div className="container py-16">
                    <h1 className="text-xl lg:text-4xl rounded-2xl w-fit font-bold mb-6">Kontak Kami</h1>
                    <div className="grid gap-4 lg:gap-40 grid-cols-1 lg:grid-cols-3 justify-center sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <Image
                                src={'/maps.svg'}
                                width={100}
                                height={200}
                                className="hidden lg:block"
                                alt=""
                            />
                            <h1 className="text-sm lg:text-xl font-bold">Fakultas Ilmu Komputer</h1>
                            <h1 className="text-sm lg:text-xl font-bold">Universitas Jember</h1>
                            <p className="text-sm lg:text-md">Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Image
                                src={'/call.svg'}
                                width={100}
                                height={200}
                                className="hidden lg:block"
                                alt=""
                            />
                            <h1 className="text-md lg:text-xl font-bold">Call</h1>
                            <p className="text-sm lg:text-md">+62856-0481-1805 (Afifah)</p>
                            <p className="text-sm lg:text-md">+62895-3663-37684 (Arvito)</p>
                            <p className="text-sm lg:text-md">+62821-4340-7573 (Deana)</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Image
                                src={'/mail.svg'}
                                width={100}
                                height={200}
                                className="hidden lg:block"
                                alt=""
                            />
                            <h1 className="text-md lg:text-xl font-bold">Email</h1>
                            <p className="text-sm lg:text-md">hmif@cs.unej.ac.id</p>
                            <p className="text-sm lg:text-md">hmifunej@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
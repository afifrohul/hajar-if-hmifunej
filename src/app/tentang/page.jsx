import Image from "next/image";
import LogoHajarIF from "src/app/assets/Logo Hajar IF 2.png";

export default function Tentang(){

    return(
        <div className="dark:bg-gray-900">
            <section className="font-sans h-[537px] flex items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#2D4356] via-[#435B66CC] to-[#344D6700]">
                <div className="">
                    <div className="text-center text-white m-9">
                        <h1 className="text-6xl font-bold mb-4 drop-shadow-md">TENTANG HAJAR <span className="text-emerald-400">IF</span></h1>
                        <p className="text-xl font-normal">Penasaran apa itu “Hajar IF”? Yukk cari tau informasi lengkapnya disini!</p>
                    </div>
                </div>
            </section>

            <section className="font-sans h-[537px] flex items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32 ">
                <div className="m-40 relative flex items-center gap-20 " >

                    <div className="flex flex-col justify-center">
                        <div className="text-stone-900 text-3xl font-bold leading-10 dark:text-white">Apa itu “Hajar IF”?</div>
                        <div className="text-justify text-stone-900 text-lg font-normal mt-4 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
                        </div>
                        
                    </div>
                    <Image className="w-[863px] h-[135px] mx-auto drop-shadow-lg" src={LogoHajarIF} />
                </div>
                
            </section>

            <div className="mx-32">
                <div className=" flex-1 border-b-2 border-dashed border-gray-900 dark:border-gray-600"/>
            </div>
            
            <section className="font-sans h-[537px] flex items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32 dark:bg-gray-900">
                <div className="mx-40 relative">
                    <div className="px-36 gap-7 grid">
                        <div className="text-center text-stone-900 text-3xl font-bold dark:text-white">Hal apa saja yang ada di Hajar IF?</div>
                        <div className="text-center text-stone-900 text-lg font-normal dark:text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</div>
                    </div>
                </div>
            </section>
            
            <div className="mx-32">
                <div className=" flex-1 border-b-2 border-dashed border-gray-900 dark:border-gray-600"/>
            </div>

            <section className="font-sans h-[537px] flex items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32 dark:bg-gray-900">
                <div className="m-40 relative items-center" >
                    <div className="flex flex-col justify-center text-right gap-7">
                        <div className="text-stone-900 dark:text-white text-3xl font-bold leading-10">Apa itu “Hajar IF”?</div>
                        <div className=" text-stone-900 dark:text-white text-lg font-normal mt-4">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
                        </div>
                        <div className="flex items-center flex-row justify-center gap-6">
                            <div className="w-60 bg-gray-200 p-4 rounded-3xl inline-block text-center">
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <div className="w-60 bg-gray-200 p-4 rounded-3xl inline-block text-center">
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <div className="w-60 bg-gray-200 p-4 rounded-3xl inline-block text-center">
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <div className="w-60 bg-gray-200 p-4 rounded-3xl inline-block text-center">
                                <p>Lorem ipsum dolor</p>
                            </div>
                            <div className="w-60 bg-gray-200 p-4 rounded-3xl inline-block text-center">
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="font-sans h-[537px] flex items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-[#435B66CC] to-[#2D4356]">
            <div className="w-10/12 my-40 rounded-xl">
                <div className="text-center py-4">
                <h1 className="text-3xl font-extrabold text-black dark:text-white">
                    HUBUNGI KAMI DISINI !
                </h1>
                </div>

                <div className="flex md:justify-center items-center gap-x-20 mt-10 md:flex-row flex-col dark:text-white">
                <div className="w-60 p-3 flex flex-col items-center justify-start" style={{ height: "350px" }}>
                    <div className="bg-green-100 w-28 h-28 flex rounded-full shadow-2xl text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-12 w-12 m-auto">
                        <path fill="#34d399" d="M408 120C408 174.6 334.9 271.9 302.8 311.1C295.1 321.6 280.9 321.6 273.2 311.1C241.1 271.9 168 174.6 168 120C168 53.73 221.7 0 288 0C354.3 0 408 53.73 408 120zM288 152C310.1 152 328 134.1 328 112C328 89.91 310.1 72 288 72C265.9 72 248 89.91 248 112C248 134.1 265.9 152 288 152zM425.6 179.8C426.1 178.6 426.6 177.4 427.1 176.1L543.1 129.7C558.9 123.4 576 135 576 152V422.8C576 432.6 570 441.4 560.9 445.1L416 503V200.4C419.5 193.5 422.7 186.7 425.6 179.8zM150.4 179.8C153.3 186.7 156.5 193.5 160 200.4V451.8L32.91 502.7C17.15 508.1 0 497.4 0 480.4V209.6C0 199.8 5.975 190.1 15.09 187.3L137.6 138.3C140 152.5 144.9 166.6 150.4 179.8H150.4zM327.8 331.1C341.7 314.6 363.5 286.3 384 255V504.3L192 449.4V255C212.5 286.3 234.3 314.6 248.2 331.1C268.7 357.6 307.3 357.6 327.8 331.1L327.8 331.1z" />
                    </svg>
                    </div>

                    <div className="mt-10">
                    <h1 className="text-xl font-bold">Universitas Jember</h1>
                    <p className="mt-5">
                        Jl. Kalimantan Tegalboto No.37, Krajan Timur, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121
                    </p>
                    </div>
                </div>
                <div className="w-60 p-3 flex flex-col items-center justify-start" style={{ height: "350px" }}>
                    <div className="bg-green-100 w-28 h-28 flex rounded-full shadow-2xl text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 m-auto">
                        <path fill="#34d399" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                    </svg>
                    </div>
                    <div className="mt-10">
                    <h1 className="text-xl font-bold">Call</h1>
                    <p className="mt-5">
                        <span className="w-100">+62856-0481-1805 (Afifah)</span><br />
                        <span className="w-100">+62895-3663-37684 (Arvito)</span><br />
                        <span className="w-100">+62821-4340-7573 (Deana)</span><br />
                    </p>
                    </div>
                </div>
                <div className="w-60 p-3 flex flex-col items-center justify-start" style={{ height: "350px" }}>
                    <div className="bg-green-100 w-28 h-28 flex rounded-full shadow-2xl text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-12 w-12 m-auto">
                        <path fill="#34d399" d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                    </svg>
                    </div>
                    <div className="mt-10">
                    <h1 className="text-xl font-bold">Email</h1>
                    <p className="mt-5">
                        <span className="w-100">hmif@cs.unej.ac.id</span><br />
                        <span className="w-100">hmifunej@gmail.com</span>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>



    );
};
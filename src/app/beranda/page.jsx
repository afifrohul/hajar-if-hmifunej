import React from "react";
import Image from "next/image";
import LogoHajarIF from "src/app/assets/Logo Hajar IF 2.png";
import Link from "next/link";

export default function Beranda() {
  return (
    <div className="dark:bg-gray-600 font-sans dark:text-white">
      <header className="w-full h-[537px] bg-gradient-to-b from-[#2D4356] via-[#435B66CC] to-[#344D6700] flex flex-col justify-center items-center text-center text-white">
        <Image
          src={LogoHajarIF}
          width={1212}
          height={190}
          alt="Hajar IF"
          className="py-8"
        />
        <h1 className="text-2xl font-bold uppercase">
          Kumpulan Bahan Belajar Informatika
        </h1>
        <p className="max-w-3xl text-lg pt-2">
          Menyediakan segala kebutuhan bahan belajar bagi mahasiswa program studi
          Informatika serta dokumentasi portofolio mahasiswa informatika yang
          memiliki prestasi baik di dunia perkuliahan maupun luar perkuliahan.
        </p>
        <Link href="" className="flex justify-center pt-5">
          <button className="bg-[#569DAA] hover:bg-[#47818B] flex justify-center gap-6 py-3 px-6 items-center rounded-[10px] text-lg text-white">
            Selengkapnya
            <Image src="right.svg" width={24} height={24} alt="right-arrow" className="text-black" />
          </button>
        </Link>
      </header>

      <div className="w-5/6 mx-auto m-16">
        <h1 className="text-2xl font-bold ">Kumpulan Bahan Pembelajaran</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9">
          <div className="w-[342px] h-[486px] p-9 dark:bg-slate-300 bg-slate-100 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch h-[317px] pb-[22px] flex-col justify-start items-start gap-[25px] flex">
                            <div className="w-[270px] text-zinc-500 text-xl font-bold uppercase dark:text-zinc-700">Mata kuliah informatika</div>
                            <div className="w-[270px] h-[244px] text-slate-400 dark:text-zinc-600 text-lg font-normal leading-[35px]">Rincian mata kulliah yang dapat ditempuh oleh mahasiswa program studi informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</div>
                        </div>
          </div>
          <div className="w-[342px] h-[486px] p-9 bg-slate-100 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch h-[317px] pb-[22px] flex-col justify-start items-start gap-[25px] flex">
                            <div className="w-[270px] text-zinc-500 text-xl font-bold uppercase">Perlombaan dan Prestasi</div>
                            <div className="w-[270px] h-[244px] text-slate-400 text-lg font-normal leading-[35px]">Rincian mata kulliah yang dapat ditempuh oleh mahasiswa program studi informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</div>
                        </div>
          </div>
          <div className="w-[342px] h-[486px] p-9 bg-slate-100 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch h-[317px] pb-[22px] flex-col justify-start items-start gap-[25px] flex">
                            <div className="w-[270px] text-zinc-500 text-xl font-bold uppercase">Merdeka Belajar Kampus Merdeka (MBKM)</div>
                            <div className="w-[270px] h-[244px] text-slate-400 text-lg font-normal leading-[35px]">Rincian mata kulliah yang dapat ditempuh oleh mahasiswa program studi informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</div>
                        </div>
          </div>
          <div className="w-[342px] h-[486px] p-9 bg-slate-100 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch h-[317px] pb-[22px] flex-col justify-start items-start gap-[25px] flex">
                            <div className="w-[270px] text-zinc-500 text-xl font-bold uppercase">Skripsi</div>
                            <div className="w-[270px] h-[244px] text-slate-400 text-lg font-normal leading-[35px]">Rincian mata kulliah yang dapat ditempuh oleh mahasiswa program studi informatika di Universitas Jember, jumlah SKS per semesternya yang sudah sesuai dengan kurikulum yang sedang digunakan.</div>
                        </div>
          </div>
        </div>
      </div>

      <section className="w-5/6 mx-auto m-16">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-none w-[450px] h-[450px] bg-zinc-300" />
          <div className="p-24">
            <h1 className="text-2xl font-bold uppercase">Mata kuliah mahasiswa informatika</h1>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
              in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
              nibh nibh, at maximus ante.
            </p>
            <button className="w-[137px] h-8 px-6 py-2 rounded border border-black justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black text-sm font-normal leading-none">Selengkapnya</div>
            </button>
          </div>
        </div>
      </section>

      <section className="w-5/6 mx-auto m-16">
        <div className="flex flex-col-reverse sm:flex-row-reverse">
          <div className="flex-none w-[450px] h-[450px] bg-zinc-300" />
          <div className="p-24">
            <h1 className="text-2xl font-bold uppercase">Mata kuliah mahasiswa informatika</h1>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
              in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
              nibh nibh, at maximus ante.
            </p>
            <button className="w-[137px] h-8 px-6 py-2 rounded border border-black justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black text-sm font-normal leading-none">Selengkapnya</div>
            </button>
          </div>
        </div>
      </section>

      <section className="w-5/6 mx-auto m-16">
        <div className="flex flex-col sm:flex-row">
          <div className="flex-none w-[450px] h-[450px] bg-zinc-300 " />
          <div className="p-24">
            <h1 className="text-2xl font-bold uppercase">Mata kuliah mahasiswa informatika</h1>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
              in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
              nibh nibh, at maximus ante.
            </p>
            <button className="w-[137px] h-8 px-6 py-2 rounded border border-black justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black text-sm font-normal leading-none">Selengkapnya</div>
            </button>
          </div>
        </div>
      </section>

      <section className="w-5/6 mx-auto m-16">
        <div className="flex flex-col-reverse sm:flex-row-reverse">
          <div className="flex-none w-[450px] h-[450px] bg-zinc-300" />
          <div className="p-24">
            <h1 className="text-2xl font-bold uppercase">Mata kuliah mahasiswa informatika</h1>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
              in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
              nibh nibh, at maximus ante.
            </p>
            <button className="w-[137px] h-8 px-6 py-2 rounded border border-black justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black text-sm font-normal leading-none">Selengkapnya</div>
            </button>
          </div>
        </div>
      </section>


      <section className="flex justify-center items-center">
        <span className="shadow-sm box-decoration-clone bg-zinc-300 text-black px-20 py-4 leading-10 rounded-[40px] text-3xl font-bold">
          YUK, BELAJAR BERSAMA KAMI!
        </span>
      </section>

      <section className="bg-gradient-to-b from-[#344D6700] via-[#435B66CC] to-[#2D4356]" data-v-65261b50="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-v-65261b50="">
               <div class="flex flex-col items-center justify-between xl:flex-row" data-v-65261b50="">
                <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12" data-v-65261b50="">
                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 dark:text-white sm:text-4xl sm:leading-none" data-v-65261b50="">
                    Hey, <br class="hidden md:block" data-v-65261b50=""/>
                    Ada masukan untuk kami ?
                    </h2>
                    <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg" data-v-65261b50="">
                    Kami tunggu saran dan masukan anda
                    </p>
                </div>
                <div class="w-full max-w-xl xl:px-8 xl:w-5/12" data-v-65261b50="">
                    <div class="relative" data-v-65261b50="">
                    <svg viewBox="0 0 52 24" fill="#34d399" class="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block" data-v-65261b50="">
                        <defs data-v-65261b50="">
                        <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30" data-v-65261b50="">
                            <circle cx="1" cy="1" r=".7" data-v-65261b50=""></circle>
                        </pattern>
                        </defs>
                        <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" data-v-65261b50=""></rect>
                    </svg>
                    <div class="relative bg-white dark:bg-gray-700 rounded-lg shadow-2xl p-7 sm:p-10" data-v-65261b50="">
                        <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl dark:text-white" data-v-65261b50="">
                        Kritik atau Saran
                        </h3>
                        <form action="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hmifunej@gmail.com" method="post" enctype="text/plain" data-v-65261b50="">
                        <div class="mb-1 sm:mb-2" data-v-65261b50="">
                            <label for="name" class="inline-block mb-1 font-medium dark:text-white" data-v-65261b50="">Nama</label>
                            <input id="name" name="FirstName" placeholder="HMIF" required="" class="form-control w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm border-solid focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" data-v-65261b50=""/>
                        </div>
                        <div class="mb-1 sm:mb-2" data-v-65261b50="">
                            <label for="email" class="inline-block mb-1 font-medium dark:text-white" data-v-65261b50="">Email</label>
                            <input id="email" name="Email" placeholder="hmif.unej@example.org" required="" class="form-control w-full h-12 px-4 mb-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg ease-in-out focus:text-gray-700 focus:bg-white focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" data-v-65261b50=""/>
                        </div>
                        <div class="mb-1 sm:mb-2" data-v-65261b50="">
                            <label class="inline-block mb-1 font-medium dark:text-white" data-v-65261b50="">Masukan</label>
                            <textarea name="submit" class="h-32 resize form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" data-v-65261b50=""></textarea>
                        </div>
                        <div class="mt-4 mb-2 sm:mb-4" data-v-65261b50="">
                            <button type="submit" class="w-full px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-v-65261b50="">
                            Kirim masukan
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import useDebounce from '@/hooks/useDebounce';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function Search({ data }) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 800);

  const filteredData = data.filter((item) => {
    return item.judul_matkul.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="mt-10 flex w-[90%] gap-2 px-6 mx-auto my-4 overflow-hidden bg-white border border-black rounded-md lg:px-12">
        <Image src={'/search.svg'} width={31} height={31} alt="" />
        <input type="text" placeholder="Cari nama mata kuliah... " className="w-full py-4 outline-none" value={search} onChange={handleSearch} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 py-10 lg:py-[72px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          grid={{
            rows: 5,
            fill: 'row',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {filteredData.map((value, index) => (
            <SwiperSlide key={index}>
              <Link href={`/matkul/${value.slug}`}>
                <div className="group">
                  <div className="my-10 flex ml-20 group-hover:scale-110 transition ease-in-out">
                    <Image src={'matkul-biru-biru.svg'} width={166} height={182} alt="biru-biru"></Image>
                    <div className="ml-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold">{value.judul_matkul}</h3>
                      <p className="mt-3 text-xl">{value.jumlah_sks} SKS</p>
                    </div>
                  </div>
                  <div className="mt-16 ml-24 w-[700px] h-[2px] bg-[#FF9B00] group-hover:scale-125 transition ease-in-out"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

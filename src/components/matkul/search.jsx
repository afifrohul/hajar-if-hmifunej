'use client';

import { useEffect, useState } from 'react';
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

  const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const breakpoints = {
            320: 1,
            768: 2
        };

        const updateSlidesPerView = () => {
            const windowWidth = window.innerWidth;
            const newSlidesPerView = Object.keys(breakpoints)
                .reverse()
                .find((breakpoint) => windowWidth >= breakpoint);

            if (newSlidesPerView !== undefined) {
                setSlidesPerView(breakpoints[newSlidesPerView]);
            }
        };

        updateSlidesPerView();

        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);


  const filteredData = data.filter((item) => {
    return item.judul_matkul.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="mt-10 flex w-[90%] gap-2 px-2 lg:px-6 mx-auto my-4 overflow-hidden bg-white border border-black rounded-md ">
        <Image src={'/search.svg'} width={31} height={31} alt="" className='w-4' />
        <input type="text" placeholder="Cari nama mata kuliah... " className="w-full py-2 lg:py-4 text-sm lg:text-base outline-none" value={search} onChange={handleSearch} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 py-10 lg:py-[72px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
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
                <div className="group scale-75 lg:scale-100">
                  <div className="my-2 lg:my-10 flex ml-2 lg:ml-20 group-hover:scale-110 transition ease-in-out">
                    <Image src={'matkul-biru-biru.svg'} width={166} height={182} alt="biru-biru"></Image>
                    <div className="ml-12 flex flex-col justify-center">
                      <h3 className="lg:text-3xl font-bold">{value.judul_matkul}</h3>
                      <p className="mt-3 text-xl">{value.jumlah_sks} SKS</p>
                    </div>
                  </div>
                  <div className="mt-16 lg:ml-24 w-screen  lg:w-[700px] h-[2px] bg-[#FF9B00] group-hover:scale-125 transition ease-in-out"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex">
      </div>
    </>
  );
}

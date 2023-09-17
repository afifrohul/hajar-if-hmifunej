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
  const [filterSemester, setFilterSemester] = useState(data)

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



  const filteredData = filterSemester.filter((item) => {
    return item.judul_matkul.toLowerCase().includes(debouncedSearch.toLowerCase());
  });


  const filteredDataSemester = (semester) => {
    console.log(semester);
    if (semester == 'semua') {
      setFilterSemester(data)
    } else if (semester == 1) {
      const filtered = data.filter(item => item.semester_id == semester)
      setFilterSemester(filtered)
    } else if (semester == 2) {
      const filtered = data.filter(item => item.semester_id == semester)
      setFilterSemester(filtered)
    } else if (semester == 3) {
      const filtered = data.filter(item => item.semester_id == semester)
      setFilterSemester(filtered)
    } else if (semester == 4) {
      const filtered = data.filter(item => item.semester_id == semester)
      setFilterSemester(filtered)
    } else if (semester == 5) {
      const filtered = data.filter(item => item.semester_id == semester)
      setFilterSemester(filtered)
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="w-screen lg:h-[164px] bg-gradient-to-r from-[#FF9C01]/[.22] to-[#FBB84E]/[.0] flex items-center overflow-x-scroll no-scrollbar">
        <div className="w-[3000px] text-gray-700 text-base lg:text-2xl py-4 lg:py-0 flex items-center justify-start gap-16 lg:gap-48 mx-16 lg:mx-40">
          <button value={'semua'} onClick={(e) => filteredDataSemester(e.target.value)} className="whitespace-nowrap">Semua</button>
          <button value={1} onClick={(e) => filteredDataSemester(e.target.value)} className="whitespace-nowrap">Semester 1</button>
          <button value={2} onClick={(e) => filteredDataSemester(e.target.value)} className="whitespace-nowrap">Semester 2</button>
          <button value={3} onClick={(e) => filteredDataSemester(e.target.value)} className="whitespace-nowrap">Semester 3</button>
          <button value={4} onClick={(e) => filteredDataSemester(e.target.value)} className="whitespace-nowrap">Semester 4</button>
          <button value={5} onClick={(e) => filteredDataSemester(e.target.value)} className="whitespace-nowrap">Semester 5</button>
        </div>
      </div>
      <div className="h-max bg-[#F7F5ED]">
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
      </div>
    </>
  );
}

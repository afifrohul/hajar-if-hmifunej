import Image from 'next/image'
import paper from './assets/paper.png'
import search from './assets/search.png'
import selector from './assets/selector.png'
import SearchBar from './components/search'
import CardSkripsi from './components/cardSkripsi-3'
import Link from 'next/link'

export default function Skripsiwrong() {

    const headKetentuan = ['No', 'Ketentuan', 'Dulu', 'Terbaru']
    const dataSkripsi = [{
        "No": 1,
        "Ketentuan": "Lorem ipsum dolor sit amet consectetur",
        "Dulu": "Lorem ipsum dolor sit amet consectetur adipiscing ",
        "Terbaru": "Lorem ipsum dolor sit amet consectetur adipiscing "
    }, {
        "No": 2,
        "Ketentuan": "Lorem ipsum dolor sit amet consectetur",
        "Dulu": "Lorem ipsum dolor sit amet consectetur adipiscing ",
        "Terbaru": "Lorem ipsum dolor sit amet consectetur adipiscing "
    }, {
        "No": 3,
        "Ketentuan": "Lorem ipsum dolor sit amet consectetur",
        "Dulu": "Lorem ipsum dolor sit amet consectetur adipiscing ",
        "Terbaru": "Lorem ipsum dolor sit amet consectetur adipiscing "
    }]
    const array = [...Array(12)]

    return <div>
        <section id='Hero' className="w-full h-[537px] bg-gradient-to-b from-[#2D4356] from-38% via-[#435B66CC] via-60% to-[#344D6700] to-100% flex flex-col justify-center items-center text-center text-white">
            <div className="container mx-auto text-center text-white">
                <div className="flex flex-col font-bold text-[56px]">
                    <h1>Arsip Skripsi</h1>
                    <h1>Mahasiswa <span className="text-[#87CBB9]">Informatika</span></h1>
                </div>
                <p className="w-3/4 mx-auto text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
                </p>
            </div>
        </section>

        <section id='about' className="grid grid-cols-3 mx-[100px] justify-center">
            <div className="col-span-2 flex flex-col py-16">
                <h2 className="font-bold text-[48px]">Skripsi Penting?</h2>
                <p className='text-justify text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
            </div>
            <Image sizes='100vw' src={paper} alt="Picture of the paper" />
        </section>

        <section id='ketentuan' className="grid grid-cols-3 mx-[100px] justify-center">
            <div className="col-span-2 flex flex-col py-16">
                <h2 className="font-bold text-[48px]">Ketentuan Skripsi Ter-<span className='italic '>update</span></h2>
                <table class="table-auto mt-4 rounded outline outline-1 outline-[#B9B9B9]">
                    <thead className='bg-neutral-200'>
                        <tr>
                            {headKetentuan.map(ketentuan => (
                                <th className='border border-[#B9B9B9] p-3'>
                                    {ketentuan}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className=''>
                        {dataSkripsi.map(data => (
                            <tr className=''>
                                <td className='border border-[#B9B9B9] text-center'>{data.No}</td>
                                <td className='border border-[#B9B9B9] p-3'>{data.Ketentuan}</td>
                                <td className='border border-[#B9B9B9] p-3'>{data.Dulu}</td>
                                <td className='border border-[#B9B9B9] p-3'>{data.Terbaru}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        <section id='arsip' className="mx-[100px] justify-center">
            <div className="flex flex-col py-16">
                <h2 className="font-bold text-[48px]">Arsip Skripsi Mahasiswa Informatika</h2>
                <div className="mt-4 grid grid-cols-3 gap-8">
                    <SearchBar text={"Filter"} asset={selector} />
                    <SearchBar text={"Masukkan Pencarian"} asset={search} span="col-span-2" />
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {array.map(() => (
                        <CardSkripsi judul={"Judul Skripsi"} name={"Afiaa Akbar Sidaorda"} nim={"202410103022"} year={2022} />
                    ))}
                </div>
                <div className="flex justify-end">
                    <Link href={"/skripsi"} className="w-[240px] mt-8 text-center p-2 rounded bg-[#F7F7FD] hover:bg-slate-100 shadow-md shadow-[rgb(142, 141, 208, 0.25)] ">
                        <h1 className="font-bold text-lg">Lebih Banyak</h1>
                    </Link>
                </div>
            </div>
        </section>


        <section className='flex flex-col h-[500px] bg-gradient-to-b from-[#344D6700] from-38% via-[#435B66CC] via-50% to-[#2D4356] to-100%'>
            <div className="mx-auto w-[600px] p-4 text-center rounded-[40px] bg-[#D9D9D9] shadow-md shadow-[rgb(142, 141, 208, 0.25)] ">
                <h1 className="font-bold text-4xl">Tunjukkan Prestasimu!</h1>
            </div>

            <div className='max-w-5xl mx-auto mt-[100px] text-white'>
                <h2 className='text-5xl font-bold text-left'>Quotes “ ”</h2>
                <p className='text-justify text-2xl leading-[48px] pt-14'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                <h2 className='text-2xl font-bold text-right'>--- HMIF</h2>
            </div>
        </section>
    </div>
}
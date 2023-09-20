
import fetchAllSkripsi from "@/hooks/skripsi/fetchAllSkripsi";
import fetchAllBidangSkripsi from "@/hooks/skripsi/fetchAllBidangSkripsi";
import SkripsiContent from "./components/skripsi";


export default async function Skripsi() {
    const dataSkripsi = await fetchAllSkripsi()
    const bidang = await fetchAllBidangSkripsi()

    return <div className="bg-secondary">
        <section id="Hero" className='grid justify-center h-[430px] lg:h-[500px] bg-no-repeat bg-cover bg-primary bg-grid'>
            <div className='container grid grid-cols-2 items-start h-fit'>
                <div className='mt-[70px] lg:mt-[180px] text-white '>
                    <h1 className=' font-bold text-[100px]'>Skri<span className="underline underline-offset-[14px] decoration-8 decoration-[#FFC947]">psi </span></h1>

                    <p className="w-[300px] text-lg lg:w-[620px] lg:text-[21px]">Judul dan topik yang berhasil menembus Skripsi sampai selesai.</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='hidden lg:block ml-[150px] text-center text-[#51535E] font-bold text-[600px]'>“</h1>
                </div>
            </div>
        </section>

        <section id='Intro' className='w-full lg:h-[300px] mt-4 lg:mt-0 flex flex-col gap-4 lg:gap-8 justify-center items-center text-center'>
            <h1 className='font-extrabold text-2xl lg:text-[46px]'>Skripsi Anak Informatika</h1>
            <p className='w-3/4 text-[13px] lg:text-[22px]'>Kalian bingung skripsi mau gimana? <br></br>
                Yuks, lihat referensi dari Anak Informatika yang sudah selesai melaksanakan Skripsi . <br></br>
                Jangan sampai kelewatan ya!
            </p>
        </section>

        <SkripsiContent data={dataSkripsi} bidang={bidang} />

    </div>
}
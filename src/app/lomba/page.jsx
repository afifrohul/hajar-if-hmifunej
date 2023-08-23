import { fetchBidangLomba } from "@/hooks/lomba/fetchBidangLomba"
import { fetchTopPeserta } from '@/hooks/lomba/fetchTopPeserta'
import TopLomba from '@/components/topLomba'
import BidangLomba from '@/components/bidangLomba'
import LombaIcon from '@/components/lombaIcon'
import { AosInit } from "@/lib/aos"

export default async function Lomba() {
    const bidangLomba = await fetchBidangLomba()
    const topPeserta = await fetchTopPeserta()

    const colors = [
        'FF9B00',
        '0000FF',
        'ED1C24',
        '14A800'
    ]
    return (
        <>
            <div className='grid justify-center h-[700px] lg:h-[800px] bg-no-repeat bg-cover bg-primary bg-grid'>
                <div className='container grid items-center px-4 mt-40 xl:grid-cols-2 h-fit'>
                    <div className='text-white '>
                        <h1 className='mb-12 text-5xl font-bold lg:text-7xl'>Kumpulan Prestasi Lomba Mahasiswa Informatika</h1>
                        <p className="text-xl lg:text-2xl">Memberikan informasi terkait prestasi lomba mahasiswa prodi Informatika Universitas Jember.</p>
                    </div>
                    <div className='hidden mx-auto xl:block'>
                        <LombaIcon />
                    </div>
                </div>
            </div>
            <div className='container relative flex flex-col items-center justify-center py-10'>
                <div className='relative -top-56 md:-top-52 xl:-top-72'>
                    <div className='flex flex-wrap justify-center gap-10'>

                        {
                            topPeserta.map((value, index) => (
                                <div data-aos='fade-up' data-aos-delay={index * 300} data-aos-once={true}>
                                    <TopLomba key={index} color={colors[index]} foto={value.foto} peraihan={value.peraihan} namaLomba={value.nama_lomba} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='-mt-36 lg:-mt-56'>
                    <h2 className='font-bold text-4xl lg:text-[60px] text-center'>Lihat Bidang Perlombaan Lainnya</h2>
                    <div className='flex flex-wrap justify-center gap-10 px-4 py-6' >
                        {
                            bidangLomba.map((value, index) => (
                                <div key={index} data-aos="fade-up" data-aos-once={true} className="lg:pt-4">
                                    {
                                        <BidangLomba slug={value.slug_bidang} color={colors[index % colors.length]} namaBidang={value.nama_bidang_lomba} />
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

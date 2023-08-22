import { fetchBidangLomba } from "@/hooks/lomba/fetchBidangLomba"
import { fetchTopPeserta } from '@/hooks/lomba/fetchTopPeserta'
import TopLomba from '@/components/topLomba'
import BidangLomba from '@/components/bidangLomba'
import LombaIcon from '@/components/lombaIcon'

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
        <div>
            <div className='grid justify-center h-[800px] bg-no-repeat bg-cover bg-primary bg-grid'>
                <div className='container grid items-center grid-cols-2 px-4 mt-40 h-fit'>
                    <div className='text-white '>
                        <h1 className='mb-12 font-bold text-7xl'>Lomba Lomba dan Prestasi Informatika</h1>
                        <p>Memberikan informasi-informasi terkait lomba-lomba dan prestasi yang dimiliki Program Studi Informatika Universitas Jember.</p>
                    </div>
                    <div className='mx-auto'>
                        <LombaIcon />
                    </div>
                </div>
            </div>
            <div className='container relative flex flex-col items-center justify-center py-10'>
                <div className='relative -top-72'>
                    <div className='flex flex-wrap gap-10'>

                        {
                            topPeserta.map((value, index) => (
                                <TopLomba key={index} color={colors[index]} foto={value.foto} peraihan={value.peraihan} namaLomba={value.nama_lomba} />
                            ))
                        }
                    </div>
                </div>
                <div className='-mt-56'>
                    <h2 className='font-bold text-[60px] text-center'>Lihat Bidang Perlombaan Lainnya</h2>
                    <div className='flex flex-wrap justify-center gap-10 px-4 py-6' >
                        {
                            bidangLomba.map((value, index) => (
                                <div key={index}>
                                    {
                                        <BidangLomba slug={value.slug_bidang} color={colors[index % colors.length]} namaBidang={value.nama_bidang_lomba} />
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}

import fetchDetailContent from "@/hooks/mbkm/fetchDetailContent"

export default async function Testimoni({ params }) {
    const testimoni = await fetchDetailContent(params.testimoni)

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>/g, '')
    }

    return (
        <div>
            <div className='flex items-center justify-start h-[400px] xl:h-[500px] bg-no-repeat bg-cover bg-primary bg-grid'>
                <div className='container mt-20 text-white'>
                    <h1 className='max-w-7xl mb-12 text-4xl font-bold lg:text-[100px] leading-[100px]'>Testimoni {testimoni[0].nama_jenis_mbkm}</h1>
                    <p className="max-w-4xl text-lg font-medium opacity-80">Bingung mau pilih {testimoni[0].nama_jenis_mbkm}  dimana? Nih testimoni {testimoni[0].nama_jenis_mbkm} dari mahasiswa informatika. Simak informasinya ya!</p>
                </div>
            </div>
            <div className="container py-10">
                <div className="py-8">
                    <h2 className="font-bold text-7xl">{testimoni[0].nama_mahasiswa}</h2>
                    <p className="font-bold text-3xl text-[#B4B6BA]">MBKM Batch {testimoni[0].batch}</p>
                </div>
                <div>
                    <h3 className="text-[#060919] text-opacity-70 font-bold text-3xl underline underline-offset-4">{testimoni[0].nama_program_mbkm}</h3>
                    <h3 className="text-[#060919] text-opacity-70 font-bold text-3xl underline underline-offset-4">{testimoni[0].nama_mitra}</h3>
                    <div className="grid gap-8 py-10">
                        <div className="bg-[#FFE601] bg-opacity-75 px-12 py-7 rounded-3xl testimoni-card-odd">
                            <h4 className="font-bold text-xl text-[#060919]">Hal yang dipelajari</h4>
                            <p className="text-[#060919] pt-1">{removeHtmlTags(testimoni[0].hal_dipelajari)}</p>
                        </div>
                        <div className="bg-[#FF9B00] bg-opacity-75 px-12 py-7 rounded-3xl testimoni-card-even">
                            <h4 className="font-bold text-xl text-[#060919]">Kurikulum program MBKM</h4>
                            <p className="text-[#060919] pt-1">{removeHtmlTags(testimoni[0].kurikulum)}</p>
                        </div>
                        <div className="bg-[#FFE601] bg-opacity-75 px-12 py-7 rounded-3xl testimoni-card-odd">
                            <h4 className="font-bold text-xl text-[#060919]">Tugas akhir</h4>
                            <p className="text-[#060919] pt-1">{removeHtmlTags(testimoni[0].hasil_akhir)}</p>
                        </div>
                        <div className="bg-[#FF9B00] bg-opacity-75 px-12 py-7 rounded-3xl testimoni-card-even">
                            <h4 className="font-bold text-xl text-[#060919]">Suka duka selama MBKM</h4>
                            <p className="text-[#060919] pt-1">{removeHtmlTags(testimoni[0].suka_duka)}</p>
                        </div>
                        <div className="bg-[#FFE601] bg-opacity-75 px-12 py-7 rounded-3xl testimoni-card-odd">
                            <h4 className="font-bold text-xl text-[#060919]">Testimoni</h4>
                            <p className="text-[#060919] pt-1">{removeHtmlTags(testimoni[0].testimoni_mbkm)}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

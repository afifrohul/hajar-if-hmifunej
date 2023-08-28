import CardSkripsi from "./components/cardSkripsi"
import SearchBar from "./components/search"
import search from "./assets/search.png"

const data = [
    {
        "No": 1,
        "Nama Mahasiswa": "Nama Mahasiswa",
        "Angkatan": 2019,
        "Judul": "Klasifikasi Penyakit Glaukoma Dengan Menggunakan Metode Support Vector Machine Dengan Ekstraksi Local Binary Pattern (LBP) Dan Gray-Level Co-Occurence Matrix (GLCM)",
        "Dosen Penguji": ["Achmad Maududie, ST., M.Sc.", "Tio Dharmawan, S.Kom., M.Kom."],
        "Dosen Pembimbing": ["Muhammad Arief Hidayat, S.Kom., M.Kom", "Januar Adi Putra, S.Kom., M.Kom."],
        "LinkAkses": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        "date": "Jumat, 11 Agustus 2023",
        "time": "08:00 WIB"
    },
    {
        "No": 2,
        "Nama Mahasiswa": "Nama Mahasiswa",
        "Angkatan": 2019,
        "Judul": "Klasifikasi Penyakit Glaukoma Dengan Menggunakan Metode Support Vector Machine Dengan Ekstraksi Local Binary Pattern (LBP) Dan Gray-Level Co-Occurence Matrix (GLCM)",
        "Dosen Penguji": ["Achmad Maududie, ST., M.Sc.", "Tio Dharmawan, S.Kom., M.Kom."],
        "Dosen Pembimbing": ["Muhammad Arief Hidayat, S.Kom., M.Kom", "Januar Adi Putra, S.Kom., M.Kom."],
        "LinkAkses": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        "date": "Jumat, 11 Agustus 2023",
        "time": "08:00 WIB"
    },
    {
        "No": 3,
        "Nama Mahasiswa": "Nama Mahasiswa",
        "Angkatan": 2019,
        "Judul": "Klasifikasi Penyakit Glaukoma Dengan Menggunakan Metode Support Vector Machine Dengan Ekstraksi Local Binary Pattern (LBP) Dan Gray-Level Co-Occurence Matrix (GLCM)",
        "Dosen Penguji": ["Achmad Maududie, ST., M.Sc.", "Tio Dharmawan, S.Kom., M.Kom."],
        "Dosen Pembimbing": ["Muhammad Arief Hidayat, S.Kom., M.Kom", "Januar Adi Putra, S.Kom., M.Kom."],
        "LinkAkses": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        "date": "Jumat, 11 Agustus 2023",
        "time": "08:00 WIB"
    },
]


export default function Skripsi() {

    return <div className="bg-secondary">
        <div className='grid justify-center h-[350px] lg:h-[600px] bg-no-repeat bg-cover bg-primary bg-grid'>
            <div className='container grid grid-cols-2 items-start xl:grid-cols-2 h-fit'>
                <div className='mt-[180px] text-white '>
                    <h1 className=' font-bold text-[100px]'>Skri<span className="underline underline-offset-[14px] decoration-8 decoration-[#FFC947]">psi </span></h1>

                    <p className="w-[620px] text-[21px]">Judul dan topik yang berhasil menembus Skripsi sampai selesai.</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <SearchBar text={"Cari Referensi Skripsimu disini..."} ></SearchBar>
                    {/* <h1 className=' text-[#51535E] text-5xl font-bold lg:text-[300px]'>“</h1> */}
                </div>
            </div>
        </div>

        <section id='Hero' className="w-full h-[100px] bg-gradient-to-r from-[#ff9c01]/[.22] from-0% to-[#fbb84e]/[0] to-100% opacity-7/10">
            <div className='h-full grid grid-cols-3 justify-center items-center pl-[50px]'>
                <div className="flex gap-8">
                    <h2 className='text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#FF9B00] to-[#ED1C24]'>Semua</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 52 52" fill="none">
                        <path d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z" fill="url(#paint0_radial_1051_117)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z" fill="white" />
                        <defs>
                            <radialGradient id="paint0_radial_1051_117" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)">
                                <stop offset="0.125" stop-color="#FF9B00" />
                                <stop offset="1" stop-color="#ED1C24" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <button className='flex transition duration-300 ease-in-out hover:scale-110'>
                        <h2>Bidang</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 10L12 15L17 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>

        <section id='Intro' className='w-full h-[300px] flex flex-col gap-8 justify-center items-center text-center'>
            <h1 className='font-extrabold text-[62px]'>Skripsi Anak Informatika</h1>
            <p className='text-[32px]'>Kalian bingung skripsi mau gimana? <br></br>
                Yuks, lihat referensi dari Anak Informatika yang sudah selesai melaksanakan Skripsi . <br></br>
                Jangan sampai kelewatan ya!
            </p>
        </section>

        <section id="Content" className="px-[125px] py-[72px] grid gap-y-16">
            {data.map((value, index) => (
                <CardSkripsi name={value["Nama Mahasiswa"]} angkatan={value["Angkatan"]} penguji={value["Dosen Penguji"]} pembimbing={value["Dosen Pembimbing"]} link={value["LinkAkses"]} date={value["date"]} time={value["time"]} />
            ))}
        </section>
        <Footer />
    </div>
}
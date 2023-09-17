import CardSkripsi from "./components/cardSkripsi"
import fetchAllSkripsi from "@/hooks/skripsi/fetchAllSkripsi";
import SearchBar from "./components/search"
import DropDown from "./components/dropDown";

const data = [
    {
        "No": 1,
        "Nama Mahasiswa": "Nama Mahasiswa",
        "Angkatan": 2019,
        "Judul": "Klasifikasi Penyakit Glaukoma Dengan Menggunakan Metode Support Vector Machine Dengan Ekstraksi Local Binary Pattern (LBP) Dan Gray-Level Co-Occurence Matrix (GLCM)",
        "Abstrak": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam nihil ad nulla magnam tempora distinctio eaque delectus sequi, corporis assumenda impedit cumque et minima recusandae aspernatur ab! Praesentium reprehenderit tempore natus aperiam suscipit eaque provident sequi hic quis sapiente temporibus, quisquam corrupti deleniti modi ullam corporis error nesciunt nam odit labore officia blanditiis perspiciatis. Laborum dolorum error animi nobis.",
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
        "Abstrak": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam nihil ad nulla magnam tempora distinctio eaque delectus sequi, corporis assumenda impedit cumque et minima recusandae aspernatur ab! Praesentium reprehenderit tempore natus aperiam suscipit eaque provident sequi hic quis sapiente temporibus, quisquam corrupti deleniti modi ullam corporis error nesciunt nam odit labore officia blanditiis perspiciatis. Laborum dolorum error animi nobis.",
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
        "Abstrak": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam nihil ad nulla magnam tempora distinctio eaque delectus sequi, corporis assumenda impedit cumque et minima recusandae aspernatur ab! Praesentium reprehenderit tempore natus aperiam suscipit eaque provident sequi hic quis sapiente temporibus, quisquam corrupti deleniti modi ullam corporis error nesciunt nam odit labore officia blanditiis perspiciatis. Laborum dolorum error animi nobis.",
        "Dosen Penguji": ["Achmad Maududie, ST., M.Sc.", "Tio Dharmawan, S.Kom., M.Kom."],
        "Dosen Pembimbing": ["Muhammad Arief Hidayat, S.Kom., M.Kom", "Januar Adi Putra, S.Kom., M.Kom."],
        "LinkAkses": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        "date": "Jumat, 11 Agustus 2023",
        "time": "08:00 WIB"
    },
]

const fillSimbol = [
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_1809_160)">
            <rect width="20" height="20" fill="white" fill-opacity="0.01" />
            <path d="M23.7058 22.2937L17.7368 16.3247C19.3634 14.3353 20.1632 11.7968 19.9707 9.23426C19.7781 6.67173 18.608 4.28123 16.7024 2.55722C14.7968 0.833208 12.3014 -0.0924103 9.73245 -0.0281784C7.1635 0.0360534 4.71751 1.08522 2.90042 2.90231C1.08333 4.7194 0.0341613 7.16539 -0.0300705 9.73434C-0.0943024 12.3033 0.831316 14.7987 2.55533 16.7043C4.27934 18.6099 6.66984 19.78 9.23237 19.9725C11.7949 20.1651 14.3334 19.3653 16.3228 17.7387L22.2918 23.7077C22.4804 23.8899 22.733 23.9907 22.9952 23.9884C23.2574 23.9861 23.5082 23.8809 23.6936 23.6955C23.879 23.5101 23.9842 23.2593 23.9865 22.9971C23.9888 22.7349 23.888 22.4823 23.7058 22.2937ZM9.99881 18.0007C8.41656 18.0007 6.86984 17.5315 5.55424 16.6525C4.23865 15.7734 3.21327 14.524 2.60777 13.0622C2.00227 11.6004 1.84384 9.99182 2.15252 8.43998C2.4612 6.88813 3.22313 5.46266 4.34195 4.34384C5.46077 3.22502 6.88624 2.4631 8.43808 2.15442C9.98993 1.84573 11.5985 2.00416 13.0603 2.60966C14.5221 3.21516 15.7715 4.24054 16.6506 5.55614C17.5296 6.87173 17.9988 8.41845 17.9988 10.0007C17.9964 12.1217 17.1528 14.1551 15.653 15.6549C14.1533 17.1547 12.1198 17.9983 9.99881 18.0007Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_1809_160">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
        <g clip-path="url(#clip0_1809_559)">
            <path d="M14 28C6.23438 28 0 21.679 0 14C0 6.23438 6.23438 0 14 0C21.7656 0 28 6.23438 28 14C28 21.679 21.7656 28 14 28ZM14 2.352C7.588 2.352 2.34675 7.588 2.34675 14.0009C2.34675 20.4137 7.588 25.6541 14 25.6541C20.412 25.6541 25.6533 20.4129 25.6533 14.0009C25.6533 7.58887 20.412 2.352 14 2.352ZM20.8679 15.3536H10.7502C10.5359 15.3548 10.3298 15.2711 10.1769 15.1207C10.0241 14.9703 9.93706 14.7656 9.93475 14.5512V13.3709C9.93475 12.915 10.2944 12.5554 10.7502 12.5554H20.9536C21.4051 12.5554 21.7648 12.9202 21.7648 13.3709V14.5425C21.6781 14.994 21.3132 15.3536 20.867 15.3536H20.8679ZM18.2472 10.8369H8.03863C7.82411 10.8385 7.61773 10.7549 7.46482 10.6045C7.3119 10.454 7.22497 10.249 7.22312 10.0345V8.85413C7.22312 8.48925 7.588 8.12963 8.03863 8.12963H18.242C18.6069 8.12963 18.9665 8.4945 18.9665 8.85413V10.0258C18.9665 10.4773 18.6077 10.8369 18.2472 10.8369ZM8.0395 17.1631H18.2481C18.6996 17.1631 19.0592 17.5227 19.0592 17.9743V19.1459C19.0602 19.3609 18.9758 19.5676 18.8245 19.7205C18.6733 19.8733 18.4676 19.96 18.2525 19.9614H8.0395C7.588 19.8704 7.22837 19.5099 7.22837 19.0592V17.8832C7.224 17.5236 7.588 17.1631 8.0395 17.1631Z" fill="black" />
        </g>
        <defs>
            <clipPath id="clip0_1809_559">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M7 10L12 15L17 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
]


export default async function Skripsi() {
    const dataSkripsi = await fetchAllSkripsi()

    return <div className="bg-secondary">
        <section id="Hero" className='grid justify-center h-[430px] lg:h-[600px] bg-no-repeat bg-cover bg-primary bg-grid'>
            <div className='container grid grid-cols-2 items-start h-fit'>
                <div className='mt-[70px] lg:mt-[180px] text-white '>
                    <h1 className=' font-bold text-[100px]'>Skri<span className="underline underline-offset-[14px] decoration-8 decoration-[#FFC947]">psi </span></h1>

                    <p className="w-[300px] text-lg lg:w-[620px] lg:text-[21px]">Judul dan topik yang berhasil menembus Skripsi sampai selesai.</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='invisible lg:visible ml-[150px] text-center text-[#51535E] font-bold text-[600px]'>“</h1>
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

        <section id="Search" className="grid grid-cols-3 ml-[125px] mr-[125px] gap-12 justify-center items-center">
            <SearchBar cols={2} />
            <DropDown />
        </section>

        <section id="Content" className="lg:px-[70px] mt-[20px]">
            {dataSkripsi.map((value, index) => (
                <CardSkripsi key={value.id_skripsi} title={value.judul_skripsi} name={value.nama_mahasiswa} angkatan={value.tahun_skripsi} abstrak={value.deskripsi_skripsi} />
            ))}
        </section>
    </div>
}
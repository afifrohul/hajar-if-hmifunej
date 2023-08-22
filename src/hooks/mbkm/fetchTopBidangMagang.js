import { axiosInstance } from "@/lib/axios";

export default async function fetchTopBidangMagang() {
    try {
        const res = await axiosInstance.get('/getAllMahasiswaJenisMBKM/magang-bersertifikat')
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}

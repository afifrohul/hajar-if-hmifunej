import { axiosInstance } from "@/lib/axios"

export async function fetchTopBidangSib() {
    try {
        const res = await axiosInstance.get('/getAllMahasiswaJenisMBKM/studi-independen-bersertifikat')
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}
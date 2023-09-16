import { axiosInstance } from "@/lib/axios";

export default async function fetchSearchSIB(posisi, perusahaan) {
    try {
        const res = await axiosInstance.get(`/searchMahasiswaSIB?posisi=${posisi}&perusahaan=${perusahaan}`)
        const data = res.data.data
        return data
    } catch (err) {
        console.log('Error fetching data:', err)
        return null
    }
}

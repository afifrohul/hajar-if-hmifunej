import { axiosInstance } from "@/lib/axios";

export default async function fetchDetailContent(slug) {
    try {
        const res = await axiosInstance.get(`/getDetailMahasiswaMBKM/${slug}`)
        const data = res.data.data
        return data
    } catch (err) {
        console.log('Error fetching data:', err)
        return null
    }
}
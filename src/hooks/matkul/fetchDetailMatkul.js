import { axiosInstance } from "@/lib/axios"

export async function fetchDetailMatkul(slug) {
    try {
        const res = await axiosInstance.get(`/getMateriMatkul/${slug}`)
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}
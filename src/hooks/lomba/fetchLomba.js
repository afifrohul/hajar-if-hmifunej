import { axiosInstance } from "@/lib/axios"

export async function fetchLomba(slug) {
    try {
        const res = await axiosInstance.get(`/getLombaBidang/${slug}`)
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}
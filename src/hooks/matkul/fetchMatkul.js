import { axiosInstance } from "@/lib/axios"

export async function fetchMatkul() {
    try {
        const res = await axiosInstance.get('/getAllMatkul')
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}
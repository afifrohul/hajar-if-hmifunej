import { axiosInstance } from "@/lib/axios"

export async function fetchTopPeserta() {
    try {
        const res = await axiosInstance.get('/getTopPesertaLomba')
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}
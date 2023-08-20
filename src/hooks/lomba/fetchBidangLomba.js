import { axiosInstance } from "@/lib/axios"

export async function fetchBidangLomba() {
    try {
        const res = await axiosInstance.get('/getAllBidangLomba')
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Error fetching data:', err)
        return null
    }
}
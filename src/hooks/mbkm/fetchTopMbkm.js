import { axiosInstance } from "@/lib/axios";

export default async function fetchTopMbkm() {
    try {
        const res = await axiosInstance.get('/getTopMahasiswaMBKM')
        const data = res.data.data
        return data
    } catch (err) {
        console.log('Error fetching data:', err)
        return null
    }
}

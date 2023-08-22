import { axiosInstance } from "@/lib/axios";

export default async function fetchJenisMbkm() {
    try {
        const res = await axiosInstance.get('/getAllJenisMBKM')
        const data = res.data.data
        return data
    } catch (err) {
        console.error('Failed fetching data:', err);
        return null
    }
}

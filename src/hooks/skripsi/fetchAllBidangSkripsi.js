import { axiosInstance } from "@/lib/axios";

export default async function fetchAllBidangSkripsi() {
    try {
        const res = await axiosInstance.get(`/getAllBidangSkripsi`)
        const data = res.data.data
        return data
    } catch (err) {
        console.log('Error fetching data: ', err);
        return null
    }
}
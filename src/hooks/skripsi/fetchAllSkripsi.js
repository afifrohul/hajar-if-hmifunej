import { axiosInstance } from "@/lib/axios";

export default async function fetchAllSkripsi() {
    try {
        const res = await axiosInstance.get(`/getAllSkripsi`)
        const data = res.data.data
        return data
    } catch (err) {
        console.log('Error fetching data: ', err);
        return null
    }
}
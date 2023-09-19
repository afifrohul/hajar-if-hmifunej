import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react"

export default function useFetchContentMbkm(slug) {
    const [testimoni, setTestimoni] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchTestimoni = async (slug) => {
        try {
            const res = await axiosInstance.get(`/getAllMahasiswaJenisMBKM/${slug}`)
            const data = res.data.data
            setTestimoni(data)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching data:', err)
            return null
        }
    }

    useEffect(() => {
        fetchTestimoni(slug)
    }, [slug])

    return {
        data: testimoni,
        loading
    }
}
import { axiosInstance } from "@/lib/axios"
import { useEffect, useState } from "react"

export function useFetchDetailMatkul(slug) {
    const [matkul, setMatkul] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchMatkul = async (slug) => {
        try {
            const res = await axiosInstance.get(`/getMateriMatkul/${slug}`)
            const data = res.data.data
            setMatkul(data)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching data:', err)
            return null
        }
    }

    useEffect(() => {
        fetchMatkul(slug)
    }, [slug])

    return {
        data: matkul,
        loading
    }
}
import { axiosInstance } from "@/lib/axios"
import { useEffect, useState } from "react"

export function useFetchLomba(slug_bidang) {
    const [lomba, setLomba] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchLomba = async (slug_bidang) => {
        try {
            const res = await axiosInstance.get(`/getLombaBidang/${slug_bidang}`)
            const data = res.data.data
            setLomba(data)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching data:', err)
            return null
        }
    }

    useEffect(() => {
        fetchLomba(slug_bidang)
    }, [slug_bidang])

    return {
        data: lomba,
        loading
    }
}
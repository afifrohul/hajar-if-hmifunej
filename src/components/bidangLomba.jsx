'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BidangLomba(props) {
    const { slug, color, namaBidang } = props
    const [isHover, setIsHover] = useState(false)
    return (
        <Link href={`/lomba/${slug}`}>
            <button
                onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
                style={{ backgroundColor: !isHover ? `#${color}` : '#fff', borderColor: `#${color}`, color: isHover ? `#${color}` : '#fff' }}
                className='rounded-xl w-[180px] border-4 h-[70px] shadow-lg font-bold  text-3xl hover:bg-white'>
                {namaBidang}
            </button>
        </Link>
    )
}

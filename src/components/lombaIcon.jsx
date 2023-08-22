'use client'

import { useState } from "react"

export default function LombaIcon() {
    const [isHover, setIsHover] = useState(false)
    return (
        <>
            {
                !isHover ?
                    <svg
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        width="200" className='hover:text-white hover:fill-white' height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.60156 14.9219C0.546875 13.3594 0 11.4844 0 9.60938C0 4.29688 4.29688 0 9.60938 0H52.3047C56.6797 0 60.7812 2.30469 63.0078 6.05469L89.7656 50.625C70.9375 53.0078 54.1016 61.7969 41.5625 74.8047L1.60156 14.9219ZM198.359 14.9219L158.438 74.8047C145.898 61.7969 129.063 53.0078 110.234 50.625L136.992 6.05469C139.258 2.30469 143.32 0 147.695 0H190.391C195.703 0 200 4.29688 200 9.60938C200 11.4844 199.453 13.3594 198.398 14.9219H198.359ZM31.25 131.25C31.25 113.016 38.4933 95.5295 51.3864 82.6364C64.2795 69.7433 81.7664 62.5 100 62.5C118.234 62.5 135.72 69.7433 148.614 82.6364C161.507 95.5295 168.75 113.016 168.75 131.25C168.75 149.484 161.507 166.97 148.614 179.864C135.72 192.757 118.234 200 100 200C81.7664 200 64.2795 192.757 51.3864 179.864C38.4933 166.97 31.25 149.484 31.25 131.25ZM103.281 94.1797C101.953 91.4453 98.0859 91.4453 96.7188 94.1797L87.9688 111.914C87.4219 113.008 86.4062 113.75 85.2344 113.906L65.625 116.758C62.6172 117.188 61.4453 120.859 63.5938 123.008L77.7734 136.836C78.6328 137.695 79.0234 138.867 78.8281 140.078L75.4688 159.57C74.9609 162.539 78.0859 164.844 80.7812 163.438L98.2812 154.219C99.3359 153.672 100.625 153.672 101.68 154.219L119.18 163.438C121.875 164.844 125 162.578 124.492 159.57L121.133 140.078C120.938 138.906 121.328 137.695 122.187 136.836L136.367 123.008C138.555 120.898 137.344 117.227 134.336 116.758L114.766 113.906C113.594 113.75 112.539 112.969 112.031 111.914L103.281 94.1797Z"
                            fill="#51535E" />
                    </svg>
                    :
                    <svg
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        width="200" className='hover:text-white hover:fill-white' height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#FF9B00', stopOpacity: '1' }} />
                                <stop offset="100%" style={{ stopColor: '#ED1C24', stopOpacity: '1' }} />
                            </linearGradient>
                        </defs>
                        <path d="M1.60156 14.9219C0.546875 13.3594 0 11.4844 0 9.60938C0 4.29688 4.29688 0 9.60938 0H52.3047C56.6797 0 60.7812 2.30469 63.0078 6.05469L89.7656 50.625C70.9375 53.0078 54.1016 61.7969 41.5625 74.8047L1.60156 14.9219ZM198.359 14.9219L158.438 74.8047C145.898 61.7969 129.063 53.0078 110.234 50.625L136.992 6.05469C139.258 2.30469 143.32 0 147.695 0H190.391C195.703 0 200 4.29688 200 9.60938C200 11.4844 199.453 13.3594 198.398 14.9219H198.359ZM31.25 131.25C31.25 113.016 38.4933 95.5295 51.3864 82.6364C64.2795 69.7433 81.7664 62.5 100 62.5C118.234 62.5 135.72 69.7433 148.614 82.6364C161.507 95.5295 168.75 113.016 168.75 131.25C168.75 149.484 161.507 166.97 148.614 179.864C135.72 192.757 118.234 200 100 200C81.7664 200 64.2795 192.757 51.3864 179.864C38.4933 166.97 31.25 149.484 31.25 131.25ZM103.281 94.1797C101.953 91.4453 98.0859 91.4453 96.7188 94.1797L87.9688 111.914C87.4219 113.008 86.4062 113.75 85.2344 113.906L65.625 116.758C62.6172 117.188 61.4453 120.859 63.5938 123.008L77.7734 136.836C78.6328 137.695 79.0234 138.867 78.8281 140.078L75.4688 159.57C74.9609 162.539 78.0859 164.844 80.7812 163.438L98.2812 154.219C99.3359 153.672 100.625 153.672 101.68 154.219L119.18 163.438C121.875 164.844 125 162.578 124.492 159.57L121.133 140.078C120.938 138.906 121.328 137.695 122.187 136.836L136.367 123.008C138.555 120.898 137.344 117.227 134.336 116.758L114.766 113.906C113.594 113.75 112.539 112.969 112.031 111.914L103.281 94.1797Z"
                            fill="url(#myGradient)" />
                    </svg>

            }
        </>
    )
}

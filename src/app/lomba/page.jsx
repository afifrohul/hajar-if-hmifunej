import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CardLomba from './cardLomba'

export default function Lomba() {
    const left = 'flex-row'
    const right = 'flex-row-reverse'
  return (
    <div>
        <header className='w-full h-[537px] bg-gradient-to-b from-[#2D4356] via-[#435B66CC] to-[#344D6700] flex flex-col justify-center items-center text-center text-white'>
            <h1 className='max-w-3xl text-6xl font-bold'>Perlombaan <br /> di Bidang <span className='text-[#87CBB9]'>Informatika</span></h1>
            <p className='max-w-5xl text-lg font-bold pt-10'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
        </header>

        <section className='max-w-[1760px] mx-auto px-16 my-12'>
            <h2 className='text-5xl font-bold text-center'>Jenis-Jenis Lomba</h2>
            <div className='mt-[50px] mb-16'>
                <ul className='flex flex-wrap justify-center gap-x-[391px] gap-y-4 text-4xl font-bold'>
                    <li className='bg-[#8E8DD040] bg-opacity-25 py-12 px-10 rounded-[20px]'>WebDev</li>
                    <li className='bg-[#8E8DD040] bg-opacity-25 py-12 px-10 rounded-[20px]'>WebDev</li>
                    <li className='bg-[#8E8DD040] bg-opacity-25 py-12 px-10 rounded-[20px]'>WebDev</li>
                    <li className='bg-[#8E8DD040] bg-opacity-25 py-12 px-10 rounded-[20px]'>WebDev</li>
                    <li className='bg-[#8E8DD040] bg-opacity-25 py-12 px-10 rounded-[20px]'>WebDev</li>
                </ul>
            </div>
            <Link href='lomba' className='flex justify-center'><button className='bg-[#569DAA] flex justify-center items-center gap-2 py-5 px-8 rounded-[10px] text-2xl text-white'>Selengkapnya<Image src='right.svg' width={24} height={24} alt='right-arrow' className='text-black'/></button></Link>
        </section>

        <section className='max-w-[1760px] mx-auto px-16 my-28'>
            {/* webdev */}
            <div>
                <h2 className='text-5xl font-bold text-center'>WebDev</h2>
                <div>
                    <CardLomba 
                    title='Lomba 1' 
                    position={left}
                    content1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. '
                    content2='In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
                    />

                    <CardLomba 
                    title='Lomba 2' 
                    position={right}
                    content1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. '
                    content2='In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
                    />
                </div>
            </div>

            {/* ui/ux */}
            <div>
                <h2 className='text-5xl font-bold text-center'>UI/UX</h2>
                <div>
                    <CardLomba 
                    title='Lomba 1' 
                    position={left}
                    content1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. '
                    content2='In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
                    />

                    <CardLomba 
                    title='Lomba 2' 
                    position={right}
                    content1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. '
                    content2='In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
                    />
                </div>
            </div>

            {/* mobile */}
            <div>
                <h2 className='text-5xl font-bold text-center'>Mobile App</h2>
                <div>
                    <CardLomba 
                    title='Lomba 1' 
                    position={left}
                    content1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. '
                    content2='In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
                    />
                </div>
            </div>

            {/* data */}
            <div>
                <h2 className='text-5xl font-bold text-center'>Data</h2>
                <div>
                    <CardLomba 
                    title='Lomba 1' 
                    position={left}
                    content1='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. '
                    content2='In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.'
                    />
                </div>
            </div>
            <div className='flex justify-center'>
                <h2 className='bg-[#D9D9D9] inline-block text-5xl font-bold justify-center px-20 py-6 rounded-[40px]'>Tunjukkan prestasimu!</h2>
            </div>
        </section>

        <section className='h-[700px] bg-gradient-to-b from-[#344D6700] via-[#435B66CC] to-[#2D4356] flex items-center'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold text-white text-left'>Quotes ``</h2>
                <p className='text-3xl text-white leading-[48px] pt-14'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
            </div>
        </section>
    </div>
  )
}

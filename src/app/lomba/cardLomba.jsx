import React from 'react'

export default function CardLomba(props) {
  return (
    <div className={'bg-[#79979e] flex gap-12 p-8 rounded-[50px] shadow-md my-[50px] ' + props.position}>
        <div>
            <h4 className='bg-[#b6c6c9] text-4xl font-bold text-white px-6 py-3 shadow drop-shadow-2xl rounded-full'>{props.title}</h4>
            <div className='flex gap-6 pt-5'>
                <div className='w-[224px] h-[356px] bg-[#d9d9d9] rounded-[20px]'></div>
                <div className='w-[224px] h-[356px] bg-[#d9d9d9] rounded-[20px]'></div>
            </div>
        </div>
        <div className='text-lg text-white leading-10'>
            <p>{props.content1}</p>
            <br />
            <p>{props.content2}</p>
        </div>
    </div>
  )
}

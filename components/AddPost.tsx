import Image from 'next/image'
import React from 'react'

const AddPost = () => {
    return (
        <div className=' w-full flex flex-col bg-white p-4 rounded-lg shadow-lg shadow-gray-300'>
            <div className=' w-full flex items-center gap-4'>
                <div className=' relative h-[70px] w-[70px] rounded-full overflow-hidden'>
                    <Image fill src={"https://images.unsplash.com/photo-1706755347832-0a8c8caa7647?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='' />
                </div>
                <div className=' w-full'>
                    <textarea className=' rounded-lg text-gray-500 p-4 w-[90%] h-20 bg-gray-100 focus:outline-none' placeholder="What's on your mind">
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default AddPost
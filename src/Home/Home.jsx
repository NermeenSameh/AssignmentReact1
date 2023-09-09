import React from 'react'
import imgPath from'../avataaars.svg'
export default function Home() {
    return (
            <div className='about text-white d-flex justify-content-center align-items-center '>
                <div className='text-center'>
                   <img src={imgPath} className='mb-3 homeImg'/>
                   <h2 className='mb-3 fw-bold'>START FRAMEWORK</h2>
                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <div className='line ms-3'></div>
                        <i className='fa-solid fa-star ms-3'></i>
                        <div className='line ms-3'></div>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>

   
    )
}

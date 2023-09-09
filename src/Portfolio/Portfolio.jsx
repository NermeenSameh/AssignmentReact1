import React from 'react'
import port1 from '../poert1.png'
import port2 from '../port2.png'
import port3 from '../port3.png'

export default function Portfolio() {
  return (
    <div className='portfolioDiv text-center '>
      <h2 className='my-3 fw-bold title'>PORTFOLIO COMPONENT</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line2 ms-3'></div>
        <i className='fa-solid fa-star ms-3 star2'></i>
        <div className='line2 ms-3'></div>
      </div>

      <div className='container py-4 '>
        <div className='row g-5'>
          <div className='col-md-4'>
            <div className='rounded-3 overflow-hidden position-relative'>
          <img src={port1} className='w-100'/>
          <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            </div>
          </div>



          <div className='col-md-4'>
            <div className='rounded-3 overflow-hidden position-relative'>
          <img src={port2} className='w-100'/>
          <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            </div>
          </div>


   <div className='col-md-4'>
            <div className='rounded-3 overflow-hidden position-relative'>
          <img src={port3} className='w-100'/>
          <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='rounded-3 overflow-hidden position-relative'>
          <img src={port1} className='w-100'/>
          <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='rounded-3 overflow-hidden position-relative'>
          <img src={port2} className='w-100'/>
          <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='rounded-3 overflow-hidden position-relative'>
          <img src={port3} className='w-100'/>
          <div className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'></i>
          </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

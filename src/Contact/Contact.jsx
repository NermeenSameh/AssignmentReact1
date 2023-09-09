import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
      <div className='contactDiv '>
        <h2 className='my-3 fw-bold title text-center'>CONATCT SECTION</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line2 ms-3'></div>
          <i className='fa-solid fa-star ms-3 star2'></i>
          <div className='line2 ms-3'></div>
        </div>

        <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>
          {/* <label htmlFor="UserName" className='position-relative top-0 __top'>userName :</label> */}
          <input type="text" name="userName" placeholder='userName' className='form-control border-0 border-bottom py-3 position-relative mb-2 ' />

          {/* <label htmlFor="userAge" className='position-relative top-0 __top'>userAge :</label> */}
          <input type="text" name="userAge" placeholder='userAge' className='form-control border-0 border-bottom py-3 position-relative mb-2' />
          {/* 
          <label htmlFor="userEmail" className='position-relative top-0 __top'>userEmail :</label> */}
          <input type="text" name="userEmail" placeholder='userEmail' className='form-control border-0 border-bottom py-3 position-relative mb-2 ' />
          
          {/* <label htmlFor="userPassword" className='position-relative top-0 __top'>userPassword :</label> */}
          <input type="text" name="userPassword" placeholder='userPassword' className='form-control border-0 border-bottom py-3 position-relative mb-2' />


          <button className='btn btn-green mt-4 text-white'> send Message </button>

        </form>
      </div>
    </div>
  )
}


// color: var(--main-color);
// margin-bottom: 7px;
// transition: .6s top;
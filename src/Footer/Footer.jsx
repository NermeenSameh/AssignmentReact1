import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='footer py-3'>
        <div className='container py-5 '>
          <div className='row '>
            <div className='col-md-4 text-white text-center'>
              <div>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className='col-md-4 text-white text-center'>
              <div>
                <h3>AROUND THE WEB</h3>
                <div className='icon'>
                  <i className='fa-brands fa-facebook mx-1 icon'></i>
                  <i className='fa-brands fa-twitter mx-1 icon'></i>
                  <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
                  <i className='fa-solid fa-globe mx-1 icon'></i>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-white text-center'>
              <div>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='footerEnd text-center text-white py-3'>
        <p>Copyright © Your Website 2021</p>
      </div>

    </div>
  )
}


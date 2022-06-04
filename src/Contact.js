import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow" style={{height: '100%'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.4557678325427!2d44.79723840871203!3d41.70924570095989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d27c088e619%3A0x85df45e4dde9bf15!2sMarjanishvili!5e0!3m2!1sen!2sin!4v1653508624374!5m2!1sen!2sin"
                  style={{ width: "100%", height: "100%", frameBorder:"0"}} allowFullScreen data-aos="fade-left" data-aos-duration="3000"></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Quick Contact</h1>
                <form className="mt-4" onSubmit={(e)=>{e.preventDefault();}}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="email address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="section3">
              <div className="infodiv numerdiv" id="numerdiv" >
                <div className="imgdiv" id="respo">
                  <img src="https://cdn-icons-png.flaticon.com/512/953/953831.png" alt="Phone" style={{width:'25px'}}/>
                </div>
                <p className="info">+995558137739 <br/> +995511132337</p>
              </div>
              <div className="address infodiv" id="address">
                <div className="imgdiv" id="respo">
                  <img src="https://cdn-icons-png.flaticon.com/512/927/927667.png" alt="Location" style={{ width: '25px' }}/>
                </div>
                <p className="info">Tbilisi, Georgia</p>
              </div>
              <div className="infodiv" id="lastinfo">
                <div className="imgdiv" id="respo">
                  <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Mail" style={{ width: '25px' }}/>
                </div>
                <p className="info">luka.koridze@iset.ge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

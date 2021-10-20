import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="card bg-dark text-white ">
        <img
          src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-slider-img-1.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex justify-content-center align-items-center text-center">
          <div>
            <h1>Contact Us</h1>
            <p>Get Intouch</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="p-4 row g-4">
          <div className="col-lg-4">
            <div className="text-center text-white rounded bg-dark p-2">
              <img
                className="img-fluid rounded-circle w-25"
                src="https://image.freepik.com/free-icon/auricular-phone_318-1028.jpg"
                alt=""
              />
              <h5>Phone</h5>
              <p>----------</p>
              <p>We are available from 7:00 am to 10:00 pm</p>
              <p>Call us at:</p>
              <p>01890-098886</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center text-white rounded bg-dark p-2">
              <img
                className="img-fluid rounded-circle w-25"
                src="https://image.freepik.com/free-icon/sent-email_318-10100.jpg"
                alt=""
              />
              <h5>Email</h5>
              <p>----------</p>
              <p>We are ready to have any gym related event</p>
              <p>Email us at:</p>
              <p>champgym2@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center text-white rounded bg-dark p-2">
              <img
                className="img-fluid rounded-circle w-25 bg-light"
                src="https://image.flaticon.com/icons/png/512/1244/1244940.png"
                alt=""
              />
              <h5>Location</h5>
              <p>----------</p>
              <p>We are located in the heart of city</p>
              <p>Locate us at:</p>
              <p>Ka-218, Zakir Complex, Dhaka</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 text-center container w-75">
        <h1>Leave us your info</h1>
        <p>and we will get back to you</p>
        <input
          type="text"
          className="form-control my-1"
          id="exampleFormControlInput1"
          placeholder="Full name"
        />
        <input
          type="text"
          className="form-control my-1"
          id="exampleFormControlInput1"
          placeholder="Subject"
        />
        <input
          type="email"
          className="form-control my-1"
          id="exampleFormControlInput1"
          placeholder="Enter your email"
        />
        <textarea className="form-control" placeholder="Message" rows="3"></textarea>
        <button className="btn btn-dark my-2">Submit Your Info</button>
      </div>
    </div>
  );
};

export default Contact;

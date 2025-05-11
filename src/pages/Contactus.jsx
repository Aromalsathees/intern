
import React, { useState } from 'react';
import axios from 'axios';

const Contactus = () => {
  const [cards, setCards] = useState({
    name: '',
    email: '',
    contact: '',
    pname: '',
    course: '',
    wnumber: '',
    pnumber: '',
    cmode: ''
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    axios.post('http://localhost:8000/add-user-details', cards)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        setSuccessMsg('Form submitted successfully!');
       
        setCards({
          name: '',
          email: '',
          contact: '',
          pname: '',
          course: '',
          wnumber: '',
          pnumber: '',
          cmode: ''
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setSuccessMsg('Something went wrong. Please try again.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCards(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bg-white w-full min-h-screen lg:mt-[-10px] mt-[-50px]">
      <div className="grid lg:grid-cols-1 md:grid-cols-2 w-full min-h-screen lg:ml-60">

        {/* details starts here */}
        <div className="bg-white p-12 flex flex-col justify-center lg:mb-1 lg:ml-70 mb-[-1px] mt-20">
          <h1 className="text-3xl font-bold text-blue-300 mb-8">Contact Us</h1>

          <div className="mb-6">
            <h2 className="text-blue-300 font-bold">Call us on:</h2>
            <p className="text-gray-600 mt-2">+91 8207246449</p>
          </div>

          <div className="mb-6">
            <h2 className="text-blue-300 font-bold">Email:</h2>
            <p className="text-gray-600 mt-2">aromalsatheesh802003@gmail.com</p>
          </div>

          <div className="mb-6">
            <h2 className="text-blue-300 font-bold">Address:</h2>
            <p className="text-gray-600 mt-2">123 Green Street, Kochi, Kerala</p>
          </div>
        </div>

        {/* details ends here */}
{/* 
        fomr starts from here */}

        <div className="bg-white p-10 flex flex-col justify-center w-full">
          <div className="lg:text-4xl text-2xl font-bold text-blue-300 mb-8 text-center">Student Contact Form</div>
          <p className='text-gray-500 font-bold text-center mb-1'>Enroll Now?</p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Leftside */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Name</label>
                <input
                  name="name"
                  type="text"
                  value={cards.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Contact</label>
                <input
                  name="contact"
                  type="text"
                  value={cards.contact}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Parent Name</label>
                <input
                  name="pname"
                  type="text"
                  value={cards.pname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Parent's Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Course</label>
                <input
                  name="course"
                  type="text"
                  value={cards.course}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Course Name"
                />
              </div>
            </div>

            {/* Rightside */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={cards.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">WhatsApp Number</label>
                <input
                  name="wnumber"
                  type="text"
                  value={cards.wnumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="WhatsApp Number"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Parent Number</label>
                <input
                  name="pnumber"
                  type="text"
                  value={cards.pnumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Parent's Phone"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">Course Mode</label>
                <select
                  name="cmode"
                  value={cards.cmode}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-8 md:col-span-2">
              <button type="submit" className="bg-blue-400 hover:bg-green-600 text-white px-6 py-2 rounded shadow">
                Submit
              </button>
              {successMsg && (
                <p className="text-green-500 font-semibold text-center mt-4">{successMsg}</p>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contactus;

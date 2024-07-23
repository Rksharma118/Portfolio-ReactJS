/*Use Formspree*/

import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xvgporwz");

  if (state.succeeded) {
    return <p className="text-green-500">Thanks for joining!</p>;
  }

  return (
    <div>
    <h1 className='text-5xl py-4 flex text-blue-500 font-bold justify-center items-center'>Contact Me</h1>
    <div id="contact" className="flex max-w-screen-xl mx-auto">
    
      {/* Left Side Content (Image or Other Content) */}
      <div className="flex-1">
        {/* Example Image */}
        <img
          src="./src/assets/pexels-joshsorenson-1714208.jpg"
          alt="Serene Landscape"
          style={{opacity:"0.8"}}
          className="w-full h-auto object-cover rounded  "
        />
      </div>
      
      {/* Right Side Form */}
      <div className="flex-1 p-8">
      
        <div className="max-w-md mx-auto bg-gray-500 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-[102%] transition shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
	<div>
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input
            id="name"
            name="name"
            className="w-full px-3 py-2 mt-1 text-sm text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
          />
          <ValidationError 
            prefix="name" 
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-3 py-2 mt-1 text-sm text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 mt-1 text-sm text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {state.submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

"use client";
import { useState } from 'react';
import { FaCircleCheck, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-12" id="contact">
      <div className="overflow-hidden max-w-6xl max-lg:max-w-2xl mx-auto p-4">
        <div className="grid lg:grid-cols-2 items-center gap-8">

          {/* Left Side: Form Container */}
          <div className="py-8 px-8 sm:px-10 bg-gray-100 rounded-3xl">
            <h2 className="text-3xl text-slate-900 font-bold">
              Get In <span className="text-blue-700">Touch</span>
            </h2>
            <p className="text-[15px] text-slate-600 mt-4 leading-relaxed">
              Have a specific inquiry? Ready to engage to find the perfect home.
            </p>

            {status === 'success' ? (
              <div className="mt-8 flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-green-100 animate-in fade-in zoom-in duration-300">
                <FaCircleCheck className="text-green-500 size-12 mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600 mt-2 text-center text-sm">Response will be provided as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-bold text-blue-700 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-tl-3xl rounded-bl-3xl max-lg:-order-1">
                <div className="space-y-4 mt-8">
                  <input required name="name" type="text" placeholder="Full Name"
                    className="px-4 py-3 bg-gray-100 text-slate-900 rounded-md w-full text-sm border border-gray-300 focus:border-blue-600 focus:bg-transparent outline-0 transition-all" />

                  <input required name="phone" type="text" placeholder="Phone No."
                    className="px-4 py-3 bg-gray-100 text-slate-900 rounded-md w-full text-sm border border-gray-300 focus:border-blue-600 focus:bg-transparent outline-0 transition-all" />

                  <input required name="email" type="email" placeholder="Email"
                    className="px-4 py-3 bg-gray-100 text-slate-900 rounded-md w-full text-sm border border-gray-300 focus:border-blue-600 focus:bg-transparent outline-0 transition-all" />

                  <input name="subject" type="text" placeholder="Subject"
                    className="px-4 py-3 bg-gray-100 text-slate-900 rounded-md w-full text-sm border border-gray-300 focus:border-blue-600 focus:bg-transparent outline-0 transition-all" />

                  <textarea required name="message" placeholder="Write Message" rows="5"
                    className="px-4 pt-3 bg-gray-100 text-slate-900 rounded-md w-full text-sm border border-gray-300 focus:border-blue-600 focus:bg-transparent outline-0 transition-all"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`mt-8 flex items-center justify-center text-sm font-medium w-full rounded-md px-4 py-3 tracking-wide text-white transition-all border-0 ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2" viewBox="0 0 548.244 548.244">
                    <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" />
                  </svg>
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>

                {status === 'error' && (
                  <p className="mt-4 text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}

            <ul className="mt-8 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 border-t border-gray-200 pt-6">
              <li className="flex items-center text-blue-700 font-medium">
                <FaEnvelope className="size-4 text-blue-700" />
                <a href="mailto:lindseykdev@gmail.com" className="text-slate-700 text-sm ml-3 hover:text-blue-700 transition-colors">lindseykdev@gmail.com</a>
              </li>
              <li className="flex items-center text-blue-700 font-medium">
                <FaPhone className="size-4 text-blue-700" />
                <a href="tel:+18505335877" className="text-slate-700 text-sm ml-3 hover:text-blue-700 transition-colors">+1 (850) 533-5877</a>
              </li>
            </ul>
          </div>

          {/* Right Side: Map Container */}
          <div className="z-10 relative h-full max-lg:min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110117.84277717445!2d-86.71129595!3d30.41673895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88913f01b0ebf49d%3A0x673e271ee914a849!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              className="absolute left-0 top-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fort Walton Beach Area Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
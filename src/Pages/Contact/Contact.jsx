import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kf80s0g", "template_waassmf", form.current, {
        publicKey: "nK6b5sNutEBmb4Jfn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert(
            "Your message has been sent successfully, we will get back shortly!"
          );
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <p className="text-center mb-10 text-lg text-gray-500 px-6 lg:px-60">
          Our expertise spans across various disciplines, ensuring that our
          clients receive top-notch support for their operations.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6 text-gray-700">
              We'd love to hear from you. Reach out to us using any of the
              methods below or fill out the form.
            </p>
            <div className="space-y-4 flex flex-col text-gray-800 text-sm">
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1755958888439!6m8!1m7!1sGxBfeXwJPVOXsq1t1D71Ng!2m2!1d5.567936549623464!2d5.79700192865511!3f208.2!4f0!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

                <p className="flex items-center gap-3">
                  <MdLocationOn className="text-customBlue text-xl" />
                  <span>
                    <strong>Address:</strong> 220 P. T. I. Rd, Effurun, Uvwie
                    330102, Delta
                  </span>
                </p>
              <a href="mailto:info@omphoenix.com.ng">
                <p className="flex items-center gap-3">
                  <MdEmail className="text-customBlue text-xl" />
                  <span>
                    <strong>Email:</strong> info@omphoenix.com.ng
                  </span>
                </p>
              </a>
              <a href="tel:+2348033670069">
                <p className="flex items-center gap-3">
                  <MdPhone className="text-customBlue text-xl" />
                  <span>
                    <strong>Phone:</strong> +234 803 367 0069
                  </span>
                </p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-md">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows="5"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button className="bg-customBlue text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

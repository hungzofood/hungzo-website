import React, { useState } from "react";

export default function Career() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // WhatsApp submission
  const handleSubmit = () => {
    const { name, email, phone, message } = form;

    if (!name || !email || !phone || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    const phoneNumber = "9081571840"; // WhatsApp receiver

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Career Application:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      className="w-full flex flex-col md:flex-row justify-center px-6 md:px-20 pt-40 pb-32 gap-20"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* LEFT PANEL — TITLE SECTION */}
      <div className="max-w-md mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#23A989] leading-snug">
          Ready to Kickstart your <br /> Career with us.
        </h1>

        <p className="text-gray-600 text-base mt-4">
          Fill out the form below and we’ll get back to you within 24 hours.
        </p>
      </div>

      {/* RIGHT PANEL — FORM CARD */}
      <div className="bg-white w-full max-w-[550px] rounded-2xl shadow-xl p-10">

        <h2 className="text-2xl font-semibold text-[#1A1F2F] mb-2">
          Apply Now!
        </h2>

        <p className="text-gray-500 text-sm mb-6 max-w-sm">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        {/* FULL NAME */}
        <div className="mb-5">
          <label className="text-xs text-gray-600 mb-1 block">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="text-xs text-gray-600 mb-1 block">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="@example.com"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full"
          />
        </div>

        {/* PHONE */}
        <div className="mb-5">
          <label className="text-xs text-gray-600 mb-1 block">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+91 987654321"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full"
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="text-xs text-gray-600 mb-1 block">Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your inquiry..."
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full h-[120px]"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#23A989] text-white font-semibold py-3 rounded-full hover:bg-[#1d9275] transition"
        >
          Send Message
        </button>

      </div>

    </div>
  );
}

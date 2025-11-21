import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update form values
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send WhatsApp Message With Validation
  const sendToWhatsApp = () => {
    const { firstName, lastName, email, phone, message } = form;

    // Validation — if any empty → error
    if (!firstName || !lastName || !email || !phone || !message) {
      alert("⚠ Please fill all the fields before sending the message.");
      return;
    }

    const text = `
📩 *New Contact Form Message*

👤 *Name:* ${firstName} ${lastName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}

💬 *Message:*
${message}
    `;

    const url = `https://wa.me/9621447029?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="w-full flex flex-col items-center px-4"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* TOP HEADING */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#23A989] mt-10 mb-10 text-center">
        Have a Question? We’re Just a Message Away
      </h2>

      {/* FORM CARD */}
      <div className="bg-white w-full max-w-[620px] rounded-2xl shadow-xl p-8 md:p-10 space-y-6">

        <h3 className="text-2xl font-bold text-[#1A1F2F]">Send us a Message</h3>

        <p className="text-gray-500 text-sm">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        {/* NAME GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-xs text-gray-600 mb-1 block">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="name"
              value={form.firstName}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              value={form.lastName}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 text-sm w-full"
            />
          </div>

        </div>

        {/* EMAIL */}
        <div>
          <label className="text-xs text-gray-600 mb-1 block">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="@example.com"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-xs text-gray-600 mb-1 block">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+91 987654321"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-xs text-gray-600 mb-1 block">Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your inquiry..."
            value={form.message}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm w-full h-[120px]"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          onClick={sendToWhatsApp}
          className="w-full bg-[#23A989] text-white font-semibold py-3 rounded-full hover:bg-[#1d9275] transition"
        >
          Send Message
        </button>
      </div>

      {/* BOTTOM BLANK SPACE */}
      <div className="h-10"></div>
    </div>
  );
}

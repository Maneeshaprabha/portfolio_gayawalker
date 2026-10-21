"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // Form එකේ දත්ත රඳවා තබා ගැනීමට State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Input වෙනස් වන විට State අලුත් කිරීම
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp හරහා පණිවිඩය යැවීම
  const handleWhatsAppSend = (e) => {
    e.preventDefault(); // Form එක submit වීම නතර කිරීම

    const phoneNumber = "+94753518586";

    // WhatsApp සඳහා පණිවිඩය සකස් කිරීම
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    // WhatsApp Web හෝ App වෙත Redirect කිරීම
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#111111] px-6 lg:px-20 border-t border-zinc-900/50"
    >
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Ready to create amazing content? Let's discuss your project
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center space-x-6 bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-[#0BB671]/50 transition-colors"
          >
            <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
              <p className="text-gray-400 text-sm">gayawalker@gmail.com</p>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center space-x-6 bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-[#0BB671]/50 transition-colors"
          >
            <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg
                className="w-7 h-7 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.4 " />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">WhatsApp</h4>

              <p className="text-gray-400 text-sm">+94 75 351 8586</p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-zinc-800">
          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[#111111] border border-zinc-800 focus:border-[#0BB671] rounded-xl p-4 text-white outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-white font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full bg-[#111111] border border-zinc-800 focus:border-[#0BB671] rounded-xl p-4 text-white outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-white font-semibold text-sm">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project"
                rows={6}
                className="w-full bg-[#111111] border border-zinc-800 focus:border-[#0BB671] rounded-xl p-4 text-white outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-[#0BB671] text-black font-bold text-lg py-4 rounded-xl hover:bg-[#16d98a] transition-colors"
            >
              {/* Clear WhatsApp Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

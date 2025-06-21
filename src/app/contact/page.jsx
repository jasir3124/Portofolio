"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function canSendEmail() {
    const submissions = JSON.parse(localStorage.getItem("email_submissions")) || [];
    const now = Date.now();
    const recent = submissions.filter((t) => now - t < 24 * 60 * 60 * 1000);

    if (recent.length >= 2) return false;

    recent.push(now);
    localStorage.setItem("email_submissions", JSON.stringify(recent));
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!canSendEmail()) {
      setStatus({ type: "error", message: "You’ve reached the submission limit (2/day)." });
      return;
    }

    
    try {
      if (!form.recaptchaToken) {
        setStatus({ type: "error", message: "Please complete the reCAPTCHA." });
        return;
      }
      
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, token: form.recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setStatus({ type: "success", message: "Thanks for reaching out! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative overflow-hidden w-full font-sans py-16">
      <div className="absolute inset-0 w-full h-full bg-white z-0" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-black">
        <section className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-Japanenglish text-maroon tracking-wide mb-2">Contact</h1>
          <div className="h-1 w-24 bg-gold mx-auto" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-Japanenglish text-maroon">Get in touch</h2>
            <p className="text-lg leading-relaxed">
              Whether you want to collaborate, ask questions, or just say hi, I'm here!
            </p>
            <div>
              <h3 className="text-xl font-semibold text-maroon mb-2">Email</h3>
              <a href="mailto:jasirlimani12@gmail.com" className="text-gold hover:underline">
                jasirlimani12@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-maroon mb-2">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/jasir3124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jasir-limani-702663178"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Jasir28616447"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-maroon font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-maroon font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-maroon font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>

            {status && (
              <p
                className={`text-sm font-semibold ${status.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {status.message}
              </p>
            )}

            <ReCAPTCHA
              sitekey="6Lfc-GcrAAAAALr027oyVc8qGWMX50JavjB3PU_9"
              onChange={(token) => {
                setForm(prev => ({ ...prev, recaptchaToken: token }));
              }}
            />


            <button
              type="submit"
              className="bg-maroon text-white px-6 py-3 rounded-md font-semibold hover:bg-gold hover:text-maroon transition-colors"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

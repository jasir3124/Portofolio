"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function canSendEmail() {
    const submissions = JSON.parse(localStorage.getItem("email_submissions")) || [];
    const now = Date.now();
    const twoHoursInMs = 2 * 60 * 60 * 1000;
    const recent = submissions.filter((t) => now - t < twoHoursInMs);

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
      setStatus({ type: "error", message: "You've reached the submission limit (2/2 hours)." });
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token: form.recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setStatus({ type: "success", message: "Thanks for reaching out! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
      <main aria-labelledby="contact-heading" className="px-6 sm:px-10 lg:px-20 py-16">
        <div className="flex items-center gap-4 mb-12">
          <h1 id="contact-heading" className="text-5xl font-Japanenglish text-maroon tracking-wide">
            Contact
          </h1>
          <div className="flex-1 h-0.5 bg-gold max-w-[120px]" aria-hidden="true" />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg md:text-xl font-sans leading-relaxed">
              Whether you want to collaborate, ask a question, or just say hi — I'm here.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-maroon mb-2 font-Japanenglish">Email</h2>
              <a href="mailto:jasirlimani12@gmail.com" className="text-gold hover:underline font-sans">
                jasirlimani12@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-maroon mb-3 font-Japanenglish">Socials</h2>
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/jasir3124", icon: <FaGithub />, label: "GitHub" },
                  { href: "https://linkedin.com/in/jasir-limani-702663178", icon: <FaLinkedinIn />, label: "LinkedIn" },
                  { href: "https://twitter.com/Jasir28616447", icon: <FaXTwitter />, label: "Twitter / X" },
                ].map(({ href, icon, label }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full border border-maroon text-maroon hover:text-gold hover:border-gold transition-all duration-300"
                        aria-label={label}
                    >
                      <span className="text-2xl block group-hover:scale-110 transition-transform">{icon}</span>
                    </Link>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-maroon font-semibold mb-1 font-Japanenglish">
                Name
              </label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-2 border-black/10 rounded-md px-4 py-2 font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-colors"
                  required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-maroon font-semibold mb-1 font-Japanenglish">
                Email
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-2 border-black/10 rounded-md px-4 py-2 font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-colors"
                  required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-maroon font-semibold mb-1 font-Japanenglish">
                Message
              </label>
              <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-2 border-black/10 rounded-md px-4 py-2 font-sans resize-y focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-colors"
                  required
              />
            </div>

            {status && (
                <p
                    role="status"
                    className={`text-sm font-semibold font-sans ${
                        status.type === "success" ? "text-green-700" : "text-red-700"
                    }`}
                >
                  {status.message}
                </p>
            )}

            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lfc-GcrAAAAALr027oyVc8qGWMX50JavjB3PU_9"
                onChange={(token) => setForm((prev) => ({ ...prev, recaptchaToken: token }))}
            />

            <button
                type="submit"
                disabled={loading}
                className="bg-maroon text-white px-6 py-3 font-Japanenglish tracking-widest hover:bg-gold hover:text-maroon transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </main>
  );
}
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setStatus("success");
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Connect
          </span>
          <h2 className="title-md mt-2">Let's work together</h2>
          <p className="subtitle mx-auto mt-3">
            Have a project in mind? Reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-4 text-muted">
            <div>
              <span className="block text-sm font-medium text-dark">Email</span>
              <a
                href="mailto:alex@merndev.io"
                className="text-primary hover:underline"
              >
                alex@merndev.io
              </a>
            </div>
            <div>
              <span className="block text-sm font-medium text-dark">
                Location
              </span>
              San Francisco, CA
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-muted hover:text-dark transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted hover:text-dark transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-[#eaeaef] space-y-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 bg-[#f8f8fc] border border-[#eaeaef] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-3 bg-[#f8f8fc] border border-[#eaeaef] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 bg-[#f8f8fc] border border-[#eaeaef] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-dark text-white rounded-xl font-medium hover:bg-dark/80 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600 text-center">
                ✓ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-500 text-center">
                Please fill all fields.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

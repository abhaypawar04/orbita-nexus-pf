import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    const phoneNumber = "917875885580";

    const whatsappMessage = `
Hello Abhay,

I would like to get in touch with you.

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section
      id="contact"
      className="
        section-pad
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f5f7fa]
        via-[#eef1f5]
        to-[#f8f9fb]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-300/20
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-300/20
          blur-[130px]
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <span
            className="
              inline-block
              text-xs
              font-semibold
              tracking-[0.2em]
              uppercase
              text-primary
            "
          >
            Connect
          </span>

          <h2
            className="
              title-md
              mt-2
              tracking-[-0.04em]
              text-[#17171a]
            "
          >
            Let's work together
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[#777b84]">
            Have a project in mind? Reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-4">
            <div
              className="
                reveal
                rounded-2xl
                border border-white/80
                bg-white/40
                p-5
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-white/60
              "
            >
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#858991]">
                Email
              </span>

              <a
                href="mailto:pawarabhay@icloud.com"
                className="mt-1 block text-sm font-medium text-[#25262a] hover:text-primary transition"
              >
                pawarabhay@icloud.com
              </a>
            </div>
            <div
              className="
                reveal
                rounded-2xl
                border border-white/80
                bg-white/40
                p-5
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-white/60
              "
            >
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#858991]">
                Location
              </span>

              <p className="mt-1 text-sm font-medium text-[#25262a]">
                Pune, Maharashtra
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="
              reveal
              relative
              md:col-span-3
              overflow-hidden
              rounded-[2rem]
              border border-white/80
              bg-white/40
              p-6
              md:p-8
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              space-y-4
            "
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="
                w-full
                rounded-2xl
                border border-black/5
                bg-white/45
                px-5
                py-4
                text-sm
                outline-none
                backdrop-blur-xl
                transition
                focus:bg-white/70
                focus:ring-4
                focus:ring-primary/10
              "
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="
                w-full
                rounded-2xl
                border border-black/5
                bg-white/45
                px-5
                py-4
                text-sm
                outline-none
                backdrop-blur-xl
                transition
                focus:bg-white/70
                focus:ring-4
                focus:ring-primary/10
              "
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me about your project..."
              className="
                w-full
                resize-none
                rounded-2xl
                border border-black/5
                bg-white/45
                px-5
                py-4
                text-sm
                leading-relaxed
                outline-none
                backdrop-blur-xl
                transition
                focus:bg-white/70
                focus:ring-4
                focus:ring-primary/10
              "
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#17181b]
                px-6
                py-4
                text-sm
                font-medium
                text-white
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:bg-black
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.22)]
                active:scale-[0.98]
                disabled:opacity-50
              "
            >
              {isSubmitting ? "Opening WhatsApp..." : "Send Message →"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm font-medium text-rose-500">
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

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronDown,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import HeroTitle from "../components/reusableComp/HeroTitle";

const CONTACT_FAQS = [
  {
    q: "How soon can I expect a response?",
    a: "Our team typically responds to all inquiries within 24 to 48 business hours.",
  },
  {
    q: "Are you open for international partnerships?",
    a: "Yes! We collaborate with global organizations, NGOs, and partners worldwide. Feel free to reach out via our contact form.",
  },
  {
    q: "Where can I access annual reports and transparency documents?",
    a: "Detailed annual reports, activity logs, and financial summaries are publicly available in our online transparency portal.",
  },
];

const ContactUsPage = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    subject: "General Information Request",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  // --- Validation Rules ---
  const validateFullName = (name) => {
    const trimmed = name.trim();
    if (!trimmed) return "Full Name is required.";
    const nameRegex = /^[a-zA-Z\u00C0-\u024F]+(?:[' -][a-zA-Z\u00C0-\u024F]+)+$/;
    if (!nameRegex.test(trimmed)) {
      return "Please enter your full name (first and last name, letters only).";
    }
    return "";
  };

  const validateEmail = (email) => {
    const trimmed = email.trim();
    if (!trimmed) return "Email address is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validateNepalPhone = (phone) => {
    const trimmed = phone.trim();
    if (!trimmed) return "Phone number is required.";
    const cleanPhone = trimmed.replace(/[\s-()]/g, "");
    const nepalRegex = /^(?:\+?977)?(?:9[6-8]\d{8}|0\d{7,8})$/;
    if (!nepalRegex.test(cleanPhone)) {
      return "Please enter a valid Nepali mobile or landline number.";
    }
    return "";
  };

  const validateAddress = (address) => {
    const trimmed = address.trim();
    if (!trimmed) return "Address is required.";
    if (trimmed.length < 5) {
      return "Address must be at least 5 characters long.";
    }
    return "";
  };

  const validateMessage = (message) => {
    const trimmed = message.trim();
    if (!trimmed) return "Message is required.";
    if (trimmed.length < 10) {
      return "Message must be at least 10 characters long.";
    }
    return "";
  };

  // Run validation for a single field
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "fullName":
        return validateFullName(value);
      case "email":
        return validateEmail(value);
      case "phone":
        return validateNepalPhone(value);
      case "address":
        return validateAddress(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before sending
    const fullNameErr = validateFullName(formData.fullName);
    const emailErr = validateEmail(formData.email);
    const phoneErr = validateNepalPhone(formData.phone);
    const addressErr = validateAddress(formData.address);
    const messageErr = validateMessage(formData.message);

    setErrors({
      fullName: fullNameErr,
      email: emailErr,
      phone: phoneErr,
      address: addressErr,
      message: messageErr,
    });

    // Stop submission if any error exists
    if (fullNameErr || emailErr || phoneErr || addressErr || messageErr) {
      return;
    }

    setLoading(true);
    setErrorMessage("");

    const SERVICE_ID = "service_acj5l1j";
    const TEMPLATE_ID = "template_espd7lb";
    const PUBLIC_KEY = "Rl6GRK15KsQEo2Qjf";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone_number: formData.phone,
          user_address: formData.address,
          subject: formData.subject,
          message: formData.message,
          to_email: "manaraofficial32@gmail.com",
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          setErrorMessage("Failed to send message. Please try again or email us directly.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-['Nunito_Sans',sans-serif]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EC8134]/10 text-[#EC8134] border border-[#EC8134]/20 text-xs font-extrabold uppercase tracking-widest font-['Montserrat',sans-serif]">
            Get In Touch
          </span>
          <HeroTitle
            className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight font-['Montserrat',sans-serif]"
            segments={[{ text: "We'd Love to Hear From You" }]}
          />
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Have questions about our initiatives, need information, or want to explore collaboration opportunities? Send us a message and we'll be in touch.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT SIDE: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
              <h2 className="text-xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                Contact Information
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#EC8134]/10 text-[#EC8134] flex items-center justify-center shrink-0 text-base">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-['Montserrat',sans-serif]">Email Us</h3>
                    <a href="mailto:manaraofficial32@gmail.com" className="text-gray-600 hover:text-[#EC8134] transition text-xs sm:text-sm">
                      manaraofficial32@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#366A35]/10 text-[#366A35] flex items-center justify-center shrink-0 text-base">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-['Montserrat',sans-serif]">Call Us</h3>
                    <a href="tel:+977014234567" className="text-gray-600 hover:text-[#366A35] transition text-xs sm:text-sm">
                      +977 1-4234567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#D34A32]/10 text-[#D34A32] flex items-center justify-center shrink-0 text-base">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-['Montserrat',sans-serif]">Main Office</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Kathmandu / Gongabu
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 text-base">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-['Montserrat',sans-serif]">Working Hours</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Monday – Friday: 10:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-['Montserrat',sans-serif]">
                  Follow Us:
                </span>
                <div className="flex gap-2">
                  <a href="#linkedin" className="w-8 h-8 rounded-full bg-slate-100 text-gray-600 hover:bg-[#EC8134] hover:text-white flex items-center justify-center transition text-xs">
                    <FaLinkedin />
                  </a>
                  <a href="#twitter" className="w-8 h-8 rounded-full bg-slate-100 text-gray-600 hover:bg-[#EC8134] hover:text-white flex items-center justify-center transition text-xs">
                    <FaTwitter />
                  </a>
                  <a href="#facebook" className="w-8 h-8 rounded-full bg-slate-100 text-gray-600 hover:bg-[#EC8134] hover:text-white flex items-center justify-center transition text-xs">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-3xl space-y-3 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EC8134]">
                Public Governance
              </span>
              <h3 className="text-lg font-bold font-['Montserrat',sans-serif]">
                Looking for Official Reports?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Review our financial disclosures, governance standards, and annual project impacts anytime on our transparency portal.
              </p>
              <a
                href="https://www.menschen-im-dialog.de/transparenz/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#EC8134] hover:underline pt-1"
              >
                <FaGlobe /> Access Transparency Portal →
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been routed to <strong>manaraofficial32@gmail.com</strong>. We will get back to you shortly!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({ fullName: "", email: "", phone: "", address: "", message: "" });
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      address: "",
                      subject: "General Information Request",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Fill out the form below and your message will be emailed directly to our team.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* FULL NAME */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-['Montserrat',sans-serif]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition bg-slate-50/50 ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-200 focus:border-[#EC8134] focus:ring-1 focus:ring-[#EC8134]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-['Montserrat',sans-serif]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition bg-slate-50/50 ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-200 focus:border-[#EC8134] focus:ring-1 focus:ring-[#EC8134]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Address Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* PHONE */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-['Montserrat',sans-serif]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9841234567 or +977 9841234567"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition bg-slate-50/50 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-200 focus:border-[#EC8134] focus:ring-1 focus:ring-[#EC8134]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* ADDRESS */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-['Montserrat',sans-serif]">
                      Your Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street, City, District"
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition bg-slate-50/50 ${
                        errors.address
                          ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-200 focus:border-[#EC8134] focus:ring-1 focus:ring-[#EC8134]"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* SUBJECT DROPDOWN */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-['Montserrat',sans-serif]">
                    Inquiry Topic
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#EC8134] focus:ring-1 focus:ring-[#EC8134] transition bg-slate-50/50 text-gray-700"
                  >
                    <option value="General Information Request">
                      General Information Request
                    </option>
                    <option value="Curious minds">Curious minds</option>
                    <option value="Project-28">Project-28</option>
                    <option value="Sponsorships">Sponsorships</option>
                    <option value="Other activities">Other activities</option>
                  </select>
                </div>

                {/* MESSAGE TEXTAREA */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-['Montserrat',sans-serif]">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition bg-slate-50/50 resize-y ${
                      errors.message
                        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-200 focus:border-[#EC8134] focus:ring-1 focus:ring-[#EC8134]"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-500 font-semibold mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#EC8134] hover:bg-[#d4702b] disabled:bg-gray-400 text-white font-bold text-sm rounded-xl transition duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer font-['Montserrat',sans-serif]"
                >
                  <FaPaperPlane className="text-xs" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Montserrat',sans-serif]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Quick answers to common questions about reaching out to us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {CONTACT_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-gray-900 cursor-pointer hover:text-[#EC8134] transition-colors font-['Montserrat',sans-serif]"
                >
                  <span className="pr-4">{faq.q}</span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#EC8134]" : "text-gray-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;
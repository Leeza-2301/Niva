"use client";

import { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email.";
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message");
      setStatus("Message sent successfully.");
      setForm(initialState);
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-md">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input id="name" name="name" value={form.name} onChange={onChange} required className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring-2" />
        {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input id="email" type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring-2" />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input id="phone" name="phone" value={form.phone} onChange={onChange} required className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring-2" />
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} required className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none ring-sky-300 focus:ring-2" />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 px-5 py-2 text-sm font-semibold text-white shadow transition hover:scale-105 hover:brightness-110 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status ? <p className="text-sm text-gray-600">{status}</p> : null}
    </form>
  );
}

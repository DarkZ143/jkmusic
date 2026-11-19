"use client";

import { useState, type FormEvent } from "react";

export default function TrialRequestForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const discipline = String(formData.get("discipline") ?? "");
    const mode = String(formData.get("mode") ?? "");
    const query = new URLSearchParams({
      subject: `Riyaz trial enquiry from ${name}`,
      body: `Hello JK Music Club,\n\nI would like to enquire about a complimentary riyaz trial.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDiscipline: ${discipline}\nPreferred mode: ${mode}\n`,
    });

    setStatus("Your email app is opening with your enquiry. Review it and press send to contact the academy.");
    window.location.href = `mailto:vidya@jkmusicclub.org?${query.toString()}`;
  }

  return (
    <form className="trial-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name
          <input autoComplete="name" name="name" placeholder="e.g. Meera Joshi" required />
        </label>
        <label>
          Email address
          <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone number
          <input autoComplete="tel" name="phone" type="tel" placeholder="+91 98765 43210" required />
        </label>
        <label>
          I am interested in
          <select name="discipline" defaultValue="Hindustani classical vocal">
            <option>Hindustani classical vocal</option>
            <option>Sitar, sarod or esraj</option>
            <option>Tabla, pakhawaj or mridangam</option>
            <option>Bansuri, harmonium or guitar</option>
            <option>Help me choose</option>
          </select>
        </label>
        <label className="form-wide">
          Preferred learning mode
          <select name="mode" defaultValue="In-person at the academy">
            <option>In-person at the academy</option>
            <option>Online lessons</option>
            <option>Either works for me</option>
          </select>
        </label>
      </div>
      <button className="button button-primary form-submit" type="submit">Continue by email</button>
      <p className="form-privacy">Your email app will open so you can review and send your enquiry.</p>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}

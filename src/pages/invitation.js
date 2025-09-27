import React, { useState } from "react";

export default function Invitation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: 1,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement RSVP data storage (API call, local file, etc.)
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>You're Invited!</h1>
      <video
        width="100%"
        controls
        src="/birthday-invite.MOV"
        style={{ borderRadius: 8, marginBottom: 20 }}
      />
      <h2>RSVP</h2>
      {submitted ? (
        <div>Thank you for your response!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:<br />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <label>
            Email:<br />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <label>
            Will you attend?<br />
            <select
              name="attending"
              required
              value={formData.attending}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Maybe</option>
            </select>
          </label>
          <br /><br />
          <label>
            Number of guests:<br />
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <label>
            Message (optional):<br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br /><br />
          <button type="submit">Submit RSVP</button>
        </form>
      )}
    </div>
  );
}

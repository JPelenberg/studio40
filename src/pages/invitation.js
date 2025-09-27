import { useState } from 'react';

export default function Invitation() {
  // Simple RSVP form state
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to /api/rsvp endpoint
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Invitation Page</h1>
      <video controls width="600">
        <source src="/birthday-invite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>RSVP</h2>
      {submitted ? (
        <p>Thank you for your RSVP, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
          <label>
            Name:
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ marginLeft: 8 }}
            />
          </label>
          <br />
          <label>
            Attending?
            <select
              value={attending}
              onChange={e => setAttending(e.target.value)}
              required
              style={{ marginLeft: 8 }}
            >
              <option value="">Select…</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <br />
          <button type="submit" style={{ marginTop: 10 }}>
            Submit RSVP
          </button>
        </form>
      )}
    </main>
  );
}

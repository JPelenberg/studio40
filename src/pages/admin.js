import React, { useEffect, useState } from "react";

export default function Admin() {
  const [rsvps, setRsvps] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRsvps() {
      try {
        const res = await fetch("/api/rsvps");
        if (!res.ok) throw new Error("Could not fetch RSVPs");
        const data = await res.json();
        setRsvps(data.rsvps || []);
      } catch (err) {
        setError("Failed to load RSVPs.");
      }
    }
    fetchRsvps();
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h1>RSVP Dashboard</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!rsvps.length ? (
        <p>No RSVPs yet!</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Name</th>
              <th>Email</th>
              <th>Attending</th>
              <th>Guests</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.map((rsvp, idx) => (
              <tr key={idx}>
                <td>{rsvp.timestamp}</td>
                <td>{rsvp.name}</td>
                <td>{rsvp.email}</td>
                <td>{rsvp.attending}</td>
                <td>{rsvp.guests}</td>
                <td>{rsvp.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
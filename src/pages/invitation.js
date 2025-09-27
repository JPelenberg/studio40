export default function Invitation() {
  return (
    <main>
      <h1>Invitation Page</h1>
      <video
        controls
        width="600"
        autoPlay
        muted
      >
        <source src="/birthday-invite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* RSVP form code goes here */}
    </main>
  );
}

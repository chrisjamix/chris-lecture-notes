import React, { useState } from "react";

export default function ChrisNotes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <header>
        <h1>🎓 Chris Lecture Notes</h1>
        <p><em>"Build a better world with Chris lecture notes"</em></p>
      </header>

      <nav>
        <a href="#about">About</a> | <a href="#notes">Notes</a> | <a href="#pricing">Pricing</a> | <a href="#contact">Contact</a>
      </nav>

      {!isLoggedIn && (
        <section id="login">
          <h2>Customer Login</h2>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </section>
      )}

      <section id="about">
        <h2>About Us</h2>
        <p>We provide quality, affordable notes for secondary and university students.</p>
      </section>

      <section id="notes">
        <h2>Notes</h2>
        <ul>
          <li>Mathematics - Secondary</li>
          <li>Accounting - University</li>
        </ul>
      </section>

      <section id="pricing">
        <h2>Pricing</h2>
        <p>Secondary Notes: UGX 2,000 per subject</p>
        <p>University Notes: UGX 5,000 per course</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>WhatsApp: 0726202396</p>
        <p>Facebook: Chris Jamix</p>
        <p>Location: Kyengera</p>
      </section>
    </div>
  );
}
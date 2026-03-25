import { useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const MOVIES = [
  { id: 1, title: "Dune: Part Three", genre: "Sci-Fi", rating: "9.1", year: 2026, img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=560&fit=crop" },
  { id: 2, title: "Neon Samurai", genre: "Action", rating: "8.7", year: 2026, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=560&fit=crop" },
  { id: 3, title: "The Last Garden", genre: "Drama", rating: "8.4", year: 2026, img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=560&fit=crop" },
  { id: 4, title: "Starfall", genre: "Thriller", rating: "8.9", year: 2026, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop" },
  { id: 5, title: "Echo Protocol", genre: "Sci-Fi", rating: "8.2", year: 2026, img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=560&fit=crop" },
  { id: 6, title: "Crimson Tide II", genre: "Action", rating: "7.9", year: 2026, img: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&h=560&fit=crop" },
  { id: 7, title: "Velvet Noir", genre: "Mystery", rating: "8.6", year: 2026, img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=560&fit=crop" },
  { id: 8, title: "The Iron Coast", genre: "Drama", rating: "8.0", year: 2026, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=560&fit=crop" },
  { id: 9, title: "Phantom Signal", genre: "Sci-Fi", rating: "8.5", year: 2026, img: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=400&h=560&fit=crop" },
  { id: 10, title: "Golden Hour", genre: "Romance", rating: "7.8", year: 2026, img: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=400&h=560&fit=crop" },
  { id: 11, title: "Deep Current", genre: "Thriller", rating: "8.3", year: 2026, img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=560&fit=crop" },
  { id: 12, title: "Ashes & Stars", genre: "Drama", rating: "9.0", year: 2026, img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=560&fit=crop" },
  { id: 13, title: "Zero Gravity", genre: "Action", rating: "7.7", year: 2026, img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=400&h=560&fit=crop" },
  { id: 14, title: "The Midnight Code", genre: "Mystery", rating: "8.8", year: 2026, img: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=400&h=560&fit=crop" },
  { id: 15, title: "Bloom", genre: "Romance", rating: "7.6", year: 2026, img: "https://images.unsplash.com/photo-1490750967868-88df5691bbfe?w=400&h=560&fit=crop" },
  { id: 16, title: "Fracture Point", genre: "Thriller", rating: "8.1", year: 2026, img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&h=560&fit=crop" },
  { id: 17, title: "Solar Wind", genre: "Sci-Fi", rating: "8.4", year: 2026, img: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&h=560&fit=crop" },
  { id: 18, title: "Haunted Meridian", genre: "Horror", rating: "8.6", year: 2026, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=560&fit=crop" },
  { id: 19, title: "Revolver City", genre: "Action", rating: "7.5", year: 2026, img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=560&fit=crop" },
  { id: 20, title: "The Pale Light", genre: "Drama", rating: "8.9", year: 2026, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=560&fit=crop" },
];

// ── STYLES ────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --surface: #12121a;
    --card: #1a1a26;
    --border: rgba(255,255,255,0.08);
    --accent: #e8b86d;
    --accent2: #c65b8a;
    --text: #f0eff6;
    --muted: #888;
    --red: #ff4d6d;
    --green: #4dffb4;
    --radius: 12px;
    --ff-display: 'Bebas Neue', sans-serif;
    --ff-body: 'DM Sans', sans-serif;
  }

  body { background: var(--bg); color: var(--text); font-family: var(--ff-body); min-height: 100vh; }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(10,10,15,0.92); backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 0 2rem;
    display: flex; align-items: center; gap: 1rem;
    height: 64px;
  }
  .nav-logo {
    font-family: var(--ff-display); font-size: 1.8rem; letter-spacing: 2px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .nav-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-left: 4px; }

  /* PAGE 1 - GRID */
  .page { padding: 2rem; max-width: 1400px; margin: 0 auto; }

  .page-title {
    font-family: var(--ff-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    letter-spacing: 3px;
    margin-bottom: 0.25rem;
    background: linear-gradient(135deg, #fff 40%, var(--accent));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .page-sub { color: var(--muted); margin-bottom: 2rem; font-size: 0.95rem; }

  .movie-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }

  .movie-card {
    position: relative; border-radius: var(--radius); overflow: hidden;
    cursor: pointer; aspect-ratio: 2/3;
    background: var(--card);
    border: 1px solid var(--border);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .movie-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
  .movie-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .movie-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 1rem;
    opacity: 0; transition: opacity 0.3s;
  }
  .movie-card:hover .movie-card-overlay { opacity: 1; }
  .movie-card-badge {
    position: absolute; top: 10px; right: 10px;
    background: var(--accent); color: #000;
    font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 20px;
  }
  .movie-card-title { font-family: var(--ff-display); font-size: 1.1rem; letter-spacing: 1px; }
  .movie-card-meta { font-size: 0.75rem; color: rgba(255,255,255,0.6); margin-top: 2px; }
  .btn-book {
    margin-top: 8px; padding: 6px 14px;
    background: var(--accent); color: #000; border: none;
    border-radius: 6px; font-weight: 600; font-size: 0.8rem;
    cursor: pointer; width: fit-content;
    transition: background 0.2s;
  }
  .btn-book:hover { background: #f5cc8e; }

  /* PAGE 2 - DETAILS */
  .details-hero {
    display: grid; grid-template-columns: 300px 1fr; gap: 3rem; align-items: start;
  }
  .details-poster {
    width: 100%; aspect-ratio: 2/3; border-radius: var(--radius);
    object-fit: cover; box-shadow: 0 30px 80px rgba(0,0,0,0.7);
    border: 1px solid var(--border);
  }
  .details-content { padding-top: 1rem; }
  .details-genre {
    display: inline-block; padding: 4px 12px; border-radius: 20px;
    border: 1px solid var(--accent); color: var(--accent); font-size: 0.8rem;
    letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem;
  }
  .details-title {
    font-family: var(--ff-display); font-size: 3.5rem; letter-spacing: 2px;
    line-height: 1.1; margin-bottom: 0.5rem;
  }
  .details-rating {
    display: flex; align-items: center; gap: 0.5rem;
    color: var(--accent); font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;
  }
  .details-rating span { color: var(--muted); font-size: 0.9rem; font-weight: 400; }
  .details-desc { color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 2rem; font-size: 0.95rem; }
  .details-info { display: flex; gap: 2rem; margin-bottom: 2.5rem; }
  .info-item { display: flex; flex-direction: column; gap: 2px; }
  .info-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); }
  .info-value { font-size: 1rem; font-weight: 600; }

  .showtimes { margin-bottom: 2.5rem; }
  .showtimes h3 { font-family: var(--ff-display); font-size: 1.4rem; letter-spacing: 2px; margin-bottom: 1rem; color: var(--muted); }
  .showtime-grid { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .showtime-btn {
    padding: 8px 20px; border-radius: 8px;
    border: 1px solid var(--border); background: var(--card);
    color: var(--text); cursor: pointer; font-family: var(--ff-body); font-size: 0.9rem;
    transition: all 0.2s;
  }
  .showtime-btn:hover, .showtime-btn.selected { border-color: var(--accent); color: var(--accent); background: rgba(232,184,109,0.1); }

  .btn-primary {
    padding: 14px 40px; border-radius: 10px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #fff; border: none; font-family: var(--ff-display);
    font-size: 1.3rem; letter-spacing: 2px; cursor: pointer;
    transition: opacity 0.2s, transform 0.2s; display: inline-flex; align-items: center; gap: 10px;
  }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); }

  .btn-back {
    display: inline-flex; align-items: center; gap: 6px;
    background: none; border: 1px solid var(--border); color: var(--muted);
    padding: 8px 16px; border-radius: 8px; cursor: pointer;
    font-family: var(--ff-body); font-size: 0.9rem; margin-bottom: 2rem;
    transition: color 0.2s, border-color 0.2s;
  }
  .btn-back:hover { color: var(--text); border-color: var(--text); }

  /* PAGE 3 - FORM */
  .form-wrap {
    max-width: 560px; margin: 0 auto;
    background: var(--card); border: 1px solid var(--border);
    border-radius: 20px; padding: 3rem;
  }
  .form-title { font-family: var(--ff-display); font-size: 2.5rem; letter-spacing: 3px; margin-bottom: 0.5rem; }
  .form-sub { color: var(--muted); margin-bottom: 2.5rem; font-size: 0.9rem; }

  .booking-summary {
    background: rgba(232,184,109,0.08); border: 1px solid rgba(232,184,109,0.2);
    border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 2rem;
    display: flex; align-items: center; gap: 1rem;
  }
  .booking-summary-img { width: 50px; height: 70px; object-fit: cover; border-radius: 6px; }
  .booking-summary-info { flex: 1; }
  .booking-summary-movie { font-weight: 600; font-size: 0.95rem; }
  .booking-summary-time { color: var(--accent); font-size: 0.82rem; margin-top: 2px; }

  .field { margin-bottom: 1.5rem; }
  .field label { display: block; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); margin-bottom: 8px; }
  .field input {
    width: 100%; padding: 13px 16px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; color: var(--text); font-family: var(--ff-body); font-size: 1rem;
    outline: none; transition: border-color 0.2s;
  }
  .field input:focus { border-color: var(--accent); }
  .field input::placeholder { color: #444; }

  /* PAGE 4 - CONFIRMATION */
  .confirm-wrap {
    max-width: 520px; margin: 0 auto; text-align: center;
  }
  .confirm-icon {
    width: 90px; height: 90px; border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    display: flex; align-items: center; justify-content: center;
    font-size: 2.5rem; margin: 0 auto 2rem;
    box-shadow: 0 0 60px rgba(232,184,109,0.4);
    animation: pulse 2s ease infinite;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 40px rgba(232,184,109,0.3); }
    50% { box-shadow: 0 0 80px rgba(232,184,109,0.6); }
  }
  .confirm-title { font-family: var(--ff-display); font-size: 3rem; letter-spacing: 3px; margin-bottom: 0.5rem; }
  .confirm-sub { color: var(--muted); margin-bottom: 2.5rem; }

  .ticket {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 16px; overflow: hidden; text-align: left;
    position: relative; margin-bottom: 2rem;
  }
  .ticket::before, .ticket::after {
    content: ''; position: absolute; top: 50%;
    width: 28px; height: 28px; border-radius: 50%; background: var(--bg);
    border: 1px solid var(--border);
    transform: translateY(-50%);
  }
  .ticket::before { left: -14px; }
  .ticket::after { right: -14px; }

  .ticket-header {
    background: linear-gradient(135deg, rgba(232,184,109,0.15), rgba(198,91,138,0.15));
    padding: 1.25rem 1.5rem;
    display: flex; align-items: center; gap: 1rem;
    border-bottom: 1px dashed var(--border);
  }
  .ticket-movie-img { width: 55px; height: 78px; object-fit: cover; border-radius: 6px; }
  .ticket-movie-title { font-family: var(--ff-display); font-size: 1.6rem; letter-spacing: 1px; }
  .ticket-movie-genre { color: var(--muted); font-size: 0.82rem; }

  .ticket-body { padding: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .ticket-field label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--muted); display: block; margin-bottom: 4px; }
  .ticket-field span { font-size: 0.95rem; font-weight: 500; }

  .booking-id-field { grid-column: 1 / -1; }
  .booking-id-value {
    font-family: monospace; font-size: 1.1rem;
    background: rgba(232,184,109,0.1); border: 1px solid rgba(232,184,109,0.3);
    border-radius: 8px; padding: 8px 14px; color: var(--accent);
    letter-spacing: 2px; display: inline-block;
  }

  .btn-home {
    padding: 12px 36px; border-radius: 10px;
    border: 1px solid var(--border); background: none;
    color: var(--text); font-family: var(--ff-body); font-size: 0.95rem;
    cursor: pointer; transition: all 0.2s;
  }
  .btn-home:hover { border-color: var(--accent); color: var(--accent); }
`;

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTime, setSelectedTime] = useState("7:00 PM");
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const [booking, setBooking] = useState(null);

  const showtimes = ["10:30 AM", "1:15 PM", "4:00 PM", "7:00 PM", "9:45 PM"];

  const handleBookSeat = () => setPage(3);

  const handleSubmit = () => {
    const id = "BK" + Math.random().toString(36).substring(2, 10).toUpperCase();
    setBooking({ ...form, id, movie: selectedMovie, time: selectedTime });
    setPage(4);
  };

  const reset = () => {
    setPage(1); setSelectedMovie(null); setSelectedTime("7:00 PM");
    setForm({ name: "", email: "", mobile: "" }); setBooking(null);
  };

  return (
    <>
      <style>{css}</style>
      <nav className="nav">
        <span className="nav-logo">CINEPLEX</span>
        <div className="nav-dot" />
      </nav>

      {/* ── PAGE 1 ── */}
      {page === 1 && (
        <div className="page">
          <h1 className="page-title">NOW SHOWING</h1>
          <p className="page-sub">Click on a movie to see details and book your seat</p>
          <div className="movie-grid">
            {MOVIES.map(m => (
              <div key={m.id} className="movie-card" onClick={() => { setSelectedMovie(m); setPage(2); }}>
                <img src={m.img} alt={m.title} loading="lazy" />
                <div className="movie-card-badge">★ {m.rating}</div>
                <div className="movie-card-overlay">
                  <div className="movie-card-title">{m.title}</div>
                  <div className="movie-card-meta">{m.genre} · {m.year}</div>
                  <button className="btn-book">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── PAGE 2 ── */}
      {page === 2 && selectedMovie && (
        <div className="page">
          <button className="btn-back" onClick={() => setPage(1)}>← Back</button>
          <div className="details-hero">
            <img className="details-poster" src={selectedMovie.img} alt={selectedMovie.title} />
            <div className="details-content">
              <div className="details-genre">{selectedMovie.genre}</div>
              <div className="details-title">{selectedMovie.title}</div>
              <div className="details-rating">★ {selectedMovie.rating} <span>/ 10 · {selectedMovie.year}</span></div>
              <p className="details-desc">
                An epic cinematic experience that pushes the boundaries of storytelling. Featuring stunning visuals, a powerful score, and performances that will leave you breathless. This is the film everyone will be talking about in 2026.
              </p>
              <div className="details-info">
                <div className="info-item"><span className="info-label">Duration</span><span className="info-value">2h 24m</span></div>
                <div className="info-item"><span className="info-label">Language</span><span className="info-value">English</span></div>
                <div className="info-item"><span className="info-label">Format</span><span className="info-value">IMAX · 4DX</span></div>
              </div>
              <div className="showtimes">
                <h3>SHOWTIMES — TODAY</h3>
                <div className="showtime-grid">
                  {showtimes.map(t => (
                    <button key={t} className={`showtime-btn ${selectedTime === t ? "selected" : ""}`} onClick={() => setSelectedTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <button className="btn-primary" onClick={handleBookSeat}>BOOK SEAT →</button>
            </div>
          </div>
        </div>
      )}

      {/* ── PAGE 3 ── */}
      {page === 3 && selectedMovie && (
        <div className="page">
          <div className="form-wrap">
            <h2 className="form-title">YOUR DETAILS</h2>
            <p className="form-sub">Fill in your info to confirm the booking</p>
            <div className="booking-summary">
              <img className="booking-summary-img" src={selectedMovie.img} alt={selectedMovie.title} />
              <div className="booking-summary-info">
                <div className="booking-summary-movie">{selectedMovie.title}</div>
                <div className="booking-summary-time">🕐 {selectedTime} · IMAX</div>
              </div>
            </div>
            <div className="field">
              <label>Full Name</label>
              <input placeholder="e.g. Riya Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="e.g. riya@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="field">
              <label>Mobile Number</label>
              <input type="tel" placeholder="e.g. 9876543210" value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} />
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <button className="btn-back" onClick={() => setPage(2)}>← Back</button>
              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.mobile}
                style={{ opacity: (!form.name || !form.email || !form.mobile) ? 0.5 : 1 }}
              >
                CONFIRM BOOKING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── PAGE 4 ── */}
      {page === 4 && booking && (
        <div className="page">
          <div className="confirm-wrap">
            <div className="confirm-icon">🎟</div>
            <h2 className="confirm-title">SEAT BOOKED!</h2>
            <p className="confirm-sub">Your booking is confirmed. Enjoy the show!</p>
            <div className="ticket">
              <div className="ticket-header">
                <img className="ticket-movie-img" src={booking.movie.img} alt={booking.movie.title} />
                <div>
                  <div className="ticket-movie-title">{booking.movie.title}</div>
                  <div className="ticket-movie-genre">{booking.movie.genre} · {booking.movie.year}</div>
                </div>
              </div>
              <div className="ticket-body">
                <div className="ticket-field booking-id-field">
                  <label>Booking ID</label>
                  <span className="booking-id-value">{booking.id}</span>
                </div>
                <div className="ticket-field"><label>Name</label><span>{booking.name}</span></div>
                <div className="ticket-field"><label>Email</label><span>{booking.email}</span></div>
                <div className="ticket-field"><label>Mobile</label><span>{booking.mobile}</span></div>
                <div className="ticket-field"><label>Show Time</label><span>{booking.time}</span></div>
                <div className="ticket-field"><label>Format</label><span>IMAX</span></div>
              </div>
            </div>
            <button className="btn-home" onClick={reset}>← Back to Movies</button>
          </div>
        </div>
      )}
    </>
  );
}

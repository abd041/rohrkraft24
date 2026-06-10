import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ padding: "5rem 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--navy)", marginBottom: "1rem" }}>
          404 – Seite nicht gefunden
        </h1>
        <p style={{ color: "var(--gray-500)", marginBottom: "2rem" }}>
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="btn btn-primary">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}

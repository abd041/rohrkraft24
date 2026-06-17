import { EQUIPMENT_ITEMS } from "@/lib/constants";
import { CheckIcon } from "@/components/icons";

export function Equipment() {
  return (
    <section className="section" style={{ background: "white" }} id="ausstattung">
      <div className="container">
        <div className="text-center mb-12">
          <p className="section-label">Professionelle Ausstattung</p>
          <h2 className="section-title mb-4">Modernes Equipment für schnelle Hilfe</h2>
          <p className="section-subtitle mx-auto">
            Für eine schnelle und fachgerechte Ausführung verfügen wir über moderne und
            professionelle Ausrüstung – von TV-Kameras bis Rothenberger und RIDGID Systemen.
          </p>
        </div>
        <ul
          className="services__grid"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", listStyle: "none", padding: 0 }}
        >
          {EQUIPMENT_ITEMS.map((item) => (
            <li
              key={item}
              className="card"
              style={{ padding: "1.25rem 1.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
            >
              <span style={{ color: "var(--orange)", flexShrink: 0, marginTop: 2 }}>
                <CheckIcon />
              </span>
              <span style={{ color: "var(--navy)", fontWeight: 600, fontSize: "0.9375rem" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

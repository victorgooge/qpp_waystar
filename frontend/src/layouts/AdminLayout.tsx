import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type AdminLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function AdminLayout({ title, children }: AdminLayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "240px",
          background: "#111827",
          color: "white",
          padding: "24px",
        }}
      >
        <h2 style={{ marginBottom: "24px" }}>QPP Admin</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link to="/admin/dashboard" style={{ color: "white" }}>Dashboard</Link>
          <Link to="/admin/payment-pages" style={{ color: "white" }}>Payment Pages</Link>
          <Link to="/admin/reports" style={{ color: "white" }}>Reports</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "32px", background: "#f9fafb" }}>
        <h1 style={{ marginBottom: "24px" }}>{title}</h1>
        {children}
      </main>
    </div>
  );
}
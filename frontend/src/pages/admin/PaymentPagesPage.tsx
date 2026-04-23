import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { mockPaymentPages } from "../../utils/mockPaymentPages";

export default function PaymentPagesPage() {
  return (
    <AdminLayout title="Payment Pages">
      <div style={{ marginBottom: "20px" }}>
        <Link to="/admin/payment-pages/new">
          <button>Create New Page</button>
        </Link>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        {mockPaymentPages.map((page) => (
          <div
            key={page.id}
            style={{
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "white",
            }}
          >
            <h3>{page.title}</h3>
            <p>Slug: {page.slug}</p>
            <p>Amount Mode: {page.amountMode}</p>
            <p>Status: {page.isActive ? "Active" : "Inactive"}</p>

            <Link to={`/admin/payment-pages/${page.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
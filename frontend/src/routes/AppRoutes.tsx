import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/admin/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage";
import PaymentPagesPage from "../pages/admin/PaymentPagesPage";
import PaymentPageEditorPage from "../pages/admin/PaymentPageEditorPage";
import ReportsPage from "../pages/admin/ReportsPage.tsx";
import PublicPaymentPage from "../pages/public/PublicPaymentPage";
import PaymentSuccessPage from "../pages/public/PaymentSuccessPage";
import PaymentErrorPage from "../pages/public/PaymentErrorPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/payment-pages" element={<PaymentPagesPage />} />
      <Route path="/admin/payment-pages/new" element={<PaymentPageEditorPage />} />
      <Route path="/admin/payment-pages/:id/edit" element={<PaymentPageEditorPage />} />
      <Route path="/admin/reports" element={<ReportsPage />} />
      <Route path="/pay/:slug" element={<PublicPaymentPage />} />
      <Route path="/payment/success" element={<PaymentSuccessPage />} />
      <Route path="/payment/error" element={<PaymentErrorPage />} />
    </Routes>
  );
}
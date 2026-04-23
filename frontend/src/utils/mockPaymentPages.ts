import type { PaymentPage } from "../types/paymentPage";

export const mockPaymentPages: PaymentPage[] = [
  {
    id: "1",
    slug: "yoga-class",
    title: "Yoga Class Payment",
    subtitle: "Pay for your upcoming yoga session",
    description: "Secure payment form for class registration.",
    brandColor: "#2563eb",
    logoUrl: "",
    headerMessage: "Welcome! Please complete your payment below.",
    footerMessage: "Thank you for choosing our studio.",
    amountMode: "fixed",
    fixedAmount: 25,
    isActive: true,
    customFields: [
      {
        id: "cf1",
        label: "Student Name",
        fieldType: "text",
        required: true,
        placeholder: "Enter full name",
        helperText: "",
        order: 1,
      },
      {
        id: "cf2",
        label: "Class Date",
        fieldType: "date",
        required: true,
        order: 2,
      },
    ],
  },
];
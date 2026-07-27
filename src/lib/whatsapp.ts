export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello! I visited your website and would like to book a consultation. Please let me know the next steps. Thank you.";

export interface ConsultationFormData {
  name: string;
  phone: string;
  treatment: string;
  message?: string;
}

export const buildConsultationMessage = (data: ConsultationFormData): string => {
  const lines = [
    "🔔 NEW CONSULTATION REQUEST",
    "",
    "👤 Patient Details",
    `* Name: ${data.name || "Not provided"}`,
    `* Phone: ${data.phone || "Not provided"}`,
    "",
    "✨ Treatment Interest",
    `* ${data.treatment || "General Consultation"}`,
    "",
    "📝 Message",
    `"${data.message || "None"}"`,
    "",
    "━━━━━━━━━━━━━━━━━━",
    "🏥 COSMO HOME",
    "Aesthetic Medicine",
    "🌐 cosmohome.in",
  ];
  return lines.join("\n");
};

export const getWhatsAppUrl = (
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  phone: string = "919495511628"
): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const textMsg = message || DEFAULT_WHATSAPP_MESSAGE;
  const encodedText = encodeURIComponent(textMsg);

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
  }
  return `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
};

export const openWhatsApp = (
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  phone: string = "919495511628"
): void => {
  const url = getWhatsAppUrl(message, phone);
  window.open(url, "_blank");
};

export const getWhatsAppUrl = (message?: string, phone: string = "919495511628"): string => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const textParam = message ? `?text=${encodeURIComponent(message)}` : "";
  const textParamWeb = message ? `&text=${encodeURIComponent(message)}` : "";

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return `https://wa.me/${cleanPhone}${textParam}`;
  }
  return `https://web.whatsapp.com/send?phone=${cleanPhone}${textParamWeb}`;
};

export const openWhatsApp = (message?: string, phone: string = "919495511628"): void => {
  const url = getWhatsAppUrl(message, phone);
  window.open(url, "_blank");
};

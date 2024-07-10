export const config = {
    emailjs: {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    },
  };
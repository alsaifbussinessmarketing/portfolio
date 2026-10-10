import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

/**
 * Sends contact form payload via EmailJS API.
 * @param {Object} formData - { name, email, service, budget, message }
 * @returns {Promise<Object>} Response object with status
 */
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      service_requested: formData.service,
      monthly_budget: formData.budget,
      message: formData.message,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, status: response.status, text: response.text };
  } catch (error) {
    console.error("EmailJS Dispatch Error:", error);
    return { success: false, error: error.text || "Failed to send email." };
  }
};
import apiClient from "./apiClient";

export const getPayKey = async (slug = "paystack") => {
  // check session
  const keys = sessionStorage.getItem("pay_keys");
  let inSes = keys
    ? JSON.parse(keys)?.find((e) => e.slug === slug)?.key
    : undefined;
  if (inSes) return inSes;

  const [k] = await Promise.all([apiClient.get(`payment/slug/${slug}`).json()]);

  inSes = k?.key;
};

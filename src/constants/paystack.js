import { nanoid } from "nanoid";
export const PAYSTACK_PUBLIC_KEY = "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx";

export const PAYSTACK_URL = "https://api.paystack.co";

export const configure = ({ amount, email }) => {
  const config = {
    reference: nanoid(),
    email: email,
    amount: amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: PAYSTACK_PUBLIC_KEY,
  };
  return config;
};

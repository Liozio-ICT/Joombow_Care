import { nanoid } from "nanoid";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { getPayKey } from "./paykey";
export const PAYSTACK_PUBLIC_KEY =
  "pk_test_be07a5345d7421a15dbca1b166ad61a31eaf327e";

export const PAYSTACK_URL = "https://api.paystack.co";

export const configure = ({ amount, email, key = PAYSTACK_PUBLIC_KEY }) => {
  const config = {
    reference: nanoid(),
    email: email,
    amount: amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: key,
  };
  return config;
};

// export const payNow = async (
//   data = { name: "", email: "", amount },
//   config = { onClose: () => {}, onSuccess: (ref) => {} },
// ) => {
//   try {
//     const config = configure({
//       ...data,
//       amount: Number(data.amount) * 100,
//       key: await getPayKey(),
//     });

//     console.log({ config });
//     const initializePayment = usePaystackPayment(config);
//     initializePayment(config.onSuccess, config.onClose);
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

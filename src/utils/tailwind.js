import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cn = (...args) => twMerge(clsx(...args));



// "prettier": "^3.2.5",
//     "prettier-plugin-tailwindcss": "^0.5.13",
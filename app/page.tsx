import { Metadata } from "next";
import HomePage from "./template";

export const metadata: Metadata = {
  title: "Taj Pumps Company",
  description:
    "TAJ PUMPS COMPANY has established its mark for about 35 years and counting and has proven its success by manufacturing and suppling quality products Nationwide",
  keywords: "Taj Pumps Company",
  publisher: "Taj Pumps Company",
};

export default function Home() {
  return <HomePage />;
}

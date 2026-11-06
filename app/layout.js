import "./globals.css";
import { BookingProvider } from "../context/BookingContext";

export const metadata = {
  title: "NearTask",
  description: "Find trusted local service providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
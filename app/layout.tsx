import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <head>
        <title>OCA</title>
      </head>
      <body>
        <ToastContainer />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

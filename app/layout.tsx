import "@/styles/globals.css";

export const metadata = {
  title: "First Portfolio",
  description: "Park Minseok Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id='header'>
      <head>{}</head>
      <body>{children}</body>
    </html>
  );
}

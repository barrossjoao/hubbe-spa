import React from 'react';

import "./globals.css";

export const metadata = {
  title: "Página Segura",
  description: "Página segura para acesso de usuários autorizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

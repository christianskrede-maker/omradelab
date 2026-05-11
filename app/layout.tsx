export const metadata = {
  title: "OmrådeLab",
  description: "Dialog mellom byggeprosjekter og nærmiljø"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'TrendForge AI',
  description: 'Discover top trends across platforms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

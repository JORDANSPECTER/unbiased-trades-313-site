export const metadata = {
  title: "UnBiased Trades",
  description: "Real-time market structure, playbooks, and Discord access.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#050505", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
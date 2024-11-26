import React from "react";
import "./globals.css";

// Google Fonts import using a <link> tag
const GoogleFontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet"
  />
);

const metadata = {
  title: "Coffee Shop",
  description: "We serve the richest coffee in the city!",
};

function App({ children }) {
  React.useEffect(() => {
    // Dynamically set document metadata
    document.title = metadata.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <GoogleFontLink />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}

export default App;

const script = document.createElement("script");
script.src = "https://unpkg.com/aos@next/dist/aos.js";
document.head.appendChild(script);

// Initialize AOS
script.onload = () => {
  AOS.init();
};

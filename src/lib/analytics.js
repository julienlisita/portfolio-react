const GA_ID = import.meta.env.VITE_GA_ID;

export function initGA() {
  if (!GA_ID || typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
  });
}

export function pageview(url) {
  if (!window.gtag) return;
  window.gtag('config', GA_ID, {
    page_path: url,
  });
}
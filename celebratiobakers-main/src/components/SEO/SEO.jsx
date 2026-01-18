import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// SEO Component for dynamic meta tags

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = "/new_logos-removebg-preview.png",
  type = "website"
}) => {
  const location = useLocation();
  const baseUrl = "https://celeberationbakers.com";
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title || "Celebration Bakers - Fresh Cakes, Pastries & Bakery Items Online";
    
    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta tags
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }

    if (title) {
      updateMetaTag('og:title', title, true);
      updateMetaTag('twitter:title', title);
    }

    updateMetaTag('og:image', image, true);
    updateMetaTag('twitter:image', image);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, type, currentUrl]);

  return null;
};

export default SEO;

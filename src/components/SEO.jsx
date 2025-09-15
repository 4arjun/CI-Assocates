import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "CI Associates — Premier Construction Company in Kerala | Industrial & Commercial Projects",
  description = "CI Associates is Kerala's leading construction company specializing in industrial buildings, commercial projects, steel fabrication, interior fit-outs, and civil works. 25+ years of excellence across South India.",
  keywords = "construction company Kerala, industrial construction, commercial buildings, steel fabrication Kerala, civil works, interior fit-outs, construction contractors South India, building contractors Kochi, structural steel works",
  ogImage = "/logo.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  schemaType = "LocalBusiness",
  canonicalUrl,
  noIndex = false,
  section = "home"
}) => {
  const baseUrl = "https://ciassociates.in"; // Replace with your actual domain
  const fullUrl = canonicalUrl || baseUrl;
  
  // Dynamic structured data based on section
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "ConstructionCompany",
      "name": "CI Associates",
      "alternateName": "CI Associates Construction",
      "description": "Premier construction company in Kerala specializing in industrial, commercial, and civil projects",
      "founder": {
        "@type": "Person",
        "name": "Mr. CI Salam"
      },
      "foundingDate": "1998",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "image": `${baseUrl}/logo.png`,
      "telephone": "+91-XXXXXXXXXX", // Add actual phone number
      "email": "info@ciassociates.in", // Add actual email
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Kerala"
        },
        {
          "@type": "State", 
          "name": "Tamil Nadu"
        },
        {
          "@type": "State",
          "name": "Karnataka"
        }
      ],
      "serviceType": [
        "Industrial Construction",
        "Commercial Construction", 
        "Steel Fabrication",
        "Civil Works",
        "Interior Fit-outs",
        "Painting & Coating",
        "Surface Finishing"
      ],
      "priceRange": "$$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "ConstructionCompany",
          "name": "CI Associates"
        },
        "ratingValue": "4.8",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    if (section === 'services') {
      return {
        ...baseOrganization,
        "@type": "Service",
        "serviceType": "Construction Services",
        "provider": baseOrganization,
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial & Commercial Projects",
              "description": "Multi-storied buildings, steel structures, warehouses, and large-scale RCC projects"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Construction & Civil Works",
              "description": "End-to-end project management, site development, and structural construction"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Steel Fabrication",
              "description": "Custom steel fabrication, structural steel work, and industrial steel solutions"
            }
          }
        ]
      };
    }

    if (section === 'about') {
      return {
        ...baseOrganization,
        "numberOfEmployees": "100-200",
        "yearlyRevenue": {
          "@type": "MonetaryAmount",
          "currency": "INR"
        },
        "award": [
          "Excellence in Construction 2023",
          "Best Industrial Contractor South India"
        ]
      };
    }

    return baseOrganization;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="CI Associates" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Language and Locale */}
      <html lang="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kochi, Kerala" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:alt" content="CI Associates Construction Company Logo" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="CI Associates" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content="CI Associates Construction Company" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#d4a574" />
      <meta name="msapplication-TileColor" content="#d4a574" />
      <meta name="application-name" content="CI Associates" />
      
      {/* Business/Industry Specific */}
      <meta name="classification" content="Construction Company" />
      <meta name="category" content="Construction, Engineering, Industrial Services" />
      <meta name="coverage" content="South India" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
    </Helmet>
  );
};

export default SEO;
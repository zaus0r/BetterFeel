import React from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  author,
  publishedDate,
  modifiedDate,
  image,
  url,
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BetterFeel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://betterfeel.se/assets/branding/logos/BetterFeel_Logo.png'
      }
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    image: image || 'https://betterfeel.se/assets/images/hero/knowledgebase_hero.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ArticleSchema; 
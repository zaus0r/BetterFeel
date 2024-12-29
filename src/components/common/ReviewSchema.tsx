import { Helmet } from 'react-helmet-async';

interface Review {
  name: string;
  date: string;
  text: string;
  rating: number;
}

interface ItemReviewed {
  name: string;
  description: string;
  image?: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  itemReviewed: ItemReviewed;
}

const ReviewSchema = ({ reviews, itemReviewed }: ReviewSchemaProps) => {
  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1),
    reviewCount: reviews.length,
    bestRating: '5',
    worstRating: '1'
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: itemReviewed.name,
    description: itemReviewed.description,
    image: itemReviewed.image || 'https://betterfeel.se/assets/branding/logos/BetterFeel_Logo.png',
    '@id': 'https://betterfeel.se',
    url: 'https://betterfeel.se',
    telephone: '+46737140860',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kungstensgatan 59',
      addressLocality: 'Stockholm',
      addressRegion: 'Vasastan',
      postalCode: '113 29',
      addressCountry: 'SE'
    },
    aggregateRating,
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.text,
      datePublished: review.date,
      publisher: {
        '@type': 'Organization',
        name: 'BokaDirekt',
        url: 'https://www.bokadirekt.se'
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
};

export default ReviewSchema; 
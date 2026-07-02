// Shared structured data for The Ferry Cafe.
// Single source of truth for NAP (name/address/phone), hours, geo and ratings.
// imported by Layout.astro so every page carries LocalBusiness data.

export const SITE = 'https://theferry.cafe';

/**
 * Restaurant / LocalBusiness schema rendered site-wide.
 *
 * aggregateRating uses Google as the single source. Re-confirm the live count on
 * the Google Business Profile before launch and keep the visible badge in
 * src/pages/index.astro matching ratingValue / reviewCount exactly.
 */
export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'The Ferry Cafe',
  description:
    'Iconic 1950s-themed seaside café at Felixstowe Ferry, famous for hand-battered fish & chips. Also serving cooked breakfasts, brunch, large artisan baker\'s rolls, homemade cakes and barista coffee with views over the River Deben estuary. Est. 1953.',
  url: SITE,
  telephone: '+441394276305',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Felixstowe Ferry',
    addressLocality: 'Felixstowe',
    addressRegion: 'Suffolk',
    postalCode: 'IP11 9RZ',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.9664, longitude: 1.3765 },
  // Café opening hours. Kitchen stops serving at 14:00; the café stays open to
  // 15:00. Saturdays open earlier (10:00); Wed/Thu/Fri/Sun open 11:00.
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Sunday'],
      opens: '11:00',
      closes: '15:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '15:00',
    },
  ],
  servesCuisine: ['Fish and Chips', 'Seafood', 'British', 'Breakfast'],
  priceRange: '££',
  hasMap: 'https://maps.google.com/?q=The+Ferry+Cafe+Felixstowe+Ferry+IP11+9RZ',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Dog Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor Seating', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Takeaway', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
  ],
  menu: `${SITE}/menu`,
  acceptsReservations: false,
  sameAs: ['https://www.facebook.com/p/The-Ferry-Cafe-100048562395567/'],
  foundingDate: '1953',
  image: `${SITE}/og-image.jpg`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.2',
    reviewCount: '454',
    bestRating: '5',
    worstRating: '1',
  },
};

/** Build a BreadcrumbList schema from [name, path] pairs. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

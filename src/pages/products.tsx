

// pages/products.tsx
import Products from '../components/Products';
import { client } from '../lib/contentfulClient';

// export default function ProductsPage({ products, sweetProducts }: any) {
  export default function ProductsPage({ products}: any) {

  return <Products products={products} />;
    // return <Products products={products} sweetProducts={sweetProducts} />;

}

// Hämta data vid build-time (SSG)
export async function getStaticProps() {
  // Vanliga produkter
  const entries = await client.getEntries({ content_type: 'product' });

  // Sötare produkter
  // const sweetEntries = await client.getEntries({ content_type: 'sweetProduct' });

  return {
    props: {
      products: entries.items,
    },
  revalidate: 60,
  };
}

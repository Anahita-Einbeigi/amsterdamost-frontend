'use client';

import Image from 'next/image';
import ost from '../assets/images/19.jpg';
import orderImg from '../assets/images/order.png';
import shippingImg from '../assets/images/shipping.png';
import fImg from '../assets/images/fresh.jpg';

interface Product {
  sys: { id: string };
  fields: {
    name: string;
    price: number;
    description: string;
    image: { fields: { file: { url: string } } };
  };
}

interface ProductsProps {
  products: Product[];
  sweetProducts?: Product[];
}

export default function Products({ products, sweetProducts }: ProductsProps) {
  return (
    <div className="products-pageWrapper">

      {/* Hero Section */}
      {/* <section className="products-heroSection d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3 mt-5" style={{ color: '#dac5a7' }}>
                Våra Ostar
              </h1>
              <p className="opacity-75" style={{ maxWidth: '700px', color: '#dac5a7' }}>
               Upptäck vårt noggrant utvalda sortiment av ostar , från klassiska favoriter till unika smaker som ger varje måltid en extra touch.<br></br> Amsterdam Ost står för kvalitet, äkthet och passion för ost, och vi vill dela denna upplevelse med dig.
Utforska våra produkter nedan och hitta dina nya favoriter.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <Image
                src={ost}
                alt="Hero Image"
                width={400}
                height={400}
                className="products-heroImage rounded-circle shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="products-hero">
          <div className="overlay">
            <div className="text-content">
              <h1>Våra Ostar – Smakfulla från Amsterdam Ost</h1>
              <p>
                Upptäck vårt noggrant utvalda sortiment av ostar , från klassiska favoriter
                till unika smaker som ger varje måltid en extra touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section container mt-5">
        <h2 className="text-center mb-5">Produkter</h2>
        <div className="products-productsGrid">
          {products.map(product => (
            <div key={product.sys.id} className="products-productCard my-4">
              <div className="card h-100 shadow-sm">
                <div className="p-3 text-center d-flex align-items-center justify-content-center">
                  <Image
                    src={`https:${product.fields.image.fields.file.url}`}
                    alt={product.fields.name}
                    width={160}
                    height={160}
                    style={{ objectFit: 'contain',borderRadius: '50%', }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.fields.name}</h5>
                  <p className="text-muted mb-0">{product.fields.price} kr/hg</p>
                  <p className="description">{product.fields.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>      

      {/* Features Section */}
      {/* <section className="products-section onlineshop text-white">
        <div className="container text-center">
          <div className="row g-4">
            {[
              { img: orderImg, title: "Beställ online", text: "Beställ oliver via mobilen" },
              { img: shippingImg, title: "Frakt inom Sverige", text: "Vid alla beställningar över 1200 kr" },
              { img: fImg, title: "Mer färskhet", text: "Färska produkter" }
            ].map((feature, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="products-featureBox d-flex flex-column align-items-center">
                  <Image src={feature.img} alt={feature.title} width={80} height={80} className="products-roundImage" />
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}

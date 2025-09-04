'use client';
import React from "react";
import ScrollingBanner from "../components/ScrollingBanner";
import Link from "next/link";
import Image from "next/image";
import logo3 from "../assets/images/01.jpg";
import logo4 from "../assets/images/02.jpg";
import logo5 from "../assets/images/03.jpg";

const Home: React.FC = () => {
  return (
    <main className="home-page">

      <section className="home-hero">
        <div className="home-heroInner">
          <h1 className="home-heroTitle">Amsterdam ost</h1>
          <p className="home-heroText">
            Upptäck våra premiumoliver och hantverksostar, noggrant utvalda för att ge dig autentiska smaker. 
            Varje produkt är omsorgsfullt tillverkad med kärlek och passion, perfekt för både vardag och fest. 
            Låt oss inspirera dina måltider med naturliga och högkvalitativa delikatesser.
          </p>
          <Link href="/products">
            <button className="home-primaryBtn">Utforska Produkter</button>
          </Link>
          
        </div>
      </section>

      <section className="home-intro">
        <aside className="home-collage">
          <div className="home-collageGrid">
            <Image src={logo3} alt="c1" style={{ width: "100%", maxHeight:"195px", height: "auto" }} />
            <Image src={logo4} alt="c2" style={{ width: "100%",  maxHeight:"195px", height: "auto" }} />
          </div>
        </aside>
        <div className="home-introText">
          <h2>Smaken av Holland i varje bit</h2>
          <p>
            Välkommen till vår värld av autentiska holländska ostar. Varje ost i vårt sortiment är noggrant utvald från traditionella gårdar i Holland, där hantverket och smaken har förfinats under generationer. Från milda, krämiga varianter till kraftfulla och lagrade ostar, erbjuder vi ett brett utbud som tillfredsställer både nybörjare och finsmakare. Upptäck skillnaden som kvalitet och omsorg kan göra i varje tugga.
          </p>
        </div>
      </section>

      <ScrollingBanner variant="light"/>

      <section className="home-feature">
        
        <div className="home-featureContent">
          <h3><span className="home-big">Färskhet och kvalitet,  direkt från Holland</span></h3>
          <p>
           Vi tror på att leverera produkter som är lika färska som de är smakrika. Våra ostar skickas direkt från holländska gårdar, noggrant förpackade för att bevara både smak och konsistens. Genom att välja våra produkter får du en autentisk upplevelse, där varje ost är ett hantverk som kombinerar tradition, kvalitet och passion för smak.
          </p>
          <Link href="/products">
            <button className="home-primaryBtn2">Utforska Produkter</button>
          </Link>          
        </div>
        <div className="home-featureImage">
          <Image src={logo5} alt="feature" style={{ width: "100%", height: "auto" }} />
        </div>

      </section>

    </main>
  );
};

export default Home;

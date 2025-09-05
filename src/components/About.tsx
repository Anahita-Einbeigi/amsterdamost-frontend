'use client';
import React from "react";
import Image from "next/image";
import logo from "../assets/images/07.jpg";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
      >
        <div className="about-heroOverlay">
          <div className="about-heroContent">
            <h1>
              Om <span className="about-elegant">Amsterdam ost</span>
            </h1>
            <p>
              Vår resa började med en passion för autentiska holländska ostar. Vi ville ge svenska konsumenter möjlighet att uppleva den äkta smaken som ofta går förlorad när ostar transporteras över långa avstånd. Genom år av noggrant urval och samarbete med hantverksmässiga producenter, har vi byggt ett sortiment som kombinerar tradition, kvalitet och hållbarhet.
            </p>
            <button
              className="about-primaryBtn"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const offset = element.offsetTop - 100;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
            >
              Läs mer om vår resa
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="products-section container text-center my-5" id="services">
        <h2 className="mb-5">Galleri</h2>
        <div className="row g-3 justify-content-center align-items-center">
          {["01.jpg","02.jpg","03.jpg","07.jpg","21.jpg","18.jpg"].map((img, idx) => (
            <div key={idx} className="col-4 col-sm-2">
              <Image
                src={require(`../assets/images/${img}`)}
                alt={`Partner ${idx+1}`}
                width={200}
                height={180}
                className="products-partnerLogo mx-auto d-block"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="aboutLine my-5">
        <div className="amsterdam-text pt-2 text-center">
          <p>
            <span>Amsterdam Ost</span>
            <span>Amsterdam Ost</span>
            <span>Amsterdam Ost</span>
            <span>Amsterdam Ost</span>
          </p>
        </div>
      </section>


      {/* Preview Section */}
      <section className="about-preview">
         <div className="about-previewMockup">
          <Image
            src= {logo}
            alt="LOGO"
            className="about-img"
            // style={{ width: "180px", height: "180px" }}
          />
        </div>
        <div className="about-previewText">
          <h2>Amsterdam Ost – alltid nära dig</h2>
          <p>
            Amsterdam Ost är ett företag som reser runt i olika städer i Sverige varje vecka för att möta våra kunder. Vi vill vara nära dig – därför hittar du oss på flera marknader och evenemang runt om i landet.
            Vårt sortiment är noggrant utvalt och vi strävar alltid efter att erbjuda hög kvalitet och en personlig service, oavsett var du träffar oss.
            Vill du veta var vi finns den här veckan?
          </p>
          <Link href="/locations">
            <button className="about-Btn">Se våra aktuella platser</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;

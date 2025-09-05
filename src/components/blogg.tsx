"use client";
// import ScrollingBanner from "../components/ScrollingBanner";
// import Image from "next/image";
// import nyheter1 from "../assets/images/06.jpg";
// import nyheter2 from "../assets/images/15.jpg"; 
// import nyheter3 from "../assets/images/08.jpg";


export default function Blogg() {
  // Lista med LinkedIn embed-länkar
  const linkedInPosts: string[] = [
    // "https://www.linkedin.com/embed/feed/update/urn:li:share:7337797078430932992?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7369324544383303680?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7369324666684862465?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7369324768556130305?collapsed=1"

  ];

  return (
    <div
        className="container py-5"
        style={{
          backgroundColor: "#0d0d0d",
          color: "#dac5a7",
          minHeight: "100vh",
          minWidth: "100vw",
          padding: "1.5rem",
          overflowX: "hidden",
        }}
      >

      <h1 className="text-center mb-5" style={{ fontWeight: "700", letterSpacing: "1px" }}>
        Senaste nyhetert från Amsterdam Ost
      </h1>
      <p className="text-center mb-5" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
        Hos Amsterdam Ost händer det alltid något nytt! Här samlar vi uppdateringar från våra resor runt i Sverige – allt från marknader och mässor till speciella evenemang. Vi vill ta med dig bakom kulisserna och visa hur vi arbetar, träffar kunder och sprider vår passion för ost.
        Genom vår koppling till LinkedIn kan du här följa med i realtid och se bilder direkt från de platser vi besöker. Följ oss och upptäck den smakresa vi bjuder på, stad för stad.  
      </p>

      {linkedInPosts.length === 0 ? (
        <p className="text-center" style={{ color: "#dac5a7", opacity: 0.7 }}>
          Vi har inga inlägg just nu.
        </p>
      ) : (
        <div className="row g-4">
          {linkedInPosts.map((url, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 shadow-lg"
                style={{
                  border: "1px solid #dac5a7",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div className="card-body text-center p-0">
                  <iframe
                    src={url}
                    allowFullScreen
                    title={`LinkedIn Post ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "400px",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <section className="amsterdam-section my-5">
        <div className="amsterdam-text">
          <p>
            <span>Amsterdam Ost</span>
            <span>Amsterdam Ost</span>
            <span>Amsterdam Ost</span>
            <span>Amsterdam Ost</span>
          </p>
        </div>
      </section>


      {/* <div style={{ marginTop: "3rem" }}>
        <ScrollingBanner variant="dark" />
      </div> */}

      {/* Services section */}
      {/* <section className="container mt-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div
              className="card h-100 text-center"
              style={{ border: "1px solid #dac5a7", background: "#f8f2e6" }}
            >
              <div className="p-3 d-flex justify-content-center align-items-center">
                <Image
                  src={nyheter1}
                  alt="Kvalitet"
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Kvalitet</h3>
                <p className="card-text">
                  Vi väljer noggrant ut våra ostar för att alltid kunna erbjuda högsta kvalitet. Hos oss hittar du smaker som förenar det bästa från tradition och hantverk.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div
              className="card h-100 text-center"
              style={{ border: "1px solid #dac5a7", background: "#f8f2e6" }}
            >
              <div className="p-3 d-flex justify-content-center align-items-center">
                <Image
                  src={nyheter2}
                  alt="Hantverk"
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Äkthet</h3>
                <p className="card-text">
                  Amsterdam Ost står för genuina produkter med en historia. Varje ost har sin unika karaktär, och vi är stolta över att dela den med dig.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div
              className="card h-100 text-center"
              style={{ border: "1px solid #dac5a7", background: "#f8f2e6" }}
            >
              <div className="p-3 d-flex justify-content-center align-items-center">
                <Image
                  src={nyheter3}
                  alt="Hållbarhet"
                  className="img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Upplevelse</h3>
                <p className="card-text">
                  För oss handlar ost inte bara om smak, utan om upplevelsen. På marknader och mässor skapar vi möten där du får känna, smaka och uppleva Amsterdam Ost på riktigt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
}

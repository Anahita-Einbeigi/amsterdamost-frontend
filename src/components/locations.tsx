'use client';

import { useState, useEffect } from 'react';
import { fetchEntries } from '../lib/contentfulClient';

type Place = {
  id: string;
  title: string;
  address: string;
  date: string;
  startdate: string;
  link: string;
  openingHours: string;
};

export default function Locations() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const loadPlaces = async () => {
      const data = await fetchEntries(); 
      setPlaces(data);
    };
    loadPlaces();
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="container">
        <section className="container text-center my-5">
          <h2 className="contact-contactTitle">Här du kan träffa oss</h2>
          {places.length === 0 && <p>Inga platser uppdaterade ännu.</p>}
          <div className="row justify-content-center g-4">
            {places.map((place) => (
              <div key={place.id} className="col-12 col-md-8 col-lg-6">
                <div className="mb-4 mt-5 contact-place-card">
                  <h4 className="contact-placeTitle text-light mb-4">{place.title}</h4>
                  <p className="contact-placeInfo m-0 p-0 ">Adress: </p>
                  <p className="contact-placeInfo m-0 p-0 mb-3 ">{place.address}</p>

                  {/* <p className="contact-placeInfo">
                    {place.startdate} - {place.date}
                  </p> */}
                  <p className="contact-placeInfo m-0 p-0 ">Öpettider: </p>
                  <p className="contact-placeInfo m-0 p-0 mb-2 ">{place.openingHours}</p>

                  <a
                    href={place.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button"
                  >
                    {place.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

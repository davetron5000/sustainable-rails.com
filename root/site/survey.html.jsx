import React from "react";

import Layout from "./components/Layout";

export default function(props) {
  return(
    <Layout compact={true}>
      <p className="pa3 tc db dn-ns">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScpaLNdDFQIplTGSiPAwniu2Zv1qUp7Ab3Y3Vd2J2iooBCE2g/viewform?usp=sf_link">
          Click Here To Take The Survey
        </a>
      </p>
      <section className="dn db-ns">
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLScpaLNdDFQIplTGSiPAwniu2Zv1qUp7Ab3Y3Vd2J2iooBCE2g/viewform?embedded=true" 
        width="640" 
        height="1542" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0">Loading…</iframe>
      </section>
    </Layout>
  )
}

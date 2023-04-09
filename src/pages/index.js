import * as React from 'react';
import Layout from '../components/layout';
import About from '../components/about';

import logo from '../images/bbhd-logo.svg';
import bgimg from '../images/2023-splash.jpg';

const logoStyle = {
  width: "50%",
  maxWidth: "150px",
  margin: "30px auto"
}
const bgstyle = {
  backgroundColor: "#BE4343",
  backgroundImage: `url(${bgimg})`,
  textAlign: "center",
  paddingTop: "4rem"
}

const selectStyle = {
  marginTop: "2rem"
}

const metatitle = 'Baseball Hack Day 2023 is on March 11';
const metadesc = 'A fun, friendly, one-day, in-person hacking competition held around the world to create baseball-related projects.';
const metaurl = 'https://www.baseballhackday.com/';
const metaimage = 'https://www.baseballhackday.com/2023-baseballhackday.jpg';

const IndexPage = () => {
  return (
    <Layout inlineStyle={bgstyle} theme="dark">
      <h3><strong>Thank you</strong><br />for attending!</h3>
      <h1>See you in March 2024!</h1>

      <h1 className="logo" style={logoStyle}>
        <img src={logo} alt="Baseball Hack Day logo" />
      </h1>

      <h2 className="tan">Fun, friendly, one-day coding competition for baseball fans.</h2>

      <section style={selectStyle}>
        <p>
          <a className="action large mbl" href="https://baseball-hack-day-2023.devpost.com/project-gallery">See 2023 submissions</a>
        </p>
        <h3>Select your city:</h3>
        <div>
          <a className="action large" href="/boston">Boston</a>
          <a className="action large" href="/toronto">Toronto</a>
        </div>
      </section>

      <About className="hero-text dark" />

      <section className="dark">
        <h3 className=""><a href="/about-history">Find out more &#187;</a></h3>
      </section>
      
      
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <link rel="canonical" href={metaurl} />‍
    <title>{metatitle}</title>‍
    <meta name="description" content={metadesc} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@BaseballHackDay" />
    <meta name="twitter:creator" content="@BaseballHackDay" />
    <meta name="twitter:title" content={metatitle} />
    <meta name="twitter:description" content={metadesc} />
    <meta name="twitter:image" content={metaimage}/>
    <meta property="og:title" content={metatitle} />
    <meta property="og:description" content={metadesc} />
    <meta property="og:image" content={metaimage}/>
    <meta property="og:url" content={metaurl} />
    <meta property="og:site_name" content={metatitle} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="fb:app_id" content="313837716146814" />
  </>
)


import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import About from '../components/about';
import Rules from '../components/rules';

import logo from '../images/bbhd-logo.svg';
import bg from '../images/toronto.png';

const logoStyle = {
  width: "100px",
  margin: "30px 0 15vh"
}
const bgstyle = {
  backgroundColor: "#fff",
  color: "#000",
}
const HeaderStyle = styled.header`
  margin: 0 -20px 4em;
  max-width: none;
  background-color: #134A8E;
  background-image: url(${bg});
  background-blend-mode: multiply;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 10vh;
  padding-top: 5vh;
  color: #fff;
  article {
    max-width: 760px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const metatitle = 'Toronto Baseball Hack Day 2023 is on March 11';
const metadesc = 'Developers and designers are wanted for a fun, friendly, one-day, in-person hacking competition to create baseball-related projects.';
const metaurl = 'https://www.baseballhackday.com/toronto/';
const metaimage = 'https://www.baseballhackday.com/2023-toronto.jpg';
const regurl = 'https://www.eventbrite.ca/e/2023-toronto-baseball-hack-day-tickets-546695901157';

const CityPage = () => {
  return (
    <Layout inlineStyle={bgstyle}>
      <HeaderStyle>
        <article>
          <h1 style={logoStyle}>
            <a href="/"><img alt="Baseball Hack Day" src={logo} /></a>
          </h1>
          <div>
            <h1>Toronto</h1>
            <h3 className="tan">Saturday, March 11, 2023</h3>
            <p>One Eleven<br />
            325 Front St W 4th Floor, Toronto, ON M5V 2Y1</p>
            <a href={regurl} className="action large">Register now!</a>
          </div>
        </article>
      </HeaderStyle>
      <div className="section-group">
        <section className="schedule">
          <h2>Schedule (tentative)</h2>
          <ul className="compact">
            <li>
              <time>9:00 am</time>
              <p>Registration, Meet and Greet, and Coffee</p>
            </li>
            <li>
              <time>9:30 am</time>
              <p>Welcome, Introductions, and Pitch</p>
            </li>
            <li>
              <time>10:00 am</time>
              <p>Design and Code</p>
            </li>
            <li>
              <time>12:30 pm</time>
              <p>Lunch (Working lunch)</p>
            </li>
            <li>
              <time>4:00 pm</time>
              <p>Stop hacking!</p>
            </li>
            <li>
              <time>4:00 pm</time>
              <p>Presentation</p>
            </li>
            <li>
              <time>6:00 pm</time>
              <p>Winner announcements</p>
            </li>
          </ul>
        </section>
        <section className="sponsors">
          <header>
            <h2>Sponsors</h2>
          </header>
          <ul className="sponsor-list">
            <li>To be announced</li>
            {/* <li>
              <a className="sponsor" href="#SponsorURL"><img alt="Sponsor Logo" src={} />
              <h3>Sponsor</h3><p>Hall of Fame sponsor</p></a>
            </li> */}
          </ul><a className="action" href="https://docs.google.com/document/d/1lA_9jqN2oqfVSRw3RnjVvqJ8Ik1Khvy6q4MVj15tCpc/edit?usp=sharing">Be a Sponsor</a>
        </section>
      </div>

      <div className="section-group">
        <section className="prizes">
          <h2>Prizes</h2>
          <ul>
            <li>
              <h3 className="tan">Toronto Overall Winners</h3>
              <p>The winning team of the Toronto competition will win something to be announced for each team member (maximum team size of four).</p>
            </li>
            <li>
              <h3 className="tan">Baseball Hack Day Grand Prize Winner</h3>
              <p>To be announced</p>
            </li>
            {/* <li>
              <h3 className="tan">Toronto Runner-Ups</h3>
              <p>The runner-up team of the Toronto competition will win something to be announced for each team member (maximum team size of four).</p>
            </li> */}
            <li>
              <p>and more! <a href="mailto:baseball.hackday.toronto@gmail.com">(Want to sponsor prizes? Please email us.)</a></p>
            </li>
          </ul>
        </section>

        <section className="judges">
          <h2>Judges</h2>
          <ul>
            <li>To be announced!</li>
            {/* <li>
              <h3 className="tan">Name</h3>
              <p>Position</p>
            </li> */}
          </ul>
        </section>
      </div>

      <section className="about">
        <h2>Come join us, March 11!</h2>
        <p>Love creating stuff on your computer and LOVE baseball? Come hack with us on March 11, 2023 at One Eleven!</p>

        <About className="two-col" />

        <p><a href={regurl} className="action large">Register!</a></p>
      </section>

      <section className="guidelines">
        <h2>Guidelines &amp; Rules</h2>

        <Rules className="two-col" />
        
      </section>
    </Layout>
  )
}

export default CityPage

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
    <meta property="og:locale" content="en_CA" />
    <meta property="og:type" content="website" />
    <meta property="fb:app_id" content="313837716146814" />
  </>
)


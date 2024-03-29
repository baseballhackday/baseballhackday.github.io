import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import About from '../components/about';
import Rules from '../components/rules';

import logo from '../images/bbhd-logo.svg';
import bg from '../images/toronto.png';
import bp from '../images/sponsors/baseball-prospectus.svg';
import bisons from '../images/sponsors/Buffalo-Bisons.jpg';
import bm from '../images/sponsors/buttonmachine.webp';
import sm from '../images/sponsors/sharpestminds.png';
import mls from '../images/sponsors/mlops.jpg';


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
          <h2>Schedule</h2>
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
              <time>12:00 pm</time>
              <p>Lunch (working)</p>
            </li>
            <li>
              <time>4:00 pm</time>
              <p>Stop hacking</p>
            </li>
            <li>
              <time>4:30 pm</time>
              <p>Presentations and Judging</p>
            </li>
            <li>
              <time>5:30 pm</time>
              <p>Winner announcements</p>
            </li>
          </ul>
        </section>
        <section className="sponsors">
          <header>
            <h2>Sponsors</h2>
          </header>
          <ul className="sponsor-list">

          <li>
            <a className="sponsor" href="https://www.sharpestminds.com/">
              <img alt="Sharpest Minds Logo" src={sm} />
              <h5>Sharpest Minds</h5><p>Hall Of Fame sponsor</p>
            </a>
          </li>
          <li>
            <a className="sponsor" href="https://mlopsworld.com/">
              <img alt="MLSOpsWorld Logo" src={mls} />
              <h5>MLSOpsWorld</h5><p>Hall Of Fame sponsor</p>
            </a>
          </li>
          <li>
            <a className="sponsor" href="https://oneeleven.com/">
              {/* <img alt="Logo" src={} /> */}
              <h5>OneEleven</h5><p>Venue</p>
            </a>
          </li>
          <li>
            <a className="sponsor" href="https://thebuttonmachine.com/">
              <img alt="Logo" src={bm} />
              <h5>TheButtonMachine</h5><p>Prizes</p>
            </a>
          </li>
          <li>
            <a className="sponsor" href="https://www.milb.com/buffalo">
              <img alt="Logo" src={bisons} />
              <h5>Buffalo Bisons</h5><p>Prizes</p>
            </a>
          </li>

          <li>
            <a className="sponsor" href="https://www.baseballprospectus.com/">
              <img alt="Baseball Prospectus Logo" src={bp} />
              <h5>Baseball Prospectus</h5><p>Prizes</p>
            </a>
          </li>
        </ul><a className="action" href="https://docs.google.com/document/d/1lA_9jqN2oqfVSRw3RnjVvqJ8Ik1Khvy6q4MVj15tCpc/edit?usp=sharing">Be a Sponsor</a>
        </section>
      </div>

      <div className="section-group">
        <section className="prizes">
          <h2>Prizes</h2>
          <ul>
            <li>
              <h3 className="tan">Toronto Winners</h3>
              <p>The winning team of the Toronto competition will win <a href="https://www.baseballprospectus.com/">a one-year subscription of Baseball Prospectus Premium</a> for each team member (maximum team size of four).</p>
              <p>The teams of the Toronto competition will also win prize packs from The Button Machine, tickets from the Buffalo Bisons, 24x20 inch Gold-Stamped poster featuring 20 designs by MLB licensed artist DJ Skee, and surprise participation prizes!</p>
            </li>
            {/* <li>
              <h3 className="tan">Baseball Hack Day Grand Prize Winner</h3>
              <p>To be announced</p>
            </li> */}
            <li>
              <p><a href="mailto:baseball.hackday.toronto@gmail.com">(Want to sponsor our grand prize? Please email us.)</a></p>
            </li>
          </ul>
        </section>

        <section className="judges">
          <h2>Judges</h2>
          <ul>
            <li>To be announced!</li>
            <li>
              <h3 className="tan">Pete Saunders</h3>
              <p>Director, Baseball Systems at Toronto Blue Jays</p>
            </li>
            <li>
              <h3 className="tan">Maria Kamali</h3>
              <p>AI/ML leader and Data Scientist</p>
            </li>
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


import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import About from '../components/about';
import Rules from '../components/rules';

import logo from '../images/bbhd-logo.svg';
import bg from '../images/boston2.jpg';
import globe from '../images/sponsors/The-Boston-Globe.png';
import nu from '../images/sponsors/Northeastern-University.png';
import br from '../images/sponsors/baseball-reference.svg';
import bp from '../images/sponsors/baseball-prospectus.svg';
import oreilly from '../images/sponsors/oreilly.svg';

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
  background-color: #BE4343;
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

const metatitle = 'Boston Baseball Hack Day 2023 is on March 11';
const metadesc = 'Developers and designers are wanted for a fun, friendly, one-day, in-person hacking competition to create baseball-related projects.';
const metaurl = 'https://www.baseballhackday.com/boston/';
const metaimage = 'https://www.baseballhackday.com/2023-boston.jpg';
const regurl = 'https://www.eventbrite.com/e/2023-boston-baseball-hack-day-tickets-534599520557';

const CityPage = () => {
  return (
    <Layout inlineStyle={bgstyle}>
      <HeaderStyle>
        <article>
          <h1 style={logoStyle}>
            <a href="/"><img alt="Baseball Hack Day" src={logo} /></a>
          </h1>
          <div>
            <h1>Boston</h1>
            <h3 className="tan">Saturday, March 11, 2023</h3>
            <p>Northeastern University, Holmes Hall<br />
            41 Leon St., Boston, MA 02115</p>
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
              <p>Registration, Meet and Greet, Coffee and light breakfast</p>
            </li>
            <li>
              <time>9:30 am</time>
              <p>Welcome, Introductions, and Pitch</p>
            </li>
            <li>
              <time>10:00 am</time>
              <p>Start hacking! Design and Code</p>
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
              <time>4:15 pm</time>
              <p>Presentation</p>
            </li>
            <li>
              <time>5:30 pm - 6:00 pm</time>
              <p>Winner announced</p>
            </li>
          </ul>
        </section>
        <section className="sponsors">
          <header>
            <h2>Sponsors</h2>
          </header>
          <ul className="sponsor-list">
            <li>
              <a className="sponsor" href="https://camd.northeastern.edu/"><img alt="Northeastern University Logo" src={nu} />
              <h5>Northeastern University&rsquo;s College of Arts, Media and Design</h5><p>Hall of Fame sponsor</p></a>
            </li>
            <li>
              <a className="sponsor" href="https://www.bostonglobe.com/"><img alt="Boston Globe Logo" src={globe} />
              <h5>Boston Globe Media Partners Engineering </h5><p>Hall of Fame sponsor</p></a>
            </li>
            <li>
              <a className="sponsor" href="https://www.baseball-reference.com/"><img alt="Baseball-Reference.com Logo" src={br} />
              <h5>Sports Reference</h5><p>Hall of Fame sponsor</p></a>
            </li>
            <li>
              <a className="sponsor" href="https://www.baseballprospectus.com/"><img alt="Baseball Prospectus Logo" src={bp} />
              <h5>Baseball Prospectus</h5><p>Prizes</p></a>
            </li>
            <li>
              <a className="sponsor" href="https://www.oreilly.com/"><img alt="O'Reilly Logo" src={oreilly} />
              <h5>O'Reilly</h5><p>Prizes</p></a>
            </li>
          </ul>
          <a className="action" href="https://docs.google.com/document/d/1lA_9jqN2oqfVSRw3RnjVvqJ8Ik1Khvy6q4MVj15tCpc/edit?usp=sharing">Be a Sponsor</a>
        </section>
      </div>

      <div className="section-group">
        <section className="prizes">
          <h2>Prizes</h2>
          <ul>
            <li>
              <h3 className="tan">Boston Winners</h3>
              <p>The winning team of the Boston competition will win <a href="https://www.baseballprospectus.com/">a one-year subscription of Baseball Prospectus Premium</a> for each team member (maximum team size of four).</p>
            </li>
            <li>
              <h3 className="tan">Baseball Hack Day Grand Prize</h3>
              <p>To be announced!</p>
            </li>
            <li>
              <h3 className="tan">Boston Runner-Ups</h3>
              <p>O'Reilly Media is providing some books as prizes.</p>
            </li>
            <li>
              <p>and more! <a href="mailto:daigo@daigofujiwara.com">(Want to sponsor prizes? Please email us.)</a></p>
            </li>
          </ul>
        </section>

        <section className="judges">
          <h2>Judges</h2>
          <ul>
            <li>
              <h3 className="tan">Aidan Jackson-Evans</h3>
              <p>Customer Success Coordinator, Sports Reference</p>
            </li>
            <li>
              <h3 className="tan">Matthew Carroll</h3>
              <p>Professor of the Practice, Journalism, Northeastern University</p>
            </li>
            <li>To be announced!</li>
          </ul>
        </section>
      </div>

      <section className="about">
        <h2>Come join us, March 11!</h2>
        <p>Love creating stuff on your computer and LOVE baseball? Come hack with us on March 11, 2023 at Northeastern University!</p>

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
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="fb:app_id" content="313837716146814" />
  </>
)

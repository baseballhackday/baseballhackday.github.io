import * as React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
import logo from '../images/bbhd-logo.svg'
import bg from '../images/boston2.jpg'
import globe from '../images/sponsors/The-Boston-Globe.png';
import nu from '../images/sponsors/Northeastern-University.png';

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
    max-width: 860px;
    margin: 0 auto;
    padding: 20px;
  }
`;
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
            <a href="https://www.eventbrite.com/e/2023-boston-baseball-hack-day-tickets-534599520557" className="action large">Register now!</a>
          </div>
        </article>
      </HeaderStyle>
      <div className="section-group">
        <section className="schedule">
          <h2>Schedule (tentative)</h2>
          <ul>
            <li>
              <time datetime="">9:00</time>
              <p>Registration, Meet and Greet, and Coffee</p>
            </li>
            <li>
              <time datetime="">9:30</time>
              <p>Welcome, Introductions, and Pitch</p>
            </li>
            <li>
              <time datetime="">10:00</time>
              <p>Design and Code</p>
            </li>
            <li>
              <time datetime="">12:30</time>
              <p>Lunch (Working lunch)</p>
            </li>
            <li>
              <time datetime="">4:00pm</time>
              <p>Stop hacking!</p>
            </li>
            <li>
              <time datetime="">4:00 &ndash; 5:00pm</time>
              <p>Presentation</p>
            </li>
            <li>
              <time datetime="">5:00pm</time>
              <p>Awards announcements</p>
            </li>
          </ul>
        </section>
        <section className="sponsors">
          <header>
            <h2>Sponsors</h2>
          </header>
          <ul className="sponsor-list">
            <li>
              <a className="sponsor" href="#SponsorURL"><img alt="Northeastern University Logo" src={nu} />
              <h3>Northeastern University</h3><p>Hall of Fame sponsor</p></a>
            </li>
            <li>
              <a className="sponsor" href="#SponsorURL"><img alt="Boston Globe Logo" src={globe} />
              <h3>The Boston Globe</h3><p>Hall of Fame sponsor</p></a>
            </li>
          </ul><a className="action" href="https://docs.google.com/document/d/1lA_9jqN2oqfVSRw3RnjVvqJ8Ik1Khvy6q4MVj15tCpc/edit?usp=sharing">Be a Sponsor</a>
        </section>
      </div>

      <div className="section-group">
        <section className="prizes">
          <h2>Prizes</h2>
          <ul>
            <li>
              <h3>Boston Overall Winners</h3>
              <p>The winning team of the Boston competition will win TBA! for each team member (maximum team size of four).</p>
            </li>
            <li>
              <h3>Baseball Hack Day Grand Prize Winner</h3>
              <p></p>
            </li>
            <li>
              <h3>Boston Runner-Ups</h3>
              <p>The runner-up team of the Boston competition will win TBA! for each team member (maximum team size of four).</p>
            </li>
            <li>
              <p>and more! <a href="mailto:daigo@daigofujiwara.com">(Want to sponsor prizes? Please email us.)</a></p>
            </li>
          </ul>
        </section>

        <section className="judges">
          <h2>Judges</h2>
          <ul>
            <li>... and TBA</li>
            {/* <li>
              <h3>Name</h3>
              <p>Position</p>
            </li> */}
          </ul>
        </section>
      </div>

      <section className="about">
        <h2>Come join us, March 11!</h2>
        <p>Love creating stuff on your computer and LOVE baseball? Come hack with us on March 11, 2023 at Northeastern University!</p>
        <div className="two-col">
          <p><a href="http://www.baseballhackday.com/">Baseball Hack Day</a> is an annual on-site, in-person hacking event (also known as hackathon, hack fest, code fest, or code party) where area baseball fans come together and create baseball-related projects to compete in a fun, friendly, one-day competition. Come with your laptop computer and your ideas or open mind!</p>
          
          <p>Born in Boston spring of 2012, Baseball Hack Day is a grass-roots, open-sourced movement, held at the same day at different locations all around the world. The goal of the day is to bring creative tech minds into one room, and see what they can produce within a limited time. The project could be (but is not limited to) a tool, simple web app, mobile app, web site, or data visualization.</p>

          <p>This event is based on the principal of the original <a href="http://hackdaymanifesto.com/">the Hack Day Manifesto</a> and will always be free to attend, thanks to our generous sponsors. We are run by volunteers, pro bono, labor for love, and we are not-for-profit. We follow <a href="https://hackcodeofconduct.org/">Hack Code of Conduct</a>.</p>
        </div>
        <p><a href="https://www.eventbrite.com/e/2023-boston-baseball-hack-day-tickets-534599520557" className="action large">Register!</a></p>
      </section>

      <section className="guidelines">
        <h2>Guidelines &amp; Rules</h2>
        <div className="two-col">
          <p>First and foremost, this event will be a success if everyone has a good time. That is why we have a <a href="https://hackcodeofconduct.org/">Code of Conduct</a>. All attendees, sponsors, partners, volunteers and staff at our hackathon are required to agree with it. We want a safe, fair and fun environment for everybody.</p>

          <p>We are using a hack submission service called <a href="http://devpost.com/">DevPost</a>. In order to win, you need to submit the hacks through it. It helps organizers keep track of the teams and the projects they create.</p>

          <p>Hacks could be (but are not limited to) a tool, application, software, website, or data visualization and may be built using any programming language and platform that you choose. Teams can be of any size, but awards are only given to up to four individuals per team. Hacks will be judged for 
            <ol>
            <li><strong>Creativity/Originality</strong>,</li>
            <li><strong>Design/Aesthetics</strong>, and</li>
            <li><strong>Execution/Functionality</strong>.</li>
            </ol>
          </p>

          <p>The majority of your coding must happen during the event. Some work done prior to the event is allowed, but it should be disclosed at your demo. Ideas that are compact and executable in one-day format are encouraged, and we will reward teams that recognize this time constraint.</p>

          <p>When time is up, you will have short show-and-tell and demo time (~3 minutes). Judges also will come around during the event and you are encouraged to tell them about your projects at that time.</p>

          <p>Prototypes/mockups for demo are OK, but working websites or mobile apps are strongly encouraged.</p>
        </div>
      </section>
    </Layout>
  )
}

export default CityPage

export const Head = () => <title>Baseball Hack Day 2023 Boston is on March 11</title>

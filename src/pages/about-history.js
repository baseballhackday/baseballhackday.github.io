import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import About from '../components/about';
import logo from '../images/bbhd-logo.svg';
import bg from '../images/about.jpg';

const logoStyle = {
  display: "inline-block",
  width: "90px",
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
const AboutPage = () => {
  return (
    <Layout inlineStyle={bgstyle}>
       <HeaderStyle>
        <article>
          <h1><a href="/"><img style={logoStyle} src={logo} alt="Baseball Hack Day logo" /></a>About & History</h1>
          <h4 className="mtl mhl tan">Fun, friendly, one-day coding competition for baseball fans.</h4>
        </article>
      </HeaderStyle>

      <div className="section-group">
        <section className="about">
          <h2>About the hack day</h2>
          <article>
            
            <About className="" />

            <p>See our resources in <a href="https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas">github wiki</a>, check out our <a href="http://baseballhackday.tumblr.com/">inspiraton blog on tumblr</a>, and  <a href="">@BaseballHackDay</a>. See our doc on <a href="https://docs.google.com/document/d/1N1UtvOCPPPdMF-Y7zvwGZOL5cObL9a2Z0ouOUB5JCTA/edit?usp=sharing">sponsors</a> or <a href="https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing">start your own chapter</a>.</p>
          </article>
        </section>

        <aside>
          <h2>Forum &amp; Resources</h2>
          <p>New to hack days? No need to fear. There'll be people of all skill levels and skill sets participating. What do they make? See submissions from past years: <a href="https://baseball-hack-day-2023.devpost.com/project-gallery">2023</a>, <a href="https://baseball-hack-day-2019.devpost.com/submissions">2019</a>, <a href="https://baseballhackday-2018.devpost.com/submissions">2018</a>, <a href="https://baseballhackday-2017.devpost.com/submissions">2017</a>, <a href="http://2016baseballhackday.challengepost.com/submissions">2016</a>, <a href="http://2015baseballhackday.challengepost.com/submissions">2015</a>, <a href="http://baseballhackday.challengepost.com/submissions">2014</a></p>
          <ul>
            <li>
              <a className="action" href="https://baseballhackday-slack.herokuapp.com">Join Us on Slack</a>
            </li>
            <li>
              <a className="action" href="https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas">Resources &amp; Ideas github wiki</a>
            </li>
            <li>
              <a className="action" href="http://baseballhackday.tumblr.com/">Inspiraton Blog</a>
            </li>
            <li>
              <a className="action" href="https://twitter.com/baseballhackday">follow us on Twitter</a>
            </li>
            <li>
              <a className="action" href="https://docs.google.com/document/d/1N1UtvOCPPPdMF-Y7zvwGZOL5cObL9a2Z0ouOUB5JCTA/edit?usp=sharing">Sponsor the event</a>
            </li>
            <li>
              <a className="action" href="https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing">Start one in your own city</a>
            </li>
          </ul>
        </aside>
      </div>



      <div className="section-group">
        <section className="about">
          <h2>Past Winners</h2>
          <article>
            <ul>
              <li>
                <strong>2023 winners:</strong> <a href="https://devpost.com/software/mlb-time-tracker">MLB Time Tracker</a> by Justin Nowell, <a href="https://devpost.com/software/batterup">BatterUp</a> by Remy Hunter, Parmita Gurung, and Benjamin Tan, and <a href="https://devpost.com/software/who-s-on-first">Who's on First?</a> by Sajeev Balakrishnan, Oswaldo Ustariz, and Arash Dehghan
                <br />
                <a href="https://baseball-hack-day-2023.devpost.com/project-gallery">See all submissions from 2023 Baseball Hack Day</a>
              </li>
              <li>
                <strong>2019 winner:</strong> <a href="https://devpost.com/software/crackarjack">crack-AR-jack: an augmented reality app </a> by Ed Arenberg
                <br />
                <a href="https://baseball-hack-day-2019.devpost.com/submissions">See all submissions from 2019 Baseball Hack Day</a>
              </li>
              <li>
                <strong>2018 winner:</strong> <a href="https://devpost.com/software/turn-two">Crowdtron: Turns the crowd into a colorful jumbotron</a> by Laney Zamore, Tim Ryan, Jeff Morrison, and Sam Voigt 
                <br />
                <a href="https://baseballhackday-2018.devpost.com/submissions">See all submissions from 2018 Baseball Hack Day</a>
              </li>
              <li>
                <strong>2017 winner:</strong> <a href="https://devpost.com/software/turn-two">Turn Two: Augmented reality baseball fan experience</a> by James Blackwell, Roman Jaquez, and Bilal Bashir
                <br />
                <a href="http://m.mlb.com/cutfour/2017/03/31/221489550/turn-two-the-baseball-vr-app-won-baseball-hack-days-grand-prize">MLB: The future of baseball technology was on display at the sixth annual Baseball Hack Day</a>
                <br />
                <a href="https://baseballhackday-2017.devpost.com/submissions">See all submissions from 2017 Baseball Hack Day</a>
              </li>
              <li>
                <strong>2016 winners:</strong> <a href="https://devpost.com/software/mlb-player-birth-places-over-time">playerplaces</a> by Matthew R., Rob Powell, Ted Lawless, Kathryn Schrumpf; <a href="https://devpost.com/software/baseballhackday">MLB Rivals</a> by Chul Ahn; <a href="https://devpost.com/software/game-recommendation">Game Recommendation</a> by Alex Marcotte; <a href="https://devpost.com/software/watchcuts">WatchCuts</a> by Ellen Shapiro, Dustin Fox, Thomas Martin; and <a href="https://devpost.com/software/baseball-hackday-rabpv0">Third Base Coach</a> by Kevin Leung, Eli Smukler, James Loewen
                <br />
                <a href="http://2016baseballhackday.challengepost.com/submissions">See all submissions from 2016 Baseball Hack Day</a>
              </li>
              <li>
                <strong>2015 winner: PITCHe/x</strong> - 3D mini-game where you face off against MLB pitchers by Daniel Shin and Thomas Park <br />
                <a href="http://2015baseballhackday.challengepost.com/submissions">See all submissions from 2015 Baseball Hack Day</a>
              </li>
              <li>
                <strong>2014 winners: <a href="http://hackbaseball.azurewebsites.net/">MLB Gameday Mosiac</a></strong> by Brendan Donahue, Bill Wilder, Maura Wiler, Brendon Donahue, and Joan Wortman. And <strong><a href="http://david733.scripts.mit.edu/bballhackday2014/">Need My Baseball Fix</a></strong>  by David Lee.<br />
                <a href="http://baseballhackday.challengepost.com/submissions">See all submissions from Baseball Hack Day 2014</a>
              </li>
              <li>
                <strong>2013 winners: </strong> <a href="http://mysterious-lowlands-4395.herokuapp.com/">How did we get here?</a> by Simon Mahler and Ian Malott, and <a href="http://baseball.jameshrisho.com/">Where should i have been born to play MLB</a> by James Hrisho

                <br /><a href="https://www.hackerleague.org/hackathons/boston-baseball-hack-day-2013/hacks">See submissions</a> and <a href="/2013/#recap">recap</a> from 2013 Baseball Hack Day
              </li>
              <li>
                <strong>2012 winner: <a href="bit.ly/rally-cry">Rally Cry</a></strong> by John Hamilton, Kenji Ross, Mike Paulo, Doug Pfeffer<br /><a href="/2012/#recap">See recap of inagural Baseball Hack Day in 2012</a>
              </li>
            </ul>
          </article>
        </section>

        <aside>
          <h2>History</h2>
          <article>     
            <p>Baseball Hack Day was originally born out of a Boston area in 2012 by members of news &amp; geek meetup group <a href="http://meetupbos.hackshackers.com/">Hacks/Hackers</a> and <a href="http://chapters.sabr.org/boston/">Society of American Baseball Research Boston Chapter</a>. Our <a href="/2012/">first event was held at The Boston Globe on March 24, 2012</a> with 35 participants with 9 projects. In 2013, <a href="/2013/">thoughtbot hosted a 31-participants, 10-projects fun and inspiring hack day</a> in March. In 2014, Baseball Hack day <a href="/2014/">expanded into two cities, Boston and Philadelphia</a>. Since then, this annual, grass-roots, volunteer-run and open-sourced project have had events in Boston, Philadelphia, Montreal, Chicago, San Francisco, San Diego, Ann Arbor, Twin Cities, Cincinnati, Seattle, Los Angeles and Toronto! See our line up in our archive: <a href="/2015">2015</a>, <a href="/2016">2016</a>, <a href="/2017">2017</a>, <a href="/2018">2018</a>, and <a href="/2019">2019</a>. 2020 event was scheduled but cancelled due to coronavirus pandemic. We had a wonderful write up in <a href="http://m.mlb.com/cutfour/2017/03/31/221489550/turn-two-the-baseball-vr-app-won-baseball-hack-days-grand-prize">MLB cut 4 after 2017</a>. Another <a href="https://camd.northeastern.edu/gameplan/2019/04/01/a-firefighter-and-two-software-developers-walk-into-a-baseball-hackathon/">good write up on 2019</a>.</p>

            <p>The event is based on the principal of <a href="http://hackdaymanifesto.com/">the Hack Day Manifesto</a>. It will always be free to attend, and we are run by volunteers, and we'll never be for-profit. It's a collective labor of love. If you want to join us in the fun, <a href="https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing">read this doc</a>, then <a href="https://join.slack.com/t/baseballhackday/shared_invite/zt-1cnldwbkk-h_oAJO_PJfchijcOujJoHw">join our slack channel</a> and reach out. Can't wait to hear from you!</p>
          </article>
        </aside>
      </div>


      <section>
        <h2>Baseball Hack Day Logo Assets</h2>
        <p>Feel free to download and use for promotions of your local event. Thanks to <a href="http://kylefiedler.com/">Kyle Fiedler</a> for designing us the logo.</p>
        <ul>
          <li><a href="/logos/BBHD-green-large.png">Large green png</a></li>
          <li><a href="/logos/BBHD-large.png">Large red png</a></li>
          <li><a href="/logos/BBHD-green.png">Small green png</a></li>
          <li><a href="/logos/bbhd-logo.png">Small red png</a></li>
          <li><a href="/logos/baseballhackday.ai">Adobe Illustrator .ai file (1.5MB)</a></li>
          <li><a href="/logos/baseballhackday.eps">Illustrator EPS (1.9MB)</a></li>
          <li><a href="/logos/baseballhackday.svg">SVG</a></li>
        </ul>
      </section>
      
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>Baseball Hack Day, March 11, 2023</title>

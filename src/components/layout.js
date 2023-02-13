import React from 'react'
import styled from 'styled-components';
import 'normalize.css'

const PageStyle = styled.main`
  font-family: 'Montserrat';
  min-height: 100vh;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  background-blend-mode: multiply;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 20px 20px;
  width: calc(100% - 40px);
  img {
    max-width: 100%;
  }
  & > * {
    max-width: 800px;
    margin: 10px auto;
  }
  .tan {
    color: #CDCCBB;
  }
  a {
    color: #CDCCBB;
    &.sponsor {
      text-decoration: none;
    }
    &:hover {
      color: #fff;
    }
  }
  .section-group {
    @media(min-width: 600px) {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 3rem;
    }
  }
  section {
    margin-bottom: 4rem;
  }
  .two-col {
    @media(min-width: 600px) {
      column-count: 2;
      column-gap: 1rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Hepta Slab';
  }
  h4 {
    margin-bottom: 0.75rem;
  }
  ul {
    padding-left: 0;
    list-style-type: none;
    li {
      margin: 0 0 1rem;
      p, h3 {
        margin: 0 0 0.5rem;
      }
    }
    &.compact li {
      margin: 0 0 0.25rem;
    }
  }
  h1 {
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 0.833rem + 3.333vw, 2.25rem);
    line-height: 1.3;
    margin: 0 auto 1rem;
  }
  h3 {
    font-size: 1rem;
    font-size: clamp(1rem, 0.556rem + 2.222vw, 1.5rem);
    line-height: 1.3;
    margin: 0 auto 1rem;
  }
  .action {
    display: inline-block;
    transition: all 0.15s ease-out 0s;
    background-color: #CDCCBB;
    color: #140707;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    text-decoration: none;
    letter-spacing: 1px;
    line-height: 1;
    padding: 0.8rem 0.75rem;
    text-transform: uppercase;
    &.large {
      font-weight: bold;
      font-size: 24PX;
    } 
    @media(min-width:520px) {
      padding: 0.8rem 1.5rem;
    }
    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
  time {
    font-size: 1.3rem;
    color: #CDCCBB;
    font-weight: 900;
  }
`;

const footerStyle = {
  textAlign: "center",
  marginTop: "3rem"
}

export default function Layout({ children, inlineStyle }) {
  return (
    <PageStyle style={inlineStyle}>
      {children}

      <footer style={footerStyle}>

        <section>
          <p>New to hack days? Have no fear. This is a hackathon of developers and designers of all levels. See past submissions to get an idea. See our resources in <a href="https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas">github wiki</a>, check out <a href="http://baseballhackday.tumblr.com/">our inspiraton blog on tumblr</a>, <a href="https://join.slack.com/t/baseballhackday/shared_invite/zt-1cnldwbkk-h_oAJO_PJfchijcOujJoHw">join us on our Slack chat</a>, and follow us on <a href="http://twitter.com/baseballhackday">Twitter @BaseballHackDay</a></p>

          <h4 className="tan">Past submissions</h4>
          <div>
            <a className="action" href="https://baseball-hack-day-2019.devpost.com/submissions">2019</a>
            <a className="action" href="https://baseballhackday-2018.devpost.com/submissions">2018</a>
            <a className="action" href="https://baseballhackday-2017.devpost.com/submissions">2017</a>
            <a className="action" href="http://2016baseballhackday.challengepost.com/submissions">2016</a>
            <a className="action" href="http://2015baseballhackday.challengepost.com/submissions">2015</a>
            <a className="action" href="http://baseballhackday.challengepost.com/submissions">2014</a>
          </div>
        </section>


        <section className="about-history">
          <div>
            Interested in <a href="https://docs.google.com/document/d/1lA_9jqN2oqfVSRw3RnjVvqJ8Ik1Khvy6q4MVj15tCpc/">Sponsoring?</a> (Thank you!)
          </div>
          <div>
            Don't see your city? <a href="https://docs.google.com/document/d/1bwzyhGPWIfZ6w5FyQqUOpu_s8vkUwcrPy2UHvw4QImY/edit?usp=sharing">START YOUR OWN!</a>
          </div>
          
          <div>
            <a href="/about-history">About Baseball Hack Day and its History</a>
          </div>

          <div>
            Follow <a href="https://twitter.com/baseballhackday">us on twitter</a>. <a href="http://eepurl.com/tNLSz">Join our mail list</a> or <a href="https://join.slack.com/t/baseballhackday/shared_invite/zt-1cnldwbkk-h_oAJO_PJfchijcOujJoHw">our slack</a>
          </div>
        </section>
        <p>Baseball Hack Day - &copy;2012-2023</p>

        <h4>2023 volunteer organizers</h4>
        <ul className="compact">
          <li>Daigo Fujiwara, Matt Carroll, Matthew Shanley, James Smith, Kianosh Pourian (Boston)</li>
          <li>Elizabeth Cotton (San Diego)</li>
          <li>Edward Johnson (Toronto)</li>
        </ul>

        <p><a href="/">Home</a> | <a href="/boston">Boston</a> | <a href="/">Home</a></p>
      </footer>
    </PageStyle>
  )
}
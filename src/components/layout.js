import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

const PageStyle = styled.main`
  font-family: 'Montserrat';
  min-height: 100vh;
  font-size: 0.9rem;
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
    max-width: 650px;
    margin: 10px auto;
  }
  .tan {
    color: #CDCCBB;
  }
  a {
    color: #BE4343;
    &.sponsor {
      text-decoration: none;
      color: #CDCCBB;
    }
    &:hover {
      color: #BE4343;
    }
  }

  .dark a {
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
  h1 {
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 0.5rem + 3.33vw, 2.4rem);
    line-height: 1.3;
    margin: 0 auto 1rem;
  }
  h2 {
    font-size: 1.2rem;
    font-size: clamp(1.2rem, 0.6rem + 2vw, 1.6rem);
    line-height: 1.3;
    margin: 0 auto 1rem;
  }
  h3 {
    font-size: 1.1rem;
    font-size: clamp(1.1rem, 0.8rem + 1vw, 1.2rem);
    line-height: 1.3;
    margin: 0 auto 1rem;
  }  
  h4 {
    font-size: 1rem;
    font-size: clamp(1rem, 0.8rem + 0.66vw, 1.1rem);
    margin-bottom: 0.75rem;
  }
  h5 {
    font-size: 1rem;
    margin: 0 auto 3px;
  }
  .action, .dark a.action {
    display: inline-block;
    transition: all 0.15s ease-out 0s;
    border: 1px solid #CDCCBB;
    background-color: #CDCCBB;
    color: #140707;
    display: inline-block;
    font-size: 0.9rem;
    margin: 5px;
    text-decoration: none;
    letter-spacing: 1px;
    line-height: 1;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    &.large {
      padding: 0.8rem 0.8rem;
      font-weight: bold;
      font-size: 1.2rem;
    } 
    @media(min-width:520px) {
      padding: 0.8rem 1.5rem;
    }
    &:hover {
      color: #000;
      background-color: #fff;
    }
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
  time {
    font-size: 1.1rem;
    color: #CDCCBB;
    font-weight: 900;
  }
`;

const footerStyle = {
  textAlign: "center",
  marginTop: "3rem",
  fontSize: "0.8rem",
}

export default function Layout({ children, inlineStyle, theme }) {
  // theme dark is the one supported
  const colorTheme = theme ? theme : 'normal';
  return (
    <PageStyle style={inlineStyle}>
      {children}

      <footer style={footerStyle}>

        <section className={colorTheme}>
          <p>New to hack days? Have no fear. This is a hackathon of developers and designers of all levels. See past submissions to get an idea. See our resources in <a href="https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas">github wiki</a>, check out <a href="http://baseballhackday.tumblr.com/">our inspiraton blog on tumblr</a>, <a href="https://join.slack.com/t/baseballhackday/shared_invite/zt-1cnldwbkk-h_oAJO_PJfchijcOujJoHw">join us on our Slack chat</a>, and follow us on <a href="http://twitter.com/baseballhackday">Twitter @BaseballHackDay</a></p>

          <h4 className="tan">Past submissions</h4>
          <div className={colorTheme}>
            <a className="action" href="https://baseball-hack-day-2019.devpost.com/submissions">2019</a>
            <a className="action" href="https://baseballhackday-2018.devpost.com/submissions">2018</a>
            <a className="action" href="https://baseballhackday-2017.devpost.com/submissions">2017</a>
            <a className="action" href="http://2016baseballhackday.challengepost.com/submissions">2016</a>
            <a className="action" href="http://2015baseballhackday.challengepost.com/submissions">2015</a>
            <a className="action" href="http://baseballhackday.challengepost.com/submissions">2014</a>
          </div>
        </section>


        <section className={colorTheme}>
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

        <h5>2023 volunteer organizers</h5>
        <ul className="compact">
          <li>Daigo Fujiwara, Matt Carroll, Matthew Shanley, James Smith, Kianosh Pourian (Boston)</li>
          <li>Edward Johnson (Toronto)</li>
          <li>Elizabeth Cotton (San Diego)</li>
        </ul>

        <p className={colorTheme}><a href="/">Home</a> | <a href="/boston">Boston</a> | <a href="/toronto">Toronto</a> | <a href="/about-history">About &amp; History</a></p>
      </footer>
    </PageStyle>
  )
}
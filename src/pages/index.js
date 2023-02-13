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

const IndexPage = () => {
  return (
    <Layout inlineStyle={bgstyle} theme="dark">
      <h3><strong>We. Are. Back.</strong><br/>Join us!</h3>
      <h1 className="mbm">Sat. March 11, 2023</h1>

      <h1 className="logo" style={logoStyle}>
        <img src={logo} alt="Baseball Hack Day logo" />
      </h1>

      <h4 className="tan">Fun, friendly, one-day coding competition for baseball fans.</h4>

      <section>
        <h3>Select your city:</h3>
        <div>
          <a className="action large" href="/boston">Boston</a>
        </div>
      </section>

      <About className="hero-text dark" />

      <section className="dark">
        <h4 className=""><a href="/about-history">Find out more &#187;</a></h4>
      </section>
      
      
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Baseball Hack Day, March 11, 2023</title>

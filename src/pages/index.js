import * as React from 'react'
import Layout from '../components/layout'
import logo from '../images/bbhd-logo.svg'
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
    <Layout inlineStyle={bgstyle}>
      <h3><strong>We. Are. Back.</strong><br/>Join us!</h3>
      <h1 className="mbm">Sat. March 11, 2023</h1>

      <h1 className="logo" style={logoStyle}>
        <img src={logo} alt="Baseball Hack Day logo" />
      </h1>

      <h4 className="mtl mhl tan">Fun, friendly, one-day coding competition for baseball fans.</h4>

      <section>
        <h3>Select your city:</h3>
        <div>
          <a className="action large" href="/boston">Boston</a>
        </div>
      </section>

      <section className="hero-text mtl mhl">
        <p><a href="http://www.baseballhackday.com/">Baseball Hack Day</a> is an annual on-site, in-person hacking event (also known as hackathon, hack fest, code fest, or code party) where area baseball fans come together and create baseball-related projects to compete in a fun, friendly, one-day competition. Come with your laptop computer and your ideas or open mind!</p>
        
        <p>Born in Boston spring of 2012, Baseball Hack Day is a grass-roots, open-sourced movement, held at the same day at different locations all around the world. The goal of the day is to bring creative tech minds into one room, and see what they can produce within a limited time. The project could be (but is not limited to) a tool, simple web app, mobile app, web site, or data visualization.</p>

        <p>This event is based on the principal of the original <a href="http://hackdaymanifesto.com/">the Hack Day Manifesto</a> and will always be free to attend, thanks to our generous sponsors. We are run by volunteers, pro bono, labor for love, and we are not-for-profit. We follow <a href="https://hackcodeofconduct.org/">Hack Code of Conduct</a>.</p>
      </section>


      <section>
        
        <h4 className=""><a href="/about-history">Find out more &#187;</a></h4>
      </section>
      
      
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Baseball Hack Day, March 11, 2023</title>

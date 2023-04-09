import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import logo from '../images/bbhd-logo.svg';
import bg from '../images/boston.jpg';

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
const DataPage = () => {
  const dataUrlPrefix = 'https://github.com/baseballhackday/data-and-resources/blob/master/2022data';

  const LiveData = ({ gameId }) => (
    <div><a href={`https://statsapi.mlb.com/api/v1/game/${gameId}/boxscore`}>Box Score</a>, <a href={`https://statsapi.mlb.com/api/v1.1/game/${gameId}/feed/live`}>Live feed</a>, <a href={`https://statsapi.mlb.com/api/v1/game/${gameId}/playByPlay`}>Play-by-play</a></div>
  );

  return (
    <Layout inlineStyle={bgstyle}>
       <HeaderStyle>
        <article>
          <h1><a href="/"><img style={logoStyle} src={logo} alt="Baseball Hack Day logo" /></a>Data and APIs</h1>
          <h4 className="mtl mhl tan">Fun, friendly, one-day coding competition for baseball fans.</h4>
        </article>
      </HeaderStyle>

      <section>
        <h2>Data for 2023 Baseball Hack Day</h2>
        <p>As this is a one-day hackathon with limited time, we prepared some data from the 2022 season for you to use. Data sets are from MLB API, Baseball Savant, and Baseball-Reference. If you use those data, please make sure to credit the data source somewhere in your project. Please download the files and include them in your project. Links go to our github repo, click on "Raw" button (on top right) and "Save Page As..." on your browser to download the csv or json files.</p>
        <p><a href="https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas">Check out our crowd sourced Wiki</a> that we have been keeping since our first Baseball Hack Day in 2012. Feel free to edit or add your favorite sources:</p>
        <p>
          <a className="action" href="https://github.com/baseballhackday/data-and-resources/wiki/Resources-and-ideas">Resources &amp; Ideas github wiki</a>
        </p>
      </section>
      <section className="two-col">
        <h3>MLB API live data for today's games</h3>
        <p>Please see MLB's <a href="http://gdx.mlb.com/components/copyright.txt">Term of Use</a></p>
        <ul className="bullet compact">
          <li>CZE @ JPN 5:00 AM ET <LiveData gameId="719529"/></li>
          <li>NED @ TPE 6:00 AM ET <LiveData gameId="719537"/></li>
          <li>NCA @ PUR 12:00 PM ET <LiveData gameId="719512"/></li>
          <li>COL @ MEX 2:30 PM ET <LiveData gameId="719523"/></li>
          <li>BOS @ MIN 1:05 PM ET <LiveData gameId="719171"/></li>
          <li>BAL @ TOR 1:07 PM ET <LiveData gameId="719168"/></li>
          <li>STL @ HOU 1:05 PM ET <LiveData gameId="719176"/></li>
          <li>DET @ ATL 1:05 PM ET <LiveData gameId="719177"/></li>
          <li>NYY @ PIT 1:05 PM ET <LiveData gameId="719170"/></li>
          <li>PHI @ NYY 1:05 PM ET <LiveData gameId="719169"/></li>
          <li>CHC @ LAD 3:05 PM ET <LiveData gameId="719166"/></li>
          <li>OAK @ CLE 3:05 PM ET <LiveData gameId="719172"/></li>
          <li>LAD @ SFG 3:05 PM ET <LiveData gameId="719160"/></li>
          <li>CIN @ TEX 3:05 PM ET <LiveData gameId="719159"/></li>
          <li>AZ @ LAA 3:10 PM ET <LiveData gameId="719165"/></li>
          <li>SEA @ COL 3:10 PM ET <LiveData gameId="719162"/></li>
          <li>CWS @ SDP 3:10 PM ET <LiveData gameId="719163"/></li>
          <li>TBR @ MIA 3:10 PM ET <LiveData gameId="719178"/></li>
          <li>KCR @ MIL 3:10 PM ET <LiveData gameId="719164"/></li>
        </ul>

        <h3>2022 Roster data from Baseball Reference</h3>
        <p> Created from <a href="https://www.baseball-reference.com/teams/BOS/2022-roster.shtml#all_appearances">All Appearances tables (This example link is for Boston)</a></p>
        <p>
          <code>--- When using SR data, please cite us and provide a link and/or a mention.</code>
        </p>

        <ul className="bullet compact">
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/roster/2022MLB-ALL.csv`}>2022 Roster all players/teams CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/roster/2022MLB-ALL.json`}>2022 Roster all players/teams JSON</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/roster/teams`}>2022 Roster team specific CSVs</a></li>
        </ul>

        <h3>2022 Bating and Pitching data from Baseball Reference</h3>
        <p>2022 Batting data for all players</p>
        <p>
          <code>--- When using SR data, please cite us and provide a link and/or a mention.</code>
        </p>
        <ul className="bullet compact">
          <li><a href="https://www.baseball-reference.com/leagues/majors/2022-standard-batting.shtml">SOURCE (Player Standard Batting table)</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/2022Batting.csv`}>2022 Batting data CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/2022Batting.json`}>2022 Batting data JSON</a></li>
        </ul>
        <p>2022 Pitching data for all players</p>
        <ul className="bullet compact">
          <li><a href="https://www.baseball-reference.com/leagues/majors/2022-standard-pitching.shtml">SOURCE (Player Standard Pitching table)</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/2022Pitching.csv`}>2022 Pitching data CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Reference/2022Pitching.json`}>2022 Pitching data JSON</a></li>
        </ul>

        <h3>2022 pitch information from <a href="https://baseballsavant.mlb.com/">Baseball Savant</a></h3>

        <p></p>
        <ul className="bullet compact">
          <li><a href="https://baseballsavant.mlb.com/">SOURCE</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_TOTAL.csv`}>2022 All pitches CSV</a></li>

          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Fastball_4-seam.csv`}>2022 Fastball (4-seam) CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Sinker_2-Seam.csv`}>2022 Sinker (2-Seam) CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Cutter.csv`}>2022 =Cutter CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Slider.csv`}>2022 Slider CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Changeup.csv`}>2022 Changeup CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Curveball.csv`}>2022 Curveball CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_pitches/savant_2022_Split-finger.csv`}>2022 Split-finger CSV</a></li>
        </ul>

        <h3>2022 statcast data from <a href="https://baseballsavant.mlb.com/">Baseball Savant</a></h3>

        <p>2022 Batting</p>
        <ul className="bullet compact">
          <li><a href="https://baseballsavant.mlb.com/leaderboard/custom?year=2022&type=batter&filter=&sort=4&sortDir=desc&min=q&selections=xba,xslg,xwoba,xobp,xiso,exit_velocity_avg,launch_angle_avg,barrel_batted_rate,&chart=false&x=xba&y=xba&r=no&chartType=beeswarm">SOURCE</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_2022Batters.csv`}>2022 Batting CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_2022Batters.json`}>2022 Batting JSON</a></li>
        </ul>

        <p>2022 Pitching</p>
        <ul className="bullet compact">
          <li><a href="https://baseballsavant.mlb.com/leaderboard/custom?year=2022&type=pitcher&filter=&sort=1&sortDir=desc&min=q&selections=xba,xslg,xwoba,xobp,xiso,exit_velocity_avg,launch_angle_avg,sweet_spot_percent,barrel_batted_rate,&chart=false&x=xba&y=xba&r=no&chartType=beeswarm">SOURCE</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_2022Pitchers.csv`}>2022 Pitching CSV</a></li>
          <li><a href={`${dataUrlPrefix}/Baseball-Savant/savant_2022Pitchers.json`}>2022 Pitching JSON</a></li>
        </ul>

      </section>
      
    </Layout>
  )
}

export default DataPage

export const Head = () => <title>DATA: Baseball Hack Day, March 11, 2023</title>

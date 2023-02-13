import React from 'react';

const Rules = ({ className }) =>
  (
    <div className={className}>
      <p>First and foremost, this event will be a success if everyone has a good time. That is why we have a <a href="https://hackcodeofconduct.org/">Code of Conduct</a>. All attendees, sponsors, partners, volunteers and staff at our hackathon are required to agree with it. We want a safe, fair and fun environment for everybody.</p>

      <p>We are using a hack submission service called <a href="http://devpost.com/">DevPost</a>. In order to win, you need to submit the hacks through it. It helps organizers keep track of the teams and the projects they create.</p>

      <p>Hacks could be (but are not limited to) a tool, application, software, website, or data visualization and may be built using any programming language and platform that you choose. Teams can be of any size, but awards are only given to up to four individuals per team. Hacks will be judged for:
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
  );
export default Rules;

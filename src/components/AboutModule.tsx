import React from 'react';

function AboutModule() {
  return (
    <div id="panel-about" className="panel open">
      <h2>About</h2>
      <div className="panel-content" style="padding: 0.5em; font-size: 75%;">
        Variable fonts plugin is developed by Leonard Bogdonoff 2020-present. The variable fonts rendering engine is based on Samsa.js by Laurence Penney.
        <ul>
        <li><a href="https://github.com/rememberlenny/figma-variable-fonts">GitHub repository</a></li>
        <li><a href="https://twitter.com/rememberlenny">@rememberlenny</a> updates via Twitter</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutModule;
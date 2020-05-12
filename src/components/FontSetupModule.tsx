import * as React from 'react';

function FontSetupModule() {
  return (
    <div id="panel-font-list" className="panel open">
      <h2>Font setup</h2>
      <div className="panel-content">
        <div>
          <select id="select-fonts">
            <option value="volvo">Roboto</option>
            <option value="saab">Decovar</option>
            <option value="vw">Amstelvar</option>
          </select>
        </div>
        <div>
          <button value="">Upload a variable font here</button>
        </div>
        <div>
          Preview
        </div>
      </div>
    </div>
  )
}

export default FontSetupModule;
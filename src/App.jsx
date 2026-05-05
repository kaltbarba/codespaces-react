import {  useMemo } from 'react';

import './App.css';

import REPORTS from './utils/getReports'
import isReportSafe from './utils/isReportSafe'

const MAX_DIFF = 3;

function App() {
  const safeResults = useMemo(() => {
    let total = 0;
    for (let i = 0; i < REPORTS.length; i ++) {
      if (isReportSafe(REPORTS[i], MAX_DIFF)) total++
    }
    return total;
  }, []);

  return (
    <div className="App">
      <p>Safe results: {safeResults}</p>
    </div>
  );
}

export default App;

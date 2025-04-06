import React from 'react';
import { data } from './data';
import { SkipSelectPage } from './pages/SkipSelectPage';

function App() {
	return (
		<div className="App">
			<header>
				<title>REM Waste</title>
			</header>
			<main>
				<SkipSelectPage cards={data} />
			</main>
		</div>
	);
}

export default App;

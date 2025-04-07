import React from 'react';
import { data } from './data';
import { SkipSelectPage } from './pages/SkipSelectPage';
import { Footer } from './componets/Footer/Footer';

function App() {
	return (
		<div>
			<header>
				<title>REM Waste</title>
			</header>
			<main>
				<SkipSelectPage cards={data} />
				<Footer />
			</main>
		</div>
	);
}

export default App;

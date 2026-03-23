import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import EBaja from './components/eBaja/eBaja';
import FormulaBharat from './components/formulaBharat/formulaBharat';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Merchandise from './components/merchandise/merchandise';
import Problems from './components/problemStatement/problems';

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/eBaja" element={<EBaja />} />
					<Route path="/formulaBharat" element={<FormulaBharat />} />
					<Route path="/merchandise" element={<Merchandise />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					{/* <Route path="/problems" element={<Problems />} /> */}
					<Route path="/problemStatements" element={<Problems />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;

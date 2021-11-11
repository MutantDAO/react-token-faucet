import { Container, Navbar} from 'react-bootstrap';
import './Header.css';
import logo from "../mc-logo.png";


const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" fixed={"top"} className="mcHeader">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					MutantDAO: Development Suite
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}

export default Header;
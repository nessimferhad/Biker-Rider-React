import React from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
	MDBMask,
	MDBView,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			isWideEnough: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse,
		});
	}

	render() {
		return (
			<>
				<header>
					<Router>
						<MDBNavbar
							color="bg-primary"
							fixed="top"
							dark
							expand="md"
							scrolling
							transparent
						>
							<MDBNavbarBrand href="/">
								<strong>Biker-Rider</strong>
							</MDBNavbarBrand>
							{!this.state.isWideEnough && (
								<MDBNavbarToggler onClick={this.onClick} />
							)}
							<MDBCollapse isOpen={this.state.collapse} navbar>
								<MDBNavbarNav left>
									<MDBNavItem active>
										<MDBNavLink to="#">Accueil</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">A propos</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">Reservation</MDBNavLink>
									</MDBNavItem>
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBNavbar>
					</Router>

					<MDBView src="img/lyon.jpg">
						<MDBMask
							overlay="black-strong"
							className="flex-center flex-column text-white text-center"
						>
							<h2>Biker-Riders</h2>
							<h5>Bienvenue sur le site officiel de la location de vélo de Lyon !</h5>
							<br />
							<p>
								Prendre un Biker et le Rider, le rendre, vérifier les disponibilités
								des stations en quelques minutes, rien n'est plus rapide qu'avec
								Biker-Riders !
							</p>
						</MDBMask>
					</MDBView>
				</header>
			</>
		);
	}
}

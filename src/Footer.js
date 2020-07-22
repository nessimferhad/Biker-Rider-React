import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component {
	render() {
		return (
			<MDBFooter color="blue" className="font-small pt-4 ">
				<MDBContainer fluid className="text-center text-md-left">
					<MDBRow>
						<MDBCol md="4">
							<h5 className="title text-center">Nous contacter :</h5>
							<ul className="d-flex flex-column p-0 text-center ">
								<li className="list-unstyled">Par mail : Biker-Rider@xxxxx.com</li>
								<li className="list-unstyled">Par téléphone : 01 xx xx xx xx</li>
								<li className="list-unstyled">
									Par courrier : 41 rue des lilas, 69000 Lyon
								</li>
							</ul>
						</MDBCol>
						<MDBCol md="4">
							<h5 className="title text-center">Reseaux sociaux :</h5>
							<ul className="d-flex justify-content-between p-0 text-center ">
								<li className="list-unstyled">
									<a href="#!">
										<figure className="figure">
											<img
												src="img/facebook.png"
												className="figure-img img-fluid z-depth-1"
												alt="facebook"
												style={{ width: "60px" }}
											/>
											<figcaption className="figure-caption text-white">
												Facebook
											</figcaption>
										</figure>
									</a>
								</li>
								<li className="list-unstyled">
									<a href="#!">
										<figure className="figure">
											<img
												src="img/twitter.png"
												className="figure-img img-fluid z-depth-1"
												alt="twitter"
												style={{ width: "60px" }}
											/>
											<figcaption className="figure-caption text-white">
												Twitter
											</figcaption>
										</figure>
									</a>
								</li>
								<li className="list-unstyled">
									<a href="#!">
										<figure className="figure">
											<img
												src="img/instagram.png"
												className="figure-img img-fluid z-depth-1"
												alt="instagram"
												style={{ width: "60px" }}
											/>
											<figcaption className="figure-caption text-white">
												Instagram
											</figcaption>
										</figure>
									</a>
								</li>
							</ul>
						</MDBCol>
						<MDBCol md="4">
							<h5 className="title text-center">Liens utiles :</h5>
							<ul className="d-flex flex-column justify-content-around p-0 text-center ">
								<li className="list-unstyled">
									<a href="#!">Plan du site</a>
								</li>
								<li className="list-unstyled">
									<a href="#!">Mentions légales</a>
								</li>
								<li className="list-unstyled">
									<a href="#!">Conditions d'utilisations</a>
								</li>
								<li className="list-unstyled">
									<a href="#!">Autres informations</a>
								</li>
							</ul>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBFooter>
		);
	}
}

import React, { Component } from "react";
import { MDBCol, MDBRow, MDBIcon } from "mdbreact";

export default class SectionOne extends Component {
	render() {
		return (
			<>
				<section className="my-5">
					<h2 className="h1-responsive font-weight-bold text-center my-5">
						Pourquoi louer chez nous ?
					</h2>
					<p className="lead grey-text w-responsive text-center mx-auto mb-5">
						L’objectif du service Biker-Rider est de faciliter le développement de
						nouvelles mobilités sur le territoire Lyonnais, en complément de l’offre de
						transport existante. Grâce à 30 % de vélo électrique, les déplacements sont
						rendus beaucoup plus simples !
					</p>

					<MDBRow className="ml-0 mr-0">
						<MDBCol lg="5" className="text-center text-lg-left">
							<img className="img-fluid" src="img/bikestation.png" alt="" />
						</MDBCol>
						<MDBCol lg="7">
							<MDBRow className="mb-3">
								<MDBCol size="1">
									<MDBIcon
										icon="check-circle"
										size="lg"
										className="indigo-text"
									/>
								</MDBCol>
								<MDBCol xl="10" md="11" size="10">
									<h5 className="font-weight-bold mb-3">Rapide</h5>
									<p className="grey-text">
										En un clic sur le marqueur de votre station accedez
										directement a l'état de la station, au nombre de vélos
										disponible, si votre station est ouverte et s'il y a de la
										place pour y déposer votre vélo.
									</p>
								</MDBCol>
							</MDBRow>
							<MDBRow className="mb-3">
								<MDBCol size="1">
									<MDBIcon
										icon="check-circle"
										size="lg"
										className="indigo-text"
									/>
								</MDBCol>
								<MDBCol xl="10" md="11" size="10">
									<h5 className="font-weight-bold mb-3">Simple d'utilsation</h5>
									<p className="grey-text">
										Selectionnez votre station, puis entrez votre Nom et votre
										Prénom et votre vélo vous est réservé pour une durée de 20
										minutes. Aussi simple que ca !
									</p>
								</MDBCol>
							</MDBRow>
							<MDBRow className="mb-3">
								<MDBCol size="1">
									<MDBIcon
										icon="check-circle"
										size="lg"
										className="indigo-text"
									/>
								</MDBCol>
								<MDBCol xl="10" md="11" size="10">
									<h5 className="font-weight-bold mb-3">Technologique</h5>
									<p className="grey-text">
										Le vélo électrique n’est pas la seule innovation
										technologique des nouveaux vélos de Biker-Rider. Tous les
										vélos offrent aussi une Biker-Box embarquée, pour mieux se
										guider, et une sécurisation renforcée avec la fourche
										cadenas.
									</p>
								</MDBCol>
							</MDBRow>
						</MDBCol>
					</MDBRow>
				</section>
			</>
		);
	}
}

import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

export default class InfoStation extends Component {
	state = {};
	translate = () => {
		if (this.props.dataProps.status === "OPEN") {
			this.props.dataProps.status = "Ouverte.";
		}
		if (this.props.dataProps.status === "CLOSED") {
			this.props.dataProps.status = "Fermée.";
		}
	};

	missingAddress = () => {
		if (this.props.dataProps.address === "") {
			this.props.dataProps.address = "Adresse indisponible.";
		}
	};

	displayReservation = () => {
		document.getElementById("reservation").style.display = "flex";
	};

	render() {
		this.translate();
		this.missingAddress();
		return (
			<>
				<MDBCard>
					<MDBCardImage className="img-fluid" src="img/bikes.jpg" waves />
					<MDBCardBody className="text-center">
						<MDBCardTitle>Nom de la station : {this.props.dataProps.name}</MDBCardTitle>
						<MDBCardText>
							Etat de la station : {this.props.dataProps.status}
						</MDBCardText>
						<MDBCardText>
							Adresse de la station : {this.props.dataProps.address}
						</MDBCardText>
						<MDBCardText>
							Nombre de vélos disponibles : {this.props.dataProps.available_bikes}
						</MDBCardText>
						<MDBCardText>
							Nombre d'emplacements disponibles :{" "}
							{this.props.dataProps.available_bike_stands}
						</MDBCardText>
						<MDBBtn onClick={this.displayReservation} color="primary">
							Réservation
						</MDBBtn>
					</MDBCardBody>
				</MDBCard>
			</>
		);
	}
}

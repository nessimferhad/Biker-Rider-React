import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBBox } from "mdbreact";

export default class Reservation extends Component {
	state = {
		fname: "",
		lname: "",
	};
	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitHandler = (event) => {
		event.preventDefault();
		event.target.className += " was-validated";
		this.setState({
			name: this.props.dataProps.name,
		});
		if (this.state.fname !== "" && this.state.lname !== "") {
			document.getElementById("reservationForm").style.display = "none";
			document.getElementById("testing").style.display = "flex";
		}
		localStorage.setItem("prenom", this.state.fname);
		localStorage.setItem("nom", this.state.lname);
	};

	render() {
		return (
			<MDBContainer className="justify-content-center mt-5 mb-5 flex-column" id="reservation">
				<MDBRow>
					<MDBCol className="mb-3" size="12">
						<MDBBox className="h3-responsive text-center border border-primary">
							Votre réservation :
						</MDBBox>
					</MDBCol>
				</MDBRow>
				<MDBRow id="reservationForm">
					<MDBCol size="12">
						<form
							id="form"
							className="needs-validation"
							onSubmit={this.submitHandler}
							noValidate
						>
							<MDBRow>
								<MDBCol md="6" className="mb-3">
									<label htmlFor="prenom" className="grey-text">
										Votre prénom
									</label>
									<input
										value={this.state.fname}
										name="fname"
										onChange={this.changeHandler}
										type="text"
										id="prenom"
										className="form-control"
										required
									/>
									<div className="invalid-feedback">
										Veuillez remplir ce champ.
									</div>
								</MDBCol>
								<MDBCol md="6" className="mb-3">
									<label htmlFor="nom" className="grey-text">
										Votre nom
									</label>
									<input
										value={this.state.lname}
										name="lname"
										onChange={this.changeHandler}
										type="text"
										id="nom"
										className="form-control"
										required
									/>
									<div className="invalid-feedback">
										Veuillez remplir ce champ.
									</div>
								</MDBCol>
								<MDBBtn className="m-auto" color="primary" type="submit">
									Envoyer
								</MDBBtn>
							</MDBRow>
						</form>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol style={{ display: "none" }} id="testing" size="12">
						<MDBContainer className="text-center">
							<p>
								<span className="font-weight-bold">Votre nom :</span>{" "}
								{this.state.fname}
							</p>
							<p>
								<span className="font-weight-bold">Votre prénom :</span>{" "}
								{this.state.lname}
							</p>
							<p>
								<span className="font-weight-bold">
									Vous avez reservé un vélo a la station :
								</span>
								{this.state.name}
							</p>
							<p>
								Il sera disponible pour{" "}
								<span className="font-weight-bold">une durée de 20 minutes</span>
							</p>
						</MDBContainer>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

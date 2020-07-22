import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { MDBRow, MDBCol } from "mdbreact";
import InfoStation from "./InfoStation";
import Reservation from "./Reservation";

export default class MapComponent extends Component {
	state = {
		lat: 45.764043,
		lng: 4.835659,
		zoom: 13,
	};

	markerClick = (station) => (e) => {
		this.setState({
			infoStations: <InfoStation dataProps={station} />,
			reservation: <Reservation dataProps={station} />,
			lat: 45.7534,
			lng: 4.9251,
		});
		if (window.screen.width > 900) {
			document.getElementById("colmap").classList.replace("col-lg-12", "col-lg-6");
		}
	};

	render() {
		return (
			<>
				<MDBRow className="mr-0 ml-0">
					<MDBCol
						id="colmap"
						className="col-lg-12 col-10  offset-1 mb-sm-5 mb-xl-0 offset-lg-0"
					>
						<Map
							center={[this.state.lat, this.state.lng]}
							zoom={this.state.zoom}
							style={{ width: "100%", height: "883px" }}
						>
							<TileLayer
								attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							{this.props.data.map((datas) => {
								const point = [datas.position.lat, datas.position.lng];

								return (
									<Marker
										onclick={this.markerClick(datas)}
										position={point}
										key={datas.number}
									>
										<Popup>
											<span>Nom de la station: {datas.name}</span>
										</Popup>
									</Marker>
								);
							})}
						</Map>
					</MDBCol>
					<MDBCol className="col-lg-6 col-12">{this.state.infoStations}</MDBCol>
				</MDBRow>
				{this.state.reservation}
			</>
		);
	}
}

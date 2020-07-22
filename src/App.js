import React, { Component } from "react";
import Axios from "axios";
import MapComponent from "./MapComponent";
import SectionOne from "./SectionOne";
import Footer from "./Footer";
import { MDBContainer } from "mdbreact";
import Navbar from "./Navbar";

export default class App extends Component {
	state = {
		datas: [],
	};
	async componentDidMount() {
		Axios.get(
			"https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=613e43fce4507a0266661c818a77edf2cdd44f58",
		).then((res) => {
			const datas = res.data;
			this.setState({ datas });
		});
	}

	render() {
		return (
			<>
				<MDBContainer fluid className="App p-0">
					<Navbar />
					<SectionOne />
					<MapComponent data={this.state.datas} />
					<Footer />
				</MDBContainer>
			</>
		);
	}
}

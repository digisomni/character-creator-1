import React, { Component } from "react";

// Loading Assets (SubComponents & CSS)
import Selector from "./Selector";
import "../css/category.css";

type State = any;

class Category extends Component<any, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			isLeft: true
		};
	}

	// Update the state of parent App from child Component
	updateLeft = (isLeft: any) => {
		this.setState({ isLeft });
	};

	render() {
		// Passing throught the state from the properties
const category = (this.props as any).category;
		const current = (this.props as any).currentCategory;

		//JSX element to display the HTML
		const categoryDiv = [];

		for (let i = 0; i < category.length; i++) {
			const name = category[i].name;
			const file = category[i].imgfile;
			if (name === current) {
				categoryDiv.push(
					<div className="category selected-category" key={i}>
						<img src={"img/graphics_creation/" + file} alt={name} />
					</div>
				);
			} else {
				categoryDiv.push(
					<div
						className="category"
						key={i}
						onClick={() => {
							(this.props as any).updateCategory(name);
							let MeshType = undefined;
							switch (name) {
								case "head":
									MeshType = "Head";
									break;
								case "hand":
									MeshType = this.state.isLeft
										? "HandL"
										: "HandR";
									break;
								case "arm":
									MeshType = this.state.isLeft
										? "ArmL"
										: "ArmR";
									break;
								case "torso":
									MeshType = "Torso";
									break;
								case "foot":
									MeshType = this.state.isLeft
										? "FootL"
										: "FootR";
									break;
								case "leg":
									MeshType = this.state.isLeft
										? "LegL"
										: "LegR";
									break;
								case "pose":
									MeshType = "pose";
									break;
								case "stand":
									MeshType = "mesh-stand";
									break;
								default:
									MeshType = undefined;
							}
							if (MeshType) {
								(window as any).selectedMesh(MeshType);
							}
						}}
					>
						<img src={"img/graphics_creation/" + file} alt={name} />
					</div>
				);
			}
		}

		if ((this.props as any).UIDisplayed) {
			return (<div className="abs top right panel">
					<div className="abs top left left-side unselectable">
						{categoryDiv}
					</div>
					<Selector currentCategory={(this.props as any).currentCategory} isLeft={this.state.isLeft} updateLeft={this.updateLeft} 
// updatePose={this.props.updatePose}
loadedMeshes={(this.props as any).loadedMeshes} updateMeshes={(this.props as any).updateMeshes} updatePopup={(this.props as any).updatePopup} updatePopupMessage={(this.props as any).updatePopupMessage} editor={(this.props as any).editor} updateLoading={(this.props as any).updateLoading}/>
				</div>);
		} else {
			return <div />;
		}
	}
}

export default Category;

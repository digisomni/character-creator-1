import React, { Component } from "react";

// Loading Assets (SubComponents & CSS)
// @ts-expect-error ts-migrate(6142) FIXME: Module './Selector' was resolved to '/home/beast/D... Remove this comment to see the full error message
import Selector from "./Selector";
import "../css/category.css";

type State = any;

class Category extends Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			isLeft: true
		};
	}

	// Update the state of parent App from child Component
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'isLeft' implicitly has an 'any' type.
	updateLeft = isLeft => {
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
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
					<div className="category selected-category" key={i}>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<img src={"img/graphics_creation/" + file} alt={name} />
					</div>
				);
			} else {
				categoryDiv.push(
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<img src={"img/graphics_creation/" + file} alt={name} />
					</div>
				);
			}
		}

		if ((this.props as any).UIDisplayed) {
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			return (<div className="abs top right panel">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<div className="abs top left left-side unselectable">
						{categoryDiv}
					</div>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<Selector currentCategory={(this.props as any).currentCategory} isLeft={this.state.isLeft} updateLeft={this.updateLeft} 
// updatePose={this.props.updatePose}
loadedMeshes={(this.props as any).loadedMeshes} updateMeshes={(this.props as any).updateMeshes} updatePopup={(this.props as any).updatePopup} updatePopupMessage={(this.props as any).updatePopupMessage} editor={(this.props as any).editor} updateLoading={(this.props as any).updateLoading}/>
				</div>);
		} else {
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			return <div />;
		}
	}
}

export default Category;

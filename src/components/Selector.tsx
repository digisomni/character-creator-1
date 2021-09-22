import React, { Component } from "react";
import Editor from "./Editor";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "./SearchBar";
import "../css/selector.css";

import headElements from "../library/heads.json";
import handElements from "../library/hands.json";
import armElements from "../library/arm.json";
import torsoElements from "../library/torso.json";
import footElements from "../library/foot.json";
import legElements from "../library/leg.json";
import standElements from "../library/stands.json";
import poseElements from "../library/poses.json";
import bones from "../library/bones.json";

type State = any;

class Selector extends Component<any, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			editorSelected: false,
			pose: undefined,
			search: ""
		};
	}

	updateSearchValue = (search: any) => {
		this.setState({ search });
	};

	componentDidMount() {
		// Load the base model with defaultMeshes and defaultPose
		axios.get("models/poses/default.json").then(res => {
			this.setState({ pose: res.data });
			(window as any).loadDefaultMeshes(bones, res.data);
		});
	}

	applyPose(file: any) {
		let poseData;
		//Ajax in react
		axios.get("models/poses/" + file + ".json").then(res => {
			poseData = res.data;
			this.setState({ pose: poseData });
			(window as any).loadPose(poseData, bones);
		});
	}

	RenderPremium(item: any) {
		if (item.premium) {
			return (
				<div className="abs premium">
					<FontAwesomeIcon
						className="abs centered white big-icon"
						icon="dollar-sign"
					/>
				</div>
			);
		}
	}

	RenderLink(item: any) {
		if (item.link) {
			return (
				<a className="abs link" href={item.link}>
					<FontAwesomeIcon
						className="abs centered white icon"
						icon="link"
					/>
				</a>
			);
		}
	}

	render() {
		// Passing throught the state from the properties
const category = (this.props as any).currentCategory;
		const isLeft = (this.props as any).isLeft;
		let library;
		let sideIdencator;
		let meshType;

		switch (category) {
			case "head":
				library = headElements;
				sideIdencator = false;
				meshType = "Head";
				break;
			case "hand":
				library = handElements;
				sideIdencator = true;
				meshType = isLeft ? "HandL" : "HandR";
				break;
			case "arm":
				library = armElements;
				sideIdencator = true;
				meshType = isLeft ? "ArmL" : "ArmR";
				break;
			case "torso":
				library = torsoElements;
				sideIdencator = false;
				meshType = "Torso";
				break;
			case "foot":
				library = footElements;
				sideIdencator = true;
				meshType = isLeft ? "FootL" : "FootR";
				break;
			case "leg":
				library = legElements;
				sideIdencator = true;
				meshType = isLeft ? "LegL" : "LegR";
				break;
			case "pose":
				library = poseElements;
				sideIdencator = false;
				break;
			case "stand":
				library = standElements;
				sideIdencator = false;
				break;
			default:
				library = headElements;
				sideIdencator = false;
		}

		const filteredlibrary = (library as any).filter(
			(element: any) => {
				return element.name.toLowerCase().indexOf(this.state.search) !== -1;
			}
		);

		//JSX element to display the HTML
		const elementDiv = [];

		for (let i = 0; i < filteredlibrary.length; i++) {
			elementDiv.push(
				<div
					className="el"
					key={i}
					onClick={() => {
						let meshType: any;
						switch (category) {
							case "torso":
								meshType = "Torso";
								break;
							case "head":
								meshType = "Head";
								break;
							case "hand":
								meshType = isLeft ? "HandL" : "HandR";
								break;
							case "arm":
								meshType = isLeft ? "ArmL" : "ArmR";
								break;
							case "foot":
								meshType = isLeft ? "FootL" : "FootR";
								break;
							case "leg":
								meshType = isLeft ? "LegL" : "LegR";
								break;
							default:
								meshType = undefined;
						}
						if (filteredlibrary[i].premium) {
							(this.props as any).updatePopupMessage("Sorry this is a premium object, this feature is still in development...");
							(this.props as any).updatePopup(true);
						} else {
							if (category === "pose") {
								this.applyPose(filteredlibrary[i].file);
							} else if (category === "stand") {
								(window as any).changeStand(filteredlibrary[i].file);
							} else {
								(this.props as any).updateLoading(true);
								(window as any).changeMesh(category, filteredlibrary[i], isLeft, bones, this.state.pose);
								const loadedMeshes = (this.props as any).loadedMeshes;
								loadedMeshes[meshType] = filteredlibrary[i].file;
								(this.props as any).updateMeshes(loadedMeshes);
							}
						}
					}}
				>
					<div className="img">
						<img
							src={
								"img/library/" + category + "/" + filteredlibrary[i].img
							}
							alt={filteredlibrary[i].img}
						/>
					</div>
					<div className="unselectable el-name">
						{filteredlibrary[i].name}
					</div>
					{this.RenderPremium(filteredlibrary[i])}
					{this.RenderLink(filteredlibrary[i])}
				</div>
			);
		}
		elementDiv.push(
			<div
				className="el"
				key="add"
				onClick={() => {
					(this.props as any).updatePopup(true);
					(this.props as any).updatePopupMessage("Sorry this feature is still in development...");
				}}
			>
				<div className="img">
					<img
						src="img/library/plus.svg"
						alt="plus sign"
					/>
				</div>
				<div className="unselectable el-name">Add your designs</div>
			</div>
		);

		const buttons = (
			<div className="abs switch">
				<div
					className={
						"unselectable abs left side L " +
						(isLeft ? "side-selected" : "")
					}
					onClick={() => {
						(this.props as any).updateLeft(true);
						let MeshType;
						switch (category) {
							case "head":
								MeshType = "Head";
								break;
							case "hand":
								MeshType = "HandL";
								break;
							case "arm":
								MeshType = "ArmL";
								break;
							case "torso":
								MeshType = "Torso";
								break;
							case "foot":
								MeshType = "FootL";
								break;
							case "leg":
								MeshType = "LegL";
								break;
							default:
								MeshType = undefined;
						}
						if (MeshType) {
							(window as any).selectedMesh(MeshType);
						}
					}}
				>
					Left
				</div>
				<div
					className={
						"unselectable abs right side R " +
						(isLeft ? "" : "side-selected")
					}
					onClick={() => {
						(this.props as any).updateLeft(false);
						let MeshType;
						switch (category) {
							case "head":
								MeshType = "Head";
								break;
							case "hand":
								MeshType = "HandR";
								break;
							case "arm":
								MeshType = "ArmR";
								break;
							case "torso":
								MeshType = "Torso";
								break;
							case "foot":
								MeshType = "FootR";
								break;
							case "leg":
								MeshType = "LegR";
								break;
							default:
								MeshType = undefined;
						}
						if (MeshType) {
							(window as any).selectedMesh(MeshType);
						}
					}}
				>
					Right
				</div>
			</div>
		);

		const editorButtons = (
			<div className="abs switch">
				<div
					className={
						"unselectable abs left side L " +
						(this.state.editorSelected ? "" : "side-selected")
					}
					onClick={() => {
						this.setState({ editorSelected: false });
					}}
				>
					Poses
				</div>
				<div
					className={
						"unselectable abs right side R " +
						(this.state.editorSelected ? "side-selected" : "")
					}
					onClick={() => {
						this.setState({ editorSelected: true });
					}}
				>
					Editor
				</div>
			</div>
		);

		return (<div>
				<div className="abs top right right-side">
					<div className="box">
						<SearchBar updateSearchValue={this.updateSearchValue}/>
						{sideIdencator ? buttons : ""}
						{category === "pose" && (this.props as any).editor ? editorButtons : ""}
						<div className={"abs top left " +
        (category === "pose" && this.state.editorSelected
            ? " selector"
            : " selector") +
        (sideIdencator ||
            (category === "pose" && (this.props as any).editor)
            ? " selector-full"
            : " selector")}>
							{category === "pose" &&
        this.state.editorSelected &&
        (this.props as any).editor ? (<Editor />) : (<div className="abs top left selector-nopadding">
										{elementDiv}
									</div>)}
							
						</div>
					</div>
				</div>
			</div>);
	}
}

export default Selector;

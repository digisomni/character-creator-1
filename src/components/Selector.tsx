import React, { Component } from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Editor' was resolved to '/home/beast/Doc... Remove this comment to see the full error message
import Editor from "./Editor";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// @ts-expect-error ts-migrate(6142) FIXME: Module './SearchBar' was resolved to '/home/beast/... Remove this comment to see the full error message
import SearchBar from "./SearchBar";
import "../css/selector.css";

// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/heads.json'. Consid... Remove this comment to see the full error message
import headElements from "../library/heads.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/hands.json'. Consid... Remove this comment to see the full error message
import handElements from "../library/hands.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/arm.json'. Consider... Remove this comment to see the full error message
import armElements from "../library/arm.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/torso.json'. Consid... Remove this comment to see the full error message
import torsoElements from "../library/torso.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/foot.json'. Conside... Remove this comment to see the full error message
import footElements from "../library/foot.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/leg.json'. Consider... Remove this comment to see the full error message
import legElements from "../library/leg.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/stands.json'. Consi... Remove this comment to see the full error message
import standElements from "../library/stands.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/poses.json'. Consid... Remove this comment to see the full error message
import poseElements from "../library/poses.json";
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/bones.json'. Consid... Remove this comment to see the full error message
import bones from "../library/bones.json";

type State = any;

class Selector extends Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			editorSelected: false,
			pose: undefined,
			search: ""
		};
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'search' implicitly has an 'any' type.
	updateSearchValue = search => {
		this.setState({ search });
	};

	componentDidMount() {
		// Load the base model with defaultMeshes and defaultPose
		axios.get("models/poses/default.json").then(res => {
			this.setState({ pose: res.data });
			(window as any).loadDefaultMeshes(bones, res.data);
		});
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'file' implicitly has an 'any' type.
	applyPose(file) {
		let poseData;
		//Ajax in react
		axios.get("models/poses/" + file + ".json").then(res => {
			poseData = res.data;
			this.setState({ pose: poseData });
			(window as any).loadPose(poseData, bones);
		});
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
	RenderPremium(item) {
		if (item.premium) {
			return (
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<div className="abs premium">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<FontAwesomeIcon
						className="abs centered white big-icon"
						icon="dollar-sign"
					/>
				</div>
			);
		}
	}

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
	RenderLink(item) {
		if (item.link) {
			return (
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<a className="abs link" href={item.link}>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

		const filteredlibrary = library.filter(
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'element' implicitly has an 'any' type.
			(element) => {
				return element.name.toLowerCase().indexOf(this.state.search) !== -1;
			}
		);

		//JSX element to display the HTML
		const elementDiv = [];

		for (let i = 0; i < filteredlibrary.length; i++) {
			elementDiv.push(
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
				<div
					className="el"
					key={i}
					onClick={() => {
						let meshType;
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
// @ts-expect-error ts-migrate(2538) FIXME: Type 'undefined' cannot be used as an index type.
								loadedMeshes[meshType] = filteredlibrary[i].file;
								(this.props as any).updateMeshes(loadedMeshes);
							}
						}
					}}
				>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<div className="img">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<img
							src={
								"img/library/" + category + "/" + filteredlibrary[i].img
							}
							alt={filteredlibrary[i].img}
						/>
					</div>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<div className="unselectable el-name">
						{filteredlibrary[i].name}
					</div>
					{this.RenderPremium(filteredlibrary[i])}
					{this.RenderLink(filteredlibrary[i])}
				</div>
			);
		}
		elementDiv.push(
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<div
				className="el"
				key="add"
				onClick={() => {
					(this.props as any).updatePopup(true);
					(this.props as any).updatePopupMessage("Sorry this feature is still in development...");
				}}
			>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<div className="img">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<img
						src="img/library/plus.svg"
						alt="plus sign"
					/>
				</div>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<div className="unselectable el-name">Add your designs</div>
			</div>
		);

		const buttons = (
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<div className="abs switch">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<div className="abs switch">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		return (<div>
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<div className="abs top right right-side">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<div className="box">
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<SearchBar updateSearchValue={this.updateSearchValue}/>
						{sideIdencator ? buttons : ""}
						{category === "pose" && (this.props as any).editor ? editorButtons : ""}
{/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

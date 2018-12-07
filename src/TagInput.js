import React, { Component } from "react";
import { Box, Flex, Button } from "rebass";
import styled from "styled-components";

const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

const Tag = styled(Box)`
	color: #fff;
	font-weight: bold;
	background: #3498db;
	float: left;
	padding: 2px 5px;
	border-radius: 10em;
	margin: 5px;
	list-style: none;
`;

class TagInput extends Component {
	constructor(props) {
		super(props);
		this.state = { tags: [], value: "", editValue: "", editIndex: -1 };

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidMount() {
		const { tagList } = this.props;
		if (tagList) {
			this.setState({ tags: tagList });
		}
	}

	handleEditChange = e => {
		this.setState({
			editValue: e.target.value
		});
	};

	handleEditChange = e => {
		this.setState({
			editValue: e.target.value
		});
	};

	handleEditKeyUp = e => {
		const key = e.keyCode;

		if (key === ENTER_KEY || key === COMMA_KEY) {
			this.editTag();
		}
	};

	editTag = () => {
		const { tags, editValue, editIndex } = this.state;
		const editedTag = editValue.trim();
		// editedTag = editedTag.replace(/,/g, "");
		let newTags = [];
		if (editedTag === "") {
			for (let i = 0; i < tags.length; i + 1) {
				// eslint-disable-next-line eqeqeq
				if (i != editIndex) {
					newTags.push(tags[i]);
				}
			}
		} else {
			newTags = tags;
			newTags[editIndex] = editedTag;
		}
		const { handleUpdate } = this.props;
		handleUpdate(newTags);
		this.setState({
			tags: newTags,
			editValue: "",
			editIndex: -1
		});
	};

	toggleEdit = e => {
		const { editIndex, tags } = this.state;

		this.setState({
			editIndex: e.target.value === editIndex ? -1 : e.target.value,
			editValue: e.target.value === editIndex ? "" : tags[e.target.value]
		});
	};

	exitEdit = () => {
		this.setState({
			editIndex: -1,
			editValue: ""
		});
	};

	addTag() {
		const { tags, value } = this.state;
		let tag = value.trim();

		tag = tag.replace(/,/g, "");

		if (!tag) {
			return;
		}
		const { handleUpdate } = this.props;
		// handleUpdate([...tags, tag]);
		this.setState({
			tags: [...tags, tag],
			value: ""
		});
	}

	handleKeyDown(e) {
		const key = e.keyCode;
		const { value } = this.state;
		if (key === BACKSPACE_KEY && !value) {
			this.editPrevTag();
		}
	}

	handleKeyUp(e) {
		const key = e.keyCode;

		if (key === ENTER_KEY || key === COMMA_KEY) {
			this.addTag();
		}
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	editPrevTag() {
		const { tags } = this.state;

		const tag = tags.pop();

		this.setState({ tags, value: tag });
	}

	render() {
		const { tags, value, editIndex, editValue } = this.state;
		return (
			<Flex flexDirection="column" className="tags">
				<Box className="tags-list">
					<div>
						{tags.map((tag, i) => (
							<div
								/* eslint-disable-next-line eqeqeq */
								className={editIndex == i ? "tag-edit" : "tag"}
								/* eslint-disable-next-line */
								key={i}
								value={i}
							>
								{/* eslint-disable-next-line eqeqeq  */}
								{editIndex == i ? (
									<div>
										<input
											className="tag-edit-input"
											type="text"
											value={editValue}
											onChange={this.handleEditChange}
											onKeyUp={this.handleEditKeyUp}
											onBlur={this.exitEdit}
											autoFocus
										/>
									</div>
								) : (
									<Button
										variant="tag"
										value={i}
										onClick={this.toggleEdit}
										className="tag"
									>
										{tag}
									</Button>
								)}
							</div>
						))}
					</div>
				</Box>
				<Box>
					<input
						type="text"
						placeholder="Add tag..."
						value={value}
						onChange={this.handleChange}
						// ref="tag"
						className="tags-input"
						onKeyUp={this.handleKeyUp}
						onKeyDown={this.handleKeyDown}
					/>
				</Box>
				<Box>
					<small>
						Press <code>enter</code> or <code>,</code> to add a tag.
					</small>
					<small>
						{" "}
						Press <code>backspace</code> to edit previous tag.
					</small>
				</Box>
			</Flex>
		);
	}
}

export default TagInput;

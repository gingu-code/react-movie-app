import React from "react";

<<<<<<< HEAD
export default function SearchBar({
	searchInput,
	searchField,
	setSearchInput,
	setSearchField,
}) {
	return (
		<div>
			<form>
				<label>Search:</label>
				<input
					name="input"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					placeholder="search input..."
				/>
				<br />
				Search Field:
				<label htmlFor="title">Title</label>
				<input
					onChange={(e) => setSearchField(e.target.value)}
					value="title"
					name="field"
					type="radio"
					checked={searchField === "title"}
				/>
				<label htmlFor="director">Director</label>
				<input
					onChange={(e) => setSearchField(e.target.value)}
					value="director"
					name="field"
					type="radio"
					checked={searchField === "director"}
				/>
				<br />
			</form>
		</div>
	);
=======
export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			field: "title",
		};
	}
	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState(
			{
				[name]: value,
			},
			() => {
				this.props.setSearchInput(this.state.input);
				this.props.setSearchField(this.state.field);
			}
		);
	};
	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.handleFiltered();
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<label>Search:</label>
					<input
						name="input"
						value={this.state.input}
						onChange={this.handleOnChange}
						placeholder="search input..."
					/>
					<br />
					Search Field:
					<label htmlFor="title">Title</label>
					<input
						onChange={this.handleOnChange}
						value="title"
						name="field"
						type="radio"
						checked={this.state.field === "title"}
					/>
					<label htmlFor="director">Director</label>
					<input
						onChange={this.handleOnChange}
						value="director"
						name="field"
						type="radio"
						checked={this.state.field === "director"}
					/>
					<br />
					<button>Search</button>
				</form>
			</div>
		);
	}
>>>>>>> 3b53e4f5bb3901f752f66deaa524ed0c9e0b0ce9
}

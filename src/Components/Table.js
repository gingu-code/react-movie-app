import React, { Component } from "react";

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Title</th>
				<th>Actors</th>
				<th>Plot</th>
				<th>Genre</th>
				<th>Rating</th>
				<th>Director</th>
				<th>Year</th>
				<th>Date Added</th>
			</tr>
		</thead>
	);
};
const TableBody = (props) => {
	console.log(props);
	const rows = props.data.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.title}</td>
				<td>{row.actors.join(", ")}</td>
				<td>{row.plot}</td>
				<td>{row.genre}</td>
				<td>{row.imdbRating}</td>
				<td>{row.director}</td>
				<td>{row.year}</td>
				<td>{row.dateAdded}</td>
				<td>
					<button
						onClick={() => {
							props.handleDelete(row.title);
						}}
					>
						delete
					</button>
				</td>
			</tr>
		);
	});
	//return rows wrapped in tbody
	return <tbody>{rows}</tbody>;
};
// TABLE is our main Component
class Table extends Component {
	render() {
		//read props passed in from App.js
		const { filmsData, handleDelete } = this.props;

		return (
			<table>
				<TableHeader />
				<TableBody data={filmsData} handleDelete={handleDelete} />
			</table>
		);
	}
}

export default Table;

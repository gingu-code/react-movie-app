import { useState, useEffect } from "react";

export default function MovieForm({ handleNewMovie }) {
	const fields = {
		title: "",
		actors: [],
		plot: "",
		genre: "",
		imdbRating: 0,
		director: "",
		year: 0,
		dateAdded: new Date().toISOString(),
	};
	const [inputValue, setInputValue] = useState(fields);
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		inputValue.dateAdded = new Date().toISOString();

		handleNewMovie(inputValue);
		setInputValue(fields);
	};
	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<label>Title:</label>
				<input
					name="title"
					value={inputValue.title}
					onChange={handleOnChange}
				/>
				<br />
				<label>Actors:</label>
				<input
					name="actors"
					value={inputValue.actors}
					onChange={handleOnChange}
				/>
				<br />
				<label>Plot:</label>
				<input name="plot" value={inputValue.plot} onChange={handleOnChange} />
				<br />
				<label>Genre:</label>
				<input
					name="genre"
					value={inputValue.genre}
					onChange={handleOnChange}
				/>
				<br />
				<label>Rating:</label>
				<input
					type="number"
					min="0"
					max="10"
					step="0.1"
					name="imdbRating"
					value={inputValue.imdbRating}
					onChange={handleOnChange}
				/>
				<br />
				<label>Director:</label>
				<input
					name="director"
					value={inputValue.director}
					onChange={handleOnChange}
				/>
				<br />
				<label>Year:</label>
				<input
					type="number"
					name="year"
					value={inputValue.year}
					onChange={handleOnChange}
				/>
				<br />
				<button>Submit</button>
			</form>
		</div>
	);
}

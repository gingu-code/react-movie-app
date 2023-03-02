import React from "react";

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
}

import { Autocomplete, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { SectionName, BetsGamesListContainer } from "./styles";

const today = new Date().toISOString().split("T")[0];

const BetsGamesList = () => {
	const [inputValue, setInputValue] = React.useState("");

	return (
		<>
			<SectionName>
				<span>Fixtures Matches</span>
			</SectionName>
			<BetsGamesListContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-start",
						width: "50vw",
						height: 280,
						background: "#fff",
						borderRadius: 6,
						p: 2,
					}}
				>
					<Autocomplete
						id="league-select-demo"
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							console.log(newInputValue);
							setInputValue(newInputValue);
						}}
						sx={{ width: 300, p: 1 }}
						options={countries}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								<img
									loading="lazy"
									width="20"
									src={`https://media.api-sports.io/football/leagues/${option.code.toLowerCase()}.png`}
									srcSet={`https://media.api-sports.io/football/leagues/${option.code.toLowerCase()}.png 2x`}
									alt=""
								/>
								{option.label} ({option.code})
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Choose a league"
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password", // disable autocomplete and autofill
								}}
							/>
						)}
					/>
					<Autocomplete
						id="fixture-select-demo"
						disabled
						sx={{ width: 300, p: 1 }}
						options={countries}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								<img
									loading="lazy"
									width="20"
									src={`https://media.api-sports.io/football/leagues/${option.code.toLowerCase()}.png`}
									srcSet={`https://media.api-sports.io/football/leagues/${option.code.toLowerCase()}.png 2x`}
									alt=""
								/>
								{option.label} ({option.code})
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Choose a league"
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password", // disable autocomplete and autofill
								}}
							/>
						)}
					/>
				</Box>
			</BetsGamesListContainer>
		</>
	);
};

interface CountryType {
	code: string;
	label: string;
	suggested?: boolean;
}

const countries: readonly CountryType[] = [
	{ code: "39", label: "Premier League" },
	{ code: "78", label: "Bundesliga" },
	{ code: "135", label: "Serie A" },
	{ code: "140", label: "La Liga" },
	{ code: "61", label: "Ligue 1" },
];

export default BetsGamesList;

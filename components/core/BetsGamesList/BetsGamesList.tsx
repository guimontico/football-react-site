import { Autocomplete, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { BetsDescription } from "../../../models/BetsDescription";
import { BetsReturns } from "../../../models/BetsReturns";
import { Fixture } from "../../../models/Fixture";
import { SectionName, BetsGamesListContainer, TeamsSelector } from "./styles";

const axios = require("axios").default;

const BetsGamesList = () => {
	const [leagueValue, setLeagueValue] = useState<LeagueType | null>(null);
	const [fixtures, setFixtures] = useState<Fixture[]>([]);
	const [fixtureSelected, setFixtureSelected] = useState<Fixture | null>();
	const [fixtureOdds, setFixturesOdds] = useState<BetsReturns>();

	useEffect(() => {
		async function fetchData() {
			axios
				.get(
					`https://v3.football.api-sports.io/fixtures?season=2021&date=2022-04-02&league=${leagueValue?.code}`,
					{
						headers: {
							"x-rapidapi-host": "v3.football.api-sports.io",
							"x-rapidapi-key": "98357c457c1836ad2dca64924ef3b857",
						},
					}
				)
				.then((res: { data: { response: Fixture[] } }) => {
					// manipula o sucesso da requisição
					setFixtures(res.data.response);
				})
				.catch(function (error: any) {
					// manipula erros da requisição
					console.error(error);
				});
		}
		if (leagueValue) {
			fetchData();
		}
	}, [leagueValue]);

	useEffect(() => {
		console.log(fixtures);
	}, [fixtures]);

	useEffect(() => {
		async function fetchData() {
			axios
				.get(
					`https://v3.football.api-sports.io/odds?fixture=${fixtureSelected?.fixture.id}`,
					{
						headers: {
							"x-rapidapi-host": "v3.football.api-sports.io",
							"x-rapidapi-key": "98357c457c1836ad2dca64924ef3b857",
						},
					}
				)
				.then((res: { data: { response: { 0: BetsReturns } } }) => {
					// manipula o sucesso da requisição
					setFixturesOdds(res.data.response[0]);
				})
				.catch(function (error: any) {
					// manipula erros da requisição
					console.error(error);
				});
		}
		if (fixtureSelected) {
			fetchData();
		}
	}, [fixtureSelected]);

	useEffect(() => {
		console.log(fixtureOdds);
	}, [fixtureOdds]);

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
						onChange={(e, obj) => {
							setLeagueValue(obj);
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
						onChange={(e, obj) => {
							setFixtureSelected(obj);
						}}
						disabled={fixtures.length == 0}
						sx={{ width: 500, p: 1 }}
						options={fixtures}
						autoHighlight
						getOptionLabel={(option) =>
							`${option.teams.home.name} X ${option.teams.away.name}`
						}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{
									display: "flex",
									justifyContent: "space-between !important",
									"& > img": {
										flexShrink: 0,
									},
								}}
								{...props}
							>
								<img
									loading="lazy"
									width="25"
									src={option.teams.home.logo}
									srcSet={`${option.teams.home.logo} 2x`}
									alt=""
								/>
								<TeamsSelector>
									{option.teams.home.name} x {option.teams.away.name}
								</TeamsSelector>
								<img
									loading="lazy"
									width="25"
									src={option.teams.away.logo}
									srcSet={`${option.teams.away.logo} 2x`}
									alt=""
								/>
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Choose a Fixture"
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password", // disable autocomplete and autofill
								}}
							/>
						)}
					/>
					<Autocomplete
						id="bets-select-demo"
						onChange={(e, obj) => {
							console.log(obj);
						}}
						sx={{ width: 300, p: 1 }}
						options={betsDescription}
						autoHighlight
						getOptionLabel={(option) => option.name}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								{option.name}
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Choose a Bet"
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

interface LeagueType {
	code: string;
	label: string;
	suggested?: boolean;
}

const countries: readonly LeagueType[] = [
	{ code: "39", label: "Premier League" },
	{ code: "78", label: "Bundesliga" },
	{ code: "135", label: "Serie A" },
	{ code: "140", label: "La Liga" },
	{ code: "61", label: "Ligue 1" },
];

const betsDescription: readonly BetsDescription[] = [
	{
		id: 1,
		name: "Match Winner",
	},
	{
		id: 2,
		name: "Home/Away",
	},
	{
		id: 3,
		name: "Second Half Winner",
	},
	{
		id: 4,
		name: "Asian Handicap",
	},
	{
		id: 5,
		name: "Goals Over/Under",
	},
	{
		id: 6,
		name: "Goals Over/Under First Half",
	},
	{
		id: 7,
		name: "HT/FT Double",
	},
	{
		id: 8,
		name: "Both Teams Score",
	},
	{
		id: 9,
		name: "Handicap Result",
	},
	{
		id: 10,
		name: "Exact Score",
	},
	{
		id: 11,
		name: "Highest Scoring Half",
	},
	{
		id: 12,
		name: "Double Chance",
	},
	{
		id: 13,
		name: "First Half Winner",
	},
	{
		id: 14,
		name: "Team To Score First",
	},
	{
		id: 15,
		name: "Team To Score Last",
	},
	{
		id: 16,
		name: "Total - Home",
	},
	{
		id: 17,
		name: "Total - Away",
	},
	{
		id: 18,
		name: "Handicap Result - First Half",
	},
	{
		id: 19,
		name: "Asian Handicap First Half",
	},
	{
		id: 20,
		name: "Double Chance - First Half",
	},
	{
		id: 21,
		name: "Odd/Even",
	},
	{
		id: 22,
		name: "Odd/Even - First Half",
	},
	{
		id: 23,
		name: "Home Odd/Even",
	},
	{
		id: 24,
		name: "Results/Both Teams Score",
	},
	{
		id: 25,
		name: "Result/Total Goals",
	},
	{
		id: 26,
		name: "Goals Over/Under - Second Half",
	},
	{
		id: 27,
		name: "Clean Sheet - Home",
	},
	{
		id: 28,
		name: "Clean Sheet - Away",
	},
	{
		id: 29,
		name: "Win to Nil - Home",
	},
	{
		id: 30,
		name: "Win to Nil - Away",
	},
	{
		id: 31,
		name: "Correct Score - First Half",
	},
	{
		id: 32,
		name: "Win Both Halves",
	},
	{
		id: 33,
		name: "Double Chance - Second Half",
	},
	{
		id: 34,
		name: "Both Teams Score - First Half",
	},
	{
		id: 35,
		name: "Both Teams To Score - Second Half",
	},
	{
		id: 36,
		name: "Win To Nil",
	},
	{
		id: 37,
		name: "Home win both halves",
	},
	{
		id: 38,
		name: "Exact Goals Number",
	},
	{
		id: 39,
		name: "To Win Either Half",
	},
	{
		id: 40,
		name: "Home Team Exact Goals Number",
	},
	{
		id: 41,
		name: "Away Team Exact Goals Number",
	},
	{
		id: 42,
		name: "Second Half Exact Goals Number",
	},
	{
		id: 43,
		name: "Home Team Score a Goal",
	},
	{
		id: 44,
		name: "Away Team Score a Goal",
	},
	{
		id: 45,
		name: "Corners Over Under",
	},
	{
		id: 46,
		name: "Exact Goals Number - First Half",
	},
	{
		id: 47,
		name: "Winning Margin",
	},
	{
		id: 48,
		name: "To Score In Both Halves By Teams",
	},
	{
		id: 49,
		name: "Total Goals/Both Teams To Score",
	},
	{
		id: 50,
		name: "Goal Line",
	},
	{
		id: 51,
		name: "Halftime Result/Total Goals",
	},
	{
		id: 52,
		name: "Halftime Result/Both Teams Score",
	},
	{
		id: 53,
		name: "Away win both halves",
	},
	{
		id: 54,
		name: "First 10 min Winner",
	},
	{
		id: 55,
		name: "Corners 1x2",
	},
	{
		id: 56,
		name: "Corners Asian Handicap",
	},
	{
		id: 57,
		name: "Home Corners Over/Under",
	},
	{
		id: 58,
		name: "Away Corners Over/Under",
	},
	{
		id: 59,
		name: "Own Goal",
	},
	{
		id: 60,
		name: "Away Odd/Even",
	},
	{
		id: 61,
		name: "To Qualify",
	},
	{
		id: 62,
		name: "Correct Score - Second Half",
	},
	{
		id: 63,
		name: "Odd/Even - Second Half",
	},
	{
		id: 72,
		name: "Goal Line (1st Half)",
	},
	{
		id: 73,
		name: "Both Teams to Score 1st Half - 2nd Half",
	},
	{
		id: 74,
		name: "10 Over/Under",
	},
	{
		id: 75,
		name: "Last Corner",
	},
	{
		id: 76,
		name: "First Corner",
	},
	{
		id: 77,
		name: "Total Corners (1st Half)",
	},
	{
		id: 78,
		name: "RTG_H1",
	},
	{
		id: 79,
		name: "Cards European Handicap",
	},
	{
		id: 80,
		name: "Cards Over/Under",
	},
	{
		id: 81,
		name: "Cards Asian Handicap",
	},
	{
		id: 82,
		name: "Home Team Total Cards",
	},
	{
		id: 83,
		name: "Away Team Total Cards",
	},
	{
		id: 84,
		name: "Total Corners (3 way) (1st Half)",
	},
	{
		id: 85,
		name: "Total Corners (3 way)",
	},
	{
		id: 86,
		name: "RCARD",
	},
	{
		id: 87,
		name: "Total ShotOnGoal",
	},
	{
		id: 88,
		name: "Home Total ShotOnGoal",
	},
	{
		id: 89,
		name: "Away Total ShotOnGoal",
	},
	{
		id: 91,
		name: "Total Goals (3 way)",
	},
	{
		id: 92,
		name: "Anytime Goal Scorer",
	},
	{
		id: 93,
		name: "First Goal Scorer",
	},
	{
		id: 94,
		name: "Last Goal Scorer",
	},
	{
		id: 95,
		name: "To Score Two or More Goals",
	},
	{
		id: 97,
		name: "First Goal Method",
	},
];
export default BetsGamesList;

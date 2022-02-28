import { Box, Divider } from "@mui/material";
import { CheckboxLeague } from "../LeaguesList/styles";
import {
	FixturesMatchesContainer,
	IconDiv,
	IconImg,
	LeagueSelector,
	SectionName,
} from "./styles";

const handleEditLeague = (
	e: React.ChangeEvent<HTMLInputElement>,
	leagueNameChecked: string,
	leagueIdChecked: number
) => {
	console.log(e);
	console.log(leagueNameChecked);
	console.log(leagueIdChecked);
};

const FixturesMatches = () => {
	return (
		<>
			<SectionName>
				<span>Fixtures Matches</span>
			</SectionName>
			<FixturesMatchesContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						width: "50vw",
						height: 280,
						background: "#394046",
						borderRadius: 10,
						p: 2,
					}}
				>
					<LeagueSelector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/leagues/39.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Premier League</span>
					</LeagueSelector>
					<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
					<LeagueSelector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/leagues/78.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Bundesliga</span>
					</LeagueSelector>
					<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
					<LeagueSelector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/leagues/135.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Serie A</span>
					</LeagueSelector>
					<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
					<LeagueSelector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/leagues/140.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>La Liga</span>
					</LeagueSelector>
				</Box>
			</FixturesMatchesContainer>
		</>
	);
};

export default FixturesMatches;

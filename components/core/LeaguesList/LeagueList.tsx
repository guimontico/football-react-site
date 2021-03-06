import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import {
	CheckboxLeague,
	IconDiv,
	IconImg,
	LeaguesContainer,
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

const LeagueList = () => {
	return (
		<>
			<SectionName>
				<span>Favorite Leagues</span>
			</SectionName>
			<LeaguesContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						width: 300,
						height: 280,
						background: "#394046",
						borderRadius: 6,
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
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Premier League", 39)}
						/>
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
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Bundesliga", 78)}
						/>
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
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Serie A", 135)}
						/>
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
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "La Liga", 140)}
						/>
					</LeagueSelector>
				</Box>
			</LeaguesContainer>
		</>
	);
};

export default LeagueList;

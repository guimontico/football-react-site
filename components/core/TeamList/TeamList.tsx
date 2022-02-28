import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import {
	CheckboxLeague,
	IconDiv,
	IconImg,
	SectionName,
	TeamsContainer,
	Teamselector,
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
				<span>Favorite Teams</span>
			</SectionName>
			<TeamsContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						width: 300,
						height: 280,
						background: "#394046",
						borderRadius: 10,
						p: 2,
					}}
				>
					<Teamselector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/teams/49.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Chelsea</span>
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Chelsea", 49)}
						/>
					</Teamselector>
					<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
					<Teamselector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/teams/50.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Machester City</span>
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Machester City", 50)}
						/>
					</Teamselector>
					<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
					<Teamselector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/teams/85.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Paris Saint Germain</span>
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Paris Saint Germain", 85)}
						/>
					</Teamselector>
					<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
					<Teamselector>
						<IconDiv>
							<IconImg
								src="https://media.api-sports.io/football/teams/496.png"
								height={35}
								width={35}
							/>
						</IconDiv>
						{/* <img src={league.logo} height={35}/> */}
						<span>Juventus</span>
						<CheckboxLeague
							size="small"
							onChange={(e) => handleEditLeague(e, "Juventus", 496)}
						/>
					</Teamselector>
				</Box>
			</TeamsContainer>
		</>
	);
};

export default LeagueList;

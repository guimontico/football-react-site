import { Box, Divider } from "@mui/material";
import { CheckboxLeague } from "../LeaguesList/styles";
import {
	FixturesMatchesContainer,
	IconDiv,
	IconImg,
	LeagueName,
	LeagueContent,
	SectionName,
	TeamsConfront,
	TeamsConfrontNameAway,
	TeamsConfrontNameHome,
	ConfrontDate,
	GameContent,
	DividerParent,
	DividerLine,
	Odds,
	OddBox,
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
					<GameContent>
						<LeagueContent>
							<IconDiv>
								<IconImg
									src="https://media.api-sports.io/football/leagues/39.png"
									height={35}
									width={35}
								/>
							</IconDiv>
							<LeagueName>
								<span>
									2rd
									<br />
									Premier League
								</span>
							</LeagueName>
						</LeagueContent>
						<TeamsConfront>
							<TeamsConfrontNameHome>
								<span>Burnley</span>
							</TeamsConfrontNameHome>
							<img
								src={"https://media.api-sports.io/football/teams/44.png"}
								height={50}
							/>
							<ConfrontDate>
								<span>
									SAT. AUG. 21
									<br />
									2:30
								</span>
							</ConfrontDate>
							<img
								src={"https://media.api-sports.io/football/teams/46.png"}
								height={50}
							/>
							<TeamsConfrontNameAway>
								<span>Leicester</span>
							</TeamsConfrontNameAway>
						</TeamsConfront>
						<Odds>
							<OddBox>
								<span>1.30</span>
							</OddBox>
							<OddBox>
								<span>6.90</span>
							</OddBox>
							<OddBox>
								<span>17.00</span>
							</OddBox>
						</Odds>
					</GameContent>
					<DividerParent>
						<DividerLine />
					</DividerParent>
					<GameContent>
						<LeagueContent>
							<IconDiv>
								<IconImg
									src="https://media.api-sports.io/football/leagues/78.png"
									height={35}
									width={35}
								/>
							</IconDiv>
							<LeagueName>
								<span>
									2rd
									<br />
									Bundesliga
								</span>
							</LeagueName>
						</LeagueContent>
						<TeamsConfront>
							<TeamsConfrontNameHome>
								<span>FSV Mainz 05</span>
							</TeamsConfrontNameHome>
							<img
								src={"https://media.api-sports.io/football/teams/164.png"}
								height={50}
							/>
							<ConfrontDate>
								<span>
									SAT. AUG. 21
									<br />
									2:30
								</span>
							</ConfrontDate>
							<img
								src={"https://media.api-sports.io/football/teams/165.png"}
								height={50}
							/>
							<TeamsConfrontNameAway>
								<span>Borussia Dortmund</span>
							</TeamsConfrontNameAway>
						</TeamsConfront>
						<Odds>
							<OddBox>
								<span>1.30</span>
							</OddBox>
							<OddBox>
								<span>6.90</span>
							</OddBox>
							<OddBox>
								<span>17.00</span>
							</OddBox>
						</Odds>
					</GameContent>
					<DividerParent>
						<DividerLine />
					</DividerParent>
					<GameContent>
						<LeagueContent>
							<IconDiv>
								<IconImg
									src="https://media.api-sports.io/football/leagues/135.png"
									height={35}
									width={35}
								/>
							</IconDiv>
							<LeagueName>
								<span>
									2rd
									<br />
									Serie A
								</span>
							</LeagueName>
						</LeagueContent>
						<TeamsConfront>
							<TeamsConfrontNameHome>
								<span>Udinese</span>
							</TeamsConfrontNameHome>
							<img
								src={"https://media.api-sports.io/football/teams/494.png"}
								height={50}
							/>
							<ConfrontDate>
								<span>
									SAT. AUG. 21
									<br />
									2:30
								</span>
							</ConfrontDate>
							<img
								src={"https://media.api-sports.io/football/teams/498.png"}
								height={50}
							/>
							<TeamsConfrontNameAway>
								<span>Sampdoria</span>
							</TeamsConfrontNameAway>
						</TeamsConfront>
						<Odds>
							<OddBox>
								<span>1.30</span>
							</OddBox>
							<OddBox>
								<span>6.90</span>
							</OddBox>
							<OddBox>
								<span>17.00</span>
							</OddBox>
						</Odds>
					</GameContent>
					<DividerParent>
						<DividerLine />
					</DividerParent>
					<GameContent>
						<LeagueContent>
							<IconDiv>
								<IconImg
									src="https://media.api-sports.io/football/leagues/140.png"
									height={35}
									width={35}
								/>
							</IconDiv>
							<LeagueName>
								<span>
									2rd
									<br />
									La Liga
								</span>
							</LeagueName>
						</LeagueContent>
						<TeamsConfront>
							<TeamsConfrontNameHome>
								<span>Real Madrid</span>
							</TeamsConfrontNameHome>
							<img
								src={"https://media.api-sports.io/football/teams/541.png"}
								height={50}
							/>
							<ConfrontDate>
								<span>
									SAT. AUG. 21
									<br />
									2:30
								</span>
							</ConfrontDate>
							<img
								src={"https://media.api-sports.io/football/teams/548.png"}
								height={50}
							/>
							<TeamsConfrontNameAway>
								<span>Real Sociedad</span>
							</TeamsConfrontNameAway>
						</TeamsConfront>
						<Odds>
							<OddBox>
								<span>1.30</span>
							</OddBox>
							<OddBox>
								<span>6.90</span>
							</OddBox>
							<OddBox>
								<span>17.00</span>
							</OddBox>
						</Odds>
					</GameContent>
					<DividerParent>
						<DividerLine />
					</DividerParent>
				</Box>
			</FixturesMatchesContainer>
		</>
	);
};

export default FixturesMatches;

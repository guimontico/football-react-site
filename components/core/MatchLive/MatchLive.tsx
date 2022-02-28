import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Fab from "@mui/material/Fab";
import {
	IconDiv,
	GameInfo,
	MatchLiveContainer,
	HeaderDetails,
	LeagueName,
	LeagueRound,
	LiveIndicator,
	ResultGame,
	ButtonArea,
	MatchDetailsLink,
	TeamNames,
	Score,
	Time,
} from "./styles";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import Link from "next/link";

const MatchLive = () => {
	return (
		<MatchLiveContainer>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: 300,
					height: 340,
					background: "#394046",
					borderRadius: 10,
					p: 2,
				}}
			>
				<HeaderDetails>
					<LeagueName>Ligue 1</LeagueName>
					<LeagueRound>Matchday 4 of 35</LeagueRound>
					<LiveIndicator>
						<span>
							<FontAwesomeIcon icon={faCircle} />
							{/* <i class="fa fa-circle blink" aria-hidden="true"></i> */}
							Live
						</span>
					</LiveIndicator>
				</HeaderDetails>
				<GameInfo>
					<IconDiv
						src="https://media.api-sports.io/football/teams/50.png"
						height={85}
						width={85}
					/>
					<ResultGame>
						<Score>2:0</Score>
						<Time>57'</Time>
					</ResultGame>
					<IconDiv
						src="https://media.api-sports.io/football/teams/48.png"
						height={85}
						width={85}
					/>
				</GameInfo>
				<TeamNames>
					<span>Brighton</span>
					<span>X</span>
					<span>Aston Villa</span>
				</TeamNames>
				<ButtonArea>
					<Fab color="primary" sx={{ h: 1, w: 1 }}>
						<FavoriteIcon />
					</Fab>
					<Button variant="contained">Place Bet</Button>
					<Fab color="primary">
						<PlayCircleOutlineIcon />
					</Fab>
				</ButtonArea>
				<Divider variant="middle" sx={{ background: "#a7abad", mb: 1 }} />
				<MatchDetailsLink>
					<Link href={"#"}>
						<a>
							Match Details
							<ArrowCircleRightOutlinedIcon sx={{ color: "#e5e5e4" }} />
						</a>
					</Link>
				</MatchDetailsLink>
			</Box>
		</MatchLiveContainer>
	);
};

export default MatchLive;

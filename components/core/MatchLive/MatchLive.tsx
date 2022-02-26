import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
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
					height: 300,
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
						src="https://media.api-sports.io/football/teams/51.png"
						height={85}
						width={85}
					/>
					<ResultGame>
						<span>
							2:0<br></br>
							57'
						</span>
					</ResultGame>
					<IconDiv
						src="https://media.api-sports.io/football/teams/66.png"
						height={85}
						width={85}
					/>
				</GameInfo>
				<ButtonArea>
					<IconButton color="primary">
						<FavoriteIcon />
					</IconButton>
					<Button variant="contained">Place Bet</Button>
					<IconButton color="primary">
						<PlayCircleOutlineIcon />
					</IconButton>
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

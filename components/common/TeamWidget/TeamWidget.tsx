import { Divider } from "@mui/material";
import { Section } from "./styled";

const TeamWidget: React.FC = () => {
	return (
		<Section>
			<div
				id="scoreaxis-widget-be280"
				style={{
					borderWidth: "0px",
					borderColor: "rgba(0, 0, 0, 0.15)",
					borderStyle: "solid",
					borderRadius: "8px",
					padding: "10px",
					background: "rgb(255, 255, 255)",
					width: "100%",
					backgroundColor: "#394046",
				}}
			>
				<iframe
					id="Iframe"
					src="https://www.scoreaxis.com/widget/team-info/3468?autoHeight=1&bodyBackground=%23394046&textColor=%23ffffff&font=0&teamLogo=1&links=0&fontSize=14&inst=be280"
					style={{
						height: "24rem",
						width: "100%",
						border: "none",
						transition: "all 300ms ease",
					}}
				/>
			</div>
			<Divider style={{ background: "#fff" }} />
			<div
				id="scoreaxis-widget-be280"
				style={{
					borderWidth: "0px",
					borderColor: "rgba(0, 0, 0, 0.15)",
					borderStyle: "solid",
					borderRadius: "8px",
					padding: "10px",
					background: "rgb(255, 255, 255)",
					width: "100%",
					backgroundColor: "#394046",
				}}
			>
				<iframe
					id="Iframe"
					src="https://www.scoreaxis.com/widget/team-info/594?autoHeight=1&bodyBackground=%23394046&textColor=%23ffffff&font=0&teamLogo=1&links=0&fontSize=14&inst=be280"
					style={{
						height: "24rem",
						width: "100%",
						border: "none",
						transition: "all 300ms ease",
					}}
				/>
			</div>
		</Section>
	);
};

export default TeamWidget;

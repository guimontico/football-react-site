import { NextPage } from "next";
import Layout from "../../components/common/Layout";
import FindBets from "../../features/FindBets";

const Bets: NextPage = () => {
	return (
		<Layout pageTitle={"Bets"}>
			<FindBets />
		</Layout>
	);
};

export default Bets;

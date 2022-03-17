import { NextPage } from "next";
import Layout from "../../components/common/Layout";
import CentralContent from "../../features/CentralContent";
import SideAnalytics from "../../features/SideAnalytics";
import Sidenav from "../../features/SideNav";

const Fixtures: NextPage = () => {
	return (
		<Layout pageTitle={"Fixtures"}>
			<Sidenav />
			<CentralContent />
			<SideAnalytics />
		</Layout>
	);
};

export default Fixtures;

import Link from "next/link";
import { Nav, StyledLink } from "./styles";

const Navbar = () => {
	return (
		<Nav>
			<div>
				<Link href="/" passHref>
					<StyledLink>Football Tips</StyledLink>
				</Link>
			</div>
			<div>
				<Link href="/Fixtures" passHref>
					<StyledLink>Fixtures</StyledLink>
				</Link>
				<Link href="/Bets" passHref>
					<StyledLink>Bets</StyledLink>
				</Link>
				<Link href="/contact" passHref>
					<StyledLink>Contact</StyledLink>
				</Link>
			</div>
		</Nav>
	);
};

export default Navbar;

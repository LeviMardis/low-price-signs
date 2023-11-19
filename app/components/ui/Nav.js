import Link from "next/link";
import styles from "./styles/Nav.module.scss";
import Image from "next/image";

const Nav = () => {
	return (
		<div>
			<div className={styles.logoWrap}>
				<Link className={styles.logoLink} href="/">
					<Image src={"/Full Logo Dark.png"} alt="Low Price Signs Logo" fill={true} className={styles.logo}></Image>
				</Link>
			</div>
			<Link href={"/about"}>About</Link>
			<div></div>
			<div></div>
		</div>
	);
};

export default Nav;

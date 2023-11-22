import Link from "next/link";
import styles from "./styles/Nav.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalkieTalkie, faUserBountyHunter, faCartShopping, faMagnifyingGlass } from "@fortawesome/pro-solid-svg-icons";
import cmsFetch from "../helpers/cmsFetch";
import MegaMenu from "./MegaMenu";

const Nav = async () => {
	const query = {
		fields: ["name"],
		populate: {
			sub_categories: {
				fields: ["name"],
				populate: {
					products: {
						fields: ["name"],
					},
				},
			},
		},
	};

	const categories = await cmsFetch("parent-categories", query);
	const promotion = await cmsFetch("promotions", {
		fields: ["name"],
		filter: {
			nav: true,
		},
	});
	//console.log(promotion.data[0].attributes.name);

	return (
		<nav className={styles.navWrap}>
			<div className={styles.notificationBannerWrap}>
				<div className={`${styles.notificationBanner} section`}>
					<Link className={styles.testHover} href={"tel:1234567890"}>
						<FontAwesomeIcon icon={faWalkieTalkie} />
						123.456.7890
					</Link>
					<Link className="bold t-orange" href={"/"}>
						{promotion.data[0].attributes.name}
					</Link>
					<Link href={"/"}>
						<FontAwesomeIcon icon={faUserBountyHunter} />
						my account
					</Link>
				</div>
			</div>
			<div className={styles.navContentWrap}>
				<div className={styles.logoWrap}>
					<Link className={styles.logoLink} href="/">
						<Image src={"/Full Logo Dark.png"} alt="Low Price Signs Logo" width={232} height={50} className={styles.logo}></Image>
					</Link>
				</div>
				<div className={styles.searchWrap}>
					<input type="text" placeholder="search" className={styles.searchInput}></input>
					<FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
				</div>
				<div>
					<a href="/" className={styles.cartButton}>
						<div className={styles.cartCounter}>
							<p>0</p>
						</div>
						<FontAwesomeIcon className={styles.cartIcon} icon={faCartShopping} />
						Cart (0)
						<Image className={styles.cartButtonOverlay} src={"/Cart-Button-Overlay.png"} alt="" height={58} width={31}></Image>
					</a>
				</div>
			</div>
			<div className={styles.navLinksWrap}>
				<div className={styles.navLinks}>
					{categories.data.map((link, key) => {
						return <MegaMenu key={key} data={link.attributes} />;
					})}
				</div>
			</div>
		</nav>
	);
};

export default Nav;

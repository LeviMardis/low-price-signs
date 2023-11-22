import Link from "next/link";
import styles from "./styles/MegaMenu.module.scss";

const MegaMenu = ({ data }) => {
	return (
		<div className={styles.megaMenuWrap}>
			<div className={styles.linkWrap}>{data.name}</div>
			<div className={styles.menuWrap}>
				{data.sub_categories.data.map((sub, key) => {
					return (
						<div key={key} className={styles.subCategoryWrap}>
							<h5>{sub.attributes.name}</h5>
							{sub.attributes.products.data.map((product, key) => {
								return <p key={key}>{product.attributes.name}</p>;
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MegaMenu;

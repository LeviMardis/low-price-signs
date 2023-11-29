import styles from "./page.module.scss";

const fetchProduct = async (slug) => {
	const res = await fetch(`http://localhost:1339/api/products?filters[slug][$eq]=${slug}`, {
		headers: {
			authorization:
				"Bearer 4117e24d8cdf73c80949130765cfaf1b93438dd0aa445bb3a9751dcd6e9f1aa2deab4333e8be0cdb9758d88c83e5b15a8f087e05cf15da744de2a9a7773e41128ed5ff554ec0cbe3595a05a7496f08024f2e95debc2f78678917e600ad339b3e6ba1a290cb8a466ca89bb0035802b962ca3ac8dd1ba47146154cb8471ad1711e",
		},
	});
	return res.json();
};

const Page = async ({ params }) => {
	const product = await fetchProduct(params.slug);

	return <div>Hello world {product.data[0].attributes.slug}</div>;
};

export default Page;

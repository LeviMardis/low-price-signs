"use client";

import styles from "./page.module.scss";
import CheckoutForm from "../components/ui/CheckoutForm";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Page = () => {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		fetch("/api/stripe-checkout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ items: [{ id: "test" }] }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setClientSecret(data.clientSecret);
			});
	}, []);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	);
};

export default Page;

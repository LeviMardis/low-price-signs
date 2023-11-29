import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateTotal = (items) => {
	return 1200;
};

const POST = async (req, res) => {
	const { data } = await req.json();
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateTotal(),
			currency: "USD",
		});

		return Response.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
	} catch (error) {
		return Response.json(error, {
			status: 400,
		});
	}
};

export { POST };

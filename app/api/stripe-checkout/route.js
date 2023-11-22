import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
	switch (req.method) {
		case "POST":
			const { data } = await req.json();
			const { amount } = data;
			try {
				const paymentIntent = await stripe.paymentIntents.create({
					amount: Number(amount) * 100,
					currency: "USD",
				});

				return Response(paymentIntent.client_secret, { status: 200 });
			} catch (error) {
				return Response(error, {
					status: 400,
				});
			}
		case "GET":
	}
};

export default handler;

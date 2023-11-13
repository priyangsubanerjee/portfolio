export default async function handler(req, res) {
  const { rate } = JSON.parse(req.body);
  let text = `Received a new rating for portfolio %0A%0A${rate.toString()}/10`;
  let urlString = `${process.env.TELEGRAM_URL}&text=${text}`;
  await fetch(urlString, {
    method: "GET",
  });
  res.status(200).json({ success: true });
}

export default async function handler(req, res) {
  const { name, contact, message } = req.body;
  let text = `Received a message%0A%0A${name},${contact},%0A%0A${message}`;
  let urlString = `${process.env.TELEGRAM_URL}&text=${text}`;
  await fetch(urlString, {
    method: "GET",
  });
  res.status(200).json({ success: true });
}

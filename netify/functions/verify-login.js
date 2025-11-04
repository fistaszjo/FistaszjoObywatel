export async function handler(event) {
  const { key } = JSON.parse(event.body || "{}");

  // Load the allowed keys from your environment variable
  const VALID_KEYS = (process.env.ZBIKUC || "").split(",").map(k => k.trim());

  if (VALID_KEYS.includes(key)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ success: false }),
    };
  }
}

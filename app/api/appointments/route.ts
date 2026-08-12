const requiredFields = ["name", "phone", "service", "date", "time"] as const;

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return Response.json({ error: "Booking service is not configured" }, { status: 503 });

  const body = await request.json();
  for (const field of requiredFields) {
    if (typeof body[field] !== "string" || !body[field].trim()) {
      return Response.json({ error: `Missing ${field}` }, { status: 400 });
    }
  }

  const appointmentHour = Number(body.time.split(":")[0]);
  if (!Number.isInteger(appointmentHour) || appointmentHour < 8 || appointmentHour > 21) {
    return Response.json({ error: "Time must be between 8:00 AM and 9:00 PM" }, { status: 400 });
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    name: String(body.name).trim().slice(0, 120),
    phone: `'${String(body.phone).trim().slice(0, 30)}`,
    email: String(body.email ?? "").trim().slice(0, 180),
    service: String(body.service).trim().slice(0, 120),
    date: String(body.date).trim().slice(0, 20),
    time: String(body.time).trim().slice(0, 20),
    message: String(body.message ?? "").trim().slice(0, 1500),
    status: "New",
    source: "stylehvnunisexsalon.com",
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
    cache: "no-store",
  });

  if (!response.ok) return Response.json({ error: "Unable to save appointment" }, { status: 502 });
  const result = await response.json().catch(() => null);
  if (!result?.success) return Response.json({ error: "Spreadsheet rejected appointment" }, { status: 502 });
  return Response.json({ success: true });
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const { userName, email, message } = body;
    const htmlMessage = `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["m.megahed168@gmail.com"],
      replyTo: email,
      subject: `New message from ${userName}`,
      text: message,
      html: htmlMessage,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

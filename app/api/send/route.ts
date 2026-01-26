import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user_name, user_email, message } = body;
    const htmlMessage = `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
    const data = await resend.emails.send({
      from: user_email,
      to: ["m.megahed168@gmail.com"],
      replyTo: user_email,
      subject: `New message from ${user_name}`,
      text: message,
      html: htmlMessage,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

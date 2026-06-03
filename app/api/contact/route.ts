import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, goal, program, message } = body;

  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Name, phone, and email are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const gymEmail = {
    from: `"FITXONE GYM Website" <${process.env.EMAIL_USER}>`,
    to: process.env.GYM_EMAIL || process.env.EMAIL_USER,
    subject: `🔥 New Lead: ${name} wants a FREE Trial Session!`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#18181b;color:#fff;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#f97316,#ef4444);padding:24px;text-align:center;">
          <h1 style="margin:0;font-size:24px;font-weight:900;letter-spacing:2px;">FITXONE GYM</h1>
          <p style="margin:4px 0 0;opacity:0.9;font-size:14px;">New Free Trial Lead!</p>
        </div>
        <div style="padding:28px;">
          <h2 style="color:#f97316;margin-top:0;">🎯 Lead Details</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#a1a1aa;width:160px;">Name:</td><td style="padding:8px 0;font-weight:bold;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#a1a1aa;">Phone:</td><td style="padding:8px 0;font-weight:bold;"><a href="tel:${phone}" style="color:#f97316;">${phone}</a></td></tr>
            <tr><td style="padding:8px 0;color:#a1a1aa;">Email:</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#f97316;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#a1a1aa;">Goal:</td><td style="padding:8px 0;">${goal || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;color:#a1a1aa;">Program:</td><td style="padding:8px 0;">${program || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0;color:#a1a1aa;vertical-align:top;">Message:</td><td style="padding:8px 0;">${message || "—"}</td></tr>
          </table>
          <div style="margin-top:24px;background:#27272a;padding:16px;border-radius:8px;border-left:4px solid #f97316;">
            <p style="margin:0;font-size:13px;color:#a1a1aa;">📅 Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            <p style="margin:8px 0 0;font-size:13px;color:#f97316;font-weight:bold;">⚡ Call back within 2 hours for best conversion!</p>
          </div>
          <div style="margin-top:20px;text-align:center;">
            <a href="tel:${phone}" style="background:#f97316;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:bold;display:inline-block;">📞 Call ${name} Now</a>
          </div>
        </div>
      </div>
    `,
  };

  const userEmail = {
    from: `"FITXONE GYM" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🎉 Your Free Trial Session at FITXONE GYM is Confirmed!",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#18181b;color:#fff;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#f97316,#ef4444);padding:30px;text-align:center;">
          <h1 style="margin:0;font-size:28px;font-weight:900;letter-spacing:3px;">FITXONE GYM</h1>
          <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">Sector 23, Faridabad</p>
        </div>
        <div style="padding:30px;">
          <h2 style="color:#f97316;">Hi ${name}! 🔥</h2>
          <p>Thank you for requesting a <strong>FREE Trial Session</strong> at FITXONE GYM!</p>
          <p>Our team will call you at <strong>${phone}</strong> within the next <strong style="color:#f97316;">2 hours</strong> to confirm your session timing.</p>

          <div style="background:#27272a;border-radius:12px;padding:20px;margin:20px 0;">
            <h3 style="color:#f97316;margin-top:0;">📍 Visit Us</h3>
            <p style="margin:4px 0;">Block F, Sanjay Colony, Sector 23</p>
            <p style="margin:4px 0;">Faridabad, Haryana 121005</p>
            <p style="margin:12px 0 4px;"><strong>📞</strong> <a href="tel:+917217829394" style="color:#f97316;">072178 29394</a></p>
            <p style="margin:4px 0;"><strong>🕐</strong> Open Daily: 5:00 AM – 10:00 PM</p>
          </div>

          <div style="background:#1a1a1a;border-left:4px solid #f97316;padding:16px;border-radius:0 8px 8px 0;margin:20px 0;">
            <p style="margin:0;font-size:13px;">💡 <strong>What to bring:</strong> Comfortable workout clothes, water bottle, and your fitness goals!</p>
          </div>

          <p>Can't wait? <a href="https://wa.me/917217829394" style="color:#f97316;font-weight:bold;">WhatsApp us right now!</a></p>
          <p>See you on the gym floor! 💪</p>
          <p style="color:#a1a1aa;font-size:12px;">— The FITXONE GYM Team</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(gymEmail);
    await transporter.sendMail(userEmail);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email. Please call us directly." }, { status: 500 });
  }
}

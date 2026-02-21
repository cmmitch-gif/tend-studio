import { Resend } from "resend";
import { NextResponse } from "next/server";

const SERVICE_LABELS: Record<string, string> = {
  "quick-look": "Quick Look (mini-audit)",
  "health-check": "Health Check (full audit + fix)",
  "ground-up": "Ground Up (full setup)",
  ongoing: "Ongoing management",
  "not-sure": "Not sure yet",
};

const FIND_US_LABELS: Record<string, string> = {
  google: "Google search",
  referral: "Referral from someone",
  social: "Social media",
  klaviyo: "Klaviyo community",
  other: "Other",
};

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { service, name, email, website, message, findUs } = body;

    if (!service || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const serviceLabel = SERVICE_LABELS[service] || service;
    const findUsLabel = findUs ? (FIND_US_LABELS[findUs] || findUs) : null;

    const { data, error: sendError } = await resend.emails.send({
      from: "Tend Studio <notifications@tendstudio.com.au>",
      to: "hello@tendstudio.com.au",
      replyTo: email,
      subject: `New enquiry from ${name} — ${serviceLabel}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
          <h2 style="color: #2d6a4f; margin-bottom: 24px;">New Enquiry</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Service</td>
              <td style="padding: 8px 0;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2d6a4f;">${email}</a></td>
            </tr>
            ${website ? `<tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Website</td><td style="padding: 8px 0;"><a href="${website}" style="color: #2d6a4f;">${website}</a></td></tr>` : ""}
            ${message ? `<tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Message</td><td style="padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
            ${findUsLabel ? `<tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Found via</td><td style="padding: 8px 0;">${findUsLabel}</td></tr>` : ""}
          </table>

          <p style="margin-top: 32px; font-size: 13px; color: #888;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        { error: sendError.message },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry email failed:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 },
    );
  }
}

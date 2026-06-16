import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const pcbType = formData.get("pcbType") as string;
    const quantity = formData.get("quantity") as string;
    const boardSize = formData.get("boardSize") as string;
    const layers = formData.get("layers") as string;

    const assembly = formData.get("assembly") as string;
    const sourcing = formData.get("sourcing") as string;

    const requirements = formData.get("requirements") as string;

    const gerberFile = formData.get("gerberFile") as File | null;
    const bomFile = formData.get("bomFile") as File | null;

    const attachments: any[] = [];

    if (gerberFile && gerberFile.size > 0) {
      const bytes = await gerberFile.arrayBuffer();

      attachments.push({
        filename: gerberFile.name,
        content: Buffer.from(bytes),
      });
    }

    if (bomFile && bomFile.size > 0) {
      const bytes = await bomFile.arrayBuffer();

      attachments.push({
        filename: bomFile.name,
        content: Buffer.from(bytes),
      });
    }

    await resend.emails.send({
      from: "rfq@lenxtechenterprise.com",

      to: ["info@lenxtechenterprise.com"],

      subject: `New PCB Quote Request - ${company || fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New PCB Quote Request</h2>

          <h3>Contact Information</h3>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <hr />

          <h3>PCB Specifications</h3>

          <p><strong>PCB Type:</strong> ${pcbType}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Board Size:</strong> ${boardSize}</p>
          <p><strong>Layers:</strong> ${layers}</p>

          <hr />

          <h3>Additional Requirements</h3>

          <p><strong>PCB Assembly Required:</strong> ${assembly}</p>
          <p><strong>Component Sourcing Required:</strong> ${sourcing}</p>

          <hr />

          <h3>Project Requirements</h3>

          <p>${requirements || "Not provided"}</p>

          <hr />

          <p>
            <strong>Attachments:</strong>
            ${attachments.length} file(s) attached
          </p>
        </div>
      `,

      attachments,
    });

    await resend.emails.send({
      from: "rfq@lenxtechenterprise.com",

      to: [email],

      subject:
        "PCB Quote Request Received - Lenx Tech Enterprise",

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank You For Contacting Lenx Tech Enterprise</h2>

          <p>Dear ${fullName},</p>

          <p>
            We have successfully received your PCB quotation request.
          </p>

          <p>
            Our engineering and sourcing team will review your
            requirements and get back to you shortly.
          </p>

          <p>
            Thank you for choosing Lenx Tech Enterprise.
          </p>

          <br/>

          <p>
            Regards,<br/>
            Lenx Tech Enterprise
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "PCB quote request submitted successfully.",
    });
  } catch (error) {
    console.error("PCB Quote Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit quote request.",
      },
      {
        status: 500,
      }
    );
  }
}
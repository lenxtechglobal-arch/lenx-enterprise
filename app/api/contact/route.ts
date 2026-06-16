import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const enquiryType = formData.get("enquiryType");
    const partNumber = formData.get("partNumber");
    const manufacturer = formData.get("manufacturer");
    const quantity = formData.get("quantity");
    const message = formData.get("message");

    const file = formData.get("file") as File | null;

    const attachments = [];

    if (file) {
      const bytes = await file.arrayBuffer();

      attachments.push({
        filename: file.name,
        content: Buffer.from(bytes),
      });
    }

    await resend.emails.send({
      from: "rfq@lenxtechenterprise.com",
      to: ["info@lenxtechenterprise.com"],

      subject: `New RFQ - ${name}`,

      html: `
        <h2>New RFQ Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>

        <hr/>

        <p><strong>Part Number:</strong> ${partNumber}</p>
        <p><strong>Manufacturer:</strong> ${manufacturer}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>

        <hr/>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,

      attachments,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
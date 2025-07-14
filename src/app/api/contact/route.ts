import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, budget, category, message } = body;

    // Validate required fields
    if (!name || !email || !budget || !category || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email message for Zenturiotech
    const msgToCompany = {
      to: 'exploradar@gmail.com', // Company email
      from: 'contact@zenturiotech.com', // Company sender email
      subject: 'New Project Inquiry from Zenturiotech Website',
      text: `
        Name: ${name}
        Email: ${email}
        Budget: ${budget}
        Category: ${category}
        Message: ${message}
      `,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Create confirmation email for the user
    const msgToUser = {
      to: email, // User's email address
      from: 'contact@zenturiotech.com',
      subject: 'Thank you for contacting Zenturiotech',
      text: `
        Dear ${name},

        Thank you for reaching out to Zenturiotech. We have received your project inquiry and our team will review it shortly.

        Here's a copy of your message:

        Category: ${category}
        Budget: ${budget}
        Message: ${message}

        We will get back to you as soon as possible.

        Best regards,
        The Zenturiotech Team
      `,
      html: `
        <h2>Thank you for contacting Zenturiotech</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to Zenturiotech. We have received your project inquiry and our team will review it shortly.</p>
        <h3>Here's a copy of your message:</h3>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>We will get back to you as soon as possible.</p>
        <br>
        <p>Best regards,<br>The Zenturiotech Team</p>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(msgToCompany),
      sgMail.send(msgToUser)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('SendGrid error:', error);
    
    if (error.response) {
      console.error('SendGrid response error:', error.response.body);
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 
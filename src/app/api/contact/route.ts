import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key (you can change this later)
sgMail.setApiKey('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');

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

    // Create email message
    const msg = {
      to: 'exploradar@gmail.com', // Your email address
      from: 'contact@zenturiotech.com', // Verified sender email
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

    // Send email
    await sgMail.send(msg);

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
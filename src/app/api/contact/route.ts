import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key (REPLACE THIS WITH YOUR ACTUAL API KEY)
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error('Missing SENDGRID_API_KEY');
}
sgMail.setApiKey(apiKey);

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const msg = {
      to: 'contact@zenturiotech.com',
      from: 'contact@zenturiotech.com',
      subject: 'New Project Inquiry from Zenturiotech Website',
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    try {
      // Send email using SendGrid
      await sgMail.send(msg);

      return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Request processing error:', error);
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
} 

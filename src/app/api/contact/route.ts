import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'exploradar@gmail.com',
    // Create an app password in your Google Account settings
    // Go to Security > 2-Step Verification > App passwords
    // Select "Mail" and your device, then use the generated password
    pass: process.env.GMAIL_APP_PASSWORD || ''
  }
});

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
    const mailOptions = {
      from: 'exploradar@gmail.com',
      to: 'exploradar@gmail.com',
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
      // Send email
      await transporter.sendMail(mailOptions);

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
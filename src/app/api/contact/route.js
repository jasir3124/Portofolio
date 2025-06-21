import { Resend } from 'resend'

export async function POST(req) {
    try {
      const { name, email, message, token } = await req.json();

      console.log("Received token:", token);

  
      if (!name || !email || !message || !token) {
        return new Response(JSON.stringify({ error: 'Missing fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      // 1. VERIFY reCAPTCHA token
      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: token,
          }),
          
      });

      const verifyData = await verifyRes.json();

      console.log("reCAPTCHA verify response:", verifyData);

  
      if (!verifyData.success) {
        return new Response(JSON.stringify({ error: 'reCAPTCHA failed' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Jasir Contact <onboarding@resend.dev>',
        to: 'jasirlimani12@gmail.com',
        subject: `New message from ${name}`,
        reply_to: email,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });
  
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
  
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  
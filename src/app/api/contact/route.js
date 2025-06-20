import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: 'Missing fields' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const msg = {
            to: 'jasirlimani12@gmail.com', // your email where you want to receive messages
            from: 'jasirlimani6@gmail.com', // your verified sender email on SendGrid
            subject: `New message from ${name} via portfolio`,
            text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        await sgMail.send(msg);

        return new Response(
            JSON.stringify({ message: 'Email sent successfully' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('SendGrid error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to send email' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

import { ContactFormFields } from '@/lib/schemas/contact'
import { type NextRequest, NextResponse } from 'next/server'
import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer'

/**
 * Send email with nodemailer
 *
 * @param request NextRequest
 * @returns NextResponse
 */
export async function POST(request: NextRequest) {
  const { name, email, content } = (await request.json()) as ContactFormFields

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const options: Mail.Options = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `Portfolio - Mesaje de ${name} (${email})`,
    html: `
      <div>
        <h1>Nuevo mensaje de ${name}</h1>
        <h3><b>Email:</b> ${email}</h3>
        <h3>Contenido del mesaje</h3>
        <p>${content}</p>
      </div>
    `,
  }

  try {
    await new Promise<string>((resolve, reject) => {
      transport.sendMail(options, function (err) {
        if (!err) resolve('Email sent')
        else reject(err.message)
      })
    })

    return NextResponse.json({ message: 'Email sent' })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

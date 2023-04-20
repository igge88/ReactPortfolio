import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vf8f1op', 'template_y91e6f7', form.current, 'U6MVNBwV6eImtSF7H')

        e.target.reset()
      };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact_container'>

            {/*END OF CONTACT OPTIONS*/}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
            <div className='contact_options'>
                <article className='contact_option'>
                    <HiOutlineMail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>igge88@hotmail.com</h5>
                    <a href="mailto:igge88@hotmail.com" target='_blank' rel="noreferrer">Email me</a>
                </article>
                <article className='contact_option'>
                    <RiMessengerLine className='contact_option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Nacho Tapia Troncoso</h5>
                    <a href="https://m.me/nacho.t.troncoso" target='_blank' rel="noreferrer">Send a message</a>
                </article>
                <article className='contact_option'>
                    <BsWhatsapp className='contact_option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>number</h5>
                    <a href="https://api.whatsapp.com/send?phone=+46762428648" target='_blank' rel="noreferrer">Send a message</a>
                </article>
            </div>

        </div>
    </section>
  )
}

export default Contact

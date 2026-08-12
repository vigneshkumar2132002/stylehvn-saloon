"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import CallNowMenu from "./CallNowMenu";

const services = ["Women's Hair", "Men's Hair", "Kids Haircut", "Hair Botox", "Keratin", "Nanoplastia", "Hair Colour", "Hair Spa", "Bridal Makeup", "Party Makeup", "Facial", "Nail Art", "Manicure", "Pedicure", "Head Massage", "Body Massage"];
const features = ["Experienced Stylists", "Premium Products", "Luxury Interior", "Certified Experts", "Advanced Hair Treatments", "Family Friendly", "Relaxing Environment", "Parking Available"];
const appointmentTimes = Array.from({ length: 27 }, (_, index) => {
  const totalMinutes = 8 * 60 + index * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const period = hours >= 12 ? "PM" : "AM";
  const displayHour = hours % 12 || 12;
  const value = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  return { value, label: `${displayHour}:${String(minutes).padStart(2, "0")} ${period}` };
});
const faqs = [
  ["Do I need an appointment?", "Appointments are recommended, especially for weekends, treatments, makeup, nails and wellness services."],
  ["Do you accept walk-ins?", "Yes, walk-ins are welcome whenever a stylist or specialist is available."],
  ["How long does Hair Botox last?", "Hair Botox results commonly last two to four months depending on hair condition and aftercare."],
  ["How long does Keratin last?", "Keratin results commonly last three to five months with professional aftercare."],
  ["What is Nanoplastia?", "Nanoplastia is an advanced smoothing treatment designed to reduce frizz and create softer, straighter and more manageable hair."],
  ["Do you offer kids haircuts?", "Yes. Our patient stylists provide comfortable kids haircut experiences in a family-friendly environment."],
];
const reveal = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .16 }, transition: { duration: .8, ease: [0.22,1,.36,1] as const } };
function Arrow() { return <svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11 11 3M5 3h6v6" /></svg>; }

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error("Unable to save appointment");
      event.currentTarget.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };
  const businessSchema = {
    "@context":"https://schema.org","@type":["BeautySalon","LocalBusiness"],name:"STYLEHVN UNISEX SALON",telephone:["+91 91871 57676","+91 70195 11512"],email:"hello@stylehvn.com",
    address:{"@type":"PostalAddress",streetAddress:"1st Floor, D4-377, KHB Colony, Self Financed Society 407 Colony",addressLocality:"Yelahanka New Town",addressRegion:"Karnataka",postalCode:"560064",addressCountry:"IN"},
    openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],opens:"08:00",closes:"21:00"}],
  };
  const contactSchema = {"@context":"https://schema.org","@type":"ContactPage",name:"Contact STYLEHVN Unisex Salon",mainEntity:businessSchema};
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"/"},{"@type":"ListItem",position:2,name:"Contact",item:"/contact"}]};

  return (
    <>
      {[businessSchema,contactSchema,faqSchema,breadcrumbSchema].map((schema,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />)}
      <section className="ct-hero" aria-labelledby="ct-title">
        <Image src="/contact/contact-hero.png" alt="STYLEHVN luxury black and gold salon interior in Yelahanka" fill priority sizes="100vw" />
        <div className="ct-shade" />
        <motion.div className="ct-hero-copy" initial={{opacity:0,y:34}} animate={{opacity:1,y:0}} transition={{duration:1}}>
          <span className="ct-kicker">CONTACT STYLEHVN</span>
          <h1 id="ct-title">Let&apos;s Create<br />Your Next<br />Signature Look</h1>
          <p>Whether you&apos;re planning a complete makeover, booking your regular haircut or exploring luxury Hair Botox, Keratin, Nanoplastia, nail artistry, facials or spa treatments, our experts are ready to welcome you.</p>
          <div className="ct-actions"><a className="ct-gold" href="#appointment">Book Appointment <Arrow /></a><CallNowMenu className="ct-line" /><a className="ct-line" href="https://wa.me/919187157676" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div>
        </motion.div>
      </section>

      <section className="ct-info ct-shell">
        {[["Call Us","+91 91871 57676 / +91 70195 11512","tel:+917019511512"],["Visit Us","1st Floor, D4-377 • KHB Colony • Yelahanka New Town • Bengaluru 560064","https://maps.google.com/?q=STYLEHVN+UNISEX+SALON+Yelahanka"],["Email","hello@stylehvn.com","mailto:hello@stylehvn.com"],["Opening Hours","Every Day • 08:00 AM — 09:00 PM","#hours"]].map(([title,text,href],index)=><motion.a href={href} key={title} {...reveal}><small>0{index+1}</small><span>{title}</span><strong>{text}</strong><Arrow /></motion.a>)}
      </section>

      <section className="ct-form-section ct-shell" id="appointment">
        <motion.div className="ct-form-copy" {...reveal}><span className="ct-kicker">BOOK YOUR VISIT</span><h2>Your time.<br />Your service.<br />Your STYLEHVN.</h2><p>Tell us what you&apos;re looking for and our team will help plan a personalised salon experience.</p><div><strong>STYLEHVN UNISEX SALON</strong><span>Yelahanka New Town • Bangalore North</span><span>+91 91871 57676</span><span>+91 70195 11512</span></div></motion.div>
        <motion.form className="ct-form" onSubmit={onSubmit} {...reveal}>
          <label>Full Name<input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label>
          <label>Phone Number<input name="phone" type="tel" required autoComplete="tel" placeholder="+91" /></label>
          <label>Email Address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>Preferred Service<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(service=><option key={service}>{service}</option>)}</select></label>
          <label className="ct-picker-label">Preferred Date<span className="ct-picker"><i aria-hidden="true">◇</i><input name="date" type="date" min={today} required /></span></label>
          <label className="ct-picker-label">Preferred Time<span className="ct-picker"><i aria-hidden="true">◷</i><select name="time" required defaultValue=""><option value="" disabled>Select a time</option>{appointmentTimes.map(time=><option key={time.value} value={time.value}>{time.label}</option>)}</select></span><small>Available from 8:00 AM to 9:00 PM</small></label>
          <label className="ct-full">Message<textarea name="message" rows={4} placeholder="Tell us about the look or treatment you have in mind" /></label>
          <button className="ct-full" type="submit" disabled={submitState==="sending"}>{submitState==="sending"?"Saving Your Appointment…":"Book My Appointment"} <Arrow /></button>
          {submitState==="error" && <p className="ct-form-status ct-form-error" role="alert">We couldn&apos;t save your appointment. Please try again or call us.</p>}
        </motion.form>
      </section>

      <AnimatePresence>
        {submitState==="success" && <motion.div className="ct-success-modal" role="dialog" aria-modal="true" aria-labelledby="booking-success-title" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSubmitState("idle")}>
          <motion.div initial={{opacity:0,y:28,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:18,scale:.97}} transition={{duration:.45,ease:[.22,1,.36,1]}} onClick={event=>event.stopPropagation()}>
            <button type="button" className="ct-success-close" aria-label="Close confirmation" onClick={()=>setSubmitState("idle")}>×</button>
            <span className="ct-success-mark">S</span><small>APPOINTMENT REQUEST RECEIVED</small>
            <h2 id="booking-success-title">Let&apos;s change<br />your look.</h2>
            <p>Your details have been saved. The STYLEHVN team will contact you shortly to confirm your appointment.</p>
            <button type="button" className="ct-success-done" onClick={()=>setSubmitState("idle")}>Done <Arrow /></button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>

      <section className="ct-map-section">
        <motion.div className="ct-map" {...reveal}><iframe title="Google map showing STYLEHVN Unisex Salon" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=STYLEHVN%20UNISEX%20SALON%20Yelahanka%20New%20Town&output=embed" /></motion.div>
        <motion.aside {...reveal}><span className="ct-kicker">FIND STYLEHVN</span><h2>In the heart of<br />Yelahanka New Town.</h2><p>1st Floor, D4-377,<br />KHB Colony, Self Financed Society 407 Colony,<br />Yelahanka New Town, Bengaluru,<br />Karnataka 560064</p><div className="ct-actions"><a className="ct-gold" href="https://maps.google.com/?q=STYLEHVN+UNISEX+SALON+Yelahanka" target="_blank" rel="noreferrer">Open Google Maps <Arrow /></a><CallNowMenu className="ct-line" /></div></motion.aside>
      </section>

      <section className="ct-hours" id="hours">
        <motion.header {...reveal}><span className="ct-kicker">OPEN EVERY DAY</span><h2>Luxury, on your schedule.</h2></motion.header>
        <motion.div {...reveal}><span>Monday — Sunday</span><strong>08:00 AM — 09:00 PM</strong><p>Appointments recommended for weekends and advanced services.</p></motion.div>
      </section>

      <section className="ct-why ct-shell">
        <motion.header {...reveal}><span className="ct-kicker">WHY VISIT STYLEHVN</span><h2>Every detail designed<br />around your experience.</h2></motion.header>
        <div>{features.map((feature,index)=><motion.article key={feature} {...reveal}><small>0{index+1}</small><i>✦</i><h3>{feature}</h3></motion.article>)}</div>
      </section>

      <section className="ct-social ct-shell">
        <motion.header {...reveal}><span className="ct-kicker">STAY CONNECTED</span><h2>Follow the STYLEHVN story.</h2></motion.header>
        <div>{[["Instagram","#"],["Facebook","#"],["WhatsApp","https://wa.me/919187157676"],["Google Reviews","https://www.google.com/search?q=STYLEHVN+UNISEX+SALON+Yelahanka"]].map(([name,href],index)=><motion.a key={name} href={href} target={href==="#"?undefined:"_blank"} rel="noreferrer" {...reveal}><span>0{index+1}</span><strong>{name}</strong><Arrow /></motion.a>)}</div>
      </section>

      <section className="ct-faq ct-shell">
        <motion.header {...reveal}><span className="ct-kicker">GOOD TO KNOW</span><h2>Before your visit.</h2></motion.header>
        <div>{faqs.map(([question,answer],index)=><article key={question} className={openFaq===index?"open":""}><button type="button" onClick={()=>setOpenFaq(openFaq===index?null:index)} aria-expanded={openFaq===index}><span>0{index+1}</span>{question}<i>{openFaq===index?"−":"+"}</i></button><div><p>{answer}</p></div></article>)}</div>
      </section>

      <section className="ct-final"><motion.div {...reveal}><span>WELCOME TO STYLEHVN</span><h2>Ready For Your Luxury<br />Salon Experience?</h2><div className="ct-actions"><a className="ct-dark" href="#appointment">Book Appointment <Arrow /></a><CallNowMenu className="ct-outline-dark" /><a className="ct-outline-dark" href="https://wa.me/919187157676" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div></motion.div></section>
    </>
  );
}

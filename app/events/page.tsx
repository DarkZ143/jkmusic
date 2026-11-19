import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Baithaks | JK Music Club",
  description: "Gather for baithaks, workshops and student performances at JK Music Club.",
};

const gatherings = [
  {
    kind: "Baithak · listening room",
    title: "Ragas of the evening",
    text: "An intimate mehfil with unhurried alap, thoughtful accompaniment and space to listen closely.",
    detail: "For students, families and rasikas",
    tone: "wine",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkPq9B2RFMXydbfjYmhFbsAnc68S1HnEwc9cuEHqGvcGIqNOflCgG9jyKOywCXm-oEguT00PIlWJYQaLkhtVjYlxex4k9-qsvKLrjrqD9zz0Tk0dGaKexcBqXdQcz_nvoP5-vFkujFkLqyVyKiTWHRAuZsFc2_7fVtn9G3sryS43Pg2Av2Q1UdQs9qjTo9-9-4sI0SkkEmJfvGF7zkCj7iNsUhZd9Z1huZj2Q_2G5d",
    alt: "A musician performing in a warmly lit hall",
  },
  {
    kind: "Masterclass · rhythm",
    title: "Tihai & layakari",
    text: "Explore rhythmic cycles, tihai construction and the lively exchange between melody and taal.",
    detail: "Small learning circle",
    tone: "gold",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrJmRHwSz3zlx0Ll-bh9kmIfYMdc-BGG3-GY9T2H9OxE9zq_bSGn-CL9GuKorXEmZQtJMhV5ZMxrG2INK24N9fURERI7-GDuEraYUtBKkwEyn6hxXtQewSGtzByWor1F1C-5OiwFsUjir35YGIYqiv0iorgwsa2eLYygYZunba42V3Q-56aSpeMysl96v9v9dG5bnYE9lW0WqaO2FZCtYMfpMOqXCJ7IrzI-Qy89u",
    alt: "Tabla drums arranged for a rhythm workshop",
  },
  {
    kind: "Student celebration · annual",
    title: "Sangeet Utsav",
    text: "A joyful gathering of students and teachers celebrating the music and practice built throughout the year.",
    detail: "Live student performances",
    tone: "indigo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8BeVPKeMtzMlpdqeSKgVl9M7VBjBT_67-Xj7rVEmIw-5RaMGnsPZZ44MExQpvyX7lJ53gnNgjO1lzOEN4G_s6Ji35tYTHtAmjNFvvCTbxm3XcfTs1eB7H36EUdKnrfytAX4OR9Jgw5PCKsBMfP0VpyznYpAyMVYBqbcF1c21LRgvo_jOLm2xKzlb1HBRTTyrW_zQWlmAEcND23yY4uCLpQx29e6mdCH1IlYFgesZX",
    alt: "A student ensemble rehearsing together",
  },
];

export default function EventsPage() {
  return (
    <main>
      <section className="subpage-hero events-hero">
        <div className="wrap subpage-hero-inner">
          <p className="eyebrow">Rasika sabha · live presentations</p>
          <h1>Music is best <em>shared.</em></h1>
          <p className="subpage-lede">
            Baithaks, workshops and student gatherings bring the academy together
            to listen, learn and celebrate music in the moment.
          </p>
          <Link className="button button-primary" href="/admissions#trial">Ask about the next gathering</Link>
        </div>
      </section>

      <section className="subpage-section">
        <div className="wrap">
          <div className="section-heading section-heading-row">
            <div><p className="eyebrow">Gather around the music</p><h2>Baithaks &amp; masterclasses</h2><p className="section-intro">Ask the academy for current dates, availability and visitor details.</p></div>
            <a className="text-link" href="mailto:vidya@jkmusicclub.org?subject=Events%20at%20JK%20Music%20Club">Contact about events</a>
          </div>
          <div className="gathering-grid">
            {gatherings.map((item) => (
              <article className={`gathering-card gathering-${item.tone}`} key={item.title}>
                <div className="gathering-photo"><Image src={item.image} alt={item.alt} width={1000} height={720} unoptimized /></div>
                <div className="gathering-info">
                  <p className="event-type">{item.kind}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="event-foot"><span>{item.detail}</span><a href="mailto:vidya@jkmusicclub.org?subject=Events%20at%20JK%20Music%20Club">Enquire</a></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="event-experience-section">
        <div className="wrap event-experience-grid">
          <div className="event-experience-copy">
            <p className="eyebrow">The baithak experience</p>
            <h2>A little less distance between stage and listener.</h2>
            <p>In a baithak, music is close enough to see a hand shape a phrase and hear a breath before the next note. It is a chance to experience a raga in a shared room, without hurry.</p>
            <p>Students can listen, ask questions and carry new ideas back into their own practice. Visitors are welcome to ask the academy about attending.</p>
            <Link className="text-link" href="/admissions#trial">Ask how to attend</Link>
          </div>
          <div className="event-experience-image">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BeVPKeMtzMlpdqeSKgVl9M7VBjBT_67-Xj7rVEmIw-5RaMGnsPZZ44MExQpvyX7lJ53gnNgjO1lzOEN4G_s6Ji35tYTHtAmjNFvvCTbxm3XcfTs1eB7H36EUdKnrfytAX4OR9Jgw5PCKsBMfP0VpyznYpAyMVYBqbcF1c21LRgvo_jOLm2xKzlb1HBRTTyrW_zQWlmAEcND23yY4uCLpQx29e6mdCH1IlYFgesZX"
              alt="Learners sharing an acoustic practice session"
              width={1000}
              height={800}
              unoptimized
            />
            <span className="experience-stamp">Sa · Re · Ga · Ma</span>
          </div>
        </div>
      </section>

      <section className="event-contact-band">
        <div className="wrap event-contact-inner"><div><p className="eyebrow eyebrow-light">Come listen first</p><h2>Not sure where to begin?</h2><p>Ask about a baithak or sit in on a learning session.</p></div><Link className="button button-primary" href="/admissions#trial">Get in touch</Link></div>
      </section>
    </main>
  );
}

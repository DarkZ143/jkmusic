import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faculty & Gurus | JK Music Club",
  description: "Learn about the Guru–Shishya tradition and teaching approach at JK Music Club.",
};

const values = [
  { title: "Personal attention", text: "Small learning circles leave room for questions, correction and steady progress." },
  { title: "A living repertoire", text: "Ragas and compositions are taught through listening, context and repeated practice." },
  { title: "Learning by doing", text: "Students build confidence through guided riyaz, ensemble work and opportunities to perform." },
];

export default function FacultyPage() {
  return (
    <main>
      <section className="subpage-hero faculty-hero">
        <div className="wrap subpage-hero-inner">
          <p className="eyebrow">The people and practice behind the music</p>
          <h1>Learn in the company <em>of a guru.</em></h1>
          <p className="subpage-lede">
            Teaching at JK Music Club is built on listening, patience and a close
            connection between learner and teacher. The tradition lives in the
            practice we share every day.
          </p>
          <Link className="button button-primary" href="/admissions#trial">Meet us at a trial class</Link>
        </div>
      </section>

      <section className="faculty-story-section">
        <div className="wrap faculty-story-grid">
          <div className="faculty-photo">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvwsL3XekuD00MQQIwGXtEE4ujlEkOFQhjD3tmeGYHj91e--cWARMt5PvnrqYSBxzIDKiSaIu-o9wAWwPQtxe9DktlapqVZVueyKWkJ0_d9zhJMSw1GZeWe7_KNCzoG5w2w-uQBPpsgMAN_qdor8zHO9HxP5xkHs_8gpS1hsd9wdqlVMYRjm3PqecD4iDfV8qyQi8af6blNbB6mFQzQVG60lxVkJTChmIc_wapoUnX"
              alt="A guru guiding a student through a music lesson"
              width={1100}
              height={900}
              unoptimized
            />
            <div className="faculty-photo-caption"><span>Listen closely.</span><span>Practice honestly.</span><span>Let the music unfold.</span></div>
          </div>
          <div className="faculty-story-copy">
            <p className="eyebrow">Guru–Shishya parampara</p>
            <h2>Teaching that meets you where you are.</h2>
            <p className="faculty-lead">Every learner arrives with a different voice, a different ear and a different reason to begin.</p>
            <p>Our teachers bring those differences into the lesson. They listen for what is already taking shape, give clear guidance on what comes next and help each student build a practice they can sustain.</p>
            <p>Rather than rushing through a syllabus, learning connects swara, taal and expression. The result is a foundation that can keep growing long after the lesson ends.</p>
            <Link className="text-link" href="/courses">Explore the curriculum</Link>
          </div>
        </div>
      </section>

      <section className="faculty-values-section">
        <div className="wrap">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">A shared way of learning</p>
            <h2>What guides every lesson</h2>
          </div>
          <div className="faculty-values-grid">
            {values.map((value, index) => (
              <article className="faculty-value-card" key={value.title}>
                <span className="value-index">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faculty-callout">
        <div className="wrap faculty-callout-inner">
          <Image src="/logo.png" alt="" width={82} height={82} />
          <div><p className="eyebrow eyebrow-light">A first conversation</p><h2>Come hear how learning feels here.</h2></div>
          <Link className="button button-primary" href="/admissions#trial">Book a trial class</Link>
        </div>
      </section>
    </main>
  );
}

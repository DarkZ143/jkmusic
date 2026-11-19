import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courses & Ragas | JK Music Club",
  description: "Explore vocal, instrumental and rhythm courses at JK Music Club Academy.",
};

const disciplines = [
  {
    tag: "Voice · Khayal & Tarana",
    name: "Hindustani Classical Vocal",
    text: "Build a grounded voice through swara sadhana, alankars, bandish, alap and the expressive depth of raga.",
    study: "Core ragas · Voice culture · Bandish",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkPq9B2RFMXydbfjYmhFbsAnc68S1HnEwc9cuEHqGvcGIqNOflCgG9jyKOywCXm-oEguT00PIlWJYQaLkhtVjYlxex4k9-qsvKLrjrqD9zz0Tk0dGaKexcBqXdQcz_nvoP5-vFkujFkLqyVyKiTWHRAuZsFc2_7fVtn9G3sryS43Pg2Av2Q1UdQs9qjTo9-9-4sI0SkkEmJfvGF7zkCj7iNsUhZd9Z1huZj2Q_2G5d",
    alt: "A vocalist absorbed in a classical performance",
  },
  {
    tag: "Strings · Tantakari",
    name: "Sitar, Sarod & Esraj",
    text: "Explore meend, alap, jod and jhala with patient technique, attentive listening and a personal raga practice.",
    study: "Mizrab technique · Alap · Jhala",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO8duSsgdN3ZcdiZXBl7WGDUeu8oX8QFl-1GfITqfzRxgMYf4J6XSUmmYr6vIvhdFb2MWLbP3coJcCK6wML3ghZWdfMs67jDAq-pwooBN3MSVOQetOq8KjAuwPID9X5h4pLkQTJwDI1-WpBR7fX9oxV9EDc5d9ekoEQ10nP3Jm2CrfovXTWduCp8WoiCTC4K3gH_nhXWrLL8KWJOaO4vtXCkNjL1MB_Vu8SnNnPfj9",
    alt: "A sitar being played during practice",
  },
  {
    tag: "Percussion · Taal Vidya",
    name: "Tabla, Pakhawaj & Mridangam",
    text: "Learn bols, theka and layakari, then bring clarity and confidence to accompaniment and solo playing.",
    study: "Taal foundations · Bols · Layakari",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrJmRHwSz3zlx0Ll-bh9kmIfYMdc-BGG3-GY9T2H9OxE9zq_bSGn-CL9GuKorXEmZQtJMhV5ZMxrG2INK24N9fURERI7-GDuEraYUtBKkwEyn6hxXtQewSGtzByWor1F1C-5OiwFsUjir35YGIYqiv0iorgwsa2eLYygYZunba42V3Q-56aSpeMysl96v9v9dG5bnYE9lW0WqaO2FZCtYMfpMOqXCJ7IrzI-Qy89u",
    alt: "Tabla drums set out for a lesson",
  },
  {
    tag: "Wind · Bansuri",
    name: "Hindustani Bamboo Flute",
    text: "Shape breath, pitch and phrasing through a thoughtful mix of pranayama, swara work and raga study.",
    study: "Breath control · Swara · Raga",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPaVHzIFMyLIxzw491ZdUDcV3SC6v1hoTwBAlqbEjfjvLmvpk_7pIa_ceStSlnj3UEEXyfr4iW7z_aSEOTcaSXZLzR6NxTbyJWVsxAXeDA_n91dDggjnxMVMN3cSKuKRFdIPS53nlUI4kqdfFne4E1kZkr7rOvHrVsfuJOSf3L3_Y9I1rbojRLI-UQFJwlyZ6cW-glBB7veSF-7OUJQeUoDekiENpw7AWhey8I9rB1",
    alt: "A bamboo bansuri beside handwritten music notation",
  },
  {
    tag: "Carnatic · Kriti Sangeet",
    name: "Carnatic Vocal",
    text: "Study the melodic grammar, compositions and rhythmic clarity at the heart of Carnatic music.",
    study: "Sarali · Jantai · Varnam",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvwsL3XekuD00MQQIwGXtEE4ujlEkOFQhjD3tmeGYHj91e--cWARMt5PvnrqYSBxzIDKiSaIu-o9wAWwPQtxe9DktlapqVZVueyKWkJ0_d9zhJMSw1GZeWe7_KNCzoG5w2w-uQBPpsgMAN_qdor8zHO9HxP5xkHs_8gpS1hsd9wdqlVMYRjm3PqecD4iDfV8qyQi8af6blNbB6mFQzQVG60lxVkJTChmIc_wapoUnX",
    alt: "A teacher and student sharing a lesson in a traditional music room",
  },
  {
    tag: "Semi-classical · Mehfil",
    name: "Ghazal, Thumri & Dadra",
    text: "Discover delicate ornamentation, lyrical expression and the art of communicating a poem through melody.",
    study: "Bhava · Bol banav · Poetry",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6JXYWydOuFPWXJt4ZnQH6AKgczOKmS42BFawEOwitr-DJjbS_VDi29SRkIQly--qZRgJsod6PpwTQx1DDUmwFSEBx4iYT8giy8Swo8vyPlad8H3UgXVG71DM8rxIrxm5YjulMtLKOc9Wzc5LxHRoPVrqEJl6JwSMzMZV_kLSHXma4OVvRcqni_Agp1r6811EgTCmLLObupnbmeBVwAS5PnL2FFvUu8lB9P_6nwpbU",
    alt: "A warm room prepared for classical music and riyaz",
  },
  {
    tag: "Devotional · Sugam",
    name: "Sugam Sangeet & Bhajans",
    text: "Learn devotional compositions with a focus on clear diction, melodic phrasing and expressive accompaniment.",
    study: "Bhajan · Harmonium · Manjira",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8BeVPKeMtzMlpdqeSKgVl9M7VBjBT_67-Xj7rVEmIw-5RaMGnsPZZ44MExQpvyX7lJ53gnNgjO1lzOEN4G_s6Ji35tYTHtAmjNFvvCTbxm3XcfTs1eB7H36EUdKnrfytAX4OR9Jgw5PCKsBMfP0VpyznYpAyMVYBqbcF1c21LRgvo_jOLm2xKzlb1HBRTTyrW_zQWlmAEcND23yY4uCLpQx29e6mdCH1IlYFgesZX",
    alt: "Students practicing music together in a small ensemble",
  },
  {
    tag: "Contemporary · Raga Fusion",
    name: "Acoustic Guitar & Raga",
    text: "Bring Indian melodic ideas to acoustic playing through modal scales, improvisation and ensemble work.",
    study: "Raga scales · Improvisation · Ensemble",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO8duSsgdN3ZcdiZXBl7WGDUeu8oX8QFl-1GfITqfzRxgMYf4J6XSUmmYr6vIvhdFb2MWLbP3coJcCK6wML3ghZWdfMs67jDAq-pwooBN3MSVOQetOq8KjAuwPID9X5h4pLkQTJwDI1-WpBR7fX9oxV9EDc5d9ekoEQ10nP3Jm2CrfovXTWduCp8WoiCTC4K3gH_nhXWrLL8KWJOaO4vtXCkNjL1MB_Vu8SnNnPfj9",
    alt: "Close view of strings and carved wood on a classical instrument",
  },
];

const levels = [
  { number: "01", title: "Prathamik", note: "Swara sadhana & fundamentals", text: "Build pitch, listening, breath and a steady first practice." },
  { number: "02", title: "Praveshika", note: "Raga expansion & alap", text: "Develop a growing repertoire and learn to shape a raga." },
  { number: "03", title: "Madhyama", note: "Vistaar & laya", text: "Deepen improvisation, composition and rhythmic confidence." },
  { number: "04", title: "Visharad", note: "Performance & mastery", text: "Bring years of study together in performance and independent riyaz." },
];

export default function CoursesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="wrap subpage-hero-inner">
          <p className="eyebrow">Gandharva Mahavidyalaya affiliated pedagogy</p>
          <h1>Our Sangeet Curriculum <em>&amp; Raga Disciplines</em></h1>
          <p className="subpage-lede">
            Find a course for your voice, instrument or curiosity. Structured
            learning meets the living Guru–Shishya tradition, from first swara
            to confident performance.
          </p>
          <div className="subpage-highlights">
            <span><strong>8+</strong><small>Disciplines</small></span>
            <span><strong>4</strong><small>Learning levels</small></span>
            <span><strong>1:1</strong><small>Guidance available</small></span>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="eyebrow">A practice for every path</p>
            <h2>Explore the disciplines</h2>
            <p className="section-intro">Choose a starting point. Your teacher will help shape the details around your experience and goals.</p>
          </div>
          <div className="discipline-grid">
            {disciplines.map((item, index) => (
              <article className="discipline-card" key={item.name}>
                <div className="discipline-photo">
                  <Image src={item.image} alt={item.alt} width={900} height={650} unoptimized />
                  <span>{item.tag}</span>
                </div>
                <div className="discipline-info">
                  <p className="discipline-index">DISCIPLINE 0{index + 1}</p>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <div className="discipline-focus"><strong>Study includes</strong><span>{item.study}</span></div>
                  <Link href="/admissions#trial">Enquire about this course</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="levels-section">
        <div className="wrap">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">A steady progression</p>
            <h2>From first note to Visharad</h2>
            <p className="section-intro">The pace is personal. Each stage supports musical understanding as well as technique.</p>
          </div>
          <div className="level-grid">
            {levels.map((level) => (
              <article className={`level-card${level.number === "04" ? " level-card-featured" : ""}`} key={level.number}>
                <span className="level-number">{level.number}</span>
                <h3>{level.title}</h3>
                <p className="level-note">{level.note}</p>
                <p>{level.text}</p>
              </article>
            ))}
          </div>
          <div className="center-action"><Link className="button button-primary" href="/admissions#trial">Find your course</Link></div>
        </div>
      </section>
    </main>
  );
}

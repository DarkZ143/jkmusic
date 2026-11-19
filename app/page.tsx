import Image from "next/image";
import TrialRequestForm from "./trial-request";

const courses = [
  {
    number: "01",
    tag: "Voice · Khayal & Tarana",
    title: "Hindustani Classical Vocal",
    description:
      "Build a grounded voice through swara sadhana, alankars, bandish, alap and the expressive depth of raga.",
    detail: "Beginner to Visharad",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkPq9B2RFMXydbfjYmhFbsAnc68S1HnEwc9cuEHqGvcGIqNOflCgG9jyKOywCXm-oEguT00PIlWJYQaLkhtVjYlxex4k9-qsvKLrjrqD9zz0Tk0dGaKexcBqXdQcz_nvoP5-vFkujFkLqyVyKiTWHRAuZsFc2_7fVtn9G3sryS43Pg2Av2Q1UdQs9qjTo9-9-4sI0SkkEmJfvGF7zkCj7iNsUhZd9Z1huZj2Q_2G5d",
    alt: "A vocalist immersed in a classical music performance",
  },
  {
    number: "02",
    tag: "Strings · Tantakari",
    title: "Sitar, Sarod & Esraj",
    description:
      "Explore meend, alap, jod and jhala with patient technique, attentive listening and a personal raga practice.",
    detail: "Individual guidance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO8duSsgdN3ZcdiZXBl7WGDUeu8oX8QFl-1GfITqfzRxgMYf4J6XSUmmYr6vIvhdFb2MWLbP3coJcCK6wML3ghZWdfMs67jDAq-pwooBN3MSVOQetOq8KjAuwPID9X5h4pLkQTJwDI1-WpBR7fX9oxV9EDc5d9ekoEQ10nP3Jm2CrfovXTWduCp8WoiCTC4K3gH_nhXWrLL8KWJOaO4vtXCkNjL1MB_Vu8SnNnPfj9",
    alt: "A close view of a sitar being played",
  },
  {
    number: "03",
    tag: "Percussion · Taal Vidya",
    title: "Tabla, Pakhawaj & Mridangam",
    description:
      "Learn bols, theka and layakari, then bring clarity and confidence to accompaniment and solo playing.",
    detail: "Daily riyaz practice",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrJmRHwSz3zlx0Ll-bh9kmIfYMdc-BGG3-GY9T2H9OxE9zq_bSGn-CL9GuKorXEmZQtJMhV5ZMxrG2INK24N9fURERI7-GDuEraYUtBKkwEyn6hxXtQewSGtzByWor1F1C-5OiwFsUjir35YGIYqiv0iorgwsa2eLYygYZunba42V3Q-56aSpeMysl96v9v9dG5bnYE9lW0WqaO2FZCtYMfpMOqXCJ7IrzI-Qy89u",
    alt: "Tabla pair ready for a practice session",
  },
  {
    number: "04",
    tag: "Wind · Contemporary",
    title: "Bansuri & Acoustic Music",
    description:
      "Shape breath, pitch and phrasing on bansuri, harmonium and guitar across classical and contemporary forms.",
    detail: "All age groups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPaVHzIFMyLIxzw491ZdUDcV3SC6v1hoTwBAlqbEjfjvLmvpk_7pIa_ceStSlnj3UEEXyfr4iW7z_aSEOTcaSXZLzR6NxTbyJWVsxAXeDA_n91dDggjnxMVMN3cSKuKRFdIPS53nlUI4kqdfFne4E1kZkr7rOvHrVsfuJOSf3L3_Y9I1rbojRLI-UQFJwlyZ6cW-glBB7veSF-7OUJQeUoDekiENpw7AWhey8I9rB1",
    alt: "A bamboo bansuri resting on handwritten music notation",
  },
];

const events = [
  {
    type: "Monthly baithak",
    title: "An evening with the ragas",
    description:
      "An intimate listening room for slow alap, thoughtful accompaniment and the quiet magic of a shared mehfil.",
    note: "Open to learners and listeners",
    tone: "wine",
  },
  {
    type: "Weekend workshop",
    title: "The craft of layakari",
    description:
      "A guided session exploring rhythmic cycles, tihai construction and the conversation between melody and taal.",
    note: "Small learning circle",
    tone: "gold",
  },
  {
    type: "Seasonal celebration",
    title: "Sangeet Utsav",
    description:
      "A gathering of students and teachers celebrating the music, discipline and friendships built through riyaz.",
    note: "A day of live music",
    tone: "indigo",
  },
];

export default function Home() {
  return (
    <main>
        <section className="hero section-anchor" id="home">
          <div className="hero-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-mark" aria-hidden="true">✳</span>
                Naad Brahma <span className="eyebrow-dot">•</span> Parampara since 1984
              </p>
              <h1>
                Sur, Laya aur <em>Parampara</em> ka Sangam
              </h1>
              <p className="hero-subtitle">Discover the soul of Indian classical music.</p>
              <p className="hero-description">
                Learn through attentive listening, steady riyaz and the timeless
                Guru–Shishya tradition. Find your path in vocal music, sitar,
                tabla, bansuri and more.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#courses">Explore the courses</a>
                <a className="button button-light" href="#trial">Book a free trial</a>
              </div>
              <div className="hero-note">
                <span className="note-rule" aria-hidden="true" />
                <span>Make space for music in your everyday.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  className="cover-image hero-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6JXYWydOuFPWXJt4ZnQH6AKgczOKmS42BFawEOwitr-DJjbS_VDi29SRkIQly--qZRgJsod6PpwTQx1DDUmwFSEBx4iYT8giy8Swo8vyPlad8H3UgXVG71DM8rxIrxm5YjulMtLKOc9Wzc5LxHRoPVrqEJl6JwSMzMZV_kLSHXma4OVvRcqni_Agp1r6811EgTCmLLObupnbmeBVwAS5PnL2FFvUu8lB9P_6nwpbU"
                  alt="A warm riyaz room with Indian classical instruments"
                  width={1200}
                  height={1500}
                  unoptimized
                  fetchPriority="high"
                />
                <div className="hero-image-shade" />
                <div className="hero-image-caption">
                  <span className="caption-kicker">A place to listen, learn and grow</span>
                  <span className="caption-title">The riyaz begins here.</span>
                </div>
              </div>
              <div className="hero-seal" aria-label="JK Music Club Academy">
                <Image src="/logo.png" alt="" width={76} height={76} />
              </div>
              <div className="hero-float-card">
                <span className="float-card-icon" aria-hidden="true">♪</span>
                <span>
                  <strong>Learn at your own pace</strong>
                  <small>Guidance shaped around your practice</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="swara-band" aria-label="The seven swaras">
          <div className="wrap swara-band-inner">
            <p className="swara-label">Begin with one note</p>
            <div className="swara-notes" aria-label="Sa, Re, Ga, Ma, Pa, Dha, Ni">
              <span className="swara-active">Sa</span><i />
              <span>Re</span><i />
              <span>Ga</span><i />
              <span>Ma</span><i />
              <span>Pa</span><i />
              <span>Dha</span><i />
              <span>Ni</span>
            </div>
            <span className="swara-caption">Seven notes. A world of expression.</span>
          </div>
        </section>

        <section className="stats wrap" aria-label="Academy highlights">
          <div><strong>1984</strong><span>Rooted in tradition</span></div>
          <div><strong>8+</strong><span>Musical disciplines</span></div>
          <div><strong>1:1</strong><span>Personal guidance</span></div>
          <div><strong>Sa → Ni</strong><span>Your own musical journey</span></div>
        </section>

        <section className="section courses-section section-anchor" id="courses">
          <div className="wrap">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">Find your sur</p>
                <h2>Choose your discipline</h2>
                <p className="section-intro">
                  Begin with the sound that calls to you. Build technique and
                  musical understanding one practice at a time.
                </p>
              </div>
              <a className="text-link" href="#trial">Ask about a course</a>
            </div>

            <div className="course-grid">
              {courses.map((course) => (
                <article className="course-card" key={course.number}>
                  <div className="course-image-wrap">
                    <Image
                      className="cover-image course-image"
                      src={course.image}
                      alt={course.alt}
                      width={900}
                      height={650}
                      unoptimized
                    />
                    <span className="course-number">{course.number}</span>
                    <span className="course-tag">{course.tag}</span>
                  </div>
                  <div className="course-body">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="course-foot">
                      <span>{course.detail}</span>
                      <a href="#trial" aria-label={`Ask about ${course.title}`}>Enquire</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="parampara-section section-anchor" id="parampara">
          <div className="wrap parampara-grid">
            <div className="parampara-visual">
              <div className="parampara-main-image">
                <Image
                  className="cover-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvwsL3XekuD00MQQIwGXtEE4ujlEkOFQhjD3tmeGYHj91e--cWARMt5PvnrqYSBxzIDKiSaIu-o9wAWwPQtxe9DktlapqVZVueyKWkJ0_d9zhJMSw1GZeWe7_KNCzoG5w2w-uQBPpsgMAN_qdor8zHO9HxP5xkHs_8gpS1hsd9wdqlVMYRjm3PqecD4iDfV8qyQi8af6blNbB6mFQzQVG60lxVkJTChmIc_wapoUnX"
                  alt="A teacher guiding a student during a music lesson"
                  width={1050}
                  height={1250}
                  unoptimized
                />
              </div>
              <div className="parampara-small-image">
                <Image
                  className="cover-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BeVPKeMtzMlpdqeSKgVl9M7VBjBT_67-Xj7rVEmIw-5RaMGnsPZZ44MExQpvyX7lJ53gnNgjO1lzOEN4G_s6Ji35tYTHtAmjNFvvCTbxm3XcfTs1eB7H36EUdKnrfytAX4OR9Jgw5PCKsBMfP0VpyznYpAyMVYBqbcF1c21LRgvo_jOLm2xKzlb1HBRTTyrW_zQWlmAEcND23yY4uCLpQx29e6mdCH1IlYFgesZX"
                  alt="Students practicing together in a music room"
                  width={900}
                  height={650}
                  unoptimized
                />
              </div>
              <div className="parampara-mark" aria-hidden="true">
                <Image src="/logo.png" alt="" width={84} height={84} />
              </div>
            </div>
            <div className="parampara-copy">
              <p className="eyebrow">The sanctity of learning</p>
              <h2>Music moves from one heart to another.</h2>
              <p className="parampara-lead">
                The Guru–Shishya tradition makes room for curiosity, careful
                listening and a practice that is truly your own.
              </p>
              <p>
                At JK Music Club, lessons connect the details of technique with
                the feeling behind the music. Your teacher helps you find a
                steady rhythm, understand the language of a raga and carry what
                you learn into your daily riyaz.
              </p>
              <ul className="practice-list">
                <li><span className="list-mark">01</span><span><strong>Listen deeply</strong><small>Hear the notes, the pauses and the story in a bandish.</small></span></li>
                <li><span className="list-mark">02</span><span><strong>Practice with purpose</strong><small>Build a thoughtful routine around your level and goals.</small></span></li>
                <li><span className="list-mark">03</span><span><strong>Grow through sangat</strong><small>Learn in the company of teachers, peers and live music.</small></span></li>
              </ul>
              <a className="text-link" href="#trial">Come experience a lesson</a>
            </div>
          </div>
        </section>

        <section className="section events-section section-anchor" id="events">
          <div className="wrap">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">Rasika sabha · live presentations</p>
                <h2>Come together for music</h2>
                <p className="section-intro">
                  Baithaks and workshops make learning a shared, living experience.
                </p>
              </div>
              <a className="text-link" href="#trial">Ask about upcoming gatherings</a>
            </div>
            <div className="event-grid">
              {events.map((event) => (
                <article className={`event-card event-${event.tone}`} key={event.title}>
                  <p className="event-type"><span aria-hidden="true">✳</span>{event.type}</p>
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-foot">
                    <span>{event.note}</span>
                    <a href="#trial" aria-label={`Enquire about ${event.title}`}>Enquire</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trial-section section-anchor" id="trial">
          <div className="wrap trial-grid">
            <div className="trial-copy">
              <p className="eyebrow eyebrow-light">A gentle beginning</p>
              <h2>Start your riyaz journey with a free trial.</h2>
              <p>
                Tell us what you would like to learn. We will help you find a
                suitable discipline and a first session with the academy.
              </p>
              <div className="trial-points">
                <span><i aria-hidden="true">✓</i> No prior experience needed</span>
                <span><i aria-hidden="true">✓</i> Meet a teacher and explore your goals</span>
                <span><i aria-hidden="true">✓</i> In-person and online enquiries welcome</span>
              </div>
              <div className="trial-brand">
                <Image src="/logo.png" alt="" width={64} height={64} />
                <span>JK Music Club<small>Academy of Indian Music</small></span>
              </div>
            </div>
            <div className="trial-form-card">
              <p className="eyebrow">Your first note</p>
              <h3>Request a complimentary trial</h3>
              <p className="form-intro">Share a few details and continue in your email app.</p>
              <TrialRequestForm />
            </div>
          </div>
        </section>
      </main>
  );
}

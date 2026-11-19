import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrialRequestForm from "../trial-request";

export const metadata: Metadata = {
  title: "Admissions & Riyaz Trial | JK Music Club",
  description: "Request a complimentary riyaz trial and learn about joining JK Music Club Academy.",
};

const steps = [
  { number: "01", title: "Tell us what interests you", text: "Share your musical interests, experience and preferred way to learn." },
  { number: "02", title: "Meet a teacher", text: "Use a complimentary trial to explore your goals and ask questions." },
  { number: "03", title: "Choose your rhythm", text: "Discuss a discipline, learning level and schedule that suits you." },
];

const studyOptions = [
  { name: "Regular batches", note: "A steady weekly rhythm", detail: "For learners balancing music with school, work or family." },
  { name: "Weekend intensive", note: "More time to go deeper", detail: "For focused practice in a longer weekly session." },
  { name: "Individual mentorship", note: "One-to-one guidance", detail: "For a personal learning plan shaped with your teacher." },
];

export default function AdmissionsPage() {
  return (
    <main>
      <section className="subpage-hero admissions-hero">
        <div className="wrap subpage-hero-inner admissions-hero-grid">
          <div>
            <p className="eyebrow">Pravesh · Sangeet parivar</p>
            <h1>Join the Sangeet <em>Parivar.</em></h1>
            <p className="subpage-lede">
              Begin your musical sadhana with a complimentary riyaz and swara
              trial. There is no previous experience required—just a wish to
              learn.
            </p>
            <a className="button button-primary" href="#trial">Request your free trial</a>
          </div>
          <div className="admissions-seal-card">
            <Image src="/logo.png" alt="JK Music Club logo" width={100} height={100} />
            <div><strong>Since 1984</strong><span>Classical learning, carried forward.</span></div>
          </div>
        </div>
      </section>

      <section className="admissions-main wrap section-anchor" id="trial">
        <div className="admissions-form-panel">
          <p className="eyebrow">A gentle beginning</p>
          <h2>Book your complimentary riyaz trial</h2>
          <p className="section-intro">Let us know a little about you. Your email app will open with the details for you to review.</p>
          <TrialRequestForm />
        </div>
        <aside className="admissions-aside">
          <div className="admissions-aside-image">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6JXYWydOuFPWXJt4ZnQH6AKgczOKmS42BFawEOwitr-DJjbS_VDi29SRkIQly--qZRgJsod6PpwTQx1DDUmwFSEBx4iYT8giy8Swo8vyPlad8H3UgXVG71DM8rxIrxm5YjulMtLKOc9Wzc5LxHRoPVrqEJl6JwSMzMZV_kLSHXma4OVvRcqni_Agp1r6811EgTCmLLObupnbmeBVwAS5PnL2FFvUu8lB9P_6nwpbU"
              alt="A quiet, sunlit room for music practice"
              width={1000}
              height={760}
              unoptimized
            />
            <span>Take the first step at your own pace.</span>
          </div>
          <div className="admissions-steps">
            <p className="eyebrow">The admission pathway</p>
            <h3>What happens next</h3>
            {steps.map((step) => (
              <div className="admission-step" key={step.number}>
                <span>{step.number}</span><div><strong>{step.title}</strong><p>{step.text}</p></div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="study-options-section">
        <div className="wrap">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">Find a rhythm that fits</p>
            <h2>Ways to learn</h2>
            <p className="section-intro">The academy can help you choose a format after learning about your schedule and goals.</p>
          </div>
          <div className="study-options-grid">
            {studyOptions.map((option, index) => (
              <article className={`study-option-card${index === 1 ? " study-option-featured" : ""}`} key={option.name}>
                <span className="option-index">0{index + 1}</span>
                <p className="eyebrow">{option.note}</p>
                <h3>{option.name}</h3>
                <p>{option.detail}</p>
                <span className="fee-note">Ask admissions for current timings and fees</span>
              </article>
            ))}
          </div>
          <p className="scholarship-note"><strong>Scholarship enquiries welcome.</strong> Ask the academy about current fellowship and fee-support options.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap faq-wrap">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">A few things to know</p>
            <h2>Frequently asked questions</h2>
          </div>
          <details><summary>Do I need an instrument before joining?</summary><p>You can discuss instrument access with the academy during your trial. It is fine to begin by learning about the course first.</p></details>
          <details><summary>Can I join as a complete beginner?</summary><p>Yes. The trial is a chance to talk through your interests and find a suitable starting point.</p></details>
          <details><summary>Are online lessons available?</summary><p>Online learning may be possible for some disciplines. Include your preference in the enquiry and the academy can advise.</p></details>
          <details><summary>How do I find out about timings and fees?</summary><p>Timings and fees depend on the course and learning format. Contact admissions for the current details.</p></details>
          <div className="faq-contact"><span>Would you prefer to speak with someone?</span><a href="tel:+911123418920">Call +91 (011) 2341 8920</a></div>
          <div className="center-action"><Link className="button button-primary" href="/admissions#trial">Request a trial</Link></div>
        </div>
      </section>
    </main>
  );
}

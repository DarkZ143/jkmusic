import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/">
            <Image src="/logo.png" alt="JK Music Club logo" width={78} height={78} />
            <span>JK Music Club<small>Academy of Indian Music</small></span>
          </Link>
          <p>Keeping the music, learning and spirit of riyaz alive since 1984.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/courses">Courses &amp; disciplines</Link>
          <Link href="/faculty">Faculty &amp; Gurus</Link>
          <Link href="/events">Baithaks &amp; events</Link>
        </div>
        <div className="footer-column">
          <h3>Visit the academy</h3>
          <p>48 Sangeet Bharati Marg<br />Cultural Enclave, New Delhi 110001</p>
          <a href="tel:+911123418920">+91 (011) 2341 8920</a>
          <a href="mailto:vidya@jkmusicclub.org">vidya@jkmusicclub.org</a>
        </div>
        <div className="footer-cta">
          <p className="eyebrow">Let music find you</p>
          <h3>Your next chapter starts with one note.</h3>
          <Link className="button button-primary" href="/admissions#trial">Book a free trial</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 JK Music Club Academy of Music</span>
        <span className="footer-mantra">Dedicated to the living legacy of Indian ragas.</span>
      </div>
    </footer>
  );
}

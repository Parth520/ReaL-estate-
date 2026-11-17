import { img } from '../../data/images'
import ContactForm from '../forms/ContactForm'
import SafeImage from '../common/SafeImage'
/** Closing CTA + contact form (id="contact"). */
export default function CallToAction() {
  return (
    <section id="contact" className="relative scroll-mt-0 text-paper">
      <SafeImage src={img.cta} alt="Villa with a pool lit at dusk" className="absolute inset-0 h-full w-full" /><div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-28 md:px-10 lg:grid-cols-2">
        <div><h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">Tell us what you are looking for, or what you are selling.</h2><p className="mt-6 max-w-md text-paper/75">An adviser will call you within one working day. A first consultation is free and carries no obligation.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#properties" className="btn bg-brass text-ink hover:bg-paper">Find a property</a><a href="#message" className="btn btn-line border-paper/60 hover:bg-paper hover:text-ink">Sell with us</a></div></div>
        <div id="message" className="bg-paper p-8 text-ink md:p-10"><h3 className="mb-6 font-serif text-2xl">Schedule a consultation</h3><ContactForm /></div>
      </div>
    </section>
  )
}

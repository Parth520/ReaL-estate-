import Counter from '../common/Counter'
import SafeImage from '../common/SafeImage'
import { img } from '../../data/images'
/** Brand intro. Stats are placeholders: move to an /about API if they should stay live. */
const stats: [number, string, string][] = [[1200, '+', 'homes sold'], [18, '', 'years in the market'], [94, '%', 'sold within 60 days']]
export default function Intro() {
  return (
    <section id="about" className="mx-auto grid max-w-[1440px] gap-14 px-5 pb-24 pt-24 md:px-10 lg:grid-cols-12 lg:pt-56">
      <div className="lg:col-span-7"><h2 className="max-w-2xl font-serif text-4xl font-light leading-tight md:text-6xl">We would rather lose a sale than sell you the wrong house.</h2>
        <p className="mt-8 max-w-xl text-lg text-stone">Halden &amp; Rowe began as a two-person practice that inspected every property on foot. We still do. Our advisers each cover one neighbourhood, so you get answers from someone who knows the street, the builder and the price history.</p>
        <dl className="mt-12 grid grid-cols-3 border-t border-stone/30 pt-8">{stats.map(([n, s, l]) => <div key={l}><dd className="font-serif text-4xl text-brass md:text-5xl"><Counter to={n} suffix={s} /></dd><dt className="mt-1 text-sm text-stone">{l}</dt></div>)}</dl>
        <a href="#contact" className="btn btn-line mt-10">Meet the team</a></div>
      <div className="lg:col-span-5 lg:mt-24"><SafeImage src={img.intro} alt="Sunlit living room with oak floors and a deep sofa" className="aspect-[3/4] w-full" /></div>
    </section>
  )
}

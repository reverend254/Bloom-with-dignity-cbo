import React from 'react'

export default function App(){
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="px-6 sm:px-10 lg:px-24">
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Gallery />
        <Team />
        <Contact />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}

/* ---------- Components ---------- */

function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <Logo small />
          <div className="hidden sm:block">
            <div className="text-lg font-bold">Bloom with Dignity</div>
            <div className="text-xs tracking-wider uppercase text-gray-500">Empowering girls, transforming lives</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-teal-600">Home</a>
          <a href="#about" className="hover:text-teal-600">About</a>
          <a href="#programs" className="hover:text-teal-600">Programs</a>
          <a href="#impact" className="hover:text-teal-600">Impact</a>
          <a href="#gallery" className="hover:text-teal-600">Gallery</a>
          <a href="#team" className="hover:text-teal-600">Our Team</a>
          <a href="#contact" className="hover:text-teal-600">Contact</a>
          <a href="#donate" className="bg-teal-600 text-white px-4 py-2 rounded-md shadow hover:bg-teal-700">Donate</a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}

function MobileMenu(){
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="p-2 rounded-md cursor-pointer">☰</summary>
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg py-2 z-50">
          <a className="block px-4 py-2 text-sm" href="#home">Home</a>
          <a className="block px-4 py-2 text-sm" href="#about">About</a>
          <a className="block px-4 py-2 text-sm" href="#programs">Programs</a>
          <a className="block px-4 py-2 text-sm" href="#impact">Impact</a>
          <a className="block px-4 py-2 text-sm" href="#gallery">Gallery</a>
          <a className="block px-4 py-2 text-sm" href="#team">Our Team</a>
          <a className="block px-4 py-2 text-sm" href="#contact">Contact</a>
          <a className="block px-4 py-2 text-sm bg-teal-600 text-white rounded-md mx-2 text-center" href="#donate">Donate</a>
        </div>
      </details>
    </div>
  )
}

function Hero(){
  return (
    <section id="home" className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Bloom with Dignity CBO</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">Founded August 2025 — empowering 28 girls across 1 community through 2 impactful programs. We mentor, educate and support each girl to bloom with dignity.</p>

        <div className="mt-6 flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-md bg-teal-600 text-white font-semibold shadow hover:bg-teal-700">Join Us</a>
          <a href="#programs" className="px-6 py-3 rounded-md border border-gray-200 hover:bg-gray-50">Our Programs</a>
        </div>

        <div className="mt-8 flex gap-6 text-sm text-gray-600">
          <div><strong className="text-teal-700">28</strong><div>Girls Supported</div></div>
          <div><strong className="text-gold-500">2</strong><div>Programs</div></div>
          <div><strong className="text-green-600">1</strong><div>Community</div></div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-72 h-72 bg-white rounded-xl flex items-center justify-center shadow-lg">
          <Logo large />
        </div>
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-700">Bloom with Dignity CBO was founded in August 2025 with the mission of empowering girls through education, mentorship and community programs. We believe that when a girl blooms, a community thrives.</p>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold">Founder / Director — Lynn Jane Wangari</h3>
          <p className="mt-2 text-gray-600">A short founder's message can be placed here. Lynn Jane Wangari leads the organization with compassion and a clear vision to transform lives.</p>
        </div>
      </div>
    </section>
  )
}

function Programs(){
  return (
    <section id="programs" className="py-12 bg-white">
      <div className="max-w-7xl">
        <h2 className="text-2xl font-bold">Our Programs</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProgramCard title="Girl Empowerment Initiative" desc="Mentorship, school support, life skills and safe spaces for 28 girls." icon="🌱"/>
          <ProgramCard title="Community Wellness Program" desc="Education, health awareness and dignity support across the community." icon="🤝"/>
        </div>
      </div>
    </section>
  )
}

function ProgramCard({title, desc, icon}: {title: string, desc: string, icon: string}){
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  )
}

function Impact(){
  return (
    <section id="impact" className="py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold">Our Impact</h2>
        <p className="mt-4 text-gray-700">Changing lives one girl at a time.</p>
        <div className="mt-6 flex gap-8">
          <Stat number="28" label="Girls Supported" />
          <Stat number="2" label="Programs" />
          <Stat number="1" label="Community" />
        </div>

        <blockquote className="mt-6 p-4 bg-gray-50 rounded">"Bloom with Dignity changed my life — I have hope again." — Program beneficiary</blockquote>
      </div>
    </section>
  )
}

function Stat({number, label}: {number: string, label: string}){
  return (
    <div className="p-4 bg-gray-50 rounded-lg text-center w-40">
      <div className="text-3xl font-bold text-teal-700">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function Gallery(){
  return (
    <section id="gallery" className="py-12">
      <div className="max-w-6xl">
        <h2 className="text-2xl font-bold">Moments that Inspire</h2>
        <p className="text-gray-600 mt-2">A small selection from our gallery.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GalleryItem src="/assets/miss-director-1.jpg" title="Miss Director 1" />
          <GalleryItem src="/assets/miss-director-2.jpg" title="Miss Director 2" />
          <GalleryItem src="/assets/miss-director-3.jpg" title="Miss Director 3" />
        </div>
      </div>
    </section>
  )
}

function GalleryItem({src, title}: {src: string, title: string}){
  return (
    <div className="rounded-lg overflow-hidden border shadow-sm">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img src={src} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-3 bg-white">
        <div className="font-semibold">{title}</div>
      </div>
    </div>
  )
}

function Team(){
  const members = [
    {name: 'Lynn Jane Wangari', title: 'Founder / Director'},
    {name: 'Judy Wanjiru Gichugu', title: 'Board Member'},
    {name: 'Erick Gichoki', title: 'Treasurer'},
    {name: 'Patrick Njuki Kiragu', title: 'Secretary'},
    {name: 'Duke Mainye', title: 'Board Member'},
    {name: 'James Kahuthu Mungai', title: 'Board Member'},
  ]

  return (
    <section id="team" className="py-12 bg-gray-50">
      <div className="max-w-6xl">
        <h2 className="text-2xl font-bold">Meet Our Board</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map(m => (
            <div key={m.name} className="p-4 bg-white rounded-lg border text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto flex items-center justify-center text-xl">{m.name.split(' ').map(n=>n[0]).join('')}</div>
              <div className="mt-3 font-semibold">{m.name}</div>
              <div className="text-sm text-gray-600">{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">Reach out to learn more or get involved.</p>
        <form className="mt-4 grid grid-cols-1 gap-4">
          <input className="p-3 border rounded" placeholder="Name" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded" rows={5} placeholder="Message"></textarea>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-teal-600 text-white rounded">Send Message</button>
            <a href="#donate" className="px-6 py-3 border rounded">Donate</a>
          </div>
        </form>
      </div>
    </section>
  )
}

function Donate(){
  return (
    <section id="donate" className="py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold">Support Our Cause</h2>
        <p className="mt-2 text-gray-700">Your contribution helps girls bloom with dignity. Every coin counts.</p>
        <div className="mt-4">
          <button className="px-6 py-3 bg-teal-600 text-white rounded">Donate Now</button>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo small />
          <div className="text-sm text-gray-600">© 2025 Bloom with Dignity CBO. All rights reserved.</div>
        </div>
        <div className="text-sm text-gray-500">Follow us: [FB] [IG] [LinkedIn]</div>
      </div>
    </footer>
  )
}

/* ---------- Logo component (inline SVG of the first/original style) ---------- */
function Logo({small, large}: {small?: boolean, large?: boolean}){
  const size = large ? 160 : small ? 40 : 120
  return (
    <div style={{width: size, height: size}} className="flex items-center justify-center">
      <svg viewBox="0 0 300 300" width={size} height={size} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bloom with Dignity logo">
        <title>Bloom with Dignity</title>
        <g transform="translate(150,150)">
          <path d="M-90,0 A90,90 0 0,1 0,-90 L0,-50 A18,18 0 0,0 -18,-36 A40,40 0 0,1 -90,0 Z" fill="#EA2E3B" stroke="#ffffff" strokeWidth="6"/>
          <path d="M0,-90 A90,90 0 0,1 90,0 L40,0 A18,18 0 0,1 58,18 A40,40 0 0,1 0,-90 Z" fill="#F7C81C" stroke="#ffffff" strokeWidth="6"/>
          <path d="M90,0 A90,90 0 0,1 0,90 L0,50 A18,18 0 0,0 18,36 A40,40 0 0,1 90,0 Z" fill="#7BC74D" stroke="#ffffff" strokeWidth="6"/>
          <path d="M0,90 A90,90 0 0,1 -90,0 L-40,0 A18,18 0 0,1 -58,-18 A40,40 0 0,1 0,90 Z" fill="#08A589" stroke="#ffffff" strokeWidth="6"/>
        </g>
      </svg>
    </div>
  )
}
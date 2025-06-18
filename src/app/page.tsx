import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="bg-[#800000] py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif">Conrad Gietman</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <article className="mb-16">
          <h2 className="text-4xl font-serif mb-4 text-white/90">
            De Nederlandse Adel in de Gouden Eeuw
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="aspect-w-4 aspect-h-3 bg-[#2A2A2A] mb-4"></div>
              <div className="text-[#E0E0E0] text-sm">
                8 januari 2024 door Conrad Gietman
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-[#E0E0E0] text-lg mb-6 leading-relaxed">
                De Nederlandse adel speelde een cruciale rol in de vorming van onze natie tijdens de Gouden Eeuw. 
                Hun invloed strekte zich uit over politiek, cultuur en economie. In deze blog verken ik de 
                fascinerende verhalen en connecties die deze periode zo bijzonder maken.
              </p>
              <Link 
                href="/blog/nederlandse-adel" 
                className="text-white hover:text-[#E0E0E0] transition-colors inline-flex items-center"
              >
                Lees meer
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Recent Posts Grid */}
        <section>
          <div className="border-b border-[#666666] mb-8">
            <h2 className="text-2xl font-serif mb-4">Recente Artikelen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-[#2A2A2A] p-6">
              <h3 className="text-xl font-serif mb-4">Kastelen en Buitenplaatsen</h3>
              <p className="text-[#E0E0E0] mb-4 line-clamp-3">
                Ontdek de prachtige residenties van de Nederlandse adel en hun historische betekenis.
                Een reis langs de meest indrukwekkende kastelen en buitenplaatsen van de Gouden Eeuw.
              </p>
              <div className="flex justify-between items-center">
                <Link 
                  href="/blog/kastelen" 
                  className="text-white hover:text-[#E0E0E0] transition-colors"
                >
                  Lees meer →
                </Link>
                <span className="text-[#666666] text-sm">5 januari 2024</span>
              </div>
            </article>

            <article className="bg-[#2A2A2A] p-6">
              <h3 className="text-xl font-serif mb-4">Adellijke Families</h3>
              <p className="text-[#E0E0E0] mb-4 line-clamp-3">
                Verken de geschiedenis van prominente adellijke families en hun invloed op de Nederlandse geschiedenis.
                Van machtige dynastieën tot vergeten geslachten.
              </p>
              <div className="flex justify-between items-center">
                <Link 
                  href="/blog/families" 
                  className="text-white hover:text-[#E0E0E0] transition-colors"
                >
                  Lees meer →
                </Link>
                <span className="text-[#666666] text-sm">2 januari 2024</span>
              </div>
            </article>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="mt-16 bg-[#2A2A2A] p-8">
          <h2 className="text-2xl font-serif mb-4">Blijf op de Hoogte</h2>
          <p className="text-[#E0E0E0] mb-6">
            Ontvang een melding wanneer er nieuwe artikelen verschijnen over de Nederlandse adel en geschiedenis.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Uw e-mailadres"
              className="bg-[#1A1A1A] text-white px-4 py-2 flex-grow border border-[#666666] focus:outline-none focus:border-white"
            />
            <button className="bg-[#800000] text-white px-6 py-2 hover:bg-[#900000] transition-colors">
              Inschrijven
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-16">
          <div className="border-b border-[#666666] mb-8">
            <h2 className="text-2xl font-serif mb-4">Categorieën</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/categorie/gouden-eeuw" 
              className="bg-[#2A2A2A] p-4 hover:bg-[#333333] transition-colors"
            >
              Gouden Eeuw
            </Link>
            <Link 
              href="/categorie/kastelen" 
              className="bg-[#2A2A2A] p-4 hover:bg-[#333333] transition-colors"
            >
              Kastelen & Buitenplaatsen
            </Link>
            <Link 
              href="/categorie/families" 
              className="bg-[#2A2A2A] p-4 hover:bg-[#333333] transition-colors"
            >
              Adellijke Families
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

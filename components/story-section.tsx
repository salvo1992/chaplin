"use client"

import Image from "next/image"
import { Heart, Award, Users, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/components/language-provider"

export function StorySection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  const storyContent = {
    it: {
  paragraph1:
    "Benvenuti a CHAPLIN Luxury Holiday House! Ciao e benvenuti, sono felice di darvi il benvenuto nella nostra casa vacanze di charme situata nel cuore di Viterbo. CHAPLIN Luxury Holiday House nasce dal desiderio di offrire ai nostri ospiti un soggiorno elegante, confortevole e autentico, in una delle città più affascinanti del Lazio. Fin dal primo giorno, la nostra missione è stata quella di creare un ambiente raffinato ma accogliente, dove ogni ospite possa sentirsi a proprio agio, come a casa. Crediamo che l’attenzione ai dettagli, la disponibilità e un’accoglienza sincera siano elementi fondamentali per rendere ogni soggiorno davvero speciale.",

  paragraph2:
    "La posizione della CHAPLIN Luxury Holiday House è uno dei suoi punti di forza: ci troviamo in una zona eccellente di Viterbo, apprezzata e valutata con un punteggio altissimo dai nostri ospiti. A pochi passi dal centro storico e a soli 600 metri dalla stazione ferroviaria di Viterbo, la nostra struttura è perfetta per chi desidera esplorare la città a piedi o muoversi comodamente verso le principali destinazioni. Le vie medievali, le piazze storiche e l’atmosfera unica della città dei Papi rendono ogni passeggiata un’esperienza indimenticabile.",

  paragraph3:
    "All’interno della CHAPLIN Luxury Holiday House troverete ambienti curati con gusto, spazi luminosi e comfort pensati per garantire relax e tranquillità. Che si tratti di un viaggio di piacere, di una fuga romantica o di un soggiorno di lavoro, la nostra struttura è pensata per adattarsi a ogni esigenza. Amiamo interagire con i nostri ospiti, ascoltare le loro storie e consigliare ristoranti tipici, luoghi da visitare e percorsi meno conosciuti di Viterbo. Il nostro obiettivo è farvi vivere non solo un soggiorno, ma un’esperienza autentica, che vi faccia venire voglia di tornare.",

  yearsExperience: "Anni di Esperienza",
  happyGuests: "Ospiti Felici",
  awardsReceived: "Riconoscimenti",
  averageRating: "Valutazione Media",
},
   en: {
  paragraph1:
    "Welcome to CHAPLIN Luxury Holiday House. Hello and welcome! We are delighted to welcome you to our elegant holiday home located in the heart of Viterbo. CHAPLIN Luxury Holiday House was created with the idea of offering guests a refined, comfortable, and authentic stay in one of the most fascinating historic cities in Italy. From the very beginning, our goal has been to create an environment where guests feel truly welcome, relaxed, and cared for. We believe that attention to detail, availability, and genuine hospitality can transform a simple stay into a memorable experience.",

  paragraph2:
    "One of the greatest strengths of CHAPLIN Luxury Holiday House is its excellent location. Situated in a highly rated area of Viterbo, the property is within walking distance of the historic city center and just 600 meters from Viterbo’s train station. This strategic position allows guests to explore medieval streets, historic squares, and cultural landmarks with ease, while also enjoying convenient connections to nearby destinations. Viterbo’s timeless atmosphere makes every walk an unforgettable journey through history.",

  paragraph3:
    "Inside CHAPLIN Luxury Holiday House, guests will find tastefully designed interiors, bright spaces, and modern comforts created to ensure peace and relaxation. Whether you are traveling for leisure, a romantic escape, or business, our home adapts perfectly to every need. We love interacting with our guests, listening to their stories, and recommending local restaurants, hidden gems, and authentic experiences. Our aim is not just to offer accommodation, but to let you experience Viterbo in a genuine and memorable way.",

  yearsExperience: "Years of Experience",
  happyGuests: "Happy Guests",
  awardsReceived: "Recognitions",
  averageRating: "Average Rating",
},

fr: {
  paragraph1:
    "Bienvenue à CHAPLIN Luxury Holiday House. Bonjour et bienvenue! Nous sommes ravis de vous accueillir dans notre maison de vacances élégante située au cœur de Viterbo. CHAPLIN Luxury Holiday House est née du désir d’offrir à nos hôtes un séjour raffiné, confortable et authentique dans l’une des villes historiques les plus fascinantes d’Italie. Depuis le début, notre objectif est de créer un environnement où les clients se sentent réellement accueillis, détendus et pris en charge. Nous croyons que l’attention aux détails et une hospitalité sincère font toute la différence.",

  paragraph2:
    "L’un des grands atouts de CHAPLIN Luxury Holiday House est sans aucun doute son emplacement exceptionnel. Située dans une zone très appréciée de Viterbo, la maison se trouve à quelques pas du centre historique et à seulement 600 mètres de la gare ferroviaire. Cette position idéale permet d’explorer facilement les rues médiévales, les places historiques et les sites culturels, tout en bénéficiant de connexions pratiques vers les environs. L’atmosphère unique de Viterbo rend chaque promenade inoubliable.",

  paragraph3:
    "À l’intérieur de CHAPLIN Luxury Holiday House, vous découvrirez des espaces lumineux, un design soigné et des équipements modernes pensés pour le bien-être et la tranquillité. Que votre séjour soit touristique, romantique ou professionnel, notre maison s’adapte parfaitement à vos besoins. Nous aimons échanger avec nos hôtes, partager des conseils sur les restaurants locaux et suggérer des expériences authentiques pour découvrir Viterbo. Notre objectif est de vous offrir bien plus qu’un séjour: une véritable expérience.",

  yearsExperience: "Années d’Expérience",
  happyGuests: "Clients Satisfaits",
  awardsReceived: "Reconnaissances",
  averageRating: "Note Moyenne",
},

es: {
  paragraph1:
    "Bienvenido a CHAPLIN Luxury Holiday House. ¡Hola y bienvenido! Nos complace darle la bienvenida a nuestra elegante casa vacacional ubicada en el corazón de Viterbo. CHAPLIN Luxury Holiday House nace con el objetivo de ofrecer a los huéspedes una estancia refinada, cómoda y auténtica en una de las ciudades históricas más fascinantes de Italia. Desde el principio, hemos querido crear un ambiente donde los visitantes se sientan verdaderamente acogidos, relajados y atendidos. Creemos que la atención al detalle y una hospitalidad genuina marcan la diferencia.",

  paragraph2:
    "Uno de los mayores puntos fuertes de CHAPLIN Luxury Holiday House es su excelente ubicación. Situada en una zona muy valorada de Viterbo, la propiedad se encuentra a poca distancia a pie del centro histórico y a solo 600 metros de la estación de tren. Esta posición estratégica permite explorar fácilmente las calles medievales, las plazas históricas y los principales puntos culturales, además de contar con conexiones cómodas a los alrededores. El encanto atemporal de Viterbo hace que cada paseo sea inolvidable.",

  paragraph3:
    "En el interior de CHAPLIN Luxury Holiday House encontrará espacios luminosos, un diseño cuidado y comodidades modernas pensadas para el descanso y la tranquilidad. Ya sea un viaje de placer, una escapada romántica o una estancia de trabajo, nuestra casa se adapta perfectamente a cada necesidad. Nos encanta interactuar con nuestros huéspedes, compartir recomendaciones de restaurantes locales y sugerir experiencias auténticas para descubrir Viterbo. Nuestro objetivo es ofrecer algo más que alojamiento: una experiencia real y memorable.",

  yearsExperience: "Años de Experiencia",
  happyGuests: "Huéspedes Felices",
  awardsReceived: "Reconocimientos",
  averageRating: "Valoración Media",
},

de: {
  paragraph1:
    "Willkommen im CHAPLIN Luxury Holiday House. Hallo und herzlich willkommen! Wir freuen uns, Sie in unserem eleganten Ferienhaus im Herzen von Viterbo begrüßen zu dürfen. Das CHAPLIN Luxury Holiday House wurde mit dem Ziel geschaffen, unseren Gästen einen stilvollen, komfortablen und authentischen Aufenthalt in einer der faszinierendsten historischen Städte Italiens zu bieten. Von Anfang an wollten wir eine Atmosphäre schaffen, in der sich Gäste wirklich willkommen, entspannt und gut aufgehoben fühlen. Wir sind überzeugt, dass Liebe zum Detail und echte Gastfreundschaft den Unterschied machen.",

  paragraph2:
    "Eine der größten Stärken des CHAPLIN Luxury Holiday House ist seine hervorragende Lage. Das Haus befindet sich in einer sehr gut bewerteten Gegend von Viterbo, nur wenige Gehminuten vom historischen Stadtzentrum und lediglich 600 Meter vom Bahnhof entfernt. Diese ideale Lage ermöglicht es, mittelalterliche Gassen, historische Plätze und kulturelle Sehenswürdigkeiten bequem zu erkunden und gleichzeitig von guten Verkehrsanbindungen zu profitieren. Die besondere Atmosphäre Viterbos macht jeden Spaziergang zu einem Erlebnis.",

  paragraph3:
    "Im Inneren des CHAPLIN Luxury Holiday House erwarten Sie helle Räume, ein elegantes Design und moderne Annehmlichkeiten, die auf Ruhe und Erholung ausgelegt sind. Ob Urlaubsreise, romantischer Kurztrip oder Geschäftsaufenthalt – unser Haus passt sich perfekt Ihren Bedürfnissen an. Wir schätzen den persönlichen Kontakt mit unseren Gästen, geben gerne Empfehlungen zu lokalen Restaurants und authentischen Erlebnissen in Viterbo. Unser Ziel ist es, Ihnen nicht nur eine Unterkunft, sondern ein echtes Erlebnis zu bieten.",

  yearsExperience: "Jahre Erfahrung",
  happyGuests: "Zufriedene Gäste",
  awardsReceived: "Anerkennungen",
  averageRating: "Durchschnittliche Bewertung",
},

  }

  const content = storyContent[language as keyof typeof storyContent] || storyContent.it

  return (
    <section className="py-20 bg-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/15 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div
              ref={titleRef}
              className={`transition-all duration-1000 ${titleVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-[-100px]"}`}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-roman-gradient mb-6 animate-text-shimmer">
                {t("storyTitle")}
              </h2>
            </div>

            <div
              ref={contentRef}
              className={`prose prose-lg max-w-none transition-all duration-1000 delay-300 ${contentVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-[-50px]"}`}
            >
              <p
                className="text-muted-foreground mb-6 text-lg leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                {content.paragraph1}
              </p>
              <p
                className="text-muted-foreground mb-6 text-lg leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                {content.paragraph2}
              </p>
              <p
                className="text-muted-foreground mb-8 text-lg leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                {content.paragraph3}
              </p>
            </div>

            <div
              ref={statsRef}
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${statsVisible ? "animate-slide-in-up opacity-100" : "opacity-0 translate-y-[50px]"}`}
            >
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow">
                  <Calendar className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="font-bold text-2xl text-roman-gradient animate-counter">38+</div>
                <div className="text-sm text-muted-foreground">{content.yearsExperience}</div>
              </div>
              <div
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow">
                  <Users className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="font-bold text-2xl text-roman-gradient animate-counter">5000+</div>
                <div className="text-sm text-muted-foreground">{content.happyGuests}</div>
              </div>
              <div
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow">
                  <Award className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="font-bold text-2xl text-roman-gradient animate-counter">15+</div>
                <div className="text-sm text-muted-foreground">{content.awardsReceived}</div>
              </div>
              <div
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-shadow">
                  <Heart className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="font-bold text-2xl text-roman-gradient animate-counter">4.9/5</div>
                <div className="text-sm text-muted-foreground">{content.averageRating}</div>
              </div>
            </div>
          </div>

          <div
            ref={imagesRef}
            className={`relative transition-all duration-1000 delay-900 ${imagesVisible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-[100px]"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="card-invisible overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "1s" }}
                >
                  <Image
                    src="/images/bb-hero.jpg"
                    alt="Villa Bella Vista - Esterno"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div
                  className="card-invisible overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "1.2s" }}
                >
                  <Image
                    src="/images/spa1.jpg"
                    alt="Colazione tradizionale"
                    width={300}
                    height={150}
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div
                  className="card-invisible overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "1.4s" }}
                >
                  <Image
                    src="/images/room-1.jpg"
                    alt="Camera elegante"
                    width={300}
                    height={150}
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div
                  className="card-invisible overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: "1.6s" }}
                >
                  <Image
                    src="/images/pool.jpg"
                    alt="Piscina panoramica"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-float shadow-lg" />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-full animate-float shadow-lg"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-secondary/25 to-primary/15 rounded-full animate-float shadow-lg"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


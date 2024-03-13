"use client";

import Header from "@/components/Header";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useAnimation } from "framer-motion";
import raga from "../assets/raga.png";
import { useInView } from "react-intersection-observer";
import passPort from "../assets/passport.gif";
import valigia from "../assets/valigia.gif";
import fotocamera from "../assets/fotocamera.gif";
import whatsapp from "../assets/whatsapp-white.png";
import videoBH from '../assets/bhexp.mov'



export default function Home() {
  const { ref, inView } = useInView();

  const itinerary = [
    // {
    //   image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_0881-scaled.jpeg'
    // },
    {
      image: "https://bodyhack.live/wp-content/uploads/2024/03/IMG_4209.jpeg",
    },
    {
      image:
        "https://bodyhack.live/wp-content/uploads/2024/03/IMG_7322-scaled.jpeg",
    },
    {
      image:
        "https://bodyhack.live/wp-content/uploads/2024/03/IMG_7473-scaled.jpeg",
    },
    {
      image:
        "https://bodyhack.live/wp-content/uploads/2024/03/IMG_8532-scaled.jpeg",
    },
    { image: "https://bodyhack.live/wp-content/uploads/2024/03/IMG_8764.jpeg" },
    { image: "https://bodyhack.live/wp-content/uploads/2024/03/IMG_8770.jpeg" },
    { image: "https://bodyhack.live/wp-content/uploads/2024/03/IMG_8771.jpeg" },
  ];

  const photoNav = [
      {
        image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7819.jpg',
        title: 'Napoli'
      },
      {
        image: 'https://bodyhack.live/wp-content/uploads/2024/03/livorno-scaled.jpeg',
        title: 'Livorno'
      },
      {
        image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7820.jpg',
        title: 'Marsiglia'
      },
      {
        image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7822.jpg',
        title: 'Barcellona'
      },
      {
        image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7823.jpg',
        title: 'La Goulette'
      },
      {
        image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7821.jpg',
        title: 'Palermo'
      },
  ]

  function openWhatsapp() {
    window.open(
      "https://wa.me/393665036732?text=Ciao%20ti%20contatto%20per%20la%20BodyHack%20Experience",
      "_target"
    );
  }
  const welcomeOnBoard = "benvenuti a bordo".split(" ");
  const navigazioneWords = "un viaggio oltre la navigazione".split(" ");

  return (
    <>
      <main
        className={`flex min-h-screen h-screen flex-col items-center justify-start px-3 xl:px-24 py-16 bg-[url('../assets/exp_sfondo.png')] bg-center bg-cover bg-no-repeat`}
      >
        <Header />
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-full relative">
            <div className="flex flex-col items-start justify-center flex-1 gap-4 text-white z-40">
              <div className="flex gap-3">
                {welcomeOnBoard.map((w, i) => (
                  <motion.h4
                    className="uppercase font-semibold text-[20px] xl:text-2xl "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: i / 10,
                    }}
                    key={i}
                  >
                    {w}{" "}
                  </motion.h4>
                ))}
              </div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120, duration: 1 }}
              >
                <Image
                  src="https://bodyhack.live/wp-content/uploads/2024/03/Logo-Experience-White.png"
                  width={600}
                  height={80}
                  alt="Bodyhack Experience"
                />
              </motion.div>
              <p className="text-xl">
                Sali a bordo insieme a noi per una crociera unica nel suo
                genere, sulla magnifica nave MSC Grandiosa.
              </p>
              <p className="text-xl">
                La Bodyhack Experience trasforma il tuo viaggio nel Mediterraneo
                con un&apos;avventura incredibile organizzata in collaborazione
                con MSC Crociere.
              </p>
            </div>
            <div className="flex-1 xl:flex items-center justify-center absolute top-2 right-0 xl:relative z-1">
              <Image
                src={raga}
                objectFit="contain"
                alt="Hero"
                className="max-w-[220px] xl:max-w-[600px] opacity-60 xl:opacity-100"
              />
            </div>
          </div>
        </div>
      </main>
      <section className="flex flex-col gap-12 items-center justify-center px-10 xl:px-0 py-20 xl:py-32 relative">
        <Image alt="valigia" src={valigia} width={200} height={200}  className="absolute -top-28 left-20 rotate-45 flex xl:hidden"/>
        <Image alt="valigia" src={valigia} width={200} height={200}  className="absolute -top-24 left-20 rotate-45 hidden xl:flex"/>
        <div className="flex gap-1 xl:gap-3" ref={ref}>
          {navigazioneWords.map((w, i) => (
            <motion.h3
              className="uppercase font-semibold text-[20px] xl:text-2xl hidden xl:block"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 2,
                delay: i / 10,
              }}
              key={i}
            >
              {w}{" "}
            </motion.h3>
          ))}
          <motion.h3  
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x:0, opacity: 1 } : { opacity: 1 }} 
            transition={ {delay: 0.3, duration: 2.5, type: "spring", bounce: 0.2} }

            className="xl:hidden block text-center">
            Un viaggio oltre la navigazione
          </motion.h3>
        </div>
        <div className="w-full flex items-center justify-center">
          <Carousel className="w-full max-w-[80%]">
            <CarouselContent className="-ml-1">
              {photoNav.map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-1">
                    <div className="flex flex-col gap-6 items-center">
                      <Image
                        src={_.image}
                        width={450}
                        height={450}
                        alt="Hero"
                        className="aspect-square"
                      />
                      <div className="flex flex-col items-center">
                      <span className="text-xl font-semibold">
                        Giorno {index + 1}
                      </span>
                      <p className="text-3xl font-semibold">{_.title}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="flex flex-col pb-20">
        <div className="flex flex-col xl:flex-row gap-20 items-center justify-center text-center pb-28">
          <h4 className="leading-tight">
            La vacanza che <br /> ti può dare
          </h4>
          <div className="hidden xl:flex gap-10">
            <motion.div
              initial={{ x:"-100vw", opacity: 0 }}
              animate={inView ? { x:0, opacity: 1 } : { x:0, opacity: 1 }}
              transition={ {delay: 0.3, duration: 1, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/benessere.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Benessere</p>
            </motion.div>
            <motion.div
              initial={{ x:"-100vw", opacity: 0 }}
              animate={inView ? { x:0, opacity: 1 } : { x:0, opacity: 1 }}
              transition={ {delay: 0.3, duration: 1.2, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/esperienza.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Esperienza</p>
            </motion.div>
            <motion.div
              initial={{ x:"-100vw", opacity: 0 }}
              animate={inView ? { x:0, opacity: 1 } : { x:0, opacity: 1 }}
              transition={ {delay: 0.3, duration: 1.5, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/emozione.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Emozione</p>
            </motion.div>
            <motion.div
              initial={{ x:"-100vw", opacity: 0 }}
              animate={inView ? { x:0, opacity: 1 } : { x:0, opacity: 1 }}
              transition={ {delay: 0.3, duration: 1.7, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/rinascita.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Rinascita</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 xl:hidden gap-10">
            <motion.div
                 initial={{ x:0, opacity: 1 }}
                 animate={inView ? { x:"-100vw", opacity: 0 } : { opacity: 1 }}
              transition={ {delay: 0.3, duration: 0.75, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/benessere.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Benessere</p>
            </motion.div>
            <motion.div
                initial={{ x:0, opacity: 1 }}
                animate={inView ? { x:"-100vw", opacity: 0 } : { opacity: 1 }}
                transition={ {delay: 0.3, duration: 0.85, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/esperienza.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Esperienza</p>
            </motion.div>
            <motion.div
                initial={{ x:0, opacity: 1 }}
                animate={inView ? { x:"-100vw", opacity: 0 } : { opacity: 1 }}
                transition={ {delay: 0.3, duration: 0.95, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/emozione.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Emozione</p>
            </motion.div>
            <motion.div
               initial={{ x:0, opacity: 1 }}
               animate={inView ? { x:"-100vw", opacity: 0 } : { opacity: 1 }}
               transition={ {delay: 0.3, duration: 1, type: "spring", bounce: 0.2} }

              className="flex flex-col items-center text-center justify-center"
            >
              <div className="bg-[url(../assets/rinascita.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat shadow-md rounded-full"></div>
              <p className="capitalize font-semibold">Rinascita</p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-center gap-16 px-10 xl:px-0 relative">
          <div className="flex flex-col text-left xl:w-1/3 gap-5 items-start justify-center relative">
            <h3>Il viaggio</h3>
            <p>
              La Bodyhack Experience è molto più di una crociera. È un viaggio
              energizzante che abbraccia il benessere psicofisico.
            </p>
            <p>
              <b>Workout dinamici:</b> Mantieniti attivo con sessioni di
              allenamento pensate per tutti i livelli di fitness.
            </p>
            <p>
              <b>Mindfulness all&apos;aperto:</b> Ritrova la tua pace interiore
              con sessioni di mindfulness a bordo nave o nei luoghi di interesse
              che esploreremo.
            </p>
            <p>
              <b>Workshop su Alimentazione Sana:</b> Impara i segreti di una
              dieta equilibrata che nutre corpo e mente.
            </p>
            <p>
              <b>Esplorazioni Culturali targate Bodyhack:</b> Scopri la storia,
              l&apos;arte e la cultura delle meravigliose città mediterranee con
              un focus sull&apos;empowerment e il benessere.
            </p>
            <p>
              <b>Eventi e giochi di gruppo:</b> Metti alla prova il tuo ingegno
              nella nostra caccia al tesoro, sfida le tue abilità nei vari
              giochi e crea nuove amicizie.
            </p>

            <button
              onClick={() => openWhatsapp()}
              className="rounded-full bg-[#ef5d28] text-white px-5 py-4 text-xl"
            >
              Contattaci ora
            </button>
            <Image alt="passaporto" src={passPort} width={150} height={150} className="absolute -bottom-20 right-0 flex xl:hidden"/>
          </div>
          <div className="flex flex-col text-left xl:w-2/4 gap-5">
            <Image alt="passaporto" src={passPort} width={200} height={200} className="absolute -bottom-10 right-20 hidden xl:flex"/>
            <h3>Perché sceglierci</h3>
            <div className="flex flex-col xl:flex-row items-start justify-center">
              <ul className="flex flex-col gap-5 flex-1">
                <li>
                  <p>
                    <b>Unicità:</b> Questo non è semplicemente un viaggio in
                    crociera, ma un&apos;esperienza su misura interamente
                    dedicata al benessere, pensata per chi desidera concentrarsi
                    su sé stesso in maniera profonda e significativa. Ogni
                    dettaglio del viaggio è stato studiato per contribuire ad
                    arricchire il corpo, la mente e lo spirito, trasformandolo
                    in un percorso unico dove il tempo si dilata per lasciare
                    spazio alla scoperta interiore e al rinnovamento fisico.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Dinamicità:</b> La Bodyhack Experience è l&apos;ideale
                    per chi cerca non solo il piacere dell&apos;esplorazione
                    geografica, ma anche l&apos;opportunità di dedicarsi a se
                    stessi. È un invito ad abbracciare una varietà di esperienze
                    che armonizzano il desiderio di avventura con
                    l&apos;esigenza di star bene. Che siate appassionati di
                    viaggi o in cerca di un rinnovamento personale, la nostra
                    proposta si adatta a soddisfare qualsiasi bisogno o
                    desiderio.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Completo:</b> La nostra esperienza unisce in maniera
                    impeccabile momenti di relax profondo, arricchimenti
                    culturali, attività fisiche bilanciate e un approccio sano
                    all’alimentazione.{" "}
                    <b>
                      Con la Bodyhack Experience, vi imbarcherete in un percorso
                      che vi trasformerà, aprendovi le porte a nuove prospettive
                      di vita e offrendovi gli strumenti per vivere al meglio
                      ogni giorno.
                    </b>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 items-center justify-center my-20 relative">
        <Image alt="fotocamera" src={fotocamera} width={130} height={130}  className="absolute -top-40 left-20 -rotate-45 flex xl:hidden"/>
        <Image alt="fotocamera" src={fotocamera} width={200} height={200}  className="absolute -top-20 left-20 -rotate-45 hidden xl:flex"/>
        <h3>Cosa ti aspetta</h3>
        <Carousel className="w-3/4">
          <CarouselContent className="-ml-1">
            {itinerary.map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <div className="flex flex-col items-center">
                    <Image
                      src={_.image}
                      width={650}
                      height={250}
                      alt="Hero"
                      className="aspect-[4/3] object-cover"
                    />
                    {/* <span className="text-2xl font-semibold">
                          Giorno {index + 1}
                        </span> */}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className=" h-[60vh]">
        <iframe
          width="100%"
          height="100%"
          className="aspect-video"
          src="https://www.youtube.com/embed/g3D6p4peqIU?si=CD0SuicEXsR4p2kN&amp;controls=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* <Video src={getStarted} className="h-full" /> */}
      </section>
      <section className="flex flex-col gap-20 items-center justify-center my-20">
        <div className="w-[90%] xl:w-2/3 rounded-xl border-8 border-[#ef5d28] flex flex-col gap-10 xl:flex-row items-center justify-between p-5 xl:px-10 xl:py-20 mt-10">
          <div className="flex flex-col text-black text-center gap-5 lx:text-left  pt-8 xl:pt-0">
            <div className="flex flex-col">
              <p>28 Sett. - 5 Ott. 2024 da Napoli</p>
              <p>29 Sett. - 6 Ott. 2024 da Livorno</p>
            </div>
            <div className="flex items-center gap-3 xl:gap-5 text-white bg-[#ef5d28] rounded-full px-8 py-4 shadow-xl cursor-pointer" onClick={() => openWhatsapp()}>
              <h2
                className="text-3xl xl:text-[50px] underline"
                
              >
                Prenota ora!
              </h2>
              <Image src={whatsapp}  alt="whatsapp" objectFit="cover" width={60} className="h-auto hidden xl:block" />
              <Image src={whatsapp}  alt="whatsapp" objectFit="cover" width={40} className="h-auto block xl:hidden" />

            </div>
            <div className="flex flex-col">
              <p className="text-sm">*Disponibilità di pagamento rateizzato.</p>
              <p className="text-sm">*posti limitati</p>
            </div>
          </div>
          <div className="p-5 border-4 border-green-700 rounded-xl flex flex-col gap-4 items-center justify-center text-black aspect-video w-full xl:w-fit">
            <p>A partire da</p>
            <h3>1.330 € </h3>
            <p className="text-sm">p.p. su base doppia</p>
          </div>
        </div>
      </section>
      <footer class="flex flex-col items-center justify-center">
        <div class="flex flex-col justify-center items-center gap-5 py-7 w-full bg-[#3b5da7]">
          <Image
            alt="logo"
            class="img-fluid"
            src="https://bodyhack.live/wp-content/uploads/2024/03/Logo-Experience-White.png"
            width={350}
            height={72}
          />
          <div class="flex items-center justify-center gap-5">
            <a
              target="_blank"
              class="social-icon"
              href="https://www.facebook.com/profile.php?id=100095451280257"
            >
              <Image
                src="https://bodyhack.live/wp-content/uploads/2024/02/full-m2H7N4N4b1K9b1Z5.png"
                alt="facebook"
                width={40}
                height={40}
              />
            </a>
            <a
              target="_blank"
              class="social-icon"
              href="https://instagram.com/bodyhackchallenge?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr"
            >
              <Image
                src="https://bodyhack.live/wp-content/uploads/2024/02/toppng.com-instagram-logo-white-4500x4500-1.png"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <div class="flex flex-col xl:flex-row gap-10 xl:gap-0 justify-between items-center p-7 w-full bg-[#03143e] text-white">
          <div class="flex-1">
            <p class="mb-0 text-sm">
              © Copyright BodyHACK CHALLENGE. All Rights Reserved.
              <br />
              È un prodotto di AdAstra Revolution Srl - P.IVA 04729610271 -
              Sede legale: Via Luigi Mariutto 74, Mirano (VE) 30035
              info@bodyhack.live - Pec: adastrarevolutionsrl@pec.it
            </p>
          </div>
          <div class="flex-1 flex flex-col xl:flex-row gap-5 justify-center items-center">
            <a
              target="_blank"
              href="https://www.iubenda.com/privacy-policy/93345464"
            >
              Privacy policy
            </a>
            <a
              target="_blank"
              href="https://www.iubenda.com/privacy-policy/93345464"
            >
              Cookie policy
            </a>
            <a href="#" class="iubenda-cs-preferences-link">
              Preferenze Cookie
            </a>
            <a
              target="_blank"
              href="<?php echo get_home_url();?>/termini-duso-e-condizioni-generali-di-vendita/"
            >
              Termini & Condizioni
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

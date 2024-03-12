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
import { Card, CardContent } from "@/components/ui/card";
import Video from "next-video";
import getStarted from "/videos/0001-0240.mp4";
import { motion } from "framer-motion";
import raga from "../assets/raga.png";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: { opacity: 0, pathLength: 0, strokeLength: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    pathLength: 1,
    strokeLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const itinerary = [
    {
      image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_0881-scaled.jpeg'
    },
   {
    image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_4209.jpeg'
   },
   {image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7322-scaled.jpeg'},
   {image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_7473-scaled.jpeg'},
   {image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_8532-scaled.jpeg'},
   {image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_8764.jpeg'},
   {image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_8770.jpeg'},
   {image: 'https://bodyhack.live/wp-content/uploads/2024/03/IMG_8771.jpeg'}
  ];
  return (
    <>
      <main className={`flex min-h-screen h-screen flex-col items-center justify-start px-3 xl:px-24 py-16 bg-[url('../assets/exp_sfondo.png')] bg-center bg-cover bg-no-repeat`}>
        <Header />
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-full relative">
            <div className="flex flex-col items-start justify-center flex-1 gap-4 text-white z-40">
              <h4 className="uppercase font-semibold text-[20px] xl:text-2xl ">benvenuti a bordo</h4>
              <h1 className="text-[50px] xl:text-[80px] capitalize font-semibold leading-tight">
                bodyhack <br /> experience
              </h1>
              <p className="text-xl">
                Imbarcati con noi per una crociera unica nel suo genere, a bordo della magnifica nave MSC Grandiosa.
              </p> 
              <p className="text-xl">
                La Bodyhack Experience trasforma il tuo viaggio nel Mediterraneo in un&apos;avventura indimenticabile.
              </p>
            </div>
            <div className="flex-1 xl:flex items-center justify-center absolute -top-2 -right-8 xl:relative z-1">
              <Image
                src={raga}
                objectFit="contain"
                alt="Hero"
                className="max-w-[230px] xl:max-w-[600px] opacity-60 xl:opacity-100"
              />
              
            </div>
          </div>
        </div>
      </main>
      <section className="flex flex-col gap-12 items-center justify-center px-10 xl:px-0 py-20 xl:py-32">
        <h3 className="uppercase font-semibold leading-tight text-center">
          Un viaggio oltre la navigazione
        </h3>
        <div className="w-full flex items-center justify-center">
          <Carousel className="w-full max-w-[80%]">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/5"
                >
                  <div className="p-1">
                      <div className="flex flex-col gap-6 items-center">
                        <Image
                          src="https://bodyhack.live/wp-content/uploads/2024/02/Immagini-pilastriCommunity-quadrsts.jpg"
                          width={250}
                          height={250}
                          alt="Hero"
                        />
                        <span className="text-2xl font-semibold">
                          Giorno {index + 1}
                        </span>
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
            Il viaggio che <br /> ti può dare
          </h4>
          <div className="grid grid-cols-2 xl:flex gap-10">
            <div className="flex flex-col items-center text-center justify-center">
              <div className="bg-[url(https://puoy.travel/wp-content/uploads/2023/11/circle01-1.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat"></div>
              <p className="capitalize font-semibold">Profondità</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="bg-[url(https://puoy.travel/wp-content/uploads/2023/11/circle02-1.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat"></div>
              <p className="capitalize font-semibold">Scoperta</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="bg-[url(https://puoy.travel/wp-content/uploads/2023/11/circle03-1.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat"></div>
              <p className="capitalize font-semibold">Unicità</p>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <div className="bg-[url(https://puoy.travel/wp-content/uploads/2023/11/circle04-1.png)] w-[100px] h-[100px] bg-center bg-cover bg-no-repeat"></div>
              <p className="capitalize font-semibold">Potenza</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-center gap-16 px-10 xl:px-0">
          <div className="flex flex-col text-left xl:w-1/3 gap-5 items-start justify-center">
            <h3>Il viaggio</h3>
            <p>
              La Bodyhack Experience non è una semplice crociera. È un viaggio energizzante che abbraccia il benessere psicofisico.
            </p>
            <p><b>Workout dinamici:</b> Mantieniti attivo con sessioni di allenamento pensate per tutti i livelli di fitness.</p>
            <p>
              <b>Mindfulness all&apos;aperto:</b> Ritrova la tua pace interiore con sessioni di mindfulness a bordo nave o nei luoghi di interesse che esploreremo.
            </p>
            <p>
              <b>Workshop su Alimentazione Sana:</b> Impara i segreti di una dieta equilibrata che nutre corpo e mente.
            </p>
            <p><b>Esplorazioni Culturali targate Bodyhack:</b> Scopri la storia, l&apos;arte e la cultura delle meravigliose città mediterranee con un focus sull&apos;empowerment e il benessere.</p>
            <p><b>Eventi e giochi di gruppo:</b> Metti alla prova il tuo ingegno nella nostra caccia al tesoro, sfida le tue abilità nei vari giochi e crea nuove amicizie.</p>
            
            <button className="rounded-full bg-[#ef5d28] text-white px-5 py-4 text-xl">
              Contattaci ora
            </button>
          </div>
          <div className="flex flex-col text-left xl:w-2/4 gap-5">
            <h3>Perché sceglierci</h3>
            <div className="flex flex-col xl:flex-row items-start justify-center">
              <ul className="flex flex-col gap-5 flex-1">
                <li>
                  <p><b>Unicità:</b> Questo non è semplicemente un viaggio in crociera, ma un&apos;esperienza su misura interamente dedicata al benessere, pensata per chi desidera concentrarsi su sé stesso in maniera profonda e significativa. Ogni dettaglio del viaggio è stato studiato per contribuire ad arricchire il corpo, la mente e lo spirito, trasformandolo in un percorso unico dove il tempo si dilata per lasciare spazio alla scoperta interiore e al rinnovamento fisico.</p>
                </li>
                <li>
                  <p>
                    <b>Dinamicità:</b> La Bodyhack Experience è l&apos;ideale per chi cerca non solo il piacere dell&apos;esplorazione geografica, ma anche l&apos;opportunità di dedicarsi a se stessi. È un invito ad abbracciare una varietà di esperienze che armonizzano il desiderio di avventura con l&apos;esigenza di star bene. Che siate appassionati di viaggi o in cerca di un rinnovamento personale, la nostra proposta si adatta a soddisfare qualsiasi bisogno o desiderio.
                  </p>
                </li>
                <li>
                  <p><b>Completo:</b> La nostra esperienza unisce in maniera impeccabile momenti di relax profondo, arricchimenti culturali, attività fisiche bilanciate e un approccio sano all’alimentazione. Con la Bodyhack Experience, vi imbarcherete in un percorso che vi trasformerà, aprendovi le porte a nuove prospettive di vita e offrendovi gli strumenti per vivere al meglio ogni giorno.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" h-[60vh]">
        <iframe width="100%" height="100%" className="aspect-video" src="https://www.youtube.com/embed/WoUbeNSB4SE?si=h1u2BMNoWbmJPBoU&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <Video src={getStarted} className="h-full" /> */}
      </section>
      <section className="flex flex-col gap-20 items-center justify-center my-20">
        <h3>Cosa ti aspetta</h3>
        <Carousel className="w-2/3">
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
                          width={350}
                          height={250}
                          alt="Hero"
                          className="aspect-square object-cover"
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
        <div className="w-[90%] xl:w-2/3 rounded-xl bg-[#ef5d28] flex flex-col gap-10 xl:flex-row items-center justify-between p-5 xl:px-10 xl:py-20 mt-10">
          <div className="flex flex-col text-white text-center lx:text-left  pt-8 xl:pt-0">
            <p>28 Sett. - 5 Ott. 2024 da Napoli</p>
            <p>29 Sett. - 6 Ott. 2024 da Livorno</p>
            <h2 className="xl:text-[70px] cursor-pointer">Prenota ora!</h2>
            <p className="text-sm">*Disponibilità di pagamento rateizzato.</p>
            <p className="text-sm">*posti limitati</p>
          </div>
          <div className="p-5 bg-green-700 rounded-xl flex flex-col items-center justify-center text-white aspect-video w-full xl:w-fit">
            <p>Per persona a partire da</p>
            <h3>1.330 €</h3>
          </div>
        </div>
      </section>
    </>
  );
}

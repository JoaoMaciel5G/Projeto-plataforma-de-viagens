interface Props{
  image: StaticImageData,
  alt: string,
  locale: string,
  value: number
}

import Form from "./components/Form";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Image, { StaticImageData } from "next/image";
import images from "./assets/images_tours/images";

export function ImagesTours({image, alt, locale, value}: Props){
  return(
    <div>
        <div className="group overflow-hidden rounded-lg relative">
          <Image src={image} alt={alt} className="transition-transform hover:contrast-50 scale-100 hover:scale-105"/>
          <button className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 hover:bg-blue-700 uppercase bg-amber-500 text-zinc-50 rounded-full text-sm tracking-wider px-9 py-3 hidden group-hover:block">Learn More</button>
        </div>
        <div className="flex justify-between my-7">
          <div>
              <span className="text-zinc-950 font-sans text-2xl hover:text-amber-500 cursor-pointer">{locale}</span>
          </div>
          <div>
              <span className="text-amber-500 font-sans text-2xl">from ${value}</span>
          </div>
        </div>
    </div>
  )
}
export default function Home() {
  const {image1, image2, image3, image4, image5, image6} = images

  return (
    <main>
      <Header/>
      <NavBar/>
      <section className="relative flex justify-around bg-[url('./assets/swiper-slide-1.jpg')] bg-cover bg-no-repeat bg-center pt-40 pb-36">
        <div className="w-4/12 flex flex-col justify-center max-lg:w-4/5">
          <div>
            <h2 className="text-zinc-50 uppercase text-3xl py-8 tracking-wider lg:text-5xl">Hundreds of Amazing Destinations</h2>
          </div>
          <div>
            <p className="text-zinc-50 font-extralight font-sans py-6 lg:text-lg">We offer a variety of destinations to travel to, ranging from exotic to some extreme ones. They include very popular countries and cities like Paris, Rio de Janeiro, Cairo and a lot of others.</p>
          </div>
          <div>
            <button className="border-2 rounded-full tracking-wider uppercase text-base text-zinc-50 px-14 py-3 hover:bg-amber-500 hover:border-amber-500">
              Learn More
            </button>
          </div>
        </div>
        <div className="max-lg:absolute max-lg:top-[40rem] max-lg:right-6 max-lg:left-6 max-sm:top-[42rem]">
          <Form/>
        </div>
      </section>
      <section className="max-lg:mt-[60rem] text-center">
        <div className="flex justify-between mt-56 mb-28">
          <div>
            <h2 className="text-5xl uppercase ml-40 tracking-wider">our best tours</h2>
          </div>
          <div>
            <button className="bg-amber-500 text-xl text-zinc-50 rounded-full px-10 py-4 uppercase tracking-wider hover:bg-blue-700 mr-3">view all tours</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 ml-4 mr-4">
            <ImagesTours image={image1} alt="Imagem Paris France" locale="Paris, France" value={280}/>
            <ImagesTours image={image2} alt="Imagem USA Boston" locale="USA, Boston" value={480}/>
            <ImagesTours image={image3} alt="Imagem Italy Venice" locale="Italy, Venice" value={350}/>
            <ImagesTours image={image4} alt="Imagem Spain Benidorm" locale="Spain, Benidorm" value={350}/>
            <ImagesTours image={image5} alt="Imagem Egypt Sharm El Sheikh" locale="Egypt, Sharm El Sheikh" value={520}/>
            <ImagesTours image={image6} alt="Imagem UK, London" locale="UK, London" value={600}/>
        </div>
      </section>
    </main>
  )
}

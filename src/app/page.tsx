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
        <div className="overflow-hidden  rounded-lg relative">
          <Image src={image} alt={alt} className="transition-transform hover:contrast-50 scale-100 hover:scale-105"/>
          <button className="absolute top-36 z-10 left-44 hover:bg-blue-700 uppercase bg-amber-500 text-zinc-50 rounded-full text-sm tracking-wider px-9 py-3">Learn More</button>
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
      <section className="relative flex justify-around bg-[url('./assets/swiper-slide-1.jpg')] bg-cover bg-no-repeat bg-center pt-40 pb-40">
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
    </main>
  )
}

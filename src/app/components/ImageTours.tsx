import Image, { StaticImageData } from "next/image";

interface Props{
    image: StaticImageData,
    alt: string,
    locale: string,
    value: number
}

export default function ImagesTours({image, alt, locale, value}: Props){
    return(
      <div>
          <div className="group overflow-hidden rounded-lg relative">
            <Image src={image} alt={alt} className="transition-transform hover:contrast-50 scale-100 hover:scale-105 w-full"/>
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
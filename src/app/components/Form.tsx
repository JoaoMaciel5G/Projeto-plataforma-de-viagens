interface Props{
    children: React.ReactNode,
    id?: string
    className?: string
}

export function ContainerInputs({children, className}: Props){
    return(
        <div className={`flex flex-col mt-8 mb-3 w-full ${className}`}>
            {children}
        </div>
    )
}
export function Label({children, id}: Props){
    return(
        <label htmlFor={id} className="font-sans ml-5 text-zinc-500 text-sm">
            {children}
        </label>
    )
}
export function Select({children, id}: Props){
    return(
        <select id={id} className="w-full rounded-full px-5 py-4 outline-none font-sans">
            {children}
        </select>
    )
}

export default function Form(){
    return(
    <section className="lg:w-[35rem] bg-zinc-200 rounded-md">
        <form className="px-10 py-8 w-full">
          <div>
            <h2 className="text-2xl uppercase my-3">Find Your Tour</h2>
          </div>
          <ContainerInputs>
            <Label id="from">From</Label>
            <Select id="from">
              <option value="New York">New York</option>
              <option value="Lisbon">Lisbon</option>
              <option value="StockHolm">StockHolm</option>
            </Select>
          </ContainerInputs>
          <ContainerInputs>
            <Label id="to">To</Label>
            <Select id="to">
              <option value="Chicago">Chicago</option>
              <option value="Madrid">Madrid</option>
              <option value="Paris">Paris</option>
            </Select>
          </ContainerInputs>
          <div className="lg:flex lg:justify-around">
            <ContainerInputs className="lg:pr-2">
              <Label id="departDate">Depart Date</Label>
              <input type="text" id="departDate" placeholder="Choose the date" className="w-full rounded-full placeholder:text-zinc-950 font-sans text-zinc-950 px-5 py-4 outline-none"/>
            </ContainerInputs>
            <ContainerInputs className="lg:pl-2">
              <Label id="duration">Duration</Label>
              <Select id="duration">
                <option value="Any length">Any length</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
                <option value="4 Days">4 Days</option>
              </Select>
            </ContainerInputs>
          </div>
          <div className="lg:flex lg:justify-around">
            <ContainerInputs className="lg:pr-2">
              <Label id="adults">Adults</Label>
              <div className="relative flex items-center">
                <span className="absolute before:content-['-'] cursor-pointer text-5xl left-4 font-light text-amber-500 pb-3 hover:text-blue-700"></span>
                <input type="number" id="adults" placeholder="0" min={0} max={300} className="w-full text-center placeholder:text-zinc-950 font-sans rounded-full py-4 outline-none" readOnly/>
                <span className="absolute after:content-['+'] cursor-pointer text-5xl right-4 font-light text-amber-500 hover:text-blue-700"></span>
              </div>
            </ContainerInputs>
            <ContainerInputs className="lg:pl-2">
              <Label id="children">Children</Label>
              <div className="relative flex items-center">
                <span className="absolute before:content-['-'] cursor-pointer text-5xl left-4 font-light text-amber-500 pb-3 hover:text-blue-700"></span>
                <input type="number" id="children" placeholder="0" min={0} max={300} className="w-full placeholder:text-zinc-950 font-sans rounded-full py-4 outline-none text-center" readOnly/>
                <span className="absolute after:content-['+'] cursor-pointer text-5xl right-4 font-light text-amber-500 hover:text-blue-700"></span>
              </div>
            </ContainerInputs>
          </div>
          <div>
            <button className="my-5 hover:bg-blue-700 bg-amber-500 w-full rounded-full py-5 text-zinc-50 text-xl tracking-wider uppercase">Search Flight</button>
          </div>
        </form>
    </section>
    )
}
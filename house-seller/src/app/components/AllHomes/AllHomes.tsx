import Image from "next/image"
export default function AllHomes(){
    return(
      <div className="relative h-[10em] w-full">
        {/* Baggrundsbillede med mørk overlay */}
        <Image
          src="/Mask-Group.png"
          alt="account login baggrundsbilled af et hus"
          width={1700}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        {/* Tekst, der vises oven på billedet */}
        <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h2 className="text-5xl font-bold">Boliger til salg</h2>
        </article>
      </div>
    )
}
import Image from "next/image";
interface BannerProps{
    title: string
}

export default function Banner({ title }: BannerProps) {
    return (
        <div className="relative h-[10em] w-full">
            <Image
              src="/Mask-Group.png"
              alt="baggrund"
              width={1700}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
                {title} {/* Bruger den prop, du sender som title */}
            </h2>
        </div>
    );
}

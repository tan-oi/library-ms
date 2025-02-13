import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "./BookCoverSvg";


type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface BCover {
    variant? : BookCoverVariant;
    className? : string;
    coverColor : string;
    coverImage : string;
}

export default function BookCover({
    variant = "regular", 
    className,
    coverColor = "#012B48",
    coverImage = "https://placehold.co/400x600.png"
} : BCover ) {
    return (
        <>
            <div className={cn("relative transistion-all duration-300",
            variantStyles[variant], className)}>
                <BookCoverSvg coverColor={coverColor} />
            
            <div className="absolute z-10" style={{left : "12%", width : "87.5%", height: "88%"}}>
                 <Image src={coverImage} alt="Book Cover" fill className="rounded-sm w-full" />
            </div>
            </div>
        </>
    )
}
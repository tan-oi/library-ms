import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function BookCard( {id, title, genre, color, cover, isLoanedBook = false} : Book ) {
    return (
        <>
          <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
            <Link href={`/books/${id}`} className={cn(isLoanedBook && "w-full flex flex-col items-center")}>
                <BookCover coverColor={color} coverImage={cover} />
            </Link>


            <div className={cn('mt-4', !isLoanedBook && "xs:max-w-40 max-w-28")}>
                <p className="book-title">{title}</p>
                <p className="book-genre">{genre}</p>
            </div>

            {isLoanedBook && (
                <div className="mt-3 w-full">
                        <div className="book-loaned">
                            <Calendar className="size-6" color="white"/>
                        <p className="text-light-100">11 days left to return</p>
                            </div>
                        <Button className="book-btn text-white">Download Receipts</Button>
                </div>
            )}
            </li>  
        </>
    )
}
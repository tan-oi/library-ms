"use client"
import { cn } from "@/lib/utils";
import { BookOpenText,Book } from 'lucide-react';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathName = usePathname();
    return (
        <header className="my-10 flex justify-between gap-5 items-center">
            <Link href={"/"}>
                <BookOpenText className="size-10" color="white"/>
            </Link>

            <ul className="flex items-center gap-8">    
                <li>
                    <Link href={"/library"} className={cn("text-base cursor-pointer capitalize", pathName === "/libary" ? "text-light-200" : "text-light-100")}>Library</Link>
                </li>
            </ul>
        </header>
    )
}
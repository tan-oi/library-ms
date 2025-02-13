import { BookCard } from "./BookCard";

interface BList {
  title: string;
  containerClassName?: string;
  books: Book[];
}

export default function BookList({ title, containerClassName, books }: BList) {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">Popular Books</h2>


      <ul className="book-list">
            {books.map((book) => (
                <BookCard key={book.title} {...book}/>
            ))}
      </ul>
    </section>
  );
}

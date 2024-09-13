import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const books = [
  {
    bookName: "Echoes of Time",
    publishYear: 1955,
    author: "J.K. Rowling",
    available: false,
  },
  {
    bookName: "The Silent Dawn",
    publishYear: 2002,
    author: "Charles Dickens",
    available: false,
  },
  {
    bookName: "The Silent Dawn",
    publishYear: 1924,
    author: "Alice Smith",
    available: false,
  },
  {
    bookName: "The Silent Dawn",
    publishYear: 2012,
    author: "Charles Dickens",
    available: false,
  },
  {
    bookName: "Journey to the Unknown",
    publishYear: 1950,
    author: "Charles Dickens",
    available: false,
  },
  {
    bookName: "Whispers of the Night",
    publishYear: 1976,
    author: "George Orwell",
    available: false,
  },
  {
    bookName: "The Forgotten Realm",
    publishYear: 1941,
    author: "Charles Dickens",
    available: true,
  },
  {
    bookName: "The Secret Garden",
    publishYear: 1925,
    author: "Ernest Hemingway",
    available: true,
  },
  {
    bookName: "Whispers of the Night",
    publishYear: 1933,
    author: "J.K. Rowling",
    available: false,
  },
  {
    bookName: "Mystery of the Lost City",
    publishYear: 1968,
    author: "Ernest Hemingway",
    available: false,
  },
];

export default function TableMain() {
  return (
    <div className="h-4/5 max-h-4/5 overflow-y-scroll my-14 ">

    <Table >
      <TableHeader>
        <TableRow>
          <TableHead>Book</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Publish Year</TableHead>
          <TableHead className="text-right">Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow
            className="cursor-pointer h-14"
            onClick={() => console.log(book.bookName)}
          >
            <TableCell className="font-medium">{book.author}</TableCell>
            <TableCell>{book.bookName}</TableCell>
            <TableCell>{book.publishYear}</TableCell>
            <TableCell
              className={` text-right ${
                book.available ? "text-green-500" : "text-red-500"
              }`}
            >
              {book.available ? "Available" : "Not Available"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{books.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  );
}

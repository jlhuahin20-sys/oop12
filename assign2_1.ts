type Book = [title: string, isBorrowed: boolean];

const books: Book[] = [
    ["The Great Gatsby", true],
    ["To Kill a Mockingbird", false],
    ["1984", true],
    ["Pride and Prejudice", false],
    ["The Catcher in the Rye", false]
];
let availableCount = 0;
let borrowedCount = 0;
for (const [title, isBorrowed] of books) {
    if (isBorrowed) {
    console.log(`${title} - Status: Borrowed`);
    borrowedCount++;
    } else {
    console.log(`${title} - Status: Available`);
    availableCount++;
    }
}
console.log(`Total Available Books: ${availableCount}`);
console.log(`Total Borrowed Books: ${borrowedCount}`);
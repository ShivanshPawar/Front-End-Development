// the code is for a library system that allows adding books, listing them, and changing their read status
// ans displaying their information

class Library {
    constructor() {
        this.books = [];
    }

    addBooks(books) {
        this.books.push(...books);
    }

    listAllBooks() {
        this.books.forEach(function (books, idx) {
            console.log(`${idx + 1}) ${books.name}`);
        });
    }
}

class Books {
    constructor(name, isbn, price, author) {
        this.name = name;
        this.isbn = isbn;
        this.price = price
        this.author = author;
        this.readStatus = false;
    }
    changeReadStatus() {
        this.readStatus = !this.readStatus;
    }
    info() {
        console.log(
            `${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you ${this.readStatus ? "have" : "have not"} read it. and is available for ${this.price} rupees on amazon.`
        );
    }


}


let cbLibrary = new Library();
let book1 = new Books("The Alchemist by Paulo Coelho", "32150987098", 500, "Paulo Coelho");
let book2 = new Books("The Power of Now by Eckhart Tolle", "2487934527", 600, "Eckhart Tolle");
let book3 = new Books("Atomic Habits by James Clear", "4273498732", 700, "James Clear");


cbLibrary.addBooks([book1, book2, book3]);


// Terminal Outputs 
console.log(`Welcome to the CB Library!`);
console.log(`${cbLibrary.books.length} Books Available in the library`);
cbLibrary.listAllBooks();
book1.changeReadStatus();
book1.info();
book2.info();
book3.info();







// class MobileShop{
//     constructor(){
//         this.mobiles = []
//     }

//     addMobiles(mobile){
//         this.mobiles.push(mobile);
//     }

//     listAllMobiles(){
//         this.mobiles.forEach(function(mb, idx){
//             console.log(`${idx +1}) ${mb.name} - ${mb.brand} - ${mb.model} - ${mb.price} rupees`);
//         })
//     }

// }

// class Mobile{
//     constructor(name,model,price,brand){
//         this.name = name;
//         this.model = model;
//         this.price = price;
//         this.brand = brand;
//     }

//     info(){
//         console.log(`The ${this.name} is a ${this.brand} mobile, model ${this.model},priced at ${this.price} rupees.`);
//     }
// }

// class Sims{
//     constructor(name,number){
//         this.name = name;
//         this.number = number;
//     }
    


// }






// let mbShop = new MobileShop();
// let mb = new Mobile("Galaxy s23 ultra", "Samsung", "s23 ultra" , 150000 );

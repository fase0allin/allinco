let catalog = [
    {
        name: "baju1",
        price: 10000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju2",
        price: 15000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju3",
        price: 25000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju4",
        price: 35000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
];

const parentElement = document.getElementById("container");
let cart = [
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
    {
        name: "baju5",
        price: 45000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "",
        quantity: 0,
    },
];

for (let i = 0; i < catalog.length; i++) {
    const card = document.createElement("div");
    card.classList.add("test");
    parentElement.appendChild(card);
}

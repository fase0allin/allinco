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

for (let i = 0; i < catalog.length; i++) {
    const card = document.createElement("div");
    card.classList.add("test");
    parentElement.appendChild(card);
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Retrieve form input values
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const linkInput = document.getElementById('link');
  
    // Create a new object and assign input values to properties

    const newObj = {
        name: nameInput.value,
        price: parseInt(priceInput.value),
        image: linkInput.value,
        hover: "",
        quantity: 0,
    }
  
    // Push the object to the array
    catalog.push(newObj);
  
    // Reset the form
    document.getElementById('myForm').reset();
  
    // Perform any additional operations with the array of objects
    console.log(catalog);
  }
let catalog = [
    {
        id: 1,
        name: "White Shirt",
        price: 190000,
        image: "https://oxfoord.id/wp-content/uploads/2022/10/SHIRT-13A-NEW-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2022/10/light-blue1-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 2,
        name: "Flanel jedar",
        price: 150000,
        image: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-lapalmas-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-lapalmas-4b-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 3,
        name: "Black Jeans",
        price: 259000,
        image: "https://oxfoord.id/wp-content/uploads/2021/09/jeans-black-1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2021/09/jeans-black-2-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 4,
        name: "Navy Jeans",
        price: 185000,
        image: "https://oxfoord.id/wp-content/uploads/2022/08/jeans-navy-1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2022/08/jeans-navy-3-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 5,
        name: "Casual T-Shirt",
        price: 195000,
        image: "https://oxfoord.id/wp-content/uploads/2023/05/POLO-1A-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/05/POLO-1B-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 6,
        name: "Black Elegant Shirt",
        price: 190000,
        image: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-7a-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/04/Shirt-7b-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 7,
        name: "Simple Pant",
        price: 190000,
        image: "https://oxfoord.id/wp-content/uploads/2023/03/Pants-3a-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/03/Pants-3c-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 8,
        name: "Why Jeans",
        price: 450000,
        image: "https://oxfoord.id/wp-content/uploads/2023/05/jeans-bluefade1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/05/jeans-bluefade2-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
    {
        id: 9,
        name: "Flanel Zeus",
        price: 380000,
        image: "https://oxfoord.id/wp-content/uploads/2023/03/pine-green-1-247x296.jpg",
        hover: "https://oxfoord.id/wp-content/uploads/2023/03/pine-green-2-247x296.jpg",
        quantity: 1,
        rating: 0,
    },
];

let cart = [];

function render() {
    const catalogDOM = document.getElementById("containerDOM");
    catalogDOM.innerHTML = ""; //reset
    for (let i = 0; i < catalog.length; i++) {
        catalogDOM.innerHTML += createItem(catalog[i]);
    }

    console.log(localStorage.rating);
    // let rating = JSON.parse(localStorage.getItem("rating"));
    if (localStorage.rating === undefined) {
        localStorage.rating = JSON.stringify([]);
        let arr = [];
        for (let i = 0; i < catalog.length; i++) {
            arr.push({ id: catalog[i].id, rating: [] });
        }
        localStorage.rating = JSON.stringify(arr);
    }

    if (localStorage.points === undefined) {
        localStorage.points = 0;
    }
}

function renderCart() {
    const cartDOM = document.getElementById("cartListDOM");
    cartListDOM.innerHTML = "";

    uniqueIds = [];
    cart = cart.filter((obj) => {
        if (!uniqueIds.includes(obj.id)) {
            uniqueIds.push(obj.id);
            return true;
        }
        return false;
    });

    for (let i = 0; i < cart.length; i++) {
        cartDOM.innerHTML += createItemCart(cart[i], i);
    }
}

function renderReview() {
    const reviewDOM = document.getElementById("reviewDOM");
    reviewDOM.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        reviewDOM.innerHTML += createItemReview(cart[i], i);
    }
}

function calculateRating(item) {
    // console.log(item);
    if (item.length === 0) {
        return 0;
    } else {
        let total = 0;
        for (let i = 0; i < item.length; i++) {
            total += +item[i];
        }

        total = total / item.length;
        return total.toFixed(1);
    }
}
function createItem(item) {
    let ratingItem = JSON.parse(localStorage.getItem("rating"));

    // console.log(ratingItem);
    let temp;
    if (ratingItem === null) {
        temp = 0;
    } else {
        ratingItem = ratingItem.filter((a) => a.id === item.id);
        console.log(ratingItem[0].rating);
        temp = calculateRating(ratingItem[0].rating);
    }
    // console.log(temp);

    return `<div class="test" id=${item.id}>
        <img src=${item.image} alt=${item.name}>
        <div class="name">
            <p>${item.name} |</p>
            <img src="./assets/stars.png">
            <p>${temp}</p>
        </div>
        <p>Harga : Rp. ${item.price},00</p>
        <div class="cart">
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
    </div>`;
}

function createItemCart(item, index) {
    return `
    <div class="cartItem">
        <img
            src="${item.image}"
            class="imgCart"
        />
        <div class="cartInfo">
            <h4>${item.name}</h4>
            <p>price : ${item.price},00</p>
            <div class="quantity">
                <p>quantity</p>
                <button onclick="substractQuantity(${index})">-</button>
                <p id="quantity${index}">${item.quantity}</p>
                <button onclick="addQuantity(${index})">+</button>
            </div>
            <button onclick="deleteItem(${item.id})">delete item</button>
        </div>
    </div>
    `;
}

function createItemReview(item, index) {
    return `
    <div class="cartItem">
        <img
            src="${item.image}"
            class="imgCart"
        />
        <div class="cartInfo">
            <h4>${item.name}</h4>
            <p>price : ${item.price},00</p>
            <div class="quantity">
                <input
                    id="${item.id}"
                    type="number"
                    placeholder="Input Rating 1-5"
                    style="width: 120px"
                    min="1"
                    max="5"
                />
            </div>
        </div>
    </div>
    `;
}

const windowCart = document.getElementById("cartdiv");
const windowReview = document.getElementById("reviewdiv");
windowCart.classList.add("displayNone");
windowReview.classList.add("displayNone");

function addQuantity(id) {
    let quantityId = document.getElementById(`quantity${id}`);
    cart[id].quantity++;
    quantityId.innerHTML = cart[id].quantity;
    renderBayar();
}

function substractQuantity(id) {
    let quantityId = document.getElementById(`quantity${id}`);
    if (cart[id].quantity > 1) {
        cart[id].quantity--;
    }
    quantityId.innerHTML = cart[id].quantity;
    renderBayar();
}

function addToCart(item) {
    let tempArr = catalog.filter((a) => a.id === item);
    cart.push(tempArr[0]);
    // console.log(cart);
    renderBayar();
}

function deleteItem(item) {
    cart = cart.filter((a) => a.id !== item);
    renderCart();
    renderBayar();
}

function toggleCart() {
    windowCart.classList.remove("displayNone");
    renderCart();
}

function clickClose() {
    windowCart.classList.add("displayNone");
}

function closeReview(e) {
    e.preventDefault();
    let obj = JSON.parse(localStorage.rating);
    const form = document.querySelector("#reviewForm");
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
        const inputId = +input.id;
        const inputValue = input.value;
        console.log(inputId);
        // Add the input value to the object using the input ID as the key
        const test = obj.find((item) => item.id === inputId);
        const quantity = cart.find((item) => item.id === inputId);
        if (input.value > 0 && input.value <= 5) {
            for (let i = 0; i < quantity.quantity; i++) {
                test.rating.push(inputValue);
            }
        }
    });

    localStorage.rating = JSON.stringify(obj);
    windowReview.classList.add("displayNone");
    cart = [];
    render();
}

function tambahPoints(point) {
    let number = +localStorage.points;
    let pointsDOM = document.getElementById("points");
    number += Math.floor(point / 1000);
    // console.log(pointsDOM);
    localStorage.points = number;
    pointsDOM.innerHTML = `<p style="text-align: center">Kamu mendapatkan ${Math.floor(
        point / 1000
    )} points</p>`;
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const linkInput = document.getElementById("link");

    const newObj = {
        id: catalog.length + 1,
        name: nameInput.value,
        price: parseInt(priceInput.value),
        image: linkInput.value,
        hover: linkInput.value,
        quantity: 1,
        rating: 0,
    };

    catalog.unshift(newObj);
    console.log(catalog);
    let rating = JSON.parse(localStorage.getItem("rating"));
    rating.push({ id: catalog.length, rating: [] });
    console.log(rating);
    localStorage.rating = JSON.stringify(rating);
    render();
}

function renderBayar() {
    let harga = 0;

    let bayar = document.querySelector(".pembayaran p");
    // console.log(cart);

    if (cart.length > 0) {
        // console.log(cart.price, cart.quantity);
        for (let i = 0; i < cart.length; i++) {
            harga += cart[i].price * cart[i].quantity;
        }
        bayar.innerHTML = `<p>Total Harga : ${harga}</p>`;
    } else {
        bayar.innerHTML = `<p>Total Harga : ${0}</p>`;
    }
    tambahPoints(harga);
}

function openReview() {
    windowCart.classList.add("displayNone");
    if (cart.length === 0) {
        return;
    }
    windowReview.classList.remove("displayNone");
    renderBayar();
    renderReview();
}
render();

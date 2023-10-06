import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>;
    </header>
  );
}

function Menu() {
  // let pizzaData = [];
  let pl = pizzaData.length;
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      {pl > 0 ? (
        <>
          <p>
            Italian cuisine.All organic ,all delicious
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        "items finished"
      )}
    </main>
  );
}

//function component
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // console.log(props);

  // if (pizzaObj.soldOut) return <p>soldout</p>;
  return (
    <li className={`pizza ${pizzaObj.soldOut? 'sold-out':''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut  ? "SOLD OUT" : pizzaObj.price}</span>

        {/* {pizzaObj.soldOut  ? (
          <span>SOLD OUT</span>

        ):(
          <span>{pizzaObj.price}</span>

        )} */}
      </div>

    </li>
  )
}


function Order({ closeHour }) {
  return (
    <>
      <div className="order">
        <p>(we'r open until {closeHour}.00 .come visit our shop now.)</p>
      </div>
    </>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour > openHour && hour < closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>(we are closed.open from {openHour}.00)</p>
      )}

      <button className="btn">Order Now</button>
    </footer>
  );
}

//react version18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

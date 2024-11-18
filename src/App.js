import "./index.css"
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
			<h1>
				FAST REACT PIZZA CO.
			</h1>
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			<ul className="pizzas">
				{pizzaData.map((pizza, index) => {
					return <Pizza {...pizza} key={index} />
				})}
			</ul>
		</main>
	);
}

function Pizza(pizza) {

	return (
		<li className={`pizza ${pizza.soldOut ? "sold-out": ""}`}>
			<img src={pizza.photoName} alt={pizza.name}/>
			<div>
				<h3>{pizza.name}</h3>
				<p>{pizza.ingredients}</p>
				<span>{pizza.soldOut ? "SOLD OUT":pizza.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour < closeHour;

	return (
		<footer className="footer">
			{
				isOpen ? (<Order closeHour={closeHour} openHour={openHour}/>):
				(<p>
					We are happy to welcome you between {openHour}:00 and {closeHour}:00.
				</p>)
			}
		</footer>
	);
}

function Order({ closeHour, openHour }) {
	return (
		<div className="order">
			<p>
				Wer are open from {openHour}:00 until {closeHour}:00. Come visit us or order online.
			</p>
			<Button />
		</div>
	);
}

function Button() {
	return (
		<button className="btn">
			Order!
		</button>
	);
}

export default App;
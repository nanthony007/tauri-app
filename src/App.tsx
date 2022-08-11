import { invoke } from "@tauri-apps/api/tauri";
import { Component, createSignal } from "solid-js";
import "./App.scss";
import Counter from "./Counter";

const App: Component = () => {
	const [counter, setCounter] = createSignal(0);
	setInterval(setCounter, 1000, (c: number) => c + 1);

	async function handleClick() {
		const result = await invoke("return_string", {
			word: "World",
		});

		alert(result);
	}

	return (
		<>
			<div>
				<h1 class="header">{counter()}</h1>
				<button onClick={handleClick}>Click me</button>
			</div>
			<Counter />
		</>
	);
};

export default App;

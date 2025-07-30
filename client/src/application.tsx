import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const Application: Component = () => {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<h1>Vite + Solid</h1>
			<div>
				<button
					onClick={() => {
						setCount((count) => {
							return count + 1;
						});
					}}
				>
					count is {count()}
				</button>
			</div>
		</>
	);
};

export { Application };

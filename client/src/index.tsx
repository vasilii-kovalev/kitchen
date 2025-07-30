/* @refresh reload */
import { render } from "solid-js/web";
import { Application } from "./application.tsx";

const root = document.getElementById("root");

if (root !== null) {
	render(() => {
		return <Application />;
	}, root);
}

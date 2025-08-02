/* @refresh reload */
// oxlint-disable-next-line no-unassigned-import
import "virtual:uno.css";
import { render } from "solid-js/web";
import { Application } from "./application.tsx";

const root = document.getElementById("root");

if (root !== null) {
	render(() => {
		return <Application />;
	}, root);
}

import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { createElement } from "react";

const root = document.getElementById("root")!;
hydrateRoot(root, createElement(App));

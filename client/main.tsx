import "./global.css";

import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  // Get or create the root, handling HMR properly
  const root = (window as any).__reactRoot || createRoot(rootElement);
  (window as any).__reactRoot = root;
  root.render(<App />);
}

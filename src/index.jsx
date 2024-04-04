import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";

// Import index.scss to bundle
import "./index.scss"

// Main Component
const SThompsonPortfolio = () => {
    return (
        <Container fluid style={{ border: "solid 1px red" }}>
            <MainView />
        </Container>
    );
};

// Finds root of the app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render app in the root DOM element
root.render(<SThompsonPortfolio />);

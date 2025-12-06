import { Dock, Navbar, Welcome, Home } from "#components";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Contact, Finder, Resume, Safari, Terminal } from "#windows";
import TextWindow from "#windows/Text";
import ImageWindow from "#windows/Image";
gsap.registerPlugin(Draggable);
const App = () => {
	return (
		<main>
			<Navbar />
			<Welcome />
			<Dock />
			<Terminal />
			<Safari />
			<Resume />
			<Finder />
			<TextWindow />
			<ImageWindow />
			<Contact />
			<Home />
		</main>
	);
};

export default App;

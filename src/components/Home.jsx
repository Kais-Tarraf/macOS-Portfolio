import { locations } from "#constants";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Draggable from "gsap/Draggable";
import gsap from "gsap";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
const projects = locations.work?.children ?? [];
const Home = () => {
	const { setActiveLocation } = useLocationStore();
	const { openWindow } = useWindowStore();
	const handleOpenProjectFinder = (project) => {
		setActiveLocation(project);
		openWindow("finder");
	};
	useGSAP(() => {
		Draggable.create(".folder");
	}, []);
	return (
		<dection id="home">
			{projects.map((project) => (
				<li
					key={project.id}
					className={clsx("group folder", project.windowPosition)}
					onClick={() => handleOpenProjectFinder(project)}
				>
					<img src="/images/folder.png" alt={project.name} />
					<p className="text-center w-15 h-5 overflow-clip">{project.name}</p>
				</li>
			))}
		</dection>
	);
};

export default Home;

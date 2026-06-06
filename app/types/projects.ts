export type Project = {
	id: string;
	name: string;
	tags: string[];
	thumbnail: string;
	screenshots: string[];
	shortDescription: string;
	longDescription: string[];
};

export const projects: Project[] = [
	{
		id: 'iterova',
		name: 'Task and finance planning tool "Iterova"',
		tags: ['Team project', 'Web', 'Next.js', 'Hackaton', 'Innovation Expo'],
		thumbnail: '/projects/iterova/thumb.png',
		screenshots: [
			'/projects/iterova/1.png',
			'/projects/iterova/2.png',
			'/projects/iterova/3.png',
			'/projects/iterova/4.png',
			'/projects/iterova/5.png',
			'/projects/iterova/6.jpg',
		],
		shortDescription: 'A Tool for planning project task and managing finances.',
		longDescription: [
			'This is a team project with a group of students. Our goal was to create a simplier and easy to use tool for planning tasks in iterations. This tool is for teams that follow Agile/Scrum metodology.',
			'Our tool differs from the market, because we combine task and finance planning. With our tool you can see how much eact task costs. At the end of sprints or months, you can see how your project is performing financially.',
			'With this project we joined KTU StartUp Space community where they helped us with the project idea and organized interviews with multiple companies representatives.',
			'Also we participated in multiple events: Startups hackaton "TechChamp 2026" and Innovation expo "Technorama 2026". In these events we had an opportunity to present our project to a big public audience.',
			'Technologies:',
			'• Next.js',
			'• PostgreSQL',
			'• BetterAuth',
			'• Drizzle',
		],
	},
	{
		id: 'predictf1',
		name: 'F1 Prediction App',
		tags: ['Personal project', 'Web', 'Next.js', 'GraphQl'],
		thumbnail: '/projects/predictf1/thumb.png',
		screenshots: [
			'/projects/predictf1/thumb.png',
			'/projects/predictf1/1.png',
			'/projects/predictf1/2.png',
			'/projects/predictf1/3.png',
		],
		shortDescription: 'An app for predicting upcoming results of Formula 1 racing',
		longDescription: [
			'This is my personal project where I wanted to combine my interest in F1 and learning Next.js. This was also my first time writing GraphQl querries and configuring authetification with BetterAuth.',
			'I worked on this project with a KTU Career mentor where he guided me what features I should implement and what to fix.',
			'For this project I gathered F1 results data from jolpica-f1. This data ranges from 1950 to current year. It has results of every race, quallyfing and practice sessions of F1.',
			'In my project I showcase every season race and driver results, driver and team standings. Also there is a "Upcoming Races" page, where I show the upcoming and past races of the current season.',
			'Project is work in progress, I still want to add predictions where you will be able to predict upcoming F1 results and compete with your friends.',
			'Technologies',
			'• Next.js',
			'• GraphQL',
			'• BetterAuth',
			'• jolpica-f1 (data)',
		],
	},
	{
		id: 'retroboard',
		name: 'Retroboard',
		tags: ['Team project', 'Internship', 'Web', 'React', 'Java', 'WebSockets'],
		thumbnail: '/projects/retroboard/thumb.png',
		screenshots: ['/projects/retroboard/thumb.png', '/projects/retroboard/1.png', '/projects/retroboard/2.png'],
		shortDescription: 'Team retrospective tool',
		longDescription: [
			'This project is from my intership at Cognizant Sourcery Academy for Full-Stack. It was a team of interns creating a project from scratch with a help of coordinating mentor.',
			'We opperated as a real team. We had daily standups, sprint plannings, retrospectives and demo presentations at the end of the sprints',
			'We created a retrospective tool for teams. At the end of the sprint, team can discuss what went wrong or good during the sprint.',
			'During the last month of intership we decided to implement WebSockets, so the team can see cards appearing in real time without the need of reloading the page. Me personally added a feature where you can see all active team members cursors.',
			'Technologies:',
			'• Java Spring Boot',
			'• React',
			'• Firebase Authentification',
			'• WebSockets',
		],
	},
];

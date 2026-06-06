'use client';

import AddressBar from '@/app/components/AddressBar';
import DesktopIcon from '@/app/components/DekstopIcon';
import ProjectsExplorer from '@/app/components/projects/ProjectsExplorer';
import ProjectsMenuBar from '@/app/components/ProjectsMenuBar';
import ProjectsToolBar from '@/app/components/ProjectsToolBar';
import Resume from '@/app/components/Resume';
import ResumeMenuBar from '@/app/components/ResumeMenuBar';
import ResumeToolBar from '@/app/components/ResumeToolBar';
import Taskbar from '@/app/components/Taskbar';
import Window from '@/app/components/Window';
import { Project } from '@/app/types/projects';
import Image from 'next/image';
import { useState } from 'react';

export type WindowId = 'resume' | 'projects';

export interface WindowState {
	open: boolean;
	minimized: boolean;
	active: boolean;
	zIndex: number;
	animationState: 'open' | 'closing' | 'minimizing';
}

export type WindowsState = Record<WindowId, WindowState>;

export default function Home() {
	const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
	const [resumeZoomed, setResumeZoomed] = useState(true);
	const [resumeMaximized, setResumeMaximized] = useState(false);
	const [projectsMaximized, setProjectsMaximized] = useState(false);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [windows, setWindows] = useState<WindowsState>({
		resume: {
			open: false,
			minimized: false,
			active: false,
			zIndex: 20,
			animationState: 'open',
		},
		projects: {
			open: false,
			minimized: false,
			active: false,
			zIndex: 20,
			animationState: 'open',
		},
	});

	const [topZ, setTopZ] = useState(20);

	const openWindow = (id: WindowId) => {
		setTopZ((currentZ) => {
			const newZ = currentZ + 1;

			setWindows((prev) => {
				const updated = { ...prev };

				(Object.keys(updated) as WindowId[]).forEach((key) => {
					updated[key] = {
						...updated[key],
						active: false,
					};
				});

				updated[id] = {
					...updated[id],
					open: true,
					minimized: false,
					active: true,
					zIndex: newZ,
				};

				return updated;
			});

			return newZ;
		});
	};

	const closeWindow = (id: WindowId) => {
		setWindows((prev) => ({ ...prev, [id]: { ...prev[id], animationState: 'closing' } }));
		setTimeout(() => {
			setWindows((prev) => ({ ...prev, [id]: { ...prev[id], open: false, active: false, animationState: 'open' } }));
		}, 250);
	};

	const minimizeWindow = (id: WindowId) => {
		setWindows((prev) => ({ ...prev, [id]: { ...prev[id], animationState: 'minimizing' } }));
		setTimeout(() => {
			setWindows((prev) => ({
				...prev,
				[id]: { ...prev[id], minimized: true, active: false, animationState: 'open' },
			}));
		}, 250);
	};

	const focusWindow = (id: WindowId) => {
		setTopZ((currentZ) => {
			const newZ = currentZ + 1;

			setActiveWindow(id, newZ);

			return newZ;
		});
	};

	const setActiveWindow = (id: WindowId, zIndex: number) => {
		setWindows((prev) => {
			const updated = { ...prev };

			(Object.keys(updated) as WindowId[]).forEach((key) => {
				updated[key] = {
					...updated[key],
					active: key === id,
				};
			});

			updated[id] = {
				...updated[id],
				active: true,
				minimized: false,
				zIndex,
			};

			return updated;
		});
	};

	const toggleTaskbarWindow = (id: WindowId) => {
		const window = windows[id];

		if (window.minimized) {
			focusWindow(id);
			return;
		}

		if (window.active) {
			minimizeWindow(id);
			return;
		}

		focusWindow(id);
	};

	return (
		<main className='relative h-screen w-screen overflow-hidden' onClick={() => setSelectedIcon(null)}>
			<Image
				src='/windows_xp.jpg'
				alt='Background'
				fill
				priority
				className='object-cover pointer-events-none select-none'
			/>
			<div className='absolute left-2 top-2 z-10 grid auto-rows-max grid-cols-1 gap-4'>
				<DesktopIcon
					label='My Projects'
					icon='/folder.png'
					selected={selectedIcon === 'projects'}
					onSelect={() => setSelectedIcon('projects')}
					onOpen={() => openWindow('projects')}
				/>

				<DesktopIcon
					label='My Resume'
					icon='/resume.webp'
					selected={selectedIcon === 'resume'}
					onSelect={() => setSelectedIcon('resume')}
					onOpen={() => openWindow('resume')}
				/>
			</div>
			<Taskbar windows={windows} onWindowClick={toggleTaskbarWindow} />
			{windows.resume.open && !windows.resume.minimized && (
				<Window
					title='My Resume'
					menuBar={
						<ResumeMenuBar
							onSave={() => {
								const a = document.createElement('a');
								a.href = '/Titas_Rimkevicius_CV.pdf';
								a.download = 'Titas_Rimkevicius_CV.pdf';
								a.click();
							}}
							onExit={() => closeWindow('resume')}
							onMinimize={() => minimizeWindow('resume')}
							onMaximize={() => setResumeMaximized((m) => !m)}
						/>
					}
					toolBar={<ResumeToolBar zoomed={resumeZoomed} onZoom={() => setResumeZoomed((z) => !z)} />}
					defaultX={150}
					defaultY={40}
					defaultWidth={700}
					defaultHeight={850}
					zIndex={windows.resume.zIndex}
					isActive={windows.resume.active}
					onFocus={() => focusWindow('resume')}
					onClose={() => closeWindow('resume')}
					onMinimize={() => minimizeWindow('resume')}
					isMaximized={resumeMaximized}
					onMaximize={() => setResumeMaximized((m) => !m)}
					animationState={windows.resume.animationState}
				>
					<Resume zoomed={resumeZoomed} onZoomToggle={() => setResumeZoomed((z) => !z)} />
				</Window>
			)}
			{windows.projects.open && !windows.projects.minimized && (
				<Window
					title='My Projects'
					menuBar={
						<ProjectsMenuBar
							onExit={() => closeWindow('projects')}
							onMinimize={() => minimizeWindow('projects')}
							onMaximize={() => setProjectsMaximized((m) => !m)}
						/>
					}
					toolBar={<ProjectsToolBar onBack={() => setSelectedProject(null)} canGoBack={!!selectedProject} />}
					addressBar={<AddressBar projectTitle={selectedProject?.id} />}
					defaultX={250}
					defaultY={20}
					defaultWidth={1400}
					defaultHeight={850}
					zIndex={windows.projects.zIndex}
					isActive={windows.projects.active}
					onFocus={() => focusWindow('projects')}
					onClose={() => closeWindow('projects')}
					onMinimize={() => minimizeWindow('projects')}
					isMaximized={projectsMaximized}
					onMaximize={() => setProjectsMaximized((m) => !m)}
					animationState={windows.projects.animationState}
				>
					<ProjectsExplorer selected={selectedProject} onSelect={setSelectedProject} />
				</Window>
			)}
		</main>
	);
}

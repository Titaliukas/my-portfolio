import Taskbar from '@/app/components/Taskbar';
import Window from '@/app/components/Window';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='relative h-screen w-screen overflow-hidden'>
			<Image
				src='/windows_xp.jpg'
				alt='Background'
				fill
				priority
				className='object-cover pointer-events-none select-none'
			/>
			<Taskbar />
			<Window title='My Resume' defaultX={150} defaultY={80} defaultWidth={700} defaultHeight={500}>
				<h1>Hello World</h1>
			</Window>
		</main>
	);
}

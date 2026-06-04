import Image from 'next/image';

interface TaskbarItemProps {
	name: string;
	isActive?: boolean;
	onClick?: () => void;
}

export default function TaskbarItem({ name, isActive = false, onClick }: TaskbarItemProps) {
	return (
		<button
			onClick={onClick}
			className={`taskbar-item font-xp flex items-center gap-1 ${isActive ? 'taskbar-item-active' : ''}`}
		>
			{name === 'My Resume' ? (
				<Image src='/resume.webp' alt='Close' width={16} height={16} draggable={false} />
			) : (
				<Image src='/folder.png' alt='Close' width={16} height={16} draggable={false} />
			)}
			{name}
		</button>
	);
}

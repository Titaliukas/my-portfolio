interface TaskbarItemProps {
	name: string;
	isActive?: boolean;
	onClick?: () => void;
}

export default function TaskbarItem({ name, isActive = false, onClick }: TaskbarItemProps) {
	return (
		<button onClick={onClick} className={`taskbar-item font-xp ${isActive ? 'taskbar-item-active' : ''}`}>
			{name}
		</button>
	);
}

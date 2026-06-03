interface TaskbarItemProps {
	name: string;
	isActive?: boolean;
}

export default function TaskbarItem({ name, isActive = false }: TaskbarItemProps) {
	return <button className={`taskbar-item font-xp ${isActive ? 'taskbar-item-active' : ''}`}>{name}</button>;
}

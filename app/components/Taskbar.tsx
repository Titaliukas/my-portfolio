import Clock from '@/app/components/Clock';
import TaskbarItem from '@/app/components/TaskbarItem';
import Image from 'next/image';

export default function Taskbar() {
	return (
		<div className='fixed bottom-0 left-0 z-50 flex h-[30px] w-full items-center bg-[linear-gradient(to_bottom,#306CDF_0%,#478EF0_7%,#2460E3_18%,#1F59E0_52%,#2564E3_88%,#14377D_100%)]'>
			{/* Start Button */}
			<button className='h-[30px] w-[90px] shrink-0'>
				<Image
					src='/start-button.png'
					alt='Start'
					width={90}
					height={30}
					className='h-full w-full hover:brightness-110'
				/>
			</button>

			{/* Open Windows */}
			<div className='flex flex-1 px-1'>
				<TaskbarItem name={'My Projects'} />
				<TaskbarItem name={'My Resume'} isActive={true} />
			</div>

			{/* System Tray */}
			<div className='font-xp flex h-full min-w-[120px] items-center justify-end bg-[linear-gradient(to_left,#109EF460_88%,#89DFFF60_93%,#2FB1E480_97%,#00000090_99%),linear-gradient(to_bottom,#006AC6_0%,#1DB9FF_7%,#1198F0_18%,#0FABFD_89%,#0064C4_100%)]  px-3 text-xs text-white'>
				<Clock />
			</div>
		</div>
	);
}

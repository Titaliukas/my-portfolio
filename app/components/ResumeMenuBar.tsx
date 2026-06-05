import Image from 'next/image';

export default function ResumeMenuBar() {
	return (
		<div className='flex h-[22px] items-center gap-1 bg-[#EDEDED] text-[13px]'>
			{['File', 'View'].map((item) => (
				<button key={item} className='text-black px-2 py-[2px] hover:bg-[#316ac5] hover:text-white'>
					{item}
				</button>
			))}
			<div className='text-black px-2 opacity-20'>Help</div>
			<div className='ml-auto'>
				<Image src='/windows_flag.webp' alt='' width={40} height={20} />
			</div>
		</div>
	);
}

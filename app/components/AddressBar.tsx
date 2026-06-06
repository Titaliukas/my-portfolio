import Image from 'next/image';

export default function AddressBar({ url = '/myprojects', projectTitle }: { url?: string; projectTitle?: string }) {
	return (
		<div className='flex h-[26px] items-center gap-1 bg-[#EDEDED] px-1 border-b border-[#aca899]'>
			<span className='text-[12px] text-black px-1 opacity-50'>Address</span>
			<div className='flex flex-1 items-center border border-[#7f9db9] bg-white px-1 h-[22px]'>
				<Image src='/folder.png' alt='' width={16} height={16} />
				<span className='ml-1 flex-1 text-[12px] text-black'>
					{url}
					{projectTitle && `/` + projectTitle}
				</span>
			</div>
			<div className='flex items-center gap-1 border border-transparent h-[22px] px-2 text-[12px] text-black opacity-50'>
				<Image src='/go.webp' alt='Go' width={16} height={16} />
				Go
			</div>
		</div>
	);
}

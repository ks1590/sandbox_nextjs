import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export function Button({ className, ...props }: any) {
	return (
		// <button
		//   className={clsx(
		//     'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
		//     'bg-zinc-600 font-semibold text-zinc-100 hover:bg-zinc-400 active:bg-zinc-800 active:text-zinc-100/70',
		//     className
		//   )}
		//   {...props}
		// />
		<button className='btn rounded-md' {...props}>
			<FontAwesomeIcon
				icon={faPaperPlane}
				style={{
					fontSize: 'x-large',
					color: 'white',
					padding: '8px 16px',
				}}
			/>
		</button>
	);
}

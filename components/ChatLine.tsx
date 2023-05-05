import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
const BalancerWrapper = (props: any) => <Balancer {...props} />;

type ChatGPTAgent = 'user' | 'system' | 'assistant';

export interface ChatGPTMessage {
	role: ChatGPTAgent;
	content: string;
}

// loading placeholder animation for the chat line
export const LoadingChatLine = () => (
	<div className='flex min-w-full animate-pulse px-4 py-5 sm:px-6'>
		<div className='flex flex-grow space-x-3'>
			<div className='min-w-0 flex-1'>
				<p className='font-large text-xxl text-gray-900'>
					<a href='#' className='hover:underline'>
						AI
					</a>
				</p>
				<div className='space-y-4 pt-4'>
					<div className='grid grid-cols-3 gap-4'>
						<div className='col-span-2 h-2 rounded bg-zinc-500'></div>
						<div className='col-span-1 h-2 rounded bg-zinc-500'></div>
					</div>
					<div className='h-2 rounded bg-zinc-500'></div>
				</div>
			</div>
		</div>
	</div>
);

// util helper to convert new lines to <br /> tags
const convertNewLines = (text: string) =>
	text.split('\n').map((line, i) => (
		<span key={i}>
			{line}
			<br />
		</span>
	));

export function ChatLine({ role = 'assistant', content }: ChatGPTMessage) {
	if (!content) {
		return null;
	}
	const formatteMessage = convertNewLines(content);

	return (
		<div className={role != 'assistant' ? 'chat chat-end' : 'chat chat-start'}>
			<BalancerWrapper>
				<div className='chat chat-start'>
					<div className='chat-image avatar'>
						<div className='w-17 rounded-full'>
							<FontAwesomeIcon
								icon={faRobot}
								style={{
									fontSize: 'xx-large',
									color: 'gray',
									padding: '8px',
									marginTop: '8px',
								}}
							/>
						</div>
					</div>
					<div
						className={
							role != 'assistant'
								? 'chat-bubble chat-bubble-primary'
								: 'chat-bubble'
						}>
						<p className='font-large text-xxl text-gray-900'>
							<a href='#' className='hover:underline'>
								{role == 'assistant' ? 'AI' : 'You'}
							</a>
						</p>
						<p className='font-semibold text-white'>{formatteMessage}</p>
					</div>
				</div>
			</BalancerWrapper>
		</div>
	);
}

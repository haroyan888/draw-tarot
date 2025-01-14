import Draggable from 'react-draggable';

type props = {
	isShow: boolean,
	isReverse: boolean,
	imageFile: string,
};

function Tarot({ isShow, isReverse, imageFile }: props) {
	return (
		<Draggable
			disabled={isShow}
			bounds={"parent"}
		>
			<div className='w-40 h-[290px]'>
				{!isShow
					? <div className='w-full h-full bg-slate-500 rounded-md' />
					: <img className={(isReverse) ? "rotate-180" : ""} src={"/images/ws-tarots/" + imageFile} alt={imageFile} />}
			</div>
		</Draggable>);
}

export default Tarot;
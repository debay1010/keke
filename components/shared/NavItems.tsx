import {
	Bell,
	Bookmark,
	Gem,
	List,
	MessageCircle,
	MessageSquareText,
} from "lucide-react";
const NavItems = () => {
	return (
		// <div className="md:flex justify-center hidden items-center gap-3">
		<div className="flex justify-center  max-md:flex-col max-md:ml-0 max-md:items-start max-md: mt-4 items-center gap-3">
			<button
				className=" tooltip tooltip-bottom max-md:tooltip-right p-1 rounded-full border border-black "
				data-tip="Bookmark"
			>
				<Bookmark className="w-5 h-5 " color="#715ef6" fill="#715ef6" />
			</button>

			<button
				className="tooltip tooltip-bottom max-md:tooltip-right p-1 rounded-full border border-black "
				data-tip="Messages"
			>
				<MessageSquareText
					className="w-5 h-5 "
					color="#715ef6"
					fill="#715ef6"
				/>
			</button>

			<button
				className="tooltip tooltip-bottom max-md:tooltip-right p-1 rounded-full border border-black "
				data-tip="Notification"
			>
				<Bell className="w-5 h-5 " color="#715ef6" fill="#715ef6" />
			</button>
			<button
				className=" tooltip tooltip-bottom max-md:tooltip-right p-1 rounded-full border border-black "
				data-tip="Premiun Services"
			>
				<Gem className="w-5 h-5 " color="#715ef6" fill="#715ef6" />
			</button>

			<button
				className=" tooltip tooltip-bottom max-md:tooltip-right p-1 rounded-full border border-black"
				data-tip="My Adverts"
			>
				<List className="w-5 h-5 " color="#715ef6" fill="#715ef6" />
			</button>
		</div>
	);
};

export default NavItems;

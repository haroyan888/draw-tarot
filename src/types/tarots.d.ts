export type MajorArcanaTitle =
	| "death"
	| "judgement"
	| "justice"
	| "strength"
	| "temperance"
	| "the_chariot"
	| "the_devil"
	| "the_emperor"
	| "the_fool"
	| "the_hanged_man"
	| "the_hermit"
	| "the_hierophant"
	| "the_high_priestess"
	| "the_lovers"
	| "the_magician"
	| "the_moon"
	| "the_star"
	| "the_sun"
	| "the_tower"
	| "the_world"
	| "wheel_of_fortune";

export type MinorArcanaSuit = "swords" | "wands" | "pentacles" | "cups";

export type MinorArcanaValue =
	| "ace"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "king"
	| "queen"
	| "knight"
	| "page";

export type tarot = {
	imageFile: string;
	description: string;
	isRevers: boolean;
};

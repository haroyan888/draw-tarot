import {
	MinorArcanaSuit,
	MinorArcanaValue,
	MajorArcanaTitle,
} from "@/types/tarots";

function tarotType2FileName(
	arcana: "major" | "minor",
	title?: MajorArcanaTitle,
	suit?: MinorArcanaSuit,
	value?: MinorArcanaValue
) {
	switch (arcana) {
		case "major":
			if (!title) return "";
			return title + ".jpg";
		case "minor":
			if (!suit || !value) return "";
			// true: 数値, false: 人名もしくはace
			return !isNaN(Number(value))
				? value + "_" + suit + ".jpg"
				: value + "_of_" + suit + ".jpg";
	}
}

export default tarotType2FileName;

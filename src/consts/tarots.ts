import {
	tarot,
	MajorArcanaTitle,
	MinorArcanaSuit,
	MinorArcanaValue,
} from "@/types/tarots";
import tarotType2FileName from "@/utils/tarotType2FileName";

const tarots = {
	majorArcana: {
		death: "方向転換、運命（さだめ）、思いきれない、堂々巡り",
		judgement: "意識改革、復活、混乱、後悔",
		justice: "正当性、バランス、不正、矛盾",
		strength: "信念、忍耐、挫ける、依存",
		temperance: "平和的解決、柔軟性、事なかれ主義、節度がない",
		the_chariot: "野望、克服、空回り、独りよがり",
		the_devil: "本能、快楽主義、解放、断ち切る",
		the_emperor: "リーダーシップ、プライド、強引、空回り",
		the_empress: "母性、豊かさ、不仲、欠如",
		the_fool: "冒険心、可能性、空回り、怠ける",
		the_hanged_man: "忍耐、献身的、不自由、間違った視点",
		the_hermit: "内観、思慮深い、闇雲さ、閉じこもる",
		the_hierophant: "社交性、誠実、不道徳、無慈悲",
		the_high_priestess: "洞察力、直感力、情緒不安定、偏見",
		the_lovers: "共感、安心、違和感、気まぐれ",
		the_magician: "知性、はじまり、優柔不断、無計画",
		the_moon: "見えない敵、用心、徐々に好転、次第に落ち着く",
		the_star: "可能性、才能、停滞、期待はずれ",
		the_sun: "成果、解決、立場を失う、トラブル",
		the_tower: "浄化、葛藤、混乱、ショックな気持ち",
		the_world: "統合、最高地点への到達、不完全燃焼、行き詰り",
		wheel_of_fortune: "好転、チャンス到来、翻弄、悪いタイミング",
	},
	minorArcana: {
		suit: {
			swords: "情熱、行動力、男性性",
			cups: "感情、想像力、女性性",
			pentacles: "思考、情報、知性",
			wands: "お金、物質的価値、安定性",
		},
		value: {
			ace: "スタート、始まり",
			"2": "バランス、選択",
			"3": "発展、創造性",
			"4": "安定、現実",
			"5": "変化、チャレンジ",
			"6": "美、調和",
			"7": "神秘、探求",
			"8": "継続、力",
			"9": "精神性、リセット",
			"10": "完成、完結",
			king: "自信、権力",
			knight: "美しさ、行動力",
			page: "若さ、未熟",
			queen: "女性性、受容",
		},
	},
	generateTarotList: function (this, numOfTarots: number) {
		const tarots = JSON.parse(JSON.stringify(this));
		return [...Array(numOfTarots)].map<tarot>(() => {
			let fileName, description;
			if (Math.round(Math.random()) === 1) {
				const tarotTitle = Object.keys(tarots["majorArcana"])[
					Math.floor(Math.random() * 20)
				] as MajorArcanaTitle;
				fileName = tarotType2FileName("major", tarotTitle);
				description = tarots["majorArcana"][tarotTitle];
			} else {
				const tarotSuit = Object.keys(tarots["minorArcana"]["suit"])[
					Math.floor(Math.random() * 3)
				] as MinorArcanaSuit;
				const tarotValue = Object.keys(tarots["minorArcana"]["value"])[
					Math.floor(Math.random() * 13)
				] as MinorArcanaValue;
				fileName = tarotType2FileName(
					"minor",
					undefined,
					tarotSuit,
					tarotValue
				);
				description =
					tarotSuit +
					": " +
					tarots["minorArcana"]["suit"][tarotSuit] +
					"\n" +
					tarotValue +
					": " +
					tarots["minorArcana"]["value"][tarotValue];
			}
			return {
				imageFile: fileName,
				description: description,
				isRevers: Math.round(Math.random()) === 0,
			};
		});
	},
};

export default tarots;

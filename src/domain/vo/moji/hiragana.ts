export default interface Hiragana {
    jp: string
    c: string // 子音
    v: string // 母音
}

// hiragana map
export const hm = {
    aa: {jp: "あ", c: "a", v: "a"}, ai: {jp: "い", c: "a", v: "i"}, au: {jp: "う", c: "a", v: "u"}, ae: {jp: "え", c: "a", v: "e"}, ao: {jp: "お", c: "a", v: "o"},
    ka: {jp: "か", c: "k", v: "a"}, ki: {jp: "き", c: "k", v: "i"}, ku: {jp: "く", c: "k", v: "u"}, ke: {jp: "け", c: "k", v: "e"}, ko: {jp: "こ", c: "k", v: "o"},
    sa: {jp: "さ", c: "s", v: "a"}, si: {jp: "し", c: "s", v: "i"}, su: {jp: "す", c: "s", v: "u"}, se: {jp: "せ", c: "s", v: "e"}, so: {jp: "そ", c: "s", v: "o"},
    ta: {jp: "た", c: "t", v: "a"}, ti: {jp: "ち", c: "t", v: "i"}, tu: {jp: "つ", c: "t", v: "u"}, te: {jp: "て", c: "t", v: "e"}, to: {jp: "と", c: "t", v: "o"},
    na: {jp: "な", c: "n", v: "a"}, ni: {jp: "に", c: "n", v: "i"}, nu: {jp: "ぬ", c: "n", v: "u"}, ne: {jp: "ね", c: "n", v: "e"}, no: {jp: "の", c: "n", v: "o"},
    ha: {jp: "は", c: "h", v: "a"}, hi: {jp: "ひ", c: "h", v: "i"}, hu: {jp: "ふ", c: "h", v: "u"}, he: {jp: "へ", c: "h", v: "e"}, ho: {jp: "ほ", c: "h", v: "o"},
    ma: {jp: "ま", c: "m", v: "a"}, mi: {jp: "み", c: "m", v: "i"}, mu: {jp: "む", c: "m", v: "u"}, me: {jp: "め", c: "m", v: "e"}, mo: {jp: "も", c: "m", v: "o"},
    ya: {jp: "や", c: "y", v: "a"}, yu: {jp: "ゆ", c: "y", v: "u"}, yo: {jp: "よ", c: "y", v: "o"},
    ra: {jp: "ら", c: "r", v: "a"}, ri: {jp: "り", c: "r", v: "i"}, ru: {jp: "る", c: "r", v: "u"}, re: {jp: "れ", c: "r", v: "e"}, ro: {jp: "ろ", c: "r", v: "o"},
    wa: {jp: "わ", c: "w", v: "a"},
};

export const defaultHiragana: Hiragana = {
    jp: "",
    c: "",
    v: "",
};

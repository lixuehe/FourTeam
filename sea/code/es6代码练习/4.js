/*
var regex = new RegExp('xyz','i');
console.log(regex);

var regex2 = new RegExp(/xyz/i);
console.log(regex2);*/

/*
var s = '𠮷';
console.log(/^.$/u.test(s));
*/

/*
console.log(/\u{61}/u.test('a'));
console.log(/\u{20BB7}/u.test('𠮷'));*/

/*
console.log(/a{2}/.test('aa'));
console.log(/a{2}/u.test('aa'));
console.log(/𠮷{2}/.test('𠮷𠮷'));
console.log(/𠮷{2}/u.test('𠮷𠮷'));
*/
/*
const r1 = /hello/;
const r2 = /hello/u;

console.log(r1.unicode);
console.log(r2.unicode);

*/

/*
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
console.log(r1.exec(s));
console.log(r2.exec(s));

console.log(r1.exec(s));
console.log(r2.exec(s));

console.log(r1.exec(s));*/

/*
var s = 'aaa_aaa_a_';
var r = /a+_/y;

console.log(r.exec(s));
console.log(r.exec(s));
console.log(r.exec(s));*/

/*
const REGEX = /a/y;

REGEX.lastIndex = 2;

console.log(REGEX.exec('xaya'));

REGEX.lastIndex = 3;

const match = REGEX.exec('xaya');
console.log(match);
REGEX.lastIndex;
console.log(REGEX.exec('xaya'));

*/

// console.log(/b/y.exec('aba'));

/*
const REGEX = /a/gy;
console.log('aaaaaaasdfsdfsgfgaaaaaxa'.replace(REGEX,'-'));*/

// console.log('a1a2a3a4'.match(/a\d/gy));

/*
var r = /hello\d/gy;
console.log(r.sticky);

console.log(/abc/ig.flags);*/

// console.log(/foo.bar/.exec('foonbar').input);
// console.log(/foo.bar/s.test('foo\fbar'));

/*
console.log(/\d+(?=%)/.exec('100% of US presidents have been male'));
console.log(/\d+(?!%)/.exec('that’s all 44 of them'));*/

/*
const RE_DOLLAR_PRFEIX = /(?<=\$)foo/g;
console.log('$foo %foo foo'.replace(RE_DOLLAR_PRFEIX,'bar'));*/

/*
const regexGreekSymbol = /\p{Script=Greek}/u;
console.log(regexGreekSymbol.test('π'));*/

/*
const regex = /^\p{Decimal_Number}/u;
console.log(regex.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼'));*/

/*
const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
console.log(matchObj[1]+"-"+matchObj[2]+"-"+matchObj[3]);*/

/*
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
console.log('2015-01-01'.replace(re,'$<day>/$<month>/$<year>'));*/

/*
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;

a = '2015-01-02'.replace(re,(
    matched,
        capture1,
        capture2,
        capture3,
        position,
        S,
        groups
) => {
    let {day,month,year} = groups;
    return `${day}/${month}/${year}`;
});
console.log(a);*/


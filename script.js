let sentence = "The movies is not that bad,i like it";
//faire des recherche sur un mot 
let wordNot = sentence.search("not");
let wordbad = sentence.search("bad");
//les conditions


if(wordNot !== -1 && wordbad !== -1 && wordNot  < wordbad){
	let phrase = sentence.slice(0,wordNot) +  "good " + sentence.slice(wordbad + 3);
	console.log(phrase);
}else{
	console.log(sentence);
}



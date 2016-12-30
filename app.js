$('document').ready(function() {
	$('form#text').submit(function(event) {
		event.preventDefault();
		var text = $('textarea#user-text').val();
		totalWordCount(text);
		uniqueWordCount(text);
		avgWordLength(text);
		avgSentenceLength(text);
		$('dl.text-report').removeClass('hidden');
	});
});


function totalWordCount(text) {
	var counter = text.split(' ').length;
	$('dd.js-total-word-count').replaceWith(
		'<dd class="js-total-word-count">'
		+counter+
		'</dd>');
}

function uniqueWordCount(text) {
	var totalWords = text.toLowerCase().split(' ');
	var uniqueWords = [];
	for (var i = 0; i<totalWords.length; i++) {
		if ((totalWords[i] in uniqueWords) === false) {
			uniqueWords.push(totalWords[i])
		}
	};
	var counter = uniqueWords.length;
	$('dd.js-unique-word-count').replaceWith(
		'<dd class="js-unique-word-count">'
		+counter+
		'</dd>');
}

function avgWordLength(text) {
	var words = text.split(' ');
	var wordLengths = [];
	for (var i=0; i<words.length; i++) {
		wordLengths[i] = words[i].length;
	};
	var totalLength = 0;
	for (var x=0; x<wordLengths.length; x++) {
		totalLength += wordLengths[x]
	};
	var average = totalLength/words.length;
	$('dd.js-avg-word-length').replaceWith(
		'<dd class="js-avg-word-length">'
		+average+
		' characters</dd>');
}

function avgSentenceLength(text) {
	var sentences = text.replace('. ', '|').replace('! ', '|').replace('? ', '|').split('|');
	var sentenceLengths = [];
	for (var i=0; i<sentences.length; i++) {
		sentenceLengths[i] = sentences[i].split(' ').length;
	};
	var totalLength = 0;
	for (var x=0; x<sentenceLengths.length; x++) {
		totalLength += sentenceLengths[x]
	};
	var average = totalLength/sentences.length;
	$('dd.js-avg-sentence-length').replaceWith(
		'<dd class="js-avg-sentence-length">'
		+average+
		' words</dd>');
}







'use strict';

$('.js-btn').click(e => {
	generateJoke();
})

function generateJoke() {
	$.getJSON('https://icanhazdadjoke.com').then(renderJoke).catch(err);
}

function renderJoke(response) {
	const colors = ['f8a055','#ffdb5c', '#fa6e59'];               
	const rand = Math.floor(Math.random()*colors.length);
	
	$('.js-quote').html(`
		<span class="quotes">❝</span>
		<p>${response.joke}</p>
		<footer class="blockquote-footer">Someone funny from <cite title="Source Title">icanhazdadjoke</cite>
		`);
	$('.js-color').css('background-color', colors[rand]);
}
																								 
function err() {
	console.log('bummer!');
}        
  

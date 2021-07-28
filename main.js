
function openNav() {
	var $ = document.querySelector(".nav__mobile");
	var $$ = document.querySelector(".nav__overlay");
	$.style.transform = 'translateX(0)';
	$.style.transition = 'transform linear 0.2s';
	$$.style.display = 'block';
}
function closeNav() {
	var $ = document.querySelector(".nav__mobile");
	var $$ = document.querySelector(".nav__overlay");
	$.style.transform = 'translateX(-100%)'
	$$.style.display = 'none'
}
function toRegister() {
	var $ = document.querySelector(".container__register-form");
	var $$ = document.querySelector(".nav__overlay");
	$.style.display = "block"
	$$.style.display = 'block';
}
function toLogin() {
	// document.querySelector(".nav__mobile").style.display='none';
	var $ = document.querySelector(".container__login-form");
	var $$ = document.querySelector(".nav__overlay");
	$.style.display = "block";
	$$.style.display = 'block';	
}
function toClose() {
	var $$ = document.querySelector(".nav__overlay");
	var $ = document.querySelector(".container__login-form");
	var $$$ = document.querySelector(".container__register-form");
	$$.style.display = 'none';
	$.style.display = 'none';
	$$$.style.display = 'none';
}
function toChange() {
	var $ = document.querySelector(".container__login-form");
	var $$ = document.querySelector(".container__register-form");
	$.style.display =  'none';
	$$.style.display = 'block';
}
// Chuyển ảnh khi click


	

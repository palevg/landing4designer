(function(){

const langUA = document.getElementById("lang-ua"),
	langEN = document.getElementById('lang-en'),
	modal = document.getElementById("home"),
	modalbtn = document.getElementById("modal_btn"),
	languages = document.getElementById("langs"),
	closeModal0 = document.getElementById("mi-home"),
	closeModal1 = document.getElementById("mi-about"),
	closeModal2 = document.getElementById("mi-skills"),
	closeModal3 = document.getElementById("mi-portf"),
	closeModal4 = document.getElementById("mi-cont"),
	closeModal5 = document.getElementById("modal_close");

let	currentLang = "",
	active_mi = "mi-home",
	modalState = 0;

modalbtn.onclick = function () {
	modalState = 1;
  	modal.style.right = "0";
	languages.style.bottom = "100px";
  	modalbtn.style.top = "-50px";
	closeModal5.style.display = "block";
}

closeModal0.onclick = closeModal1.onclick = closeModal2.onclick = closeModal3.onclick = closeModal4.onclick = closeModal5.onclick = function () {
	if (modalState) {
		closeModal5.style.display = "none";
		languages.style.bottom = "-500px";
		modal.style.right = "500px";
		modalbtn.style.top = "70px";
	}
	modalState = 0;
}

function changeLang(i, first_load) {
	if (i == 1) {
		langUA.classList.add("active-lang");
		langUA.style = "color: #070707";
		langEN.classList.remove("active-lang");
		langEN.style = "color: #828282";
	} else {
		langEN.classList.add("active-lang");
		langEN.style = "color: #070707";
		langUA.classList.remove("active-lang");
		langUA.style = "color: #828282";
	}
	document.getElementById("mi-home").innerHTML = langs[i].mi_home;
	document.getElementById("mi-about").innerHTML = document.getElementById("about-h").innerHTML = langs[i].mi_about;
	document.getElementById("mi-skills").innerHTML = document.getElementById("skills-h").innerHTML = langs[i].mi_skills;
	document.getElementById("mi-portf").innerHTML = document.getElementById("portfolio-h").innerHTML = langs[i].mi_portf;
	document.getElementById("mi-cont").innerHTML = document.getElementById("contacts-h").innerHTML = langs[i].mi_cont;
	document.getElementById("fio").innerHTML = langs[i].fio;
	document.getElementById("info").innerHTML = langs[i].info;
	document.getElementById("about-p1").innerHTML = langs[i].about_p1;
	document.getElementById("about-p2").innerHTML = langs[i].about_p2;
	document.getElementById("about-p3").innerHTML = langs[i].about_p3;
	document.getElementById("skills-pre").innerHTML = langs[i].skills_pre;
	document.getElementsByClassName("footer-text")[0].innerHTML = langs[i].footer_text;
	document.getElementsByClassName("footer-button")[0].innerHTML = langs[i].footer_btn;
	document.getElementsByClassName("footer-social")[0].innerHTML = langs[i].footer_soc;
	if (!first_load) {
		if (i == 1) {
			currentLang = "UA";
			localStorage['siteLang'] = "UA";
		} else {
			currentLang = "EN";
			localStorage['siteLang'] = "EN";
		}
	}
}

// зчитування мови сайту, на якій він відображався востаннє, і присвоєння елементу відповідного класу
if (localStorage['siteLang']) {
	currentLang = localStorage['siteLang'];
	if (currentLang == "UA") {
		if (!langUA.classList.contains("active-lang")) {
			changeLang(1, true)
		}
	} else {
		if (!langEN.classList.contains("active-lang")) {
			changeLang(0, true)
		}
	}
}

// зміна мови
langUA.addEventListener('click', function() {
	if (currentLang != "UA") {
		changeLang(1, false)
	}
})

langEN.addEventListener('click', function() {
	if (currentLang != "EN") {
		changeLang(0, false)
	}
})

// зміна кольору для активного пункта головного меню
document.getElementById("home").addEventListener('click', function(e) {
	if (e.target.getAttribute('id') != active_mi) {
		let new_mi = document.getElementById(e.target.getAttribute('id'));
		new_mi.classList.add("color-black");
		new_mi.style = "color: #070707";
		new_mi = document.getElementById(active_mi);
		new_mi.classList.remove("color-black");
		new_mi.style = "color: #828282";
		active_mi = e.target.getAttribute('id');
	}
})

})()
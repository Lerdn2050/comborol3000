
function newbl() {
	const conteiner = document.querySelector('.conteiner');
	const newblock = document.createElement('div');
	newblock.classList.add('newblock');
	/*newblock.insertAdjacentText("afterbegin", document.getElementById("input").value);*/
	conteiner.appendChild(newblock)

}
function newTsicl() {
	const conteiner = document.querySelector('.conteiner');
	const newblock = document.createElement('div');
	newblock.classList.add('textcontent02');
	newblock.insertAdjacentText("beforeend", "enter the characteristics of the combination element");
	/*newblock.insertAdjacentText("afterbegin", document.getElementById("input").value);*/
	conteiner.appendChild(newblock)

	const conteiner1 = document.querySelector('.conteiner');
	const newblock1 = document.createElement('div');
	newblock1.classList.add('textcontent03');
	newblock1.insertAdjacentText("beforeend", "name");
	conteiner1.appendChild(newblock1)

	const conteiner2 = document.querySelector('.conteiner');
	const newblock2 = document.createElement('input');
	newblock2.id = 'input001';
	newblock2.classList.add('signup-text-input');
	newblock2.name = 'a';
	conteiner2.appendChild(newblock2)

	const conteiner3 = document.querySelector('.conteiner');
	const newblock3 = document.createElement('div');
	newblock3.classList.add('textcontent04');
	newblock3.insertAdjacentText("beforeend", "tags");
	conteiner3.appendChild(newblock3)

	const conteiner4 = document.querySelector('.conteiner');
	const newblock4 = document.createElement('input');
	newblock4.id = 'input002';
	newblock4.classList.add('signup-text-input');
	newblock4.name = 'a';
	conteiner4.appendChild(newblock4)

	const conteiner5 = document.querySelector('.conteiner');
	const newblock5 = document.createElement('div');
	newblock5.classList.add('textcontent04');
	newblock5.insertAdjacentText("beforeend", "weight");
	conteiner5.appendChild(newblock5)

	const conteiner6 = document.querySelector('.conteiner');
	const newblock6 = document.createElement('input');
	newblock6.id = 'input003';
	newblock6.classList.add('signup-text-input');
	newblock6.name = 'a';
	newblock6.type = 'number';
	conteiner6.appendChild(newblock6)
	/*
	const conteiner7 = document.querySelector('.conteiner');
	const newblock7 = document.createElement('div');
	conteiner7.appendChild(newblock7)

	const conteiner8 = document.querySelector('.conteiner');
	const newblock8 = document.createElement('button');
	newblock8.classList.add('inline0');
	newblock8.onclick = function () { rezult() };
	newblock8.insertAdjacentText("beforeend", "Закончить");
	conteiner8.appendChild(newblock8)

	const conteiner9 = document.querySelector('.conteiner');
	const newblock9 = document.createElement('button');
	newblock9.classList.add('inline0');
	newblock9.onclick = function () { newTsicl() };
	newblock9.insertAdjacentText("beforeend", "Продолжить");
	conteiner9.appendChild(newblock9)*/
}
function rezult() {
	var chel = [];
	var rol = [];
	var ves = [];
	var vibor = [];
	var memory = [];
	const inputer = document.querySelectorAll('input');
	/*for (let r = 0; r < inputer.length; r++) {
		const conteiner9 = document.querySelector('.conteiner');
		const newblock9 = document.createElement('div');
		newblock9.classList.add('newblock');
		newblock9.innerHTML = inputer[r].value;
		conteiner9.appendChild(newblock9)

	}*/
	var minves = inputer[1].value;
	var maxves = inputer[2].value;
	var allroles = inputer[0].value;
	var d = inputer.length;
	d = (d / 3) -1;
	var t = d;
	d = 0;
	for (let i = 0; i < t;i++) {
		chel[i] = inputer[3 * i + 3].value;
		rol[i] = inputer[3 * i + 4].value;
		ves[i] = inputer[3 * i + 5].value;
		vibor[i] = false;
		memory[i] = 0;
	}
	
	
	
	var b = 0;
	var ist = true;
	var ist2 = true;
	
	var g = '';
	var a = 0;
	while (ist) {
		b = 0;

		for (let k = 0; k < t; k++) {
			if (vibor[k]) {
				b += parseInt(ves[k]);
			}
		}
		if(!(b<minves || b > maxves)){
			for (let e = 0; e < t; e++) {
				if (vibor[e]) {
					g += rol[e];
				}
			}
			for (e of allroles) {
				if (g.includes(e)) {
					a++;
				}
			}
			g = "";
			if (a == allroles.length) {

				for (let e = 0; e < t; e++) {
					if (vibor[e]) {
						g += chel[e] + ' + ';
						memory[e]++;
						d++;
					}
				}
				g = g.replace(/.{3}$/, "");
				const conteiner10 = document.querySelector('.conteiner');
				const newblock10 = document.createElement('div');
				newblock10.classList.add('newblock');
				newblock10.innerHTML = g;
				conteiner10.appendChild(newblock10)
			}
			g = "";
			a = 0;
	}
			for (let k = t - 1; k != -1 && ist2; k--) {
				if (vibor[k] && k == t - 1) {
					vibor[k] = false;
					for (let e = t - 1; e != -1; e--) {
						if (vibor[e]) {
							vibor[e] = false;
							vibor[e + 1] = true;
							ist2 = false;
							break;
						}
						else if (e == 0) {
							for (let n = 0; n < k + 1; n++) {
								g = chel[n] + " - " + memory[n];
								const conteiner11 = document.querySelector('.conteiner');
								const newblock11 = document.createElement('div');
								newblock11.classList.add('newblock');
								newblock11.innerHTML = g;
								conteiner11.appendChild(newblock11)
								g = "";
							}
							ist = false;
						}
					}
				}
				else if (vibor[k]) {
					vibor[k + 1] = true;
					if (b > maxves) {
						vibor[k] = false;
					}
					break;
				}
				else if (k == 0) {
					vibor[k] = true;
				}

			}
			ist2 = true;
		
	}
	ist = true;
	ist2 = true;
}

let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs(1146844800000), 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);

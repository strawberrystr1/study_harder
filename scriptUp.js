let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date().getDay();


for (let i = 0; i < week.length; i++) {
    if (i === date) {
        if (week[i] == 'Sunday' || week[i] == 'Saturday') {
            document.write(`<p><b><i>${week[i]}</i></b></p>`);
        } else {
            document.write(`<p><b>${week[i]}</b></p>`);
        }
    } else if (week[i] == 'Saturday' || week[i] == 'Sunday') {
        document.write(`<p><i>${week[i]}</i></p>`);
    } else {
        document.write(`<p>${week[i]}</p>`);
    }
}




let area = document.querySelector(".container");

let index = 500;

let play = function (event) {
    event.preventDefault();
    let myId = event.path[0].id;
    game();
}

game = function () {

let fetchInit = {
    method: "GET",
    headers: new Headers(),
    mode: "no-cors",
    catche: "no-catche"
}
pack=Number(0);
getRnd = function(){
    fetch("https://csrng.net/csrng/csrng.php.",fetchInit).then(data=>data.json()).
    catch(err=>console.error("hiba").then(data=>{pack=data;return pack}))
    .catch(err=>console.error("hiba2"))
}

    for (i = 0; i < index; i++) {
        area.removeChild(area.lastChild);
    };
    for (i = 0; i < index; i++) {console.log(i);

        myObject = { r: {}, p: {}, q: {} };
        color = String();
        for (k in myObject) {

            k = Math.random();
            //getRnd();
            //k=pack;
            //console.log(k);
            k = k.toFixed(3) * 1000;
            if (k < 1) { k = k * 1000 }
            if (k < 10) { k = k * 100 }
            if (k < 100) { k = k * 10 }
            k = k.toString(16);
            let a = k[0];
            let b = k[1];
            k = a + b;
            color = color + k;
        }
        color = "#" + color;

        square = document.createElement("div");
        area.appendChild(square);
        square.style.width = "20px";
        square.style.height = "20px";
        square.id = `${i}`;
        //square.style.border = "solid 5px #000000";
        square.style.padding = "0px";
        square.style.margin = "0px";
        square.style.background = `${color}`;
        square.style.display = "inline-block";
        console.log(color);
    };
};

for (i = 0; i < index; i++) {
    let color = String();
    color = "rgb(";
    let r = Number();
    for (let j = 0; j < 3; j++) {
        r = Math.random() * 256;
        r = r.toFixed(0);
        r = r.toString();
        if(j!=2){color = color + r + ","}
        else{color = color + r + ")"}
    }
    square = document.createElement("div");
    area.appendChild(square);
    square.style.width = "20px";
    square.style.height = "20px";
    square.id = `${i}`;
    //square.style.border = "solid 5px #000000";
    square.style.padding = "0px";
    square.style.margin = "0px";
    square.style.background = `${color}`;
    square.style.display = "inline-block";
    console.log(color);
};





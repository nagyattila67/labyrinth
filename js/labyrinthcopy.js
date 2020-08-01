//csak 100 oszlop lehet!
//csak 100 sor lehet!
let indexCol = 40;
let indexRow = 25;
let grey = Boolean(false);
let numberOfClick = 0;
let stop = Boolean(false);
let greyClickCounter = Number(0);
let clickCounter = Number(0);
let iP = Boolean(false);
let goal = Boolean(false);
let stepCounter = Number(0);
let limit = Number(0);
let max = Number(0);
let min = Number(0);
let arrayOfCounts = Array();


clearWindow = function (event) {
    for (let i = 0; i < indexCol * indexRow; i++) {
        myElem = document.querySelectorAll("td")[i];
        myElem.title = "";
        myElem.innerHTML = "";
        if (greyClickCounter % 2 == 0) {
            console.log(i);
            myRandom();
            myElem.style["background-color"] = color;
        }
        if (greyClickCounter % 2 == 1) {
            myElem.style["background-color"] = "#aaaaaa";
        }
    };
    clickCounter = 0;
};

checking = function (event) {
    lengthOfTable = document.querySelectorAll("[title='wall']").length;
    for (let i = 0; i < lengthOfTable; i++) {
        if (numberOfClick % 2 == 0) {
            document.querySelectorAll("[title='wall']")[i].style["background-color"] = "#0000ff"
        }
        else { document.querySelectorAll("[title='wall']")[i].style["background-color"] = "#000000" }
    }
    numberOfClick += 1;
};


coloringGrey = function (event) {
    //event.preventDefault;
    let lengthOfTable = document.querySelectorAll("[title='']").length;
    if (greyClickCounter % 2 == 0) {
        document.querySelector("#bgColor").innerHTML = "háttér: színes";
        grey = true;
        for (let i = 0; i < lengthOfTable - 1; i++) {
            document.querySelectorAll("[title='']")[`${i}`]["style"]["background-color"] = "#aaaaaa";
        }
    }
    if (greyClickCounter % 2 == 1) {
        document.querySelector("#bgColor").innerHTML = "háttér: szürke";
        grey = false;
        for (let i = 0; i < lengthOfTable - 1; i++) {
            myRandom();
            document.querySelectorAll("[title='']")[i].style["background-color"] = color
        };
    };
    greyClickCounter += 1;
};

coloringGrey();

let color = String("");
myRandom = function () {
    //minden cellának kiválaszt egy véletlen színt
    if (grey == false) {
        biggerThan = Number(20);
        smallerThan = Number(250);
        color = String("rgb(");
        let myRnd = Number(0);
        for (let k = 0; k < 3; k++) {
            myRnd = 0;
            while (myRnd < `${biggerThan}`) { myRnd = Math.random() * (`${smallerThan}`); };
            //console.log(myRnd);
            myRnd = myRnd;
            myRnd = myRnd.toFixed(0);
            myRnd = myRnd.toString();
            if (k != 2) { color = color + myRnd + "," }
            else { color = color + myRnd + ")" };
        }
    }
    else { color = "#aaaaaa" };
    return color;
}

let lastId = Number();
let itHasRole = Boolean(false);

let consoleData = function () {
    console.log("ident1: ", ident1, " ident2: ", ident2);
    console.log("rowId1: ", rowId1, " rowId2: ", rowId2);
    console.log("colId1: ", colId1, " colId2: ", colId2);
    console.log("cellId1: ", cellId1, " cellId2: ", cellId2);
}

let createRow = function () {
    row = document.createElement("tr");
    row.setAttribute("style", "margin: 0px");
    row.setAttribute("style", "padding: 0px");
    row.setAttribute("style", "border: 0px solid #000000");
    row.setAttribute("box-shadow", "none");
    return row;
};

let createCol = function () {
    col = document.createElement("td");
    col.setAttribute("style", "margin: 0px");
    col.setAttribute("style", "padding: 0px");
    col.setAttribute("style", "border: 0px solid #000000");
    col.setAttribute("box-shadow", "none");
    return col;
};

myLastElem = function () {
    //utolsó kilckelt helyre kiteszi az 'X'-et
    if (stop == true || stop == false) {
        lastElem = document.querySelector(`#c${cellId2}`);
        lastElem["style"]["background-color"] = "#CD5C5C";
        lastElem["style"]["color"] = "#ffffff";
        lastElem.innerHTML = "x";
        lastElem.title = "wall";
        cellId1 = cellId2;
        console.error("LASTELEMENT", lastElem, cellId2);
        consoleData();
    };
};
id = Object();
countId = function (ident) {
    //id = event;
    //klickelésre kiszámítja az új hely azonosító adatait
    //colId = event.path[0].id;
    colId = ident.id;
    console.log("IDENT!!!", ident)
    colId = colId.replace(colId[0], "0");
    colId = parseInt(colId);
    colId = colId % 100;

    rowId = ident["id"];
    rowId = rowId.replace(rowId[0], "0");
    rowId = parseInt(rowId);
    rowId = (rowId - rowId % 100) / 100

    cellId = ident["id"];
    cellId = cellId.replace(cellId[0], "0");
    cellId = parseInt(cellId);

    //consoleData();
    return colId, rowId, cellId;
};

changeId = function () {
    ident1 = ident2; colId1 = colId2; rowId1 = rowId2; cellId1 = cellId2;
    ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
}

counter = function () { ; clickCounter += 1; console.log("ClickCounter", clickCounter) };
myClick = function (ev = event) {

    /*if (stop == false) {
        lengthOfWall = document.querySelectorAll("[title='wall']").length;
        for (let i = 0; i < lengthOfWall; i++) {
            let myElem = document.querySelectorAll("[title='wall']")[i];
            if (myElem.title == "wall") {
                myElem.style["background-color"] = "#000000"
            };
        };
    };*/


    stop = false;
    console.error("MOUSEEVENT: ", ev);
    ident = ev.path[0]
    countId(ident);

    if (clickCounter == 1) {
        ident1 = ident; colId1 = colId; rowId1 = rowId; cellId1 = cellId;
        ident1.innerHTML = "&#128513";
        ident1["style"]["background-color"] = "#ffffff";
        ident1["title"] = "seeker";
        seekerId = cellId1;
        console.log("seekerId", seekerId);
    };

    if (clickCounter == 2) {
        if (cellId == seekerId) {
            alert("Házinyúlra nem lövünk!");
            clickCounter = 1
        }
        else {
            ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
            ident2.innerHTML = "&#128513";
            ident2["style"]["background-color"] = "#ffffff";
            ident2["title"] = "target";
            targetId = cellId2;
            console.log("targetId", targetId);

            consoleData();
        };
    };

    if (clickCounter == 3) {
        ident1 = ident2; colId1 = colId2; rowId1 = rowId2; cellId1 = cellId2;
        ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;

        consoleData();

        if (cellId2 == seekerId || cellId2 == targetId) { alert("Házinyúlra nem lövünk!"); clickCounter = 2; }
        else {
            ident1 = event.path[0];
            ident1["style"]["background-color"] = "#000000";
            ident1["style"]["color"] = "#ffffff"
            ident1.innerHTML = "X";
            ident1["title"] = "wall";
        }
    };

    if (clickCounter >= 4) {

        ident1 = ident2; colId1 = colId2; rowId1 = rowId2; cellId1 = cellId2;
        ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;

        if (ident2.title == "wall") {

            if (iP = true) {
                elem = document.querySelector(`#c${cellId2}`);
                elem.style["background-color"] = color;
                elem.title = "";

                countId(identPrev);
                ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
                countId(identPrev);
                ident1 = ident; colId1 = colId; rowId1 = rowId; cellId1 = cellId;
                stop = true;
                myLastElem();
            };
        };

        if (ident2.title == "" && stop == false) {
            myElem = document.querySelector(`#c${cellId2}`);
            myElem.style["background-color"] = "#CD5C5C";
            myElem.setAttribute("title", "wall");
            myElem.style.color = "#ffffff";
            myElem.innerHTML = "x";
            if (iP == true) {
                countId(identPrev);
                cellPrevId = cellId;
                myLastElement = document.querySelector(`#c${cellPrevId}`)
                myLastElement.innerHTML = "";
            };
            identPrev = ident2;
            iP = true;
        };

        if (cellId2 == seekerId || cellId2 == targetId) {
            alert("Házinyúlra nem lövünk!");
            ident2 = ident1; colId2 = colId1; rowId2 = rowId1; cellId2 = cellId1;
        }
        else {
            ident1.innerHTML = "";
            if (rowId1 == rowId2 && cellId1 < cellId2 && stop == false) {
                console.log("fut");
                while (cellId1 != seekerId && cellId1 != targetId && cellId1 < cellId2) {
                    elem = document.querySelector(`#c${cellId1}`)
                    elem["style"]["background-color"] = "#7D3C98";
                    elem.innerHTML = "";
                    elem["title"] = "wall";
                    lastId = cellId1;
                    cellId1 += 1;
                };
                //if (cellId1 != cellId2) { bunny = true }
                if (cellId1 == cellId2) { lastId += 1 };
                ident = document.querySelector(`#c${lastId}`)
                countId(ident);
                ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
                consoleData();
                myLastElem();
            };

            if (rowId1 == rowId2 && cellId2 < cellId1 && stop == false) {
                while (cellId1 != seekerId && cellId1 != targetId && cellId2 <= cellId1) {
                    elem = document.querySelector(`#c${cellId1}`)
                    console.log("elem", elem);
                    elem["style"]["background-color"] = "#7B241C";
                    elem.innerHTML = "";
                    elem["title"] = "wall";
                    lastId = cellId1;
                    cellId1 -= 1;
                };
                //if (cellId1 != cellId2) { bunny = true };
                ident = document.querySelector(`#c${lastId}`)
                countId(ident);
                ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
                consoleData();
                myLastElem();
            }
            if (colId1 == colId2 && rowId1 != rowId2 && cellId1 < cellId2 && stop == false) {
                while (cellId1 != seekerId && cellId1 != targetId && cellId1 < cellId2) {

                    elem = document.querySelector(`#c${cellId1}`)
                    console.log("elem", elem);
                    elem["style"]["background-color"] = "#196F3D";
                    elem.innerHTML = "";
                    elem["title"] = "wall";
                    lastId = cellId1;
                    cellId1 += 100;
                };
                //if (cellId1 != cellId2) { bunny = true };
                if (cellId1 == cellId2) { lastId += 100 };
                ident = document.querySelector(`#c${lastId}`)
                countId(ident);
                ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
                consoleData();
                myLastElem();
            };

            if (colId1 == colId2 && rowId1 != rowId2 && cellId2 < cellId1 && stop == false) {
                while (cellId1 != seekerId && cellId1 != targetId && cellId2 < cellId1) {
                    elem = document.querySelector(`#c${cellId1}`)
                    console.log("elem", elem);
                    elem["style"]["background-color"] = "#196F3D";
                    elem.innerHTML = "";
                    elem["title"] = "wall";
                    lastId = cellId1;
                    cellId1 -= 100;
                };
                //if (cellId1 != cellId2) { bunny = true };
                if (cellId1 == cellId2) { lastId -= 100 };
                ident = document.querySelector(`#c${lastId}`)
                countId(ident);
                ident2 = ident; colId2 = colId; rowId2 = rowId; cellId2 = cellId;
                consoleData();
                myLastElem();
            };
            //bunny = false;
        };
    };
};

rowId = String("r0");
for (let i = 0; i < indexRow; i++) {
    createRow();
    place = document.querySelector("#table");
    place.appendChild(row);
    place["style"]["width"] = "130%";
    place["style"]["height"] = "100%";
    place["style"]["overflow"] = "scroll";
    rowId = rowId.replace("r", "0");
    rowId = parseInt(rowId);
    rowId = rowId + 1;
    rowId = rowId.toString();
    rowId = "r" + rowId
    row["id"] = `${rowId}`;
    numberForId = (i + 1) * 100;
    cellId = String("c") + `${numberForId}`;
    for (let j = 0; j < indexCol; j++) {
        createCol();
        place = document.querySelector("#table").lastElementChild;
        place.appendChild(col);

        myRandom();

        col["style"]["background-color"] = color;
        col["style"]["width"] = "20px";
        col["style"]["height"] = "20px";
        cellId = cellId.replace("c", "0");
        cellId = parseInt(cellId);
        cellId = cellId + 1;
        cellId = cellId.toString();
        cellId = "c" + cellId
        col["id"] = `${cellId}`;
        col["title"] = "";
    };
};

//document.querySelector("#stepCount span").innerHTML = "Let's fun !"
//document.querySelector("#stepCount span").style.color = "#7e7e7e"

start = function (event) {
    stepCounter = 0;
    goal = false;

    startEvent = event;
    limit = 100000;
    if (startEvent.path[1][2]["value"] != "") {
        limit = startEvent.path[1][2]["value"]
        if (limit > 100000000) {
            alert("Maximum 10^8! A program most 10^5 értékkel indul.");
            limit = 100000;
            startEvent.path[1][2]["value"] = "100000"
        };
    };




    cellId = seekerId;
    document.querySelector(`#c${seekerId}`).title == "";
    //az előző keresőút piros kockáit szürkére állítja vissza;
    for (let i = 0; i < indexRow * indexCol; i++) {
        let myElem = document.querySelectorAll("td")[i];
        let index = myElem.id;
        let color = document.querySelector(`#${index}`)["style"]["background-color"];
        if (color == "rgb(255, 0, 0)") { document.querySelector(`#${index}`)["style"]["background-color"] = "#aaaaaa"; };
    };
    let summa1 = Number(0);
    let summa2 = Number(0);
    let summa3 = Number(0);
    let summa4 = Number(0);


    for (let i = 0; i < limit; i++) {
        // document.querySelector("#stepCount span").innerHTML = "dolgozom!"
        //document.querySelector("#stepCount span").style.color = "#7e7e7e"  
        if (goal == false) { stepCounter = stepCounter + 1 };
        //console.log(i, stepCounter, goal);
        document.querySelector(`#c${cellId}`).title = ""
        dir = Math.floor((Math.random() * 4) + 1);
        //dir = direction
        previousCellId = cellId;
        //dir = 4;
        //????????????????????

        //if (dir == 1) { summa1 = summa1 + 1; console.log("summa1: ", summa1); console.log("summa2: ", summa2); console.log("summa3: ", summa3); console.log("summa4: ", summa4) }
        //if (dir == 2) { summa2 = summa2 + 1; console.log("summa1: ", summa1); console.log("summa2: ", summa2); console.log("summa3: ", summa3); console.log("summa4: ", summa4) }
        //if (dir == 3) { summa3 = summa3 + 1; console.log("summa1: ", summa1); console.log("summa2: ", summa2); console.log("summa3: ", summa3); console.log("summa4: ", summa4) }
        //if (dir == 4) { summa4 = summa4 + 1; console.log("summa1: ", summa1); console.log("summa2: ", summa2); console.log("summa3: ", summa3); console.log("summa4: ", summa4) }

        if (i == 0) { console.log("DOLGOZOM!") };


        if (dir == 1) {
            if ((cellId - parseInt(cellId / 100) * 100) < 41) {
                if (document.querySelector(`#c${cellId + 1}`).title == "") { cellId = cellId + 1 }
                if (document.querySelector(`#c${cellId + 1}`).title == "target") { goal = true }
            };

            /*if ((dir == 1) && ((cellId - parseInt(cellId / 100) * 100) < 41) &&
                (document.querySelector(`#c${cellId + 1}`).title == "")) {
                cellId = cellId + 100 + 1;
             */

        };


        if (dir == 2) {
            if (1 < (cellId - parseInt(cellId / 100) * 100)) {
                if (document.querySelector(`#c${cellId - 1}`).title == "") { cellId = cellId - 1 }
                if (document.querySelector(`#c${cellId + 1}`).title == "target") { goal = true }
            };


        };

        if (dir == 3) {
            if ((parseInt(cellId / 100) * 100) / 100 < 40) {
                if (document.querySelector(`#c${cellId + 100}`).title == "") { cellId = cellId + 100 }
                if (document.querySelector(`#c${cellId + 1}`).title == "target") { goal = true }
            };
        };

        if (dir == 4) {
            if (1 < (parseInt(cellId / 100) * 100) / 100) {
                if (document.querySelector(`#c${cellId - 100}`).title == "") { cellId = cellId - 100 }
                if (document.querySelector(`#c${cellId + 1}`).title == "target") { goal = true }
            };
        };



        /*if ((dir == 4) && (1 < (parseInt(cellId / 100) * 100) / 100) &&
            (document.querySelector(`#c${cellId - 100}`).title == "")); {
            cellId = cellId - 100;
        }*/

        //????????????????????
        /* if ((dir == 2) && ((1 < cellId - (parseInt(cellId / 100)) * 100 - 1)) &&
             (document.querySelector(`#c${cellId - 1}`).title == "")) {
             cellId = cellId + 100 - 1;
 
 
         };*/

        /*
       //???????????????????? - itt érzékeli a falat
       if ((dir == 3) && ((parseInt(cellId / 100) * 100) / 100 < 40) &&
           (document.querySelector(`#c${cellId + 100}`).title == "")) {
           cellId = cellId + 200;
 
 
       };
       */
        //????????????????????

        /*
        if ((dir == 4) && (1 < (parseInt(cellId / 100) * 100) / 100) &&
            (document.querySelector(`#c${cellId - 100}`).title == "")); {
            cellId = cellId - 100;
 
        };*/


        //console.log("lépés: ", i, " random: ", dir, "previous: ", previousCellId, " next: ", cellId);
        //document.querySelector(`#c${cellId}`).title = "seeker";
        document.querySelector(`#c${cellId}`).style["background-color"] = "#ff0000";
        document.querySelector(`#c${previousCellId}`).title = "";


        if (goal == true) { document.querySelector("#stepCount span").innerHTML = stepCounter; i = limit };
        if (goal == false && stepCounter == limit) {
            document.querySelector("#stepCount span").innerHTML =
                `Nem találtam meg a célt ${limit} lépésben!`
        };
        if ((goal == false && stepCounter == limit) || (goal == true)) {
            console.log("FUTÁS VÉGE")
            arrayOfCounts[arrayOfCounts.length] = stepCounter;
            min = arrayOfCounts[0];
            for (let k of arrayOfCounts) {
                if (k < min) { min = k }
            }
            max = arrayOfCounts[0];
            for (let k of arrayOfCounts) {
                if (k > max) { max = k }
            }

            document.querySelector("#minimum").innerHTML = min;
            document.querySelector("#maximum").innerHTML = max;


        };
    };
};


















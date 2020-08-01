//csak 100 oszlop lehet!
//csak 100 sor lehet!
let indexCol = 40;
let indexRow = 25;

//previousLastElem = new Object();

createRow = function () {
    row = document.createElement("tr");
    return row;
}

createCol = function () {
    col = document.createElement("td");
    return col;
}

clickCounter = Number(0);
counter = function () { clickCounter = clickCounter + 1; };
myClick = function (ev = event) {
    console.log("clickEvent: ", ev);
    placeOfClickId = event.path[0].id;
    console.log(placeOfClickId);

    //if (placeOfClickId == seekerId || placeOfClickId == targetId) { alert("Házinyúlra nem lövünk!");};

    if (clickCounter == 1) {
        let ident = event.path[0];
        ident.innerHTML = "&#128513";
        ident["style"]["background-color"] = "#ffffff";
        ident["title"] = "seeker";
        seekerId = document.querySelector("[title='seeker'").id;

        let idString = String("temporaryContainer");
        for (let i = 1; i < cellId1.length; i++) {
            idString = idString.replace(idString[i - 1], seekerId[i]);
        };

        idString = parseInt(idString);
        seekerId = idString;
        console.log("BBBBBBB",seekerId);


    };


    if (clickCounter == 2) {
        if (placeOfClickId == seekerId) {
            alert("Házinyúlra nem lövünk!");
            clickCounter = 1
        }
        else {
            let ident = event.path[0];
            ident.innerHTML = "&#128513";
            ident["style"]["background-color"] = "#ffffff";
            ident["title"] = "target";
            targetId = document.querySelector("[title='target'").id;
        };
    }
    console.log("!!!", clickCounter);

    if (clickCounter == 3) {
        if (placeOfClickId == seekerId || placeOfClickId == targetId) { alert("Házinyúlra nem lövünk!"); clickCounter = 2; }
        else {
            ident1 = event.path[0];
            ident1["style"]["background-color"] = "#000000"
            ident1["title"] = "wall";
            console.log(ident1);
            console.log("hello1");
            rowId1 = ident1.parentElement.id;
        }
    };

    if (clickCounter >= 4) {
        if (placeOfClickId == seekerId || placeOfClickId == targetId) {
            alert("Házinyúlra nem lövünk!"); clickCounter = 3;
        }
        else {
            ident1.innerHTML = "";

            cellId1 = ident1["id"];
            let idString = String("temporaryContainer");
            for (let i = 1; i < cellId1.length; i++) {
                idString = idString.replace(idString[i - 1], cellId1[i]);
            };

            idString = parseInt(idString);
            cellId1 = idString;

            ident2 = event.path[0];
            ident2["style"]["background-color"] = "#000000"
            ident2["title"] = "wall";

            rowId1 = ident1.parentElement.id;
            ident1 = ident2;

            rowId2 = ident2.parentElement.id;

            cellId2 = ident2["id"];
            idString = String("temporaryContainer");
            for (let i = 1; i < cellId2.length; i++) {
                idString = idString.replace(idString[i - 1], cellId2[i]);
            };

            idString = parseInt(idString);
            cellId2 = idString;

            console.log("CELLID", cellId1, cellId2);
            //oszlopazonosító elkészítése az ident1-nek
            let value = cellId1 % 100;
            value = parseInt(value);
            colId1 = value;

            //oszlopazonosító elkészítése az ident2-nek
            value = cellId2 % 100;
            value = parseInt(value);
            colId2 = value;

            cellId2 = cellId2.toPrecision();
            cellId2 = "c" + cellId2;

            //last elem az utolsó clickelés helye
            lastElem = document.querySelector(`#${cellId2}`);
            lastElem["style"]["color"] = "#ffffff";
            lastElem.innerHTML = "X";
            console.log("LASTELEMENT", lastElem, cellId2);

            idString = "temporaryContainer";

            for (let i = 1; i < cellId2.length; i++) {
                idString = idString.replace(idString[i - 1], cellId2[i]);
            };

            idString = parseInt(idString);
            cellId2 = idString;

            console.log("clickCounter: ", clickCounter);
            console.log("rowId1: ", rowId1, " rowId2: ", rowId2);
            console.log("colId1: ", colId1, " colId2: ", colId2);
            console.log("cellId1: ", cellId1, " cellId2: ", cellId2);

            seekerIdNumb = seekerId.replace("c", "0");
            seekerIdNumb = parseInt(seekerIdNumb);
            console.log("seekerIdNumb");


            while (rowId1 == rowId2 && cellId1 < cellId2) {
                console.log("!!!!!!!!!!!!!!!!", cellId1, cellId2);

                cellId1 = cellId1.toPrecision();
                cellId1 = "c" + cellId1;
                console.log("RRRRRRRR", cellId1);

                elem = document.querySelector(`#${cellId1}`);
                elem["style"]["background-color"] = "#000000";
                elem.innerHTML = "";
                idString = "temporaryContainer";
                for (let i = 1; i < cellId1.length; i++) {
                    idString = idString.replace(idString[i - 1], cellId1[i]);

                }
                idString = parseInt(idString);
                cellId1 = idString;
                //hereIam = cellId1;
                //hereIam = "c" + hereIam;
                console.log("CCCC",cellId1);
                cellId1 += 1;


                //cellId1 = cellId2

                lastElement = cellId1;
                //console.log("HERE", hereIam);
                //cellId1 = hereIam;
                //cellId1 = cellId1.toPrecision();
                //cellId1 = "c" + cellId1;
                //cellId1 = hereIam;
                //cellId2 = hereIam;
                // document.querySelector(`#${cellId1}`)["style"]["color"] = "#ffffff";
                //document.querySelector(`#${cellId1}`).innerHTML = "X";
                //console.log("próba2", cellId1);

                //lastElem = hereIam;


            };



            while (rowId1 == rowId2 && cellId2 < cellId1) {
                cellId1 = cellId1.toPrecision();
                cellId1 = "c" + cellId1;
                console.log(cellId1);
                let elem = document.querySelector(`#${cellId1}`);
                elem["style"]["background-color"] = "#000000";
                elem.innerHTML = "";
                idString = "temporaryContainer";
                for (let i = 1; i < cellId1.length; i++) {
                    idString = idString.replace(idString[i - 1], cellId1[i]);
                };
                idString = parseInt(idString);
                cellId1 = idString;

                cellId1 -= 1;
            };





            while (colId1 == colId2 && rowId1 != rowId2 && cellId1 < cellId2) {
                console.log("++", cellId1);
                cellId1 = "c" + cellId1;
                console.log(cellId1);
                let elem = document.querySelector(`#${cellId1}`);
                elem["style"]["background-color"] = "#000000";
                elem.innerHTML = "";

                idString = "temporaryContainer";
                for (let i = 1; i < cellId1.length; i++) {
                    idString = idString.replace(idString[i - 1], cellId1[i]);
                };
                idString = parseInt(idString);
                cellId1 = idString;

                cellId1 += 100;
            };



            while (colId1 == colId2 && rowId1 != rowId2 && cellId2 < cellId1) {
                console.log("++", cellId1);
                cellId1 = "c" + cellId1;
                console.log(cellId1);
                let elem = document.querySelector(`#${cellId1}`);
                elem["style"]["background-color"] = "#000000";
                elem.innerHTML = "";

                idString = "temporaryContainer";
                for (let i = 1; i < cellId1.length; i++) {
                    idString = idString.replace(idString[i - 1], cellId1[i]);
                };
                idString = parseInt(idString);
                cellId1 = idString;

                cellId1 -= 100;
            };

        }

    };

}

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

        let color = String("rgb(");
        let myRnd = Number(0);
        for (let k = 0; k < 3; k++) {
            myRnd = Math.random() * (256);
            myRnd = myRnd.toFixed(0);
            myRnd = myRnd.toString();
            if (k != 2) { color = color + myRnd + "," }
            else { color = color + myRnd + ")" };
        }
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



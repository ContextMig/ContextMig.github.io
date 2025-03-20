

document.addEventListener('DOMContentLoaded', function () {
    var tbody = document.getElementById('scenariosDatas').getElementsByTagName('tbody')[0];

    scenariosDatas.forEach(function (rowData) {

        var row = document.createElement('tr');

        Object.keys(rowData).forEach(function (key) {
            var cell = document.createElement('td');

            if (key === "source_app" || key === "target_app") {
                rowData[key] = rowData[key]
            }
            if (rowData[key] === null) {
                rowData[key] = ""
            }
            if (key === 'Dynamic Components') {
                if (rowData[key] == "Yes") {
                    rowData[key] = "√"
                } else {
                    rowData[key] = "-"
                }
            }
            rowData[key] = rowData[key].replaceAll('[', '')
            rowData[key] = rowData[key].replaceAll(']', '')
            rowData[key] = rowData[key].replaceAll(' -> ', '→')

            if (key === "level") {
                if (rowData[key] === "other") {
                    row.classList.add("strike-through");
                }
                rowData[key] = ""
            } else if (rowData[key] != null) {
                // console.log(key)
                if (rowData[key] === "") {
                    rowData[key] = "-"
                }

                cell.textContent = rowData[key];
                row.appendChild(cell);
            }

        });

        tbody.appendChild(row);

    });
});

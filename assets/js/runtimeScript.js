function extractAppName(input) {
    let parts = input.split(" | "); // 分割字符串
    return parts[1]; // 返回第二部分
}


document.addEventListener('DOMContentLoaded', function () {
    var tbody = document.getElementById('runtimeDatas').getElementsByTagName('tbody')[0];

    runtimeDatas.forEach(function (rowData) {

        var row = document.createElement('tr');

        Object.keys(rowData).forEach(function (key) {
            var cell = document.createElement('td');

            if (key === "reason" || key === "desc") {
                return
            }

            if (key === "source_app" || key === "target_app") {
                rowData[key] = rowData[key]
            }

            if (key === "level") {
                if (rowData[key] === "other") {
                    row.classList.add("strike-through");
                }
                rowData[key] = ""
            } else if (rowData[key] != null) {
                // console.log(key)
                cell.textContent = rowData[key];
                row.appendChild(cell);

            }

        });

        tbody.appendChild(row);

    });
});

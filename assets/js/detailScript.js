document.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var findSourceApp = params.get('source');
    var findTargetApp = params.get('target');
    var testId = params.get('id');
    var sourceApp = 'n1'
    var targetApp = 'n2'
    var testNumber = -1
    var completeNumber = -1

    var detailsTableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];

    var rowData = tableData.find(function(data) {


        if (data.source_app !== sourceApp && data.source_app != null) {
            sourceApp = data.source_app
        }

        if (data.target_app !== targetApp && data.target_app != null) {
            targetApp = data.target_app
        }

        return String(data.test) === testId && findSourceApp === sourceApp && findTargetApp === targetApp;
    });

    const map = {
        source_app: 'Source App',
        target_app: 'Target App',
        test: 'Test Id',
        desc: 'Test Description',
        migrate_status: 'Migrate Status',
        event_num: 'Number of Source Test Case\'s Event',
        oracle_num: 'Number of Source Test Case\'s Oracle',
        Time_consuming: 'Consuming Time(s)',
        level: 'Migrate Type',
        reason: 'Reason of Migrate Type'
    };
    if (rowData) {
        Object.keys(rowData).forEach(function(key) {
            var row = document.createElement('tr');

            var headerCell = document.createElement('th');
            headerCell.textContent = map[key];
            headerCell.style.width = '170px';
            headerCell.style.textAlign = 'center';
            row.appendChild(headerCell);

            var valueCell = document.createElement('td');
            valueCell.textContent = rowData[key];

            row.appendChild(valueCell);

            if (key === "desc") {
                return
            }

            detailsTableBody.appendChild(row);
            if (key === "test") {
                let row = document.createElement('tr');
                let headerCell = document.createElement('th');
                headerCell.textContent = map["desc"];
                headerCell.style.width = '170px';
                headerCell.style.textAlign = 'center';
                row.appendChild(headerCell);
                let valueCell = document.createElement('td');
                valueCell.textContent = rowData["desc"];

                row.appendChild(valueCell);
                detailsTableBody.appendChild(row);
            }
        });

    }
});

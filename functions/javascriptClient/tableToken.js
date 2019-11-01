$(document).ready(function () {
    const apiUrl = "https://api.ethplorer.io/getTop?apiKey=freekey&criteria="
    if (window.location.pathname == "/tokens") {
        var tableByCap = $('#by-cap').DataTable({
            "processing": true,
            'language': {
                'processing': "<img src='https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif' style='width:80px;height:80px'/>"
            },
            "ajax": {
                "type": "GET",
                "url": apiUrl + "cap",
                "dataSrc": function (data) {
                    var return_data = new Array();
                    for (var i = 0; i < data.tokens.length; i++) {
                        var tokenInfo = data.tokens[i]
                        return_data.push({
                            "index": i + 1,
                            "token": tokenInfo.name + " (" + tokenInfo.symbol + ")",
                            "cap": numeral(tokenInfo.cap).format('$ 0.00a'),
                            "price": numeral(tokenInfo.price.rate).format('$0.00'),
                            "col24h": tokenInfo.price.diff + "%",
                            "col7d": tokenInfo.price.diff7d + "%",
                            "col30d": numeral(tokenInfo.price.diff30d).format('0.00') + "%"
                        })
                    }
                    return return_data;
                }
            },
            "columns": [{
                    "data": "index"
                },
                {
                    "data": "token"
                },
                {
                    "data": "cap"
                },
                {
                    "data": "price"
                },
                {
                    "data": "col24h"
                },
                {
                    "data": "col7d"
                },
                {
                    "data": "col30d"
                }
            ],
            columnDefs: [{
                targets: 4,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }, {
                targets: 5,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }, {
                targets: 6,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }]
        })
        var tableByTrade = $('#by-trade').DataTable({
            "processing": true,
            'language': {
                'processing': "<img src='https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif' style='width:80px;height:80px'/>"
            },
            "ajax": {
                "type": "GET",
                "url": apiUrl + "trade",
                "dataSrc": function (data) {
                    var return_data = new Array();
                    for (var i = 0; i < data.tokens.length; i++) {
                        var tokenInfo = data.tokens[i]
                        return_data.push({
                            "index": i + 1,
                            "token": tokenInfo.name + " (" + tokenInfo.symbol + ")",
                            "price": numeral(tokenInfo.price.rate).format('$ 0.00'),
                            "volume": numeral(tokenInfo.volume).format('$0.00a'),
                            "col24h": tokenInfo['volume-1d-previous'] == 0 ? "--" : numeral((tokenInfo['volume-1d-current'] / tokenInfo['volume-1d-previous']) - 1).format('0.0%'),
                            "col7d": tokenInfo['volume-7d-previous'] == 0 ? "--" : numeral((tokenInfo['volume-7d-current'] / tokenInfo['volume-7d-previous']) - 1).format('0.0%'),
                            "col30d": tokenInfo['volume-30d-previous'] == 0 ? "--" : numeral((tokenInfo['volume-30d-current'] / tokenInfo['volume-30d-previous']) - 1).format('0.0%')
                        })
                    }
                    return return_data;
                }
            },
            "columns": [{
                    "data": "index"
                },
                {
                    "data": "token"
                },
                {
                    "data": "price"
                },
                {
                    "data": "volume"
                },
                {
                    "data": "col24h"
                },
                {
                    "data": "col7d"
                },
                {
                    "data": "col30d"
                }
            ],
            columnDefs: [{
                targets: 4,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }, {
                targets: 5,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }, {
                targets: 6,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }]
        })
        var tableByOperations = $('#by-operations').DataTable({
            "processing": true,
            'language': {
                'processing': "<img src='https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif' style='width:80px;height:80px'/>"
            },
            "ajax": {
                "type": "GET",
                "url": apiUrl + "count",
                "dataSrc": function (data) {
                    var return_data = new Array();
                    for (var i = 0; i < data.tokens.length; i++) {
                        var tokenInfo = data.tokens[i]
                        return_data.push({
                            "index": i + 1,
                            "token": tokenInfo.name + " (" + tokenInfo.symbol + ")",
                            "operations": tokenInfo.txsCount24,
                            "col24h": tokenInfo['txsCount-1d-previous'] == 0 ? "--" : numeral((tokenInfo['txsCount-1d-current'] / tokenInfo['txsCount-1d-previous']) - 1).format('0.0%'),
                            "col7d": tokenInfo['txsCount-7d-previous'] == 0 ? "--" : numeral((tokenInfo['txsCount-7d-current'] / tokenInfo['txsCount-7d-previous']) - 1).format('0.0%'),
                            "col30d": tokenInfo['txsCount-30d-previous'] == 0 ? "--" : numeral((tokenInfo['txsCount-30d-current'] / tokenInfo['txsCount-30d-previous']) - 1).format('0.00a%')
                        })
                    }
                    return return_data;
                }
            },
            "columns": [{
                    "data": "index"
                },
                {
                    "data": "token"
                },
                {
                    "data": "operations"
                },
                {
                    "data": "col24h"
                },
                {
                    "data": "col7d"
                },
                {
                    "data": "col30d"
                }
            ],
            columnDefs: [{
                targets: 3,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }, {
                targets: 4,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }, {
                targets: 5,
                render: function (data, type, row) {
                    var color = 'black';
                    if (data.includes('-')) {
                        color = 'red';
                    } else color = 'black';
                    return '<span style="color:' + color + '">' + data + '</span>';
                }
            }]
        });
    }
    //get token by capitalization
    if (window.location.pathname == "/") {
        $.ajax({
            url: apiUrl + "cap&limit=9",
            data: {
                format: 'json'
            },
            error: function () {
                console.log("fail");

            },
            dataType: 'json',
            success: function (data) {
                for (let i = 0; i < data.tokens.length; i++) {
                    let tokenInfo = data.tokens[i]
                    $('#capitalization tbody').append(`<tr>
                <td>${i+1}</td>
                <td>${tokenInfo.name} (${tokenInfo.symbol})</td>
                <td>${numeral(tokenInfo.cap).format('$ 0.00a')}</td>
                <td>${numeral(tokenInfo.price.rate).format('$0.00')}</td>
                <td>${tokenInfo.price.diff}%</td>
                <td>${tokenInfo.price.diff7d}%</td>
                <td>${numeral(tokenInfo.price.diff30d).format('0.00')}%</td>
                </tr>`)

                }
            },
            type: 'GET'
        });
        $.ajax({
            url: apiUrl + "trade&limit=10",
            data: {
                format: 'json'
            },
            error: function () {
                console.log("fail");

            },
            dataType: 'json',
            success: function (data) {
                for (let i = 0; i < data.tokens.length; i++) {
                    let tokenInfo = data.tokens[i]
                    $('#trade tbody').append(`<tr>
                <td>${i+1}</td>
                <td>${tokenInfo.name} (${tokenInfo.symbol})</td>
                <td>${numeral(tokenInfo.price.rate).format('$ 0.00')}</td>
                <td>${numeral(tokenInfo.volume).format('$0.00a')}</td>
                <td>${tokenInfo['volume-1d-previous'] == 0 ? "--" : numeral((tokenInfo['volume-1d-current'] / tokenInfo['volume-1d-previous']) - 1).format('0.0%')}</td>
                <td>${tokenInfo['volume-7d-previous'] == 0 ? "--" : numeral((tokenInfo['volume-7d-current'] / tokenInfo['volume-7d-previous']) - 1).format('0.0%')}</td>
                <td>${tokenInfo['volume-30d-previous'] == 0 ? "--" : numeral((tokenInfo['volume-30d-current'] / tokenInfo['volume-30d-previous']) - 1).format('0.0%')}</td>
                </tr>`)

                }
            },
            type: 'GET'
        });
        $.ajax({
            url: apiUrl + "count&limit=10",
            data: {
                format: 'json'
            },
            error: function () {
                console.log("fail");

            },
            dataType: 'json',
            success: function (data) {
                for (let i = 0; i < data.tokens.length; i++) {
                    let tokenInfo = data.tokens[i]
                    $('#operation tbody').append(`<tr>
                <td>${i+1}</td>
                <td>${tokenInfo.name} (${tokenInfo.symbol})</td>
                <td>${tokenInfo.txsCount24}</td>
                <td>${tokenInfo['txsCount-1d-previous'] == 0 ? "--" : numeral((tokenInfo['txsCount-1d-current'] / tokenInfo['txsCount-1d-previous']) - 1).format('0.0%')}</td>
                <td>${tokenInfo['txsCount-7d-previous'] == 0 ? "--" : numeral((tokenInfo['txsCount-7d-current'] / tokenInfo['txsCount-7d-previous']) - 1).format('0.0%')}</td>
                <td>${tokenInfo['txsCount-30d-previous'] == 0 ? "--" : numeral((tokenInfo['txsCount-30d-current'] / tokenInfo['txsCount-30d-previous']) - 1).format('0.00a%')}</td>
                </tr>`)

                }
            },
            type: 'GET'
        });
    }
})
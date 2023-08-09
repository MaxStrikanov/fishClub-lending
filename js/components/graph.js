
const graph = async () => {
    let dataList = [];
    const url = "bd/fish.xlsx";
    const oReq = new XMLHttpRequest();
    const query = String(document.location.href);

    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function(e) {

    const arraybuffer = oReq.response;
    let data = new Uint8Array(arraybuffer);
    const arr = new Array();

    for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);

    const bstr = arr.join("");
    const workbook = XLSX.read(bstr, {type: "binary" });
    const first_sheet_name = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[first_sheet_name];

    dataList = XLSX.utils.sheet_to_json(worksheet, { raw: true });

    const arrTotal = [], 
        arrData = [],
        arrDayName = [],
        arrFishInto = [],
        arrFishOut = [];

    dataList.forEach((item) => {
        arrTotal.push(item['Общее значение']);
        arrData.push(item['Дата']);
        arrDayName.push(item['День']);
        arrFishInto.push(item['Зарыблено']);
        arrFishOut.push(item['Выловлено']);
    })

    // Создание контекста для графика
    var ctx = document.querySelector('.myChart').getContext('2d');
    Chart.register(ChartDataLabels);

    Chart.defaults.set('plugins.datalabels', {
        color: '#264156',
        font:{
        size: 24,
        weight: 'bold',
        family: 'Montserrat',
        }
    });

    // Создание графика с использованием Chart.js
    var myChart = new Chart(ctx, {
        type: 'line', // тип графика
        data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],  //labels
        datasets: [{
            data: arrTotal, // значения
            backgroundColor: 'rgba(114, 168, 184, 0)', // цвет закраски
            borderColor: 'rgba(114, 168, 184, 1)', // цвет линии
            pointStyle: 'rect',  //Квадратные точки
            pointRadius: 10,   //размер точки
            pointBorderColor: [], //Цвет обводки точки
            pointBackgroundColor: [], // Цвет точки
            pointBorderWidth: 2, //Толщина точки
            tension: 0.4, //Плавный график
            pointHoverRadius: 12, //Размер точек при наведении
            pointHoverBorderWidth: 2,
            pointHoverBorderColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
        layout:{
            padding:55
        },
        events: [],
        plugins:{
            legend: {
            display: false, //выключение легенды
            },
            datalabels:{
            anchor:'end',
            align:'end',
            offset:0,
            formatter: function(value, context) {
                // Ваш код для форматирования текста метки данных
                return value + ' кг.'; 
            }
            },
        },
        responsive: false, // адаптивность графика
        tooltips: false,
        scales: {
            y: {display: false,
            beginAtZero: false // начало оси Y с нуля
            },
            x: {
            display: false,
            }
        }
        },
        plugins: [ChartDataLabels]
        
    });


    myChart.data.datasets[0].pointBorderColor[0] = "rgba(255, 255, 255, 1)";
    myChart.data.datasets[0].pointBackgroundColor[0] = "#136E88";
    myChart.data.datasets[0].pointBorderColor[1] = "#F3F7F9";

    for (let i = 0; i < 7; i++) {
        myChart.data.datasets[0].pointBackgroundColor[i + 1] = "rgba(114, 168, 184, 1)";
    }

    myChart.update();



    for (let i = 0; i < 7; i++) {
        //Вывод значения зарыблено
        document.querySelector("#fishinto" + [i + 1]).textContent = arrFishInto[i];
        //Вывод значения выловлено
        document.querySelector("#fishout" + [i + 1]).textContent = arrFishOut[i];
        //Вывод значения дня недели
        document.querySelector("#dayname" + [i + 1]).textContent = arrDayName[i];
        //Вывод значения даты
        document.querySelector("#daydate"  + [i + 1]).textContent = arrData[i];

        myChart.data.datasets[0].pointBackgroundColor[i+1] = "rgba(114, 168, 184, 1)";

    }

    }
    oReq.send();
}

export default graph;







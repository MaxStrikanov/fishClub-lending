const parseExcel = async () => {
    let dataList = [];
    const url = "bd/fish.xlsx";
    const oReq = new XMLHttpRequest();
    const query = String(document.location.href);

    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function(e) {
        
        const arraybuffer = oReq.response;
        const data = new Uint8Array(arraybuffer);
        const arr = new Array();

        for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        
        const bstr = arr.join("");
        const workbook = XLSX.read(bstr, {type: "binary" });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        
        dataList = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

        const totalCost = dataList.reduce((prev, item) => {
            return prev + item['Сумма']
        }, 0) 

        // document.querySelector('.result-block span').textContent = numberWithSpaces(totalCost);
        const weekdays = [
            'воскресенье',
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота'
        ]

        function getDatasShort()  {
            const aryDates = [];
            for (let i = 0; i <= 6; i++) {
                let currentDate = new Date();
                currentDate.setDate(currentDate.getDate() - i);
                aryDates.push(currentDate.toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'numeric',
        }));
            }
            return aryDates;
        }
        function getDatesWeek() {
            const aryDates = [];
            for (let i = 0; i <= 6; i++) {
                let currentDate = new Date();
                currentDate.setDate(currentDate.getDate() - i);
                aryDates.push(currentDate.toLocaleString('ru-RU', {
            weekday: 'long',
        }));
            }
            return aryDates;
        }
        
        const aryDates = getDatesWeek();
        const aryDatesShort  = getDatasShort()   
        const containerChart = document.getElementById('container-chart')
        dataList.forEach((elem, i) => {

            const card =  document.querySelector('.fish-cards-items');
            

                card.insertAdjacentHTML('beforeend', `
                        <div class="fish-cards-item">
                            <div class="fish-cards-data">
                                <div class="fish-cards-data__week">${aryDates[i] }</div>
                                <div class="fish-cards-data__day">${aryDatesShort[i]}</div>     
                            </div>
                            <div class="fish-cards-chart">
                                    <!-- <span class="fish-cards-weight">1 764</span>
                                        <span class="fish-cards-text">кг.</span> -->
                                <div class="fish-cards-chart__tag"></div>	
                            </div>
                                <div class="fish-cards-stocked">
                                    <div class="fish-cards-fished">
                                        <p>Зарыблено</p>
                                        <div class="fish-cards-img-weight">
                                            <img src="img/fishing-1.png" alt="">
                                            <span class="weight-num">${dataList[i]['caught']}</span>
                                            <span class="weight-str">кг.</span>
                                        </div>
                                    </div>
                            <div class="fish-cards-caught">
                                <p>Выловлено</p>
                                <div class="fish-cards-img-weight">
                                    <img src="img/fishing-2.png" alt="">
                                    <span class="weight-num">${dataList[i]['stocked']}</span>
                                    <span class="weight-str">кг.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                )
        })
         const chart =  `
                    <svg version="1.1" style="font-size: 12px;" xmlns="http://www.w3.org/2000/svg" width="1304" height="186" viewBox="0 0 1304 186" aria-hidden="false" aria-label="Interactive chart">
						<rect fill="none" x="0" y="0" width="1304" height="186" rx="0" ry="0" aria-hidden="true"></rect>
						<rect fill="none" x="38" y="45" width="1256" height="126" aria-hidden="true"></rect>
						<g data-z-index="0" aria-hidden="true"></g>
						<rect fill="none" data-z-index="1" x="38" y="45" width="1256" height="126" aria-hidden="true"></rect>
						<g data-z-index="1" aria-hidden="true">
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 216.5 45 L 216.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 396.5 45 L 396.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 575.5 45 L 575.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 755.5 45 L 755.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 934.5 45 L 934.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 1114.5 45 L 1114.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 1293.5 45 L 1293.5 171" opacity="1"></path>
							<path fill="none" stroke-dasharray="none" data-z-index="1" d="M 37.5 45 L 37.5 171" opacity="1"></path>
						</g>
						<g data-z-index="3" aria-hidden="false"><g data-z-index="0.1" opacity="1" transform="translate(38,45) scale(1 1)" clip-path="url(#highcharts-q4mdt4x-595-)" aria-hidden="true">
							<path fill="none" d="M 89.714285714286 51.912000000000006 C 89.714285714286 51.912000000000006 197.37142857143039 47.879999999999995 269.14285714286 47.879999999999995 C 340.914285714288 47.879999999999995 376.800000000002 54.096 448.57142857143 62.16 C 520.342857142858 70.22399999999999 556.228571428572 88.2 628 88.2 C 699.771428571432 88.2 735.6571428571481 35.28 807.42857142858 35.28 C 879.200000000008 35.28 915.0857142857221 59.135999999999555 986.85714285715 67.2 C 1058.62857142857 75.26399999999956 1166.2857142857 75.6 1166.2857142857 75.6" data-z-index="1" stroke="#72A8B8" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
							<path fill="none" d="M 89.714285714286 51.912000000000006 C 89.714285714286 51.912000000000006 197.37142857143039 47.879999999999995 269.14285714286 47.879999999999995 C 340.914285714288 47.879999999999995 376.800000000002 54.096 448.57142857143 62.16 C 520.342857142858 70.22399999999999 556.228571428572 88.2 628 88.2 C 699.771428571432 88.2 735.6571428571481 35.28 807.42857142858 35.28 C 879.200000000008 35.28 915.0857142857221 59.135999999999555 986.85714285715 67.2 C 1058.62857142857 75.26399999999956 1166.2857142857 75.6 1166.2857142857 75.6" data-z-index="2" stroke-linecap="round" stroke-linejoin="round" stroke="rgba(192,192,192,0.0001)" stroke-width="22" style="cursor: pointer;"></path>
						</g>
						<g data-z-index="0.1" opacity="1" transform="translate(38,45) scale(1 1)" clip-path="none" style="cursor: pointer;" aria-hidden="false">
							<path fill="#72A8B8" d="M 807 35.28 A 0 0 0 1 1 807 35.28 Z" data-z-index="-1" fill-opacity="0.25" visibility="hidden"></path>
							<path fill="#136E88" d="M 89 55.912000000000006 A 4 4 0 1 1 89.00399999933333 55.911998000000175 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 0, 1,764. кг." style="outline: none;" stroke-width="0.0025244915093498577"></path>
							<path fill="#72A8B8" d="M 269 51.879999999999995 A 4 4 0 1 1 269.00399999933336 51.879998000000164 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 1, 1,860. кг." style="outline: none;" stroke-width="0.000009869571931497845"></path>
							<path fill="#72A8B8" d="M 448 66.16 A 4 4 0 1 1 448.00399999933336 66.15999800000016 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 2, 1,520. кг." style="outline: none;" stroke-width="0.002849604801500538"></path>
							<path fill="#72A8B8" d="M 628 92.2 A 4 4 0 1 1 628.0039999993334 92.19999800000016 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 3, 900. кг." style="outline: none;" stroke-width="0.0025244915093498577"></path>
							<path fill="#72A8B8" d="M 807 39.28 A 4 4 0 1 1 807.0039999993334 39.27999800000017 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 4, 2,160. кг." style="outline: none;" stroke-width="0.002849604801500538"></path>
							<path fill="#72A8B8" d="M 986 71.2 A 4 4 0 1 1 986.0039999993334 71.19999800000016 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 5, 1,400. кг." style="outline: none;"></path>
							<path fill="#72A8B8" d="M 1166 79.6 A 4 4 0 1 1 1166.0039999993332 79.59999800000016 Z" opacity="1" tabindex="-1" role="img" aria-label="x, 6, 1,200. кг." style="outline: none;"></path>
						</g>
						</g>
						<g data-z-index="6" opacity="1" transform="translate(38,45) scale(1 1)" aria-hidden="true" style="cursor: pointer;"><g data-z-index="1" transform="translate(71,30)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[0]['caught'])} кг</text>
						</g>
						<g data-z-index="1" transform="translate(250,26)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[1]['caught'])} кг</text>
						</g>
						<g data-z-index="1" transform="translate(430,40)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[2]['caught'])} кг</text>
						</g>
						<g data-z-index="1" transform="translate(614,66)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[3]['caught'])} кг</text>
						</g>
						<g data-z-index="1" transform="translate(789,13)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[4]['caught'])} кг</text>
						</g>
						<g data-z-index="1" transform="translate(968,45)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[5]['caught'])} кг</text>
						</g>
						<g data-z-index="1" transform="translate(1147,54)" style="cursor: pointer;">
							<text font-family="-Monserat," x="5" data-z-index="1" y="16" style="color: #264156; font-size: 20px; font-weight: bold; fill: #264156;">${numberWithSpaces(dataList[6]['caught'])} кг</text>
						</g>
					</g>
				</svg>`
        containerChart.insertAdjacentHTML('afterbegin', chart) 
}
oReq.send();
}

export default parseExcel;


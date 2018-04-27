function attachEvents() {
    const URL = 'https://judgetests.firebaseio.com/';
    const icons = {'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };
    let upcoming = $('#upcoming');
    let current = $('#current');

    $('#submit').click(getWeather);

    function getWeather() {
        $('#current').empty();
        $.ajax({
            method: 'GET',
            url: URL + 'locations.json'
        }).then(function (res) {
            let location = res.filter(l => l.name === $('#location').val())[0];

            $.ajax({
                method: 'GET',
                url: URL + `forecast/today/${location.code}.json`
            }).then(function (fore) {
                let label = $('<div class="label">Current conditions</div>');
                let spanSymbol = $(`<span class="condition symbol">${icons[fore.forecast.condition]}</span>`);
                current.append(label);
                current.append(spanSymbol);
                let spanCondition = $('<span class="condition">');
                let spanName = $(`<span class="forecast-data">${fore.name}</span>`);
                let spanTemp = $(`<span class="forecast-data">${fore.forecast.low}${icons['Degrees']}/${fore.forecast.high}${icons['Degrees']}</span>`);
                let spanForecast = $(`<span class="forecast-data">${fore.forecast.condition}</span>`);
                spanCondition.append(spanName);
                spanCondition.append(spanTemp);
                spanCondition.append(spanForecast);
                current.append(spanCondition);
            }).catch(displayError);

            $.ajax({
                method: 'Get',
                url: URL + `forecast/upcoming/${location.code}.json`
            }).then(function (resp) {
                upcoming.empty();
                upcoming.append($('<div class="label">Three-day forecast</div>'));
                for(let key in resp['forecast']){
                    let spanUpcoming = $('<span class="upcoming">');
                        let spanSymbol = $(`<span class="symbol">${icons[resp['forecast'][key].condition]}</span>`);
                        let spanTemp = $(`<span class="forecast-data">${resp['forecast'][key].low}${icons['Degrees']}/${resp['forecast'][key].high}${icons['Degrees']}</span>`);
                        let spanForecast = $(`<span class="forecast-data">${resp['forecast'][key].condition}</span>`);
                        spanUpcoming.append(spanSymbol);
                        spanUpcoming.append(spanTemp);
                        spanUpcoming.append(spanForecast);
                    upcoming.append(spanUpcoming);
                }
            }).catch(displayError);

        }).catch(displayError);

        $('#forecast').css('display', 'block');
        upcoming.css('display', 'block');
    }

    function displayError(err) {
        $('#forecast').css('display', 'block');
        $('#current').find('.label').text(`the server doesn’t respond or the location name cannot be found!`);
        $('#upcoming').css('display', 'none');
    }
}
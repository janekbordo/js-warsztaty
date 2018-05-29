$(document).ready(function () {

    var licznik_temp = 1;
    var ilosc_postow = $('.single-post').length;

    function loadData(licznik) {
        //        za pomoca metody getjson, pobierz dane z pierwszego postu z api:
        //        https://jsonplaceholder.typeicode.com/photos/
        $.getJSON('https://jsonplaceholder.typicode.com/photos/' + licznik,
            function (data) {
                console.log(data);

                var figureHolder = document.createElement('figure');
                $(figureHolder).addClass('single-post');

                var pic = document.createElement('img');
                $(pic).attr('src', data.url);

                var figCap = document.createElement('figcaption');
                $(figCap).text(data.id + '. ' + data.title);

                $(figureHolder).append(pic);
                $(figureHolder).append(figCap);

                $('#main').append(figureHolder);

                licznik_temp = licznik;

                if (licznik < ilosc_postow + 10) {
                    loadData(++licznik);
                }
            });
    }

    $('#btn').click(function () {

        licznik_temp++;
        ilosc_postow = $('.single-post').length;
        loadData(licznik_temp);
    })

})

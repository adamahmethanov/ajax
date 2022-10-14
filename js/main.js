$('#hakulomake').submit(function (evt) {
    evt.preventDefault();
    $("#tulos").empty();;
    $("#test").toggle();
    const osoite = $(this).attr('action');
    console.log(this);
    let hakulause = $(this).serialize();
    const url = osoite + '?' + hakulause;

    $.hidden;

    $.getJSON(url, function (sarjat) {
        console.log(sarjat);
        $.each(sarjat, function (i, sarja) {
            console.log(sarja.show.name);

            $('#tulos').append(`<div> <h2 class="text-center"> ${sarja.show.name}  </h2> </div>`);

            $('#tulos').append(
                `<div><img class="center-block rounded-sm" src="${
                    sarja.show.image ?
                        sarja.show.image.medium
                        : 'data:image/jpeg;base64,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'
                }" alt="${sarja.show.name}">   </div>`
            );
            $('#tulos').append(`<div> <h4 class="text-center"> <a href="${sarja.show.officialSite || sarja.show.url}" target="_blank">Linkki kotisivulle</a> </h4></div>`);
            $('#tulos').append(`<div> <h4 class="text-center"> ${sarja.show.genres.join(` | `)} </h4> </div>`);
            $('#tulos').append(`<div> ${sarja.show.summary} </div>\`   `);
            $('#tulos').append(`<div> <hr class="line"> </div>   `);
        });
    });
});
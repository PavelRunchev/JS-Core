function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_rk7VMOY9f/biggestCatches';
    const user = 'pavel';
    const pass = 'guest';
    const base64 = btoa(user + ":" + pass);
    const auth = {"Authorization": "Basic " + base64, "Content-type": "application/json"};
    let catches = $('#catches');
    let readFormData = $('#addForm');

    $('.load').click(loadData);
    $('.add').click(addData);

    function displayCatches(res) {
        catches.empty();
        for(let table of res){
            catches.append($('<div>').addClass('catch').attr('data-id', `${table._id}`)
                .append($('<label>Angler</label>'))
                .append($(`<input type="text" class="angler" value="${table.angler}"/>`))
                .append($('<label>Weight</label>'))
                .append($(`<input type="number" class="weight" value="${table.weight}"/>`))
                .append($('<label>Species</label>'))
                .append($(`<input type="text" class="species" value="${table.species}"/>`))
                .append($('<label>Location</label>'))
                .append($(`<input type="text" class="location" value="${table.location}"/>`))
                .append($('<label>Bait</label>'))
                .append($(`<input type="text" class="bait" value="${table.bait}"/>`))
                .append($('<label>Capture Time</label>'))
                .append($(`<input type="number" class="captureTime" value="${table.captureTime}"/>`))
                .append($('<button class="update">Update</button>').click(updated))
                .append($('<button class="delete">Delete</button>').click(deleted)));
        }
    }
    
    function loadData() {
        let loadRequest = {
            method: 'GET',
            url: URL,
            headers: auth
        };

        $.ajax(loadRequest)
            .then(displayCatches)
            .catch(displayError);
    }

    function addData() {
        let statistic = {
            angler: readFormData.find('.angler').val(),
            weight: Number(readFormData.find('.weight').val()),
            species: readFormData.find('.species').val(),
            location: readFormData.find('.location').val(),
            bait: readFormData.find('.bait').val(),
            captureTime: Number(readFormData.find('.captureTime').val())
        };

        let postRequest = {
            method: 'POST',
            url: URL,
            headers: auth,
            data: JSON.stringify(statistic)
        };

        $.ajax(postRequest)
            .then(loadData)
            .catch(displayError);
    }


    
    function updated() {
        let updateId = $(this).parent().attr('data-id');

        let updateData = {
            angler: $(this).parent().find('.angler').val(),
            weight: Number($(this).parent().find('.weight').val()),
            species: $(this).parent().find('.species').val(),
            location: $(this).parent().find('.location').val(),
            bait: $(this).parent().find('.bait').val(),
            captureTime: Number($(this).parent().find('.captureTime').val())
        };

        let updateRequest = {
          method: 'PUT',
          url: URL + `/${updateId}`,
          headers: auth,
          data: JSON.stringify(updateData)
        };

        $.ajax(updateRequest)
            .then(loadData)
            .catch(displayError);
    }
    
    function deleted() {
        let selectedId = $(this).parent().attr('data-id');

        let deletedTable = {
            method: 'DELETE',
            url: URL + `/${selectedId}`,
            headers: auth
        };

        $.ajax(deletedTable)
            .then(loadData)
            .catch(displayError);
    }

    function displayError(err) {
        console.log("Error");
    }
}
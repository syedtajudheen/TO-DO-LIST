'use strict';

$(function () {

    //using promise fetch(url)
    var promise = fetch('https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc');
    promise.then(function (response) {
        return response.json();
    }).then(function (data) {
        $.each(data, function (key, value) {
            $("#checkbox").prepend('<li><input type="checkbox" id="checkit" class="done"/>&nbsp' + value.title);
            $("#checkit").prop('checked', value.completed);
        });
    }).catch(function (error) {
        return console.log('BAD', error);
    });

    $("#click").click(function () {
        var todo = document.getElementById("gettodo").value;
        console.log(todo);
        //to post data using ajax
        $.ajax({
            type: 'POST',
            url: 'https://jsonprovider.herokuapp.com/todos/',
            data: {
                userID: 1,
                title: todo,
                completed: false
            },
            success: function success(data) {
                return console.log("posted successfully", data);
            }
        });
    });
});
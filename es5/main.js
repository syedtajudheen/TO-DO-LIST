"use strict";

var FETCH_URL = "https://jsonprovider.herokuapp.com/todos/?limit=30&sort=id+desc";
var POST_URL = "https://jsonprovider.herokuapp.com/todos/";

$('#gettodo').keypress(function (event) {
    event.stopPropagation();
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == '13') {
        if ($(this).val() !== '') {
            var todo = $(this).val();
            createTodo(todo);
        }
    }
});

(function ($) {
    //USING PROMISE FETCH(URL)
    fetch(FETCH_URL).then(function (response) {
        return response.json();
    }).then(function (data) {
        $.each(data, function (key, value) {
            $("#checkbox").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>&nbsp' + value.title);
            $("#mycheckbox").prop('check', value.completed);
        });
    }).catch(function (error) {
        return console.log('BAD', error);
    });
})(jQuery);

var createTodo = function createTodo(todo) {
    //let todo = $('#gettodo').val();
    //console.log(todo);


    $.ajax({
        type: 'POST',
        url: POST_URL,
        data: {
            userID: 1,
            title: todo,
            completed: true
        },
        success: function success(data) {
            console.log("posted successfully", data);
        }
    });

    {
        var markup = '<li> <input type="checkbox" id="mycheckbox" class="done"/>' + todo;
        $('#checkbox').prepend(markup);
        $('#gettodo').val('');
    }
};jQuery;
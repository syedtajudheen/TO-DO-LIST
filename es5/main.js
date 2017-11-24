"use strict";

/**********************************************************TO-DO LIST********************************************************************/
var FETCH_URL = "https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc";
var POST_URL = "https://jsonprovider.herokuapp.com/todos/";

$(function () {
                //USING PROMISE FETCH(URL)
                var promise = fetch(FETCH_URL);
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
                //CLICK_FUNCTION
                $("#click").click(function () {
                    var todo = document.getElementById("gettodo").value;
                    console.log(todo);
                    //to post data using ajax
                    $.ajax({
                        type: 'POST',
                        url: POST_URL,
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
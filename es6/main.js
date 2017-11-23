/**********************************************************TO-DO LIST********************************************************************/
const FETCH_URL= "https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc";
const POST_URL="https://jsonprovider.herokuapp.com/todos/";

$(() => {
                //USING PROMISE FETCH(URL)
                let promise =  fetch(FETCH_URL);
                promise.then(response => response.json())
                .then(data => {
                    $.each(data,(key,value) => {
                        $("#checkbox").prepend('<li><input type="checkbox" id="checkit" class="done"/>&nbsp' + value.title );
                        $("#checkit").prop('checked', value.completed);
                    })
                })
                .catch(error => console.log('BAD' , error))
                //CLICK_FUNCTION
                $("#click").click(() => {
                                let todo = document.getElementById("gettodo").value;
                                console.log(todo);
                                //to post data using ajax
                                $.ajax({
                                    type: 'POST',
                                    url: POST_URL,
                                    data: {
                                        userID: 1,
                                        title: todo,
                                        completed: false,
                                    },
                                    success: ((data) =>  console.log("posted successfully", data) )       
                                });                     
                });        
});

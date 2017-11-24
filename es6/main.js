
const FETCH_URL ="https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc";
const POST_URL ="https://jsonprovider.herokuapp.com/todos/"


$('#gettodo').keypress(function (event) {
    event.stopPropagation();
 let keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {    
        if ($(this).val() !== '') {
           let todo = $(this).val();
            createTodo(todo);
        } 
        else{
            alert("alert");
        }
        
       
    }
});




(($) => {
    //USING PROMISE FETCH(URL)
    fetch(FETCH_URL).then(response => response.json())
    .then(data => {
        $.each(data,(key,value) => {
            $("#checkbox").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>&nbsp' + value.title );
            $("#mycheckbox").prop('checked', value.completed);
        })
    })
    .catch(error => console.log('BAD' , error))
})(jQuery);


let createTodo=(text) => {
    let todo = $('#gettodo').val();
    //console.log(todo);
  
            $.ajax ({
                type: 'POST',
                url: POST_URL,
                data:{
                    userID: 1,
                    title: todo,
                    completed: true,
                },
                success: (data) => {
                console.log("posted successfully", data); 
                }
            });
    
      {
        var markup = '<li> <input type="checkbox" id="mycheckbox" class="done"/>' + text ;
        $('#checkbox').prepend(markup);
        $('#gettodo').val('');
    }};(jQuery)
    




  
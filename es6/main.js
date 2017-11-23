
$(() => {
    
            //using promise fetch(url)
            let promise =  fetch('https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc');
            promise.then(response => response.json())
            .then(data => {
                $.each(data,(key,value) => {
                    $("#checkbox").prepend('<li><input type="checkbox" id="checkit" class="done"/>&nbsp' + value.title );
                    $("#checkit").prop('checked', value.completed);
                })
            })
            .catch(error => console.log('BAD' , error))
        
    $("#click").click(() => {
                    let todo = document.getElementById("gettodo").value;
                    console.log(todo);
                    //to post data using ajax
                   $.ajax({
                        type: 'POST',
                        url: 'https://jsonprovider.herokuapp.com/todos/',
                        data: {
                            userID: 1,
                            title: todo,
                            completed: false,
                        },
                        success: ((data) =>  console.log("posted successfully", data) )       
                    });
                    
                    
    });
    
})

// IIFE -- Immediately Invoked Function Expression

// app.js - Irits Anna Mathew - 301145346 - 23-10-2021
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/bcontact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();
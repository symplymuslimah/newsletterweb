document.addEventListener("DOMContentLoaded", function () {
    const newsForm = document.getElementById("news-form");
const emailInput = document.getElementById("email");
const Notifications = document.getElementById("notification");

     newsForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = emailInput.value;

        if (isValidEmail(email)) {
       
            Notifications.classList.remove("hidden");
            const Validation = document.getElementById('validation');
            Validation.style.display = 'none';
    
           const All = document.querySelector('.news-container');
           All.style.display = 'none';
        } else {
            Notifications.classList.add("hidden");
            const Validation = document.getElementById('validation');
            Validation.style.display = 'block';
    
        }
    });


     function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

  const Dismiss = document.getElementById("dismiss");
    Dismiss.addEventListener('click',function(){
          Notifications.classList.add("hidden");
          const All = document.querySelector('.news-container');
           All.style.display = 'grid';
    }) 

});
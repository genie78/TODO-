$(document).ready(function () {
    let listItem = $('input');
    let inputDiv = $('.input-div');
    let errorDiv = $('.error-div');
    let numberOfValue = 0;


    errorDiv.hide();

    const addToList = () => {

        if (listItem.val() == ''){
            errorDiv.show(2000);
            setTimeout(()=> errorDiv.hide(2000), 2000);
        }else {
            let newDiv = $('<div>');
            newDiv.attr('value', listItem.val());
            newDiv.addClass('input-group input-div border-0');
            inputDiv.append(newDiv);

            newDiv.append(
                `<input type="text" disabled value="${listItem.val()}" class="form-control border-0" >
                    
                <div class="input-group-append">
                    <button value="${listItem.val()}" type="button" class="close border border-secondary h-50 d-flex align-items-center rounded-circle remove-button mx-3" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`
            );
            clearInput();
        }
        listItem.focus();
    }

    const clearInput = () => listItem.val('');

    var removeFromList = function () {
        var valueOfElement = $(this).val();
        for (let i of $('div')){
            let targetDivsValue = i.getAttribute('value');
            if (targetDivsValue == valueOfElement){
                i.remove();
            }
        }
        console.log(valueOfElement);
    }
    
    $(document).on('click', 'button.remove-button' , removeFromList);
    $('.add-button').on('click', addToList);
    $('.close-button').on('click', clearInput);
});



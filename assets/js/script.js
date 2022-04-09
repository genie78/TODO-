$(document).ready(function () {
    let listItem = $('input');
    let inputDiv = $('.input-div');
    let errorDiv = $('.error-div');
    let numberOfValue = 0;


    errorDiv.hide();


    const addToList = () => {

        if (listItem.val() == ''){
            listItem.focus();
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
                    <button value="${listItem.val()}" type="button" class="close border border-secondary h-50 d-flex align-items-center rounded-circle remove-button mx-3" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>  `
            );
            listItem.focus();
            clearInput();
        }
    }


    const clearInput = () => listItem.val('');
    let valueName = $('.close-button').attr('class');
    console.log(valueName);
    const removeFromList = () => {
        let valueName = $('.remove-button').attr('class');
        console.log(valueName);
    }

    $('.add-button').on('click', addToList);
    $('.close-button').on('click', clearInput);
    $('.remove-button').on('click', removeFromList);
});


$(document).ready(function () {
    let listItem = $('.main-input');
    let inputDiv = $('.input-div');
    let errorDiv = $('.error-div');
    let todoList = [];
    let indexOfArr = 0;

    errorDiv.hide();

    const addToList = () => {

        if (listItem.val().toLowerCase() == ''){
            errorDiv.show(2000);
            setTimeout(()=> errorDiv.hide(2000), 2000);
        }else {
            let newDiv = $('<div>');
            newDiv.attr('value', listItem.val().toLowerCase());
            newDiv.addClass(`input-group input-div border-0 ${listItem.val().toLowerCase()}`);
            inputDiv.append(newDiv);

            newDiv.append(
                `<input type="text" disabled value="${listItem.val().toLowerCase()}" class="${listItem.val().toLowerCase()} form-control border-0" >
                    
                <div class="input-group-append">
                    <button value="${listItem.val().toLowerCase()}" type="button" class="${listItem.val().toLowerCase()} close border border-secondary h-50 d-flex align-items-center rounded-circle remove-button mx-3" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`
            );
            todoList.push(listItem.val().toLowerCase());
            clearInput();
        }
        listItem.focus();
    }

    const clearInput = () => listItem.val('');

    const removeFromList = function () {
        let valueOfElement = $(this).val();
        for (let i of $('div')){
            let targetDivsValue = i.getAttribute('value');
            if (targetDivsValue == valueOfElement){
                i.remove();
                todoList.splice(todoList.indexOf(targetDivsValue), 1);                
            }
        }
    }

    const sortList = () => {
        clearInput();
        todoList.sort();

        for (let i of $('div')){
            let targetDivsValue = i.getAttribute('value');
            if ((targetDivsValue != undefined) || (targetDivsValue != null)){
                $(`input.${targetDivsValue}`).val(todoList[indexOfArr]);                
                indexOfArr+=1;
            }
        }   
        indexOfArr = 0;
    }

    $(document).on('click', 'button.remove-button' , removeFromList);
    $('.add-button').on('click', addToList);
    $('.close-button').on('click', clearInput);
    $('.sort-button').on('click', sortList);
});



Validator = function(options){

    // hàm get parent
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element=element.parentElement;
        }
    }

    var selectorRules={};

    function validate(inputElement,rule){
        var errorMessage;
        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector);


        // lặp qua từng rule của mỗi input
        var rules = selectorRules[rule.selector];
        for(var i = 0 ; i < rules.length ; i++){

            // xử lý input radio / checkbox
            switch(inputElement.type){
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);

            }

            // errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage){
         errorElement.innerText=errorMessage;
        //  inputElement.parentElement.classList.add('invalid');
        getParent(inputElement, options.formGroup).classList.add('invalid');
        
        }
        else{
         errorElement.innerText='';
        //  inputElement.parentElement.classList.remove('invalid')
        getParent(inputElement, options.formGroup).classList.remove('invalid');

        }
        return !errorMessage;
    }




    var formElement = document.querySelector(options.form);
    
    if(formElement){


        // khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault();

            // đặt biến để ktra form có valid hay không
            var isValid=true;

            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var validValidate = validate(inputElement,rule);

                if(!validValidate){
                    isValid = false;
                }
            })
                
            if(isValid){
                if(typeof options.onSubmit == 'function'){
                    
                    // lấy dữ liệu từ input
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    // convert sang array
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                            // values[input.name] = input.value;
                            switch(input.type){
                                case 'checkbox':
                                    if(!input.matches(':checked')) return values;
                                    
                                    if(!Array.isArray(values[input.name])){
                                        values[input.name] = [];
                                    }
                                    values[input.name].push(input.value);
                                    break;
                                case 'radio':
                                    values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                    break;
                                case 'file':
                                    values[input.name] = input.files;
                                    break;
                                default:
                                    values[input.name] = input.value;
                            }
                            return values;
                    },{})
                    options.onSubmit(formValues);
                } else{
                    formElement.submit();
                }
            }
        }

        // lặp qua tất cả các rule và lắng nghe sự kiện
        options.rules.forEach(function(rule){
            // var inputElement = formElement.querySelector(rule.selector);
            var inputElements = formElement.querySelectorAll(rule.selector);
            // convert sang array
            Array.from(inputElements).forEach(function (inputElement){
                     // khi blur ra ngoài
                     inputElement.onblur=function(){
                        validate(inputElement,rule);
                    }
    
                    // khi đang nhập input
                    inputElement.oninput=function(){
                        // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                        var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector);
    
                        errorElement.innerText='';
                        // inputElement.parentElement.classList.remove('invalid');
                        getParent(inputElement, options.formGroup).classList.remove('invalid');
    
                        
                    }
            })


            // lưu lại các rule vào 1 mảng
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }

            // if(inputElement){

            //     // // khi blur ra ngoài
            //     // inputElement.onblur=function(){
            //     //     validate(inputElement,rule);
            //     // }

            //     // // khi đang nhập input
            //     // inputElement.oninput=function(){
            //     //     // var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            //     //     var errorElement = getParent(inputElement, options.formGroup).querySelector(options.errorSelector);

            //     //     errorElement.innerText='';
            //     //     // inputElement.parentElement.classList.remove('invalid');
            //     //     getParent(inputElement, options.formGroup).classList.remove('invalid');

                    
            //     // }
            // }
        })

      
    }


}


// định nghĩa các rule
Validator.isRequired=function(selector,message){
    return {
        selector: selector,
        test : function(value){
            return value ? undefined : message || 'Vui lòng nhập trường này';
            // if(value){
            //     return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
            // }else{
            //     return value ? undefined : message || 'Vui lòng nhập trường này';
            // }
        }
    }
}

Validator.isEmail=function(selector, message){
    return {
        selector: selector,
        test : function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là Email';
        }
    }
}

Validator.minLength=function(selector,min, message){
    return{
        selector: selector,
        test : function(value){
            return value.length >= min ? undefined : message || `Mật khẩu phải có ít nhất ${min} ký tự`;
        }
    }
}

Validator.isConfirmed=function(selector, VALUE, message){
    return{
        selector: selector,
        test : function(value){
            return value === VALUE() ? undefined : message || `Giá trị nhập vào không chính xác`;
        }
    }

}

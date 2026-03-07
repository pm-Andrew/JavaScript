// Loading the DOM
window.addEventListener('DOMContentLoaded', () => {
    // bind an event listener to the form submission event
    document.querySelector("form").addEventListener('submit', (e) => {
        // get a handle to each of the input field
        const firstname = document.querySelector('#firstname');
        const lastname = document.querySelector('#lastname');
        const address = document.querySelector('#address');
        const city = document.querySelector('#city');
        const state = document.querySelector('#state');
        const product = document.querySelector('#product');
        const quantity = document.querySelector('#quantity')
        const terms = document.querySelector('#terms');
        const feedback = document.querySelector('#feedback');
        // handle to error buckets
        const errorBtop = document.querySelector('#errorBtop');
        const errorBbot = document.querySelector('#errorBbot');
        // empty array for error buckets
        const errorBuckets = [];

        // undefined variable for Error Buckets
        let errorEmptyField

        // check to see if the first name is blank
        if (firstname.value.trim() === '') {
            // prevent blank field being submitted 
            e.preventDefault();
            // style the firstname field if empty
            firstname.style.border = '2px solid crimson'
            // errorEmptyField is a boolean checking for undefined inputs
            if (errorEmptyField === undefined) {
                errorEmptyField = firstname
                firstname.focus()
            }
            // If blank pushes message to Error Buckets
            errorBuckets.push('First Name')
        };

        // check to see if the last name is blank
        if (lastname.value.trim() === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the lastname field if empty
            lastname.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('Last Name')
            lastname.focus()
        };

        // check to see if the address is blank
        if (address.value.trim() === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the address field  if empty
            address.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('Address')
            address.focus()
        };

        // check to see if city is blank
        if (city.value.trim() === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the city field if empty
            city.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('City')
            city.focus()
        };

        // check if state is blank
        if (state.value === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the firstname field if empty
            state.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('State')
            state.focus()
        };

        // check to see if product is blank
        if (product.value === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the firstname field if empty
            product.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('Product')
            product.focus()
        };

        // check to see if Quantity is blank
        if (quantity.value === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the firstname field if empty
            quantity.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('Quantity')
            quantity.focus()
        };

        // check if contact is blank
        if (!document.querySelector('input[name="contact[]"]:checked')) {
            // prevent blank field being submitted
            e.preventDefault();
            // set the focus on the first radio button in the group
            document.querySelector('input[name="interest[]]:checked').focus();
            // If blank pushes message to Error Buckets
            errorBuckets.push('Contact')
        };

        // check if terms is left unchecked
        if (!terms.checked) {
            // prevent blank field being submitted
            e.preventDefault();
            //style the terms field if empty
            terms.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('Terms & Conditions')
            !terms.focus()
        };

        // check if interest is not clicked
        if (!document.querySelector('input[name="interest[]"]:checked')) {
            // prevent blank field being submitted
            e.preventDefault();
            // set the focus on the first radio button in the group
            document.querySelector('input[name="interest[]"]').focus();
            // If blank pushes message to Error Buckets
            errorBuckets.push('Interest')
        };

        // See if feedback is left empty
        if (feedback.value.trim() === '') {
            // prevent blank field being submitted
            e.preventDefault();
            //style the firstname field 
            feedback.style.border = '1px solid crimson'
            // show the requiredfield span if empty
            terms.style.border = '2px solid crimson'
            // If blank pushes message to Error Buckets
            errorBuckets.push('Feedback')
            feedback.focus()
        };

        // check out to see if human didn't finish filling out fields
        if (errorBuckets.length > 0) {
            let message = '<p>Please supply values for these fields: </p><ul>';
            errorBuckets.forEach((error) => {
                message = message + `<li>${error}</li>`
            });
            message = message + '</ul>';
            errorBtop.style.padding = "15px";
            errorBbot.style.padding = "15px";
            errorBtop.innerHTML = message;
            errorBbot.innerHTML = message;
        };
    });
});
window.addEventListener('DOMContentLoaded', () => {
    // getting a handle to 
    // notebook div
    const notebook = document.querySelector('#notebook')
    // submit button
    const submitBtn = document.querySelector('#submitBtn')
    // reset button
    const resetBtn = document.querySelector('#resetBtn')
    // note being made
    const jot = document.querySelector('#jot')

    // listen for reset button
    resetBtn.addEventListener('click', () => {
        // clear localStorage
        localStorage.clear()
        // clear notes created in notebook
        notebook.innerHTML = ''
    })

    // when we get notes it's stored as a string in localStorage
    let notes = localStorage.getItem('notes')

    // Sending saved jot as a note in notebook
    // if notes is empty
    if (notes != null) {
        // this turns notes into an array
        notes = JSON.parse(notes)

        // Saving what was in typed in jot now as notes
        let jotsTxt = '';
        // forEach notes saved..
        notes.forEach((n) => {
            // create a p element 
            jotsTxt += `<p>${n}</p>`
        })
        // save jotsTxt inside the notebook handle
        notebook.innerHTML = jotsTxt
    }

    // New note
    submitBtn.addEventListener(`click`, () => {
        const newJot = jot.value
        // when we get notes it's stored as a string in localStorage
        notes = localStorage.getItem(`notes`)
        // this turns notes into an array
        notes = JSON.parse(notes);

        // if notes is empty
        if (notes != null) {
            // push newJot to show in notebook 
            notes.push(newJot);
        } else {
            notes = [newJot]
        }
        // stringify the notes array
        notes = JSON.stringify(notes)
        // save notes in notes
        localStorage.setItem('notes', notes)


        if (notes != null) {
            // calling notes from the localStorage
            notes = JSON.parse(notes)
            let jotsTxt = ''
            notes.forEach((n) => {
                // create an p element that stores the note
                jotsTxt += `<p class="mb-3">${n}</p>`
            })
            // set innerHTML value to jotsTxt
            notebook.innerHTML = jotsTxt
        }
        // jot is empty
        jot.value = ''

    })
})
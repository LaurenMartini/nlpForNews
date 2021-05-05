import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

//import css/sass
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//event listener to check that page is loaded
window.addEventListener('DOMContentLoaded', (event)=> {
    console.log('DOM fully loaded and parsed');

    //submit event listener added to form
    document.querySelector('form').addEventListener('submit', handleSubmit);
})

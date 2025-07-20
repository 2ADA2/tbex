import '../css/style.css'
import {downloadPDF} from "./downloadPdf.js";

const downloader = document.getElementById('pdf-downloader');

downloader.addEventListener('click', (e) => {
    downloadPDF();
})


document.addEventListener("click", (e) => {
    let target = e.target
    if (target.classList.contains('changeable')) {
        const modalForm = document.getElementById('modal-form');
        const modal = document.getElementById('modal');
        const modalBackground = document.getElementById('modal-background');
        const cancelButton = document.getElementById('cancel-button');
        const newText = document.getElementById('new-text');


        modal.className = "background-modal-show modal"
        modalBackground.className = "modal-background-show"
        newText.value = target.innerText;
        newText.focus()

        document.addEventListener("keydown", (e) => {
            if(e.key === "Escape"){
                closeModal();
            }
        })

        document.body.style.overflow = "hidden"

        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        })

        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(!target){
                return
            }
            target.innerText = newText.value
            closeModal();
            let parent = target.parentElement
            while (!parent.classList.contains('changeable-parent')) {
                parent = parent.parentElement
            }
            parent.classList.add('changeable-parent-animated')
            setTimeout(() => {
                parent.classList.remove('changeable-parent-animated')
                target = null
            },200)

        })

        function closeModal() {
            modalBackground.className = "background-modal-hidden";
            modal.className = "modal-hidden"
            document.body.style.overflow = "auto"
        }

    }
})




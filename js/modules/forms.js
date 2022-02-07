import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    //Forms
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы скоро с Вами свяжемся...',
        failure: 'Что-то пошло не так'
    };
    forms.forEach(item => {
        bindPostData(item);
    });//на каждую форму вызовет postData

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('img');
            //statusMessage.classList.add('status');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            //statusMessage.textContent = message.loading;
            //form.appendChild(statusMessage);
            
            form.insertAdjacentElement('afterend', statusMessage);
            
            //const request = new XMLHttpRequest();
            //request.open('POST', 'server.php');
            
            //request.setRequestHeader('Content-type', 'multipart/form-data');
            //request.setRequestHeader('Content-type', 'application/json, charset=utf-8');
            
            const formData = new FormData(form);
            
            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            //сначала берем formData c данными формы, превращаем в массив массивов чтобы работать с ней,
            //превращаем в объект и затем в json и отправляем json переменную-объект на сервер

            //postData('http://localhost:3000/requests', JSON.stringify(object))
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        

            //request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         //statusMessage.textContent = message.success;
            //         showThanksModal(message.success);
            //         statusMessage.remove();
            //         form.reset();
            //         //setTimeout(() => {
            //             //statusMessage.remove();
            //         //}, 2000);
            //     } else {
            //         //statusMessage.textContent = message.failure;
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class = "modal__content">
                <div class = "modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
            `;
            document.querySelector('.modal').append(thanksModal);//добавляем модальное окно на страницу
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal('.modal');
            }, 4000);
    };
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // });
    ///
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({name: 'Alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //    .then(response => response.json())
    //    .then(json => console.log(json));

        //fetch('db.json')
        fetch('http://localhost:3000/menu')// возвращается промис-обещание
        .then(data => data.json())//превратить в обычный js объект
        .then(res => console.log(res));

    }
    //module.exports = forms;
    export default forms;//ES6
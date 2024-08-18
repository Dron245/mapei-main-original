export function modalOpen() {
    const openModalBtn = document.querySelector('.share__open')
    const modalContent = document.querySelector('.share__wrapper')
    // const modalCloseBtn = document.querySelector('.modal-registrate__content--close')

    openModalBtn.addEventListener('click', function (e) {
        openModal()
    })


    function openModal() {
        console.log(1)
        modalContent.classList.remove('fadeOut')
        modalContent.classList.remove('none')
        modalContent.classList.add('fadeIn')
    }

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('share__wrapper') || event.target.classList.contains('modal-registrate__content--close ')) {
            modalContent.classList.add('fadeOut');
            modalContent.classList.remove('fadeIn');
        }
    });




    document.querySelector('.share__link--whatsupp').addEventListener('click', function() {


        var pdfUrl = `https://newmap.titix.ru${modalContent.closest('.share__wrapper').getAttribute('data-link')}`;
        var message = 'Ссылка на PDF: ' + pdfUrl;
    
        var whatsappUrl = 'whatsapp://send?text=' + encodeURIComponent(message);

        window.location.href = whatsappUrl;
    });
    
    document.querySelector('.share__link--vk').addEventListener('click', function() {
        var pdfUrl = `https://newmap.titix.ru${modalContent.closest('.share__wrapper').getAttribute('data-link')}`;
        var message = 'Ссылка на PDF: ' + pdfUrl;
        var vkUrl = 'https://vk.com/share.php?url=' + encodeURIComponent(pdfUrl) + '&title=' + encodeURIComponent(message);
        window.open(vkUrl, '_blank');
    });
    
    document.querySelector('.share__link--telegramm').addEventListener('click', function() {
        var pdfUrl = `https://newmap.titix.ru${modalContent.closest('.share__wrapper').getAttribute('data-link')}`;
        var message = 'Ссылка на PDF: ' + pdfUrl;
        var telegramUrl = 'https://t.me/share/url?url=' + '&text=' + 'Ссылка на PDF' + encodeURIComponent(message);
        window.open(telegramUrl, '_blank');
    });
//     document.querySelector('.share__link--mail').addEventListener('click', function() {
//         var pdfUrl = 'https://newmap.titix.ru//templates/demomarket/php/content/dompdf/result_pdf/result.pdf';
//         var message = 'Ссылка на PDF: ' + pdfUrl;
//         var subject = 'PDF File';
//         var emailUrl = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
//         window.location.href = emailUrl;
//     });
}
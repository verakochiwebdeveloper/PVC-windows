const tabs = () => {
    const tabPanel = document.querySelectorAll('.service-header');
    const tabsContent = document.querySelectorAll('.service-tab');
    const tab = document.querySelectorAll('.service-header-tab');

    tabPanel.addEventListner('click', (event) => {
        if (event.target.closest('.service-header-tab')) {
            const tabBtn = event.target.closest('.service-header-tab')
            tabs.forEach(tab, index => {
                if(tab === event.target) {
                    tab.classList.add('active')
                    tabsContent[index].classList.remove('d-none')
                } else {
                    tab.classList.remove('active')
                    tabsContent[index].classList.add('d-none')
                }
            });
        }
    })

   }
   
   export default tabs
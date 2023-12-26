const sidebar = document.querySelector('[data-sidebar');
const sidebarListItems = document.querySelectorAll('[data-list-item');
const details = document.querySelectorAll('details');

sidebar.addEventListener('mouseover', () => {
    sidebar.classList.add('open')
})

sidebar.addEventListener('mouseout', () => {
    sidebar.classList.remove('open')
})

sidebarListItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {

        // if the same listitem is 'selected', unselect it
        if (listItem.classList.contains('selected')) {
            listItem.classList.remove('selected');

            // collapse the details elements
            details.forEach((detail) => {
                detail.removeAttribute('open');
            })
            
            return;
        }
        
        // Remove the 'selected' class from all elements
        sidebarListItems.forEach((element) => {
          element.classList.remove('selected');
        });

        // collapse the details elements
        details.forEach((detail) => {
            detail.removeAttribute('open');
        })

        // Add the 'highlight' class to the clicked element
        listItem.classList.add('selected')

    });
});

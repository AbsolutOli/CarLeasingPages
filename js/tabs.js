const tabsList = document.querySelectorAll('.choosecar__tab');
const itemsList = document.querySelectorAll('.choosecar__items');

document.addEventListener('click', swapItem)

function swapItem(event) {
    let targetItem = event.target;
    let currentItem = null;
    let newItem = null;

    if (targetItem.closest('.choosecar__tab')) {
        tabsList.forEach((tab, index) => {
            if (tab.classList.contains('choosecar__tab_active')) {
                currentItem = index;
            }
            if (targetItem === tab) {
                newItem = index;
            }
        })

        tabsList[currentItem].classList.remove('choosecar__tab_active');
        itemsList[currentItem].classList.remove('choosecar__items_active');

        tabsList[newItem].classList.add('choosecar__tab_active');
        itemsList[newItem].classList.add('choosecar__items_active');
    }
}
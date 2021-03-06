/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const dom_fragment = document.createDocumentFragment();
const section_1 = document.getElementById('#section1');
const section_2 = document.getElementById('#section2');
const section_3 = document.getElementById('#section3');
const all_sections_list  = document.querySelectorAll('.landing__container');
const mainMenuDiv = document.querySelector('.navbar__menu');
const myNavBarList = document.querySelector('ul');
console.log("# of page sections: " + all_sections_list.length);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//check if an element is in the ViewPort
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    
    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
      );
    
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBarElements(){
    // add an ID to the heading's sibling element
    myNavBarList.setAttribute('id', '#navbar__list');
    //const myNavBarList = document.querySelector('#navbar__list');
    //myNavBarList.setAttribute('class', 'navbar__menu');
    for (let i = 0; i < all_sections_list.length; i++){
        const myNavBarListItem = document.createElement('a');
        myNavBarListItem.setAttribute('class', 'menu__link')
        //Retrieve the section's title 
        const sectionTitle = all_sections_list[i].querySelector('h2').innerHTML;
        //Add the section's title to the menu nav bar
        myNavBarListItem.textContent = sectionTitle;
        console.log('Navbar item text content: ' + myNavBarListItem.textContent);
        const section_title = '#' + sectionTitle.toLowerCase();
        const section_id = section_title.replace(/\s+/g, '');
        myNavBarListItem.setAttribute('href', section_id)
        myNavBarListItem.setAttribute('id', sectionTitle.toLowerCase().replace(/\s+/g, '') + '_menu')
        console.log('Navbar item outer HTML: ' + myNavBarListItem.outerHTML);
        myNavBarList.appendChild(myNavBarListItem);
        console.log('NavBar div HTML: ' + myNavBarList.outerHTML);
    }
    //mainHeading.insertAdjacentHTML('afterbegin', myNavBarDiv)
    dom_fragment.appendChild(myNavBarList);
}

// Add class 'active' to section when near top of viewport
function setActiveElementOnScroll(){
    //listen to scroll events and set your-active-class class to section in view
    document.addEventListener('scroll', function(evt) {
        for (let i = 0; i < all_sections_list.length; i++){
            //Retrieve the active section
            const active_section = all_sections_list[i];
            //Add the section's title to the menu nav bar
            if (elementInViewport(active_section)) {
                console.log(active_section.querySelector('h2').innerHTML +  ' is in the ViewPort');
                active_section.setAttribute('class', 'your-active-class');
                //set the respective menu link to it's active/hover state
                const active_section_title = active_section.querySelector('h2').innerHTML.toLowerCase();
                const active_section_id = active_section_title.replace(/\s+/g, '');
                console.log('Active section ID: ' + active_section_id);
                const nav_bar_list_item = document.querySelector('#' + active_section_id + '_menu');
                nav_bar_list_item.classList.add('active_section');
                //Remove active-class from the other menu items (lazy method :/)
                if (i == 0){
                    console.log("At section 1, removing active-class from other menu items")
                    const active_section_1 = all_sections_list[i+1];
                    const active_section_2 = all_sections_list[i+2];
                    const active_section_3 = all_sections_list[i+3];
                    //remove 'active-class' from section one
                    const active_section_title_1 = active_section_1.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_1 = active_section_title_1.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_1);
                    const nav_bar_list_item_1 = document.querySelector('#' + active_section_id_1 + '_menu');
                    if (nav_bar_list_item_1.classList.contains('active_section')){
                        nav_bar_list_item_1.classList.remove('active_section')
                    }
                    
                    //remove 'your-active-class' from section two
                    const active_section_title_2 = active_section_2.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_2 = active_section_title_2.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_2);
                    const nav_bar_list_item_2 = document.querySelector('#' + active_section_id_2 + '_menu');
                    if (nav_bar_list_item_2.classList.contains('active_section')){
                        nav_bar_list_item_2.classList.remove('active_section')
                    }

                    //remove 'your-active-class' from section 3
                    const active_section_title_3 = active_section_3.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_3 = active_section_title_3.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_3);
                    const nav_bar_list_item_3 = document.querySelector('#' + active_section_id_3 + '_menu');
                    if (nav_bar_list_item_3.classList.contains('active_section')){
                        nav_bar_list_item_3.classList.remove('active_section')
                    }
                } else if (i == 1){
                    console.log("At section 2, removing active-class from other menu items")
                    const active_section_1 = all_sections_list[i-1];
                    const active_section_2 = all_sections_list[i+1];
                    const active_section_3 = all_sections_list[i+2];
                    //remove 'active-class' from section one
                    const active_section_title_1 = active_section_1.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_1 = active_section_title_1.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_1);
                    const nav_bar_list_item_1 = document.querySelector('#' + active_section_id_1 + '_menu');
                    if (nav_bar_list_item_1.classList.contains('active_section')){
                        nav_bar_list_item_1.classList.remove('active_section')
                    }
                    
                    //remove 'your-active-class' from section two
                    const active_section_title_2 = active_section_2.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_2 = active_section_title_2.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_2);
                    const nav_bar_list_item_2 = document.querySelector('#' + active_section_id_2 + '_menu');
                    if (nav_bar_list_item_2.classList.contains('active_section')){
                        nav_bar_list_item_2.classList.remove('active_section')
                    }

                    //remove 'your-active-class' from section 3
                    const active_section_title_3 = active_section_3.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_3 = active_section_title_3.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_3);
                    const nav_bar_list_item_3 = document.querySelector('#' + active_section_id_3 + '_menu');
                    if (nav_bar_list_item_3.classList.contains('active_section')){
                        nav_bar_list_item_3.classList.remove('active_section')
                    }
                } else if (i == 2){
                    console.log("At section 3, removing active-class from other menu items")
                    const active_section_1 = all_sections_list[i-2];
                    const active_section_2 = all_sections_list[i-1];
                    const active_section_3 = all_sections_list[i+1];
                    //remove 'active-class' from section one
                    const active_section_title_1 = active_section_1.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_1 = active_section_title_1.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_1);
                    const nav_bar_list_item_1 = document.querySelector('#' + active_section_id_1 + '_menu');
                    if (nav_bar_list_item_1.classList.contains('active_section')){
                        nav_bar_list_item_1.classList.remove('active_section')
                    }
                    
                    //remove 'your-active-class' from section two
                    const active_section_title_2 = active_section_2.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_2 = active_section_title_2.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_2);
                    const nav_bar_list_item_2 = document.querySelector('#' + active_section_id_2 + '_menu');
                    if (nav_bar_list_item_2.classList.contains('active_section')){
                        nav_bar_list_item_2.classList.remove('active_section')
                    }

                    //remove 'your-active-class' from section 3
                    const active_section_title_3 = active_section_3.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_3 = active_section_title_3.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_3);
                    const nav_bar_list_item_3 = document.querySelector('#' + active_section_id_3 + '_menu');
                    if (nav_bar_list_item_3.classList.contains('active_section')){
                        nav_bar_list_item_3.classList.remove('active_section')
                    }
                }else if (i == 3){
                    console.log("At section 4, removing active-class from other menu items")
                    const active_section_1 = all_sections_list[i-3];
                    const active_section_2 = all_sections_list[i-2];
                    const active_section_3 = all_sections_list[i-1];
                    //remove 'active-class' from section one
                    const active_section_title_1 = active_section_1.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_1 = active_section_title_1.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_1);
                    const nav_bar_list_item_1 = document.querySelector('#' + active_section_id_1 + '_menu');
                    if (nav_bar_list_item_1.classList.contains('active_section')){
                        nav_bar_list_item_1.classList.remove('active_section')
                    }
                    
                    //remove 'your-active-class' from section two
                    const active_section_title_2 = active_section_2.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_2 = active_section_title_2.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_2);
                    const nav_bar_list_item_2 = document.querySelector('#' + active_section_id_2 + '_menu');
                    if (nav_bar_list_item_2.classList.contains('active_section')){
                        nav_bar_list_item_2.classList.remove('active_section')
                    }

                    //remove 'your-active-class' from section 3
                    const active_section_title_3 = active_section_3.querySelector('h2').innerHTML.toLowerCase();
                    const active_section_id_3 = active_section_title_3.replace(/\s+/g, '');
                    console.log('Active section ID: ' + active_section_id_3);
                    const nav_bar_list_item_3 = document.querySelector('#' + active_section_id_3 + '_menu');
                    if (nav_bar_list_item_3.classList.contains('active_section')){
                        nav_bar_list_item_3.classList.remove('active_section')
                    }
                }
            }else{
                console.log("Error checking whether element is in viewPort")
            }
        }
    })
}

// Scroll to anchor ID using scrollTo event
function navBarClickEvents(){
    const all_menu_items = document.querySelectorAll('.navbar__menu .menu__link');
    console.log("# of menu links: " + all_menu_items.length);
    for (let i = 0; i < all_menu_items.length; i++){
        //set click listener on list item
        const menu_item = all_menu_items[i];
        menu_item.addEventListener('click', function(e){
            console.log('The list item was clicked!');
            //Retrieve the corresponding section and set the your-active-class
            const section_title = '#' + menu_item.innerHTML.toLowerCase();
            const section_id = section_title.replace(/\s+/g, '');
            console.log('Active section id: ' + section_id);

            //clear your-active-class from the other sections. (lazy method :/)
            if (i == 0){
                console.log("At section 1, removing your-active-class from other sections")
                const menu_item_1 = all_menu_items[i+1];
                const menu_item_2 = all_menu_items[i+2];
                const menu_item_3 = all_menu_items[i+3];
                //remove 'your-active-class' from section one
                const section_title_1 = '#' + menu_item_1.innerHTML.toLowerCase();
                const section_id_1 = section_title_1.replace(/\s+/g, '');
                const active_section_1 = document.querySelector(section_id_1); 
                active_section_1.classList.remove('your-active-class');
                
                //remove 'your-active-class' from section two
                const section_title_2 = '#' + menu_item_2.innerHTML.toLowerCase();
                const section_id_2 = section_title_2.replace(/\s+/g, '');
                const active_section_2 = document.querySelector(section_id_2); 
                active_section_2.classList.remove('your-active-class');

                //remove 'your-active-class' from section 3
                const section_title_3 = '#' + menu_item_3.innerHTML.toLowerCase();
                const section_id_3 = section_title_3.replace(/\s+/g, '');
                const active_section_3 = document.querySelector(section_id_3); 
                active_section_3.classList.remove('your-active-class');
            } else if (i == 1){
                console.log("At section 2, removing your-active-class from other sections")
                const menu_item_1 = all_menu_items[i-1];
                const menu_item_2 = all_menu_items[i+1];
                const menu_item_3 = all_menu_items[i+2];
                //remove 'your-active-class' from section one
                const section_title_1 = '#' + menu_item_1.innerHTML.toLowerCase();
                const section_id_1 = section_title_1.replace(/\s+/g, '');
                const active_section_1 = document.querySelector(section_id_1); 
                active_section_1.classList.remove('your-active-class');

                //remove 'your-active-class' from section two
                const section_title_2 = '#' + menu_item_2.innerHTML.toLowerCase();
                const section_id_2 = section_title_2.replace(/\s+/g, '');
                const active_section_2 = document.querySelector(section_id_2); 
                active_section_2.classList.remove('your-active-class');

                //remove 'your-active-class' from section 3
                const section_title_3 = '#' + menu_item_3.innerHTML.toLowerCase();
                const section_id_3 = section_title_3.replace(/\s+/g, '');
                const active_section_3 = document.querySelector(section_id_3); 
                active_section_3.classList.remove('your-active-class');
            } else if (i == 2){
                console.log("At section 3, removing your-active-class from other sections")
                const menu_item_1 = all_menu_items[i-2];
                const menu_item_2 = all_menu_items[i-1];
                const menu_item_3 = all_menu_items[i+1];
                //remove 'your-active-class' from section one
                const section_title_1 = '#' + menu_item_1.innerHTML.toLowerCase();
                const section_id_1 = section_title_1.replace(/\s+/g, '');
                const active_section_1 = document.querySelector(section_id_1); 
                active_section_1.classList.remove('your-active-class');
                
                //remove 'your-active-class' from section two
                const section_title_2 = '#' + menu_item_2.innerHTML.toLowerCase();
                const section_id_2 = section_title_2.replace(/\s+/g, '');
                const active_section_2 = document.querySelector(section_id_2); 
                active_section_2.classList.remove('your-active-class');

                //remove 'your-active-class' from section 3
                const section_title_3 = '#' + menu_item_3.innerHTML.toLowerCase();
                const section_id_3 = section_title_3.replace(/\s+/g, '');
                const active_section_3 = document.querySelector(section_id_3); 
                active_section_3.classList.remove('your-active-class');
            }else if (i == 3){
                console.log("At section 4, removing your-active-class from other sections")
                const menu_item_1 = all_menu_items[i-3];
                const menu_item_2 = all_menu_items[i-2];
                const menu_item_3 = all_menu_items[i-1];
                //remove 'your-active-class' from section one
                const section_title_1 = '#' + menu_item_1.innerHTML.toLowerCase();
                const section_id_1 = section_title_1.replace(/\s+/g, '');
                const active_section_1 = document.querySelector(section_id_1); 
                active_section_1.classList.remove('your-active-class');
                
                //remove 'your-active-class' from section two
                const section_title_2 = '#' + menu_item_2.innerHTML.toLowerCase();
                const section_id_2 = section_title_2.replace(/\s+/g, '');
                const active_section_2 = document.querySelector(section_id_2); 
                active_section_2.classList.remove('your-active-class');

                //remove 'your-active-class' from section 3
                const section_title_3 = '#' + menu_item_3.innerHTML.toLowerCase();
                const section_id_3 = section_title_3.replace(/\s+/g, '');
                const active_section_3 = document.querySelector(section_id_3); 
                active_section_3.classList.remove('your-active-class');
            }
            
            const active_section = document.querySelector(section_id); 
            console.log('Active section title: ' + active_section.querySelector('h2').innerHTML);           
            active_section.setAttribute('class', 'your-active-class');
            //ToDo: Scroll to the selected section
            active_section.scrollIntoView()
            
        })
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
console.log('creating navbar')
buildNavBarElements()
console.log('navbar created')

mainMenuDiv.appendChild(myNavBarList);
//document.body.appendChild(dom_fragment);

// Scroll to section on link click
console.log('Listening for navbar click events')
navBarClickEvents()

// Set sections as active
setActiveElementOnScroll()
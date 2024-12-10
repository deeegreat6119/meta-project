// NAVBAR
// let nav_links = document.getElementById('nav-links')

function toggleBtn(){
    let nav_links = document.getElementById('nav_links_holder')
    nav_links.classList.toggle('open-menus')
    if(nav_links.classList.contains('open-menus')){
        document.getElementById('bar1').style.transform = "rotate(45deg) translate(5px, 5px)"
        document.getElementById('bar2').style.opacity = "0"
        document.getElementById('bar3').style.transform = "rotate(-45deg) translate(7px, -8px)"
    }else{
        document.getElementById('bar1').style.transform = "rotate(0deg) translate(0, 0)"
        document.getElementById('bar2').style.opacity = "1"
        document.getElementById('bar3').style.transform = "rotate(0deg) translate(0, 0)"
    } 
}

// NAVBAR DROUP DOWN

document.querySelectorAll('.Build-container > a').forEach(item=>{
    item.addEventListener('click', event => {
        event.preventDefault();
        let dropdown = item.nextElementSibling;
        if(dropdown.style.display === 'none'){
            dropdown.style.display = 'flex'
        }else{
            dropdown.style.display = 'none'
        }
    })
})


// let buildLinks = document.getElementById('build_links')
//         let buildInfoDropdown = document.getElementById('build_info_dropdown')
//         let my_header = document.getElementById('nav_box')

        // buildLinks.addEventListener('mouseover', function(){
        //     buildInfoDropdown.style.display = 'flex'
        // });
        // buildLinks.addEventListener('mouseout', function(){
        //     buildInfoDropdown.style.display = 'none'
        // });

        // function show_build_Dropdown() {
        //     buildInfoDropdown.style.display = "flex"
            // if(my_header.classList.contains('expand')){
            //     my_header.classList.remove('expand')
            //  }else{
            //     my_header.classList.add('expand')
            //  }
        // }
        // function hide_build_dropdown() {
        //     buildInfoDropdown.style.display = "none"
        // }
        // build_links.addEventListener("mouseenter", show_build_Dropdown);
        // navbar_build_link.addEventListener("mouseleave", hide_build_dropdown)

        // JAVASCRIP FOR PREVIEW AND NEXT
        // let feature_container = document.getElementById('feature_info');
        // let featureItems = document.querySelectorAll('#feature_info div');
        // let preveiwBtn = document.getElementById('preveiw_btn')
        // let nextBtn = document.getElementById('next_btn')


        // function updateImagePosition(){
        //     let currentSlide = 0
        //     const offset = -currentSlide * 550;
        //     feature_container.style.transform = `translateX(${offset}px)`
        // }

        // function nextBtn(){
        //     let currentSlide = 0
        //    if (currentSlide < featureItems.length -1){
        //     currentSlide++;
        //    }else{
        //     currentSlide = 0
        //    }
        //    updateImagePosition()
        // }

        // function preveiwBtn(){
        //     let currentSlide = 0
        //     currentSlide = (currentSlide -1 + featureItems.length) % images.length;
        //     updateImagePosition()
        // }
        // function nextBtn(){
        //     let currentSlide = 0
        //     currentSlide = (currentSlide + 1) % featureItems.length;
        //     updateImagePosition()
            
        // }
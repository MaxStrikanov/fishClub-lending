const  scroll = async () => {
    const links = document.querySelectorAll('.menu-item-link');

    links.forEach(item => item.onclick = () => {
        document.getElementById(item.getAttribute('data-link')).scrollIntoView(
            {
                behavior: "smooth"
            })
    })
}

export default scroll;



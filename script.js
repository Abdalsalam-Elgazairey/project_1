
// أيقونة القائمة الجانبية
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// تحديد الروابط النشطة عند التمرير
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            // تفعيل الرابط في القائمة
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href="#${id}"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // تفعيل الأنيميشن عند التمرير
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // شريط التنقل الثابت عند التمرير
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // إزالة الفئات النشطة عند الإغلاق
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // تفعيل الأنيميشن في التذييل عند التمرير
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
};

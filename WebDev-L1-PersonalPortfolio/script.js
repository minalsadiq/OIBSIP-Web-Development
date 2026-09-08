/* =========================================================
   Minal Sadiq Portfolio - JavaScript
   ========================================================= */


document.addEventListener('DOMContentLoaded', () => {


    /* ================= THEME (DARK / LIGHT) ================= */

    const root = document.documentElement;

    const themeToggleBtns = [
        document.getElementById('theme-toggle'),
        document.getElementById('theme-toggle-mobile')
    ].filter(Boolean);

    const themeColorMeta =
        document.querySelector('meta[name="theme-color"]');


    const syncThemeIcons = (isDark) => {

        themeToggleBtns.forEach(btn => {

            const moonIcon = btn.querySelector('.theme-icon-moon');
            const sunIcon = btn.querySelector('.theme-icon-sun');

            moonIcon?.classList.toggle('hidden', isDark);
            sunIcon?.classList.toggle('hidden', !isDark);

            btn.setAttribute('aria-pressed', String(isDark));

        });

        if (themeColorMeta) {
            themeColorMeta.setAttribute(
                'content',
                isDark ? '#0a0f1d' : '#f8fafc'
            );
        }

    };


    const applyTheme = (isDark, persist = true) => {

        root.classList.toggle('dark', isDark);

        syncThemeIcons(isDark);

        if (persist) {

            try {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            } catch (e) {}

        }

    };


    /* Sync icons with whatever theme the head script already set */

    syncThemeIcons(root.classList.contains('dark'));


    themeToggleBtns.forEach(btn => {

        btn.addEventListener('click', () => {
            applyTheme(!root.classList.contains('dark'));
        });

    });


    /* Follow system theme changes if the user hasn't chosen manually */

    if (window.matchMedia) {

        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {

                let saved = null;

                try {
                    saved = localStorage.getItem('theme');
                } catch (err) {}

                if (!saved) {
                    applyTheme(e.matches, false);
                }

            });

    }



    /* ================= AOS ANIMATIONS ================= */

    if (window.AOS) {

        AOS.init({

            once: true,

            offset: 80,

            duration: 800

        });

    }



    /* ================= MOBILE MENU ================= */

    const menuBtn =
        document.getElementById('menu-btn');

    const mobileMenu =
        document.getElementById('mobile-menu');

    const mobileLinks =
        document.querySelectorAll('.mobile-link');


    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener('click', () => {

            const isOpen =
                !mobileMenu.classList.contains('hidden');


            mobileMenu.classList.toggle('hidden');


            menuBtn.setAttribute(
                'aria-expanded',
                String(!isOpen)
            );

        });

    }


    mobileLinks.forEach(link => {

        link.addEventListener('click', () => {

            mobileMenu?.classList.add('hidden');

            menuBtn?.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });



    /* ================= NAVBAR SCROLL ================= */

    const navbar =
        document.getElementById('navbar');


    const updateNavbar = () => {

        navbar?.classList.toggle(
            'scrolled',
            window.scrollY > 40
        );

    };


    updateNavbar();


    window.addEventListener(
        'scroll',
        updateNavbar,
        { passive: true }
    );



    /* ================= CONTACT FORM ================= */

    const form =
        document.getElementById('contact-form');


    if (form) {

        form.addEventListener(
            'submit',
            handleFormSubmit
        );

    }

});



/* =========================================================
   CONTACT FORM HANDLER
   ========================================================= */

async function handleFormSubmit(e) {

    e.preventDefault();


    const name =
        document
            .getElementById('sender-name')
            ?.value
            .trim() || '';


    const email =
        document
            .getElementById('sender-email')
            ?.value
            .trim() || '';


    const subject =
        document
            .getElementById('sender-subject')
            ?.value
            .trim() || '';


    const message =
        document
            .getElementById('sender-message')
            ?.value
            .trim() || '';



    const btn =
        document.getElementById(
            'contact-submit-btn'
        );


    const btnText =
        document.getElementById(
            'contact-submit-text'
        );


    const btnIcon =
        document.getElementById(
            'contact-submit-icon'
        );


    const successMsg =
        document.getElementById(
            'form-success-msg'
        );


    const errorMsg =
        document.getElementById(
            'form-error-msg'
        );



    /* Hide previous messages */

    successMsg?.classList.add('hidden');

    errorMsg?.classList.add('hidden');



    /* Loading state */

    if (btn) {

        btn.disabled = true;

    }


    if (btnText) {

        btnText.textContent = 'Sending...';

    }


    if (btnIcon) {

        btnIcon.className =
            'fa-solid fa-spinner fa-spin text-xs';

    }



    try {


        /* Existing FormSubmit endpoint */

        const response =
            await fetch(
                'https://formsubmit.co/ajax/minalsadiq310@gmail.com',
                {

                    method: 'POST',

                    headers: {

                        'Content-Type':
                            'application/json',

                        'Accept':
                            'application/json'

                    },

                    body: JSON.stringify({

                        name,

                        email,

                        subject,

                        message,

                        _subject:
                            'New portfolio message from ' +
                            name

                    })

                }
            );



        if (!response.ok) {

            throw new Error(
                'Form submission failed'
            );

        }



        /* Success */

        successMsg?.classList.remove(
            'hidden'
        );


        form.reset();


        setTimeout(() => {

            successMsg?.classList.add(
                'hidden'
            );

        }, 6000);



    } catch (error) {


        console.error(
            'Contact form error:',
            error
        );


        errorMsg?.classList.remove(
            'hidden'
        );



    } finally {


        /* Restore button */

        if (btn) {

            btn.disabled = false;

        }


        if (btnText) {

            btnText.textContent =
                'Send Message';

        }


        if (btnIcon) {

            btnIcon.className =
                'fa-solid fa-paper-plane text-xs';

        }

    }

}
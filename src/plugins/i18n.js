import { createI18n } from 'vue-i18n'
const messages = {
    en: {
        // message: {
        //     hello: 'hello world'
        // }
        heroTitle: {
            title: 'Classic Jewellery Collection'
        },
        fakeParagraph: {
            fakeParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima nesciunt nostrum vitae, ea assumenda, animi beatae odit?'
        },
        navbarItem1:{
            navBar: 'Home'
        },
        navbarItem2:{
            navBar: 'About'
        },
        navbarItem3:{
            navBar: 'Explore Products'
        }
    },
    ar: {
        // message: {
        //     hello: 'مرحبا أيها العالم'
        // }
        heroTitle: {
            title: 'مجموعة المجوهرات الكلاسيكية'
        },
        fakeParagraph: {
            fakeParagraph: 'ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.'
        },
        navbarItem1:{
            navBar: 'الصفحة الرئيسة'
        },
        navbarItem2:{
            navBar: 'من نحن'
        },
        navbarItem3:{
            navBar: 'اكتشف المنجات'
        }
    },
}
const i18n = createI18n({
    locale: 'en',
    messages,
})

 export default i18n
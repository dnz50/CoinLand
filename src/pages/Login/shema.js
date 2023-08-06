import * as yup  from "yup" //kütüphanenin tamamını * ile aldık 

// min 5 karakter, min 1 büyük harf, min 1 küçük harf, 1 sayı olmalı
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

//form alanının zorunlulukları
export const shema =yup.object().shape({ //kendi yazım stili
//formdaki değerlere göre kısıtlamaları veriyoruz required=zorunlu
    email:yup.string()
    .email()
    .required("Required field"),

    age:yup.number()
    .positive()
    .min(18,"18 +")
    .required("Required field"),

    password:yup.string()
    .min(5,"min 5 caracter")
    .matches(passwordRules,"Must be min 5 characters, 1 uppercase, 1 lowercase, 1 number")
    .required("Required field"),
//oneof ile dizi açıp içinde sadece istediğimiz değer olsun diyoruz
//yup.ref ile paswordun değerlerini alıyoruz
    confirmPassword:yup.string()
    .oneOf([yup.ref("password")],"Password not confirmed")
    .required("Required field"),

    terms:yup.boolean().oneOf([true],"You should accept")
})
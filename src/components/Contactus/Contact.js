'use client'
import React, { useState } from 'react'
import styles from '@/components/Contactus/Contact.module.css'
function Contact() {
    const [Name, setName] = useState(true);
    const [Email, setEmail] = useState(true);
    const [Message, setMessage] = useState(true);

    const [FormData, setFormData] = useState({

        name: "",
        email: "",
        message: ""

    })
    const checkUserInputData = (e) => {
        const userInput = e.target.value;
        let dataValidation = false;
        switch (e.target.name) {
            case "name":
                const nameRegx = /^[a-zA-Z\s]{3,}/g;
                const nameTest = nameRegx.test(userInput);
                nameTest ? setName(true) : setName(false);
                nameTest && (dataValidation = true);
                break;
            case "email":
                const emailRegx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/ig;
                const emailTest = emailRegx.test(userInput);
                emailTest ? setEmail(true) : setEmail(false);
                emailTest && (dataValidation = true);
                break;
            case "message":
                const messageRegx = /^[a-zA-Z\s\@\.\,\'\"\%]{3,500}/g;
                const messageTest = messageRegx.test(userInput);
                messageTest ? setMessage(true) : setMessage(false);
                messageTest && (dataValidation = true);
                break;

            default:
                setName(false);
                setEmail(false);
                setMessage(false);
        }
        return dataValidation;
    }

    const userInput = (e) => {
        e.preventDefault();
        if (checkUserInputData(e)) setFormData((FormData) => { return { ...FormData, [e.target.name]: e.target.value } })
        console.log(FormData);
    }

    const sendData = async (e) => {
        e.preventDefault();
        if (Name &&
            Email &&
            Message &&
            FormData.name &&
            FormData.email &&
            FormData.message
        ) {
            console.log('sending your message');
            // const request = await fetch('url', {
            //     method: 'POST',
            //     body: { ...FormData }
            // })
            // const response = request.json();
            // console.log(response);

        } else {
            console.log('error, request can not be send');
        }
    }




    return (
        <div className={styles.contactus}>
            <div className={styles.contactcard}>
                <div className={styles.secTitle}>
                    <span className={styles.icon}>
                        <svg className={styles.emailIcon} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.3297 5.99979C32.1933 5.98575 32.056 5.98575 31.9196 5.99979H3.91965C3.74019 6.00256 3.56193 6.02947 3.38965 6.07979L17.8396 20.4698L32.3297 5.99979Z" fill="#ABABAB" />
                            <path d="M33.8097 7.39014L19.2497 21.8901C18.875 22.2626 18.3681 22.4717 17.8397 22.4717C17.3113 22.4717 16.8044 22.2626 16.4297 21.8901L1.99969 7.50014C1.95533 7.66318 1.93181 7.83118 1.92969 8.00014V28.0001C1.92969 28.5306 2.1404 29.0393 2.51547 29.4144C2.89055 29.7894 3.39925 30.0001 3.92969 30.0001H31.9297C32.4601 30.0001 32.9688 29.7894 33.3439 29.4144C33.719 29.0393 33.9297 28.5306 33.9297 28.0001V8.00014C33.9217 7.79179 33.8812 7.58597 33.8097 7.39014ZM5.29969 28.0001H3.90969V26.5701L11.1797 19.3601L12.5897 20.7701L5.29969 28.0001ZM31.9097 28.0001H30.5097L23.2197 20.7701L24.6297 19.3601L31.8997 26.5701L31.9097 28.0001Z" fill="#ABABAB" />
                        </svg>

                    </span>
                    <span className={styles.text}>Email</span>
                </div>

                <div className={styles.emailAddress}>mehdevs@gmail.com</div>
            </div>
            <div className={styles.conatctForm}>
                <div className={styles.pageTitle}>
                    <p className={styles.contactTitle}>Contact Us</p>
                    <p className={styles.secDesc}>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sapiente quas cum ullam, sequi quis
                        placeat expedita unde beatae pariatur cumque in nemo
                        nulla non libero quo, veritatis nostrum perspiciatis
                        ducimus?</p>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">name</label>
                    <input className={styles.name}
                        onChange={e => userInput(e)}
                        type="text" name="name" id="name" required placeholder='Your name' />
                    {!Name && <p className={styles.errorMessage}>Please Enter You name Only , invalid format</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">email</label>
                    <input className={styles.email}
                        onChange={e => userInput(e)}
                        type="email" name="email" id="email" required placeholder='Your email' />
                    {!Email && <p className={styles.errorMessage}>Please Enter You email Only , invalid format</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="message">message</label>
                    <textarea className={styles.message}
                        onChange={e => userInput(e)}
                        name="message" id="message" cols="30" rows="10" required placeholder='Message'></textarea>
                    {!Message && <p className={styles.errorMessage}>Please Enter You message Only , invalid format</p>}
                </div>
                <button
                    onClick={e => sendData(e)}
                    className={styles.sendBtn}>Send</button>

            </div>
        </div>
    )
}

export default Contact

'use client'
import React, { useState } from 'react'
import styles from '@/components/Homepage/BecomeSponsor/BecomeSponsor.module.css'
function BecomeSponsor() {
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
        <div className={styles.connectwithus}>
            <p className={styles.largeText}>Become A sponsor</p>
            <div className={styles.conatctForm}>
                <div className={styles.circle}></div>
                <div className={styles.form}>
                    <input className={styles.name}
                        onChange={e => userInput(e)}
                        type="text" name="name" id="name" required placeholder='Your name' />
                    {!Name && <p className={styles.errorMessage}>Please Enter You name Only , invalid format</p>}
                    <input className={styles.email}
                        onChange={e => userInput(e)}
                        type="email" name="email" id="email" required placeholder='Your email' />
                    {!Email && <p className={styles.errorMessage}>Please Enter You email Only , invalid format</p>}
                    <textarea className={styles.message}
                        onChange={e => userInput(e)}
                        name="message" id="message" cols="30" rows="5" required placeholder='Message'></textarea>
                    {!Message && <p className={styles.errorMessage}>Please Enter You message Only , invalid format</p>}
                    <button
                        onClick={e => sendData(e)}
                        className={styles.sendBtn}>Send</button>
                </div>
                <div className={styles.square}></div>
            </div>
        </div >
    )
}

export default BecomeSponsor
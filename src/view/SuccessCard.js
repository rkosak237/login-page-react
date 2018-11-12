import * as React from 'react';
import logo from '../assets/logotype.png';
import Button from '../components/Button';
const baseUrl = process.env.PUBLIC_URL;

const SuccessCard = ({signUpBtn}) => (
    <main className="success-card page">
        <div className="card-bg--blurred"></div>
        <section className="sign-up__wrapper success-card__wrapper">
            <header className="success-card__head">
                <img className="success-card__logo" src={logo} alt="logotype"/>
                <h1 className="sign-up__title success-card__title">Dziękujemy za rejestrację</h1>
            </header>
            <Button
                text={'Zacznij odkrywać szlaki'}
                onClick={signUpBtn}
                direction={baseUrl + '/'}/>
        </section>
    </main>
);

export default SuccessCard;
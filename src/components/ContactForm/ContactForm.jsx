import React from "react";
import "./ContactForm.scss";
import {useTranslation} from "react-i18next";

const ContactForm = (props) => {
  const {t,i18n} = useTranslation('common');
  return (
    <section>
      <div className="contactContainer">
        <div className="contactTextSection">
        <h3>e-mail:</h3>
        <h4>justynagabiga@gmail.com</h4>
        </div>
        <div className="contactTextSection">
        <h3>
        {t('contact.phone')}
        </h3>
        <h4>
        {t('contact.phoneNumber')}
        </h4>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;

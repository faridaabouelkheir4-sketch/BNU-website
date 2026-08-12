import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';

const Contact = () => {
  const { t } = useTranslation();

  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError(t('err_email_invalid'));
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="contact-info">
      <h1>{t('contact_title_bnu')}</h1>
      
      <div className="container">
        <p><strong>{t('email_label')}:</strong> info@bnu.edu.eg</p>

      
        <form onSubmit={handleSubmit} className="simple-form">
          <h3>{t('send_us_message')}</h3>

          {submitted && <p className="success-msg">{t('msg_sent_success')}</p>}
          {error && <p className="error-msg">{error}</p>}


          <label htmlFor="">Enter your Email</label>
          <br />
          <input
            type="email"
            placeholder={t('email_placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br /> <br />
             
          <label htmlFor="">Enter your Message</label>
          <br />
          <textarea
            placeholder={t('message_placeholder')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
           
           <br />

          <button type="submit" className='submit-form'>{t('send_btn')}</button>
        </form>

        <br />

       
        <h2>{t('colleges_emails_title')}</h2>
        <ul>
          <li><strong>{t('engineering')}:</strong> info@eng.bnu.edu.eg</li>
          <li><strong>{t('cs')}:</strong> info@cs.bnu.edu.eg</li>
          <li><strong>{t('medicine')}:</strong> info@med.bnu.edu.eg</li>
          <li><strong>{t('dentistry')}:</strong> info@den.bnu.edu.eg</li>
          <li><strong>{t('veterinary')}:</strong> info@vtm.bnu.edu.eg</li>
          <li><strong>{t('pt')}:</strong> info@pt.bnu.edu.eg</li>
          <li><strong>{t('applied_arts')}:</strong> info@vad.bnu.edu.eg</li>
          <li><strong>{t('economics')}:</strong> info@eba.bnu.edu.eg</li>
          <li><strong>{t('energy')}:</strong> info@es.bnu.edu.eg</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
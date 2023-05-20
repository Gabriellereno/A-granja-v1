import React from 'react';
import styles from '@/styles/components/layout/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerBg}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.socialMediaAndPayments}>
            {' '}
            <h3>Redes Sociais</h3>
            <div className={styles.icons}>
              <a
                href="https://www.facebook.com/profile.php?id=100076610947745"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/agranjaazenha/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className={styles.socialMediaAndPayments}>
            <h3>Meios de Pagamento</h3>
            <div className={styles.icons}>
              <img
                src="https://static.petz.com.br/images/exp-facelift/mastercard-logo.png"
                alt="Bandeira mastercard"
                height="25px"
              />
              <img
                src="https://static.petz.com.br/images/exp-facelift/visa-logo.png"
                height="15px"
                alt="Bandeira mastercard"
              />
              <img
                src="https://static.petz.com.br/images/exp-facelift/elo-logo.png"
                alt="Bandeira elo"
              />
              <img
                src="https://static.petz.com.br/images/exp-facelift/pix-transparent.svg"
                alt="Pix"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.assessments}>
            <h3>Avaliações</h3>
            <div className={styles.assessment}>
              <a
                rel="noreferrer noopener"
                href="https://goo.gl/maps/hXnvud1jErQcmZNt9"
                target="_blank"
              >
                <span>
                  <h4>Rosemeri Campello </h4> Abril 2023
                </span>
                <p>"Muito bom comprar lá, são super queridos sou freguesa."</p>
                <span>Ver no Google</span>
              </a>
            </div>
            <div className={styles.assessment}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://goo.gl/maps/aFzfCBoZwN7oLSpL7"
              >
                <span>
                  <h4>Milena Matos</h4> Abril 2023
                </span>
                <p>"Ótimo atendimento, preços acessíveis!"</p>
                <span>Ver no Google</span>
              </a>
            </div>
            <div className={styles.assessment}>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://goo.gl/maps/mF52xtzbeodevyMD9"
              >
                <span>
                  <h4>Karine Lisboa</h4> Nov 2022
                </span>
                <p>
                  "Lugar mais barato pra fazer vacinas, e usam as importadas, o
                  que é fundamental."
                </p>
                <span>Ver no Google</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerContent}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d431.6816620749606!2d-51.213619703033146!3d-30.052538540928435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519785c5696bb4b%3A0x876f5a288799f9db!2sA%20Granja!5e0!3m2!1spt-BR!2sbr!4v1683709191857!5m2!1spt-BR!2sbr"
            width="250"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade; SameSite=None; Secure"
          ></iframe>
        </div>
      </div>
      <div className={styles.lastLine}>
        <div className={styles.lastLineContainer}>
          <p>
            Agropecuária D'Lucca' - CNPJ 18.728.941/0001-01 - Endereço: Av.
            Azenha, 991 - Azenha - Porto Alegre, RS - CEP: 90160-002
          </p>
          <p>
            Copyright© 2023 Agropecuária D'Lucca' - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

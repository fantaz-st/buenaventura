import ContactHero from "@/ContactSections/ContactHero/ContactHero";
import Form from "./Form";
import MiniContact from "@/HomeSections/MiniContact/MiniContact";
import classes from "./page.module.css";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <main className={classes.container}>
        <section className={classes.infoCol}>
          <h2 className={classes.heading}>Contact details</h2>
          <ul className={classes.list}>
            <li>
              <Image src="/assets/icons/email.svg" alt="Email icon" width={24} height={24} />
              <a href="mailto:rebeldeboats@gmail.com">rebeldeboats@gmail.com</a>
            </li>
            <li>
              <Image src="/assets/icons/phone.svg" alt="Phone icon" width={24} height={24} />
              <a href="tel:385997973959">385 99 797 3959</a>
            </li>
            <li>
              <Image src="/assets/icons/pin.svg" alt="Pin location icon" width={24} height={24} />
              <a href="https://g.co/kgs/Am2SfKF" target="_blank" rel="noopener noreferrer">
                Obala Hrvatskog narodnog preporoda, Split
              </a>
            </li>
          </ul>

          <h2 className={classes.heading}>Working hours</h2>
          <p className={classes.text}>
            Monday – Sunday:
            <br />
            07:00 – 00:00
          </p>

          <h2 className={classes.heading}>Follow us</h2>
          <div className={classes.socialRow}>
            <a href="https://www.tripadvisor.com/Attraction_Review-g295370-d28042808-Reviews-Rebelde_Boats-Split_Split_Dalmatia_County_Dalmatia.html" target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
              <Image src="/assets/icons/tripadvisor.svg" alt="TripAdvisor icon" width={32} height={32} />
              <span>TripAdvisor</span>
            </a>
            <a href="https://www.instagram.com/rebeldeboats/" target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
              <Image src="/assets/icons/instagram.svg" alt="Instagram icon" width={32} height={32} />
              <span>Instagram</span>
            </a>
          </div>
        </section>

        <section className={classes.formCol}>
          <h2 className={classes.heading}>Send us an inquiry</h2>
          <Form />
        </section>
      </main>
      <MiniContact />
    </main>
  );
}

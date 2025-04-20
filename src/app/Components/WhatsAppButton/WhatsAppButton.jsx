import Image from "next/image";
import classes from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  return (
    <a className={classes.container} target='_blank' href='https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/?lang=en' rel='noopener noreferrer'>
      <Image src='/assets/whatsappicon2.svg' alt='WhatsApp chat with us icon' width={24} height={24} className={classes.icon} />
      <span>Chat On WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

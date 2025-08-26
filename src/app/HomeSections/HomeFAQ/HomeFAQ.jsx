import TheButton from "../../../Components/TheButton/TheButton";
import AnimatedText from "@/Components/AnimatedText/AnimatedText";
import FAQ from "@/Components/FAQ/FAQ";
import faqs from "@/settings/faqs";
import classes from "./HomeFAQ.module.css";

export default function HomeFAQ() {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.header}>
          <AnimatedText>
            <h2 className={classes.title}>Before You Set Sail.</h2>
          </AnimatedText>
          <AnimatedText delay={0.35}>
            <p className={classes.subTitle}>Wondering what to pack? When to arrive? What&apos;s included? We&apos;re here to keep it simple — because your only job should be to enjoy the ride.</p>
          </AnimatedText>
        </div>
        <FAQ faqs={faqs[0].qa} />
        <p>Find answers to all your questions about the tours, the boat, pricing, what&apos;s included, the meeting point, and more on our dedicated FAQ page.</p>
        <div className={classes.buttonWrap}>
          <TheButton variant="dark">Read more FAQs</TheButton>
        </div>
      </div>
    </div>
  );
}

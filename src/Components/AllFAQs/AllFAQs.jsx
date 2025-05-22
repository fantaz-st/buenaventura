"use client";
import faqs from "@/settings/faqs";
import classes from "./AllFAQs.module.css";
import FAQ from "../FAQ/FAQ";

const AllFAQs = () => {
  const scrollToGroup = (id) => {
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={classes.container}>
      {/* menu */}
      <div className={classes.menu}>
        <ul>
          {faqs.map((group) => (
            <li key={`${group.id}-menu`} className={classes.faqMenuCard} onClick={() => scrollToGroup(group.id)}>
              {group.title}
            </li>
          ))}
        </ul>
      </div>
      {/* faqs */}
      <div className={classes.faqs}>
        {faqs.map((group) => (
          <div key={group.id} className={classes.faqGroup} id={group.id}>
            <div className={classes.faqGroupTitle}>
              <h3>{group.title}</h3>
            </div>
            <div className={classes.faqGroupQuestions}>
              <FAQ faqs={group.qa} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFAQs;

const faqs = [
  {
    id: "general-faq",
    title: "General Questions",
    qa: [
      {
        id: "general-faq-q1",
        question: "What’s included in the price?",
        answer: "Our prices include fuel, professional skipper, bottled water, and snorkeling gear.",
      },
      {
        id: "general-faq-q2",
        question: "Can I customize the tour itinerary?",
        answer: "Yes! All private tours are flexible. We’re happy to adjust the route to your preferences.",
      },
      {
        id: "general-faq-q3",
        question: "Do I need to bring anything?",
        answer: "Just sunscreen, swimwear, a towel, and a good vibe—we’ll handle the rest.",
      },
      {
        id: "general-faq-q5",
        question: "Where does the tour start and end?",
        answer: "Most tours depart from Split, but we can also pick you up from nearby locations by arrangement.",
      },
      {
        id: "general-faq-q6",
        question: "What if the weather is bad?",
        answer: "Your safety is our priority. If the weather doesn’t allow for a safe trip, we’ll reschedule or offer a full refund.",
      },
      {
        id: "general-faq-q7",
        question: "Is food or drink available on board?",
        answer: "We provide water and can bring a cooler upon request. You’re welcome to bring snacks or drinks!",
      },
      {
        id: "general-faq-q8",
        question: "How do I book a tour?",
        answer: "You can book directly through our website, or contact us via WhatsApp, email, or phone.",
      },
    ],
  },
  {
    id: "boat-faq",
    title: "Boat Related Questions",
    qa: [
      {
        id: "boat-faq-q1",
        question: "Will I ever book one boat and end up on a different, lower-quality one?",
        answer: "No. We own and operate a single boat, the Felix 37 Buenaventura. For larger groups or extra boats, we only arrange vessels of the same make, size, or quality—never a downgrade.",
      },
      {
        id: "boat-faq-q2",
        question: "How many people can the boat accommodate?",
        answer: "The Felix 37 Buenaventura comfortably accommodates up to 12 guests.",
      },
      {
        id: "boat-faq-q3",
        question: "Is there a restroom on the boat?",
        answer: "Yes. There’s a private restroom on board (electric toilet and sink) for your convenience.",
      },
      {
        id: "boat-faq-q4",
        question: "Is the boat equipped with safety gear?",
        answer: "Absolutely. The boat carries all required safety equipment—life jackets in all sizes, first aid kits, and more—fully compliant with maritime regulations.",
      },
      {
        id: "boat-faq-q5",
        question: "Is the boat suitable for children?",
        answer: "Yes. We’re family-friendly and provide life jackets for kids of all ages.",
      },
      {
        id: "boat-faq-q6",
        question: "What amenities are on board?",
        answer: "Electric toilet and sink, outdoor shower, extra-large sundeck, refrigerator, large ice box, wine/champagne and other glasses, life vests of all sizes, concert-grade sound system, USB-A phone charging, goggles and snorkels, foam noodles, and SUP boards.",
      },
    ],
  },
  {
    id: "half-faq",
    title: "Blue Lagoon, Trogir, Šolta related",
    qa: [
      {
        id: "bluelagoon-faq-q1",
        question: "How long is the ride to the Blue Lagoon?",
        answer: "Plan on roughly 25–30 minutes from Split with our boat. Sea conditions can nudge that a few minutes either way.",
      },
      {
        id: "bluelagoon-faq-q4",
        question: "Any beach bars or cafés around?",
        answer: "There are a couple of laid-back beach bars right in the bay—great for a coffee or a cold drink between swims.",
      },
      {
        id: "bluelagoon-faq-q7",
        question: "Can we hit a beach in Trogir during the stop?",
        answer: "Not really—the old town where we dock is inland. Use your free time to explore the medieval streets; save beach time for the Blue Lagoon or Šolta instead.",
      },
      {
        id: "bluelagoon-faq-q2",
        question: "Can we swim and snorkel once we get there?",
        answer: "Absolutely. The Blue Lagoon is crystal clear and perfect for a dip—snorkels and masks are welcome (we can provide gear if you don’t bring your own).",
      },
      {
        id: "bluelagoon-faq-q6",
        question: "Is this Blue Lagoon trip kid-friendly?",
        answer: "Yes. It’s close to Split, so you’re not out on open water for long, and the calm, shallow areas make it easy with children.",
      },
      {
        id: "bluelagoon-faq-q8",
        question: "Can I fish in the Blue Lagoon?",
        answer: "You can, but you’ll need your own gear and a valid fishing license (available at www.sub.hr).",
      },
      {
        id: "bluelagoon-faq-q3",
        question: "Is there somewhere to grab a proper meal?",
        answer: "Yes—there’s a waterfront restaurant at the lagoon where you can sit down for food.",
      },
      {
        id: "bluelagoon-faq-q5",
        question: "What about toilets at the Blue Lagoon?",
        answer: "Public restrooms aren’t on the beach itself, but you can use the facilities at the restaurant and cafés nearby.",
      },

      // --- Blue Lagoon (additional) ---
      {
        id: "bluelagoon-faq-q9",
        question: "Is there an entrance fee or permit needed for the Blue Lagoon?",
        answer: "No official entry fee—just bring cash or a card for food and drinks at the bars or restaurant.",
      },
      {
        id: "bluelagoon-faq-q10",
        question: "How long do we usually stay at the Blue Lagoon?",
        answer: "Typically 60–90 minutes, but we can tweak the stop based on weather and your preferences.",
      },
      {
        id: "bluelagoon-faq-q11",
        question: "Do you provide snorkeling gear, or should I bring my own?",
        answer: "We keep masks and snorkels on board, but you’re welcome to use your own if you prefer.",
      },
      {
        id: "bluelagoon-faq-q12",
        question: "Is there shade at the lagoon or should I pack extra sun protection?",
        answer: "Natural shade is limited—pack sunscreen, a hat, and maybe a light cover-up for peak sun hours.",
      },
      {
        id: "bluelagoon-faq-q13",
        question: "Can I fly a drone over the Blue Lagoon?",
        answer: "Yes, as long as you follow Croatian drone regulations and respect other guests’ privacy.",
      },
      {
        id: "bluelagoon-faq-q14",
        question: "What’s the water temperature like?",
        answer: "In summer it’s usually 23–27 °C (73–81 °F). Spring and autumn are cooler, so a dip can feel brisk.",
      },

      // --- Trogir ---
      {
        id: "trogir-faq-q1",
        question: "How much free time do we get in Trogir?",
        answer: "Usually around an hour—enough to wander the old town, grab a gelato, or pop into one landmark. Private trips are flexible.",
      },
      {
        id: "trogir-faq-q2",
        question: "What should I see first in Trogir’s old town?",
        answer: "Start with the Cathedral of St. Lawrence, Kamerlengo Fortress, and the seafront promenade—everything is within a short stroll.",
      },
      {
        id: "trogir-faq-q3",
        question: "Are beaches near the Trogir drop-off point?",
        answer: "Not really. The historic core is inland—plan your beach time for Blue Lagoon or Šolta.",
      },
      {
        id: "trogir-faq-q4",
        question: "Can I pay with a card in Trogir’s cafés and shops?",
        answer: "Most spots take cards, but having a bit of cash for small vendors is always smart.",
      },
      {
        id: "trogir-faq-q5",
        question: "Is Trogir suitable for guests with limited mobility?",
        answer: "Streets are mostly flat but paved with old stone; some alleys and steps appear—tell us in advance and we’ll plan extra help or time.",
      },
      {
        id: "trogir-faq-q6",
        question: "Will I have time to climb Kamerlengo Fortress?",
        answer: "If you head there first, yes. It’s a quick visit with great views—just allow for the short walk and possible ticket queue.",
      },

      // --- Šolta ---
      {
        id: "solta-faq-q1",
        question: "Which part of Šolta do we visit?",
        answer: "We usually stop in Maslinica or a quiet nearby bay—calm water, great swimming, and local taverns for lunch.",
      },
      {
        id: "solta-faq-q2",
        question: "Can we try local food or wine on Šolta?",
        answer: "Definitely. We can recommend or pre-book a konoba for fresh seafood, olive oil tastings, and local wines.",
      },
      {
        id: "solta-faq-q3",
        question: "Are there sandy beaches on Šolta?",
        answer: "Most are pebble or rocky. Water shoes help, but the sea is just as clear and inviting.",
      },
      {
        id: "solta-faq-q4",
        question: "Do you bring SUP boards or other toys to Šolta bays?",
        answer: "Yes—SUP boards, noodles, and snorkel sets are on board so you can enjoy the calm coves.",
      },
      {
        id: "solta-faq-q5",
        question: "Is there cell service and ATMs on Šolta?",
        answer: "Reception is generally fine. ATMs exist in larger villages, but carry some cash for small places.",
      },
      {
        id: "solta-faq-q6",
        question: "Can we spot dolphins around Šolta?",
        answer: "No promises, but dolphins do cruise these waters—keep an eye out during the crossings!",
      },
    ],
  },
  {
    id: "full-faq",
    title: "Blue cave and Five Islands related",
    qa: [
      // Blue Cave (Biševo)
      {
        id: "bluecave-faq-q1",
        question: "How long is the boat ride to the Blue Cave from Split?",
        answer: "Roughly 1 hour 30-40 minutes by speedboat, depending on sea conditions.",
      },
      {
        id: "bluecave-faq-q2",
        question: "When does the famous blue glow look the best?",
        answer: "Late morning (around 10:00–13:00) usually gives the strongest color, but clouds and sea state can shift it.",
      },
      {
        id: "bluecave-faq-q3",
        question: "Is the cave ticket included or paid on the spot?",
        answer: "Tickets are handled by the park’s staff. Sometimes we include them; otherwise you’ll pay on-site—cash or card is fine.",
      },
      {
        id: "bluecave-faq-q4",
        question: "Do we swim inside the Blue Cave?",
        answer: "No—swimming is not allowed inside. We swim and snorkel at later stops instead.",
      },
      {
        id: "bluecave-faq-q5",
        question: "What if the cave is closed due to waves?",
        answer: "Harbor authorities shut it when the entrance is unsafe. If that happens, we reroute to extra bays or extend time elsewhere.",
      },
      {
        id: "bluecave-faq-q6",
        question: "How do we actually get into the cave?",
        answer: "You transfer to a small official boat; our skipper organizes timing and tickets so it’s seamless.",
      },
      {
        id: "bluecave-faq-q7",
        question: "Can I take photos or video inside?",
        answer: "Yes—no flash needed. It’s a quick visit, so have your camera ready and hold it securely.",
      },

      // Komiža (Vis)
      {
        id: "komiza-faq-q1",
        question: "How much free time do we get in Komiža?",
        answer: "Usually an hour—enough for a coffee, a stroll along the harbor, or a quick pastry stop.",
      },
      {
        id: "komiza-faq-q2",
        question: "Can we grab breakfast or snacks in Komiža?",
        answer: "Yes. There are cafés and bakeries right on the waterfront—perfect for a quick bite.",
      },
      {
        id: "komiza-faq-q3",
        question: "Is Komiža good for photos?",
        answer: "Absolutely—colorful boats, stone houses, and a relaxed fishing-village vibe make it super photogenic.",
      },

      // Stiniva Cove (Vis)
      {
        id: "stiniva-faq-q1",
        question: "Do we swim at Stiniva?",
        answer: "Yes, if conditions allow. The cove is sheltered and stunning—bring water shoes, as it’s pebbly.",
      },
      {
        id: "stiniva-faq-q2",
        question: "Can we cliff jump at Stiniva?",
        answer: "Small jumps are common but do so at your own risk—always check depth and follow the crew’s guidance.",
      },
      {
        id: "stiniva-faq-q3",
        question: "How long do we stay in Stiniva?",
        answer: "Usually 30–40 minutes for swimming, photos, and soaking in the scenery.",
      },

      // Budikovac Blue Lagoon
      {
        id: "budikovac-faq-q1",
        question: "Is the water shallow at Budikovac’s blue lagoon?",
        answer: "Yes—crystal clear and relatively shallow near shore, perfect for floating and snorkeling.",
      },
      {
        id: "budikovac-faq-q2",
        question: "Do you provide snorkel gear here?",
        answer: "We carry masks and snorkels on board—just ask the crew when you want them.",
      },

      // Hvar Town
      {
        id: "hvar-faq-q1",
        question: "How much free time do we get in Hvar?",
        answer: "Typically 1–2 hours—enough to grab lunch, explore the old town, or hike up to the fortress for a view.",
      },
      {
        id: "hvar-faq-q2",
        question: "Can we visit the Hvar fortress (Španjola) during the stop?",
        answer: "Yes, it’s a 15–20 minute uphill walk. Go right after docking if you want plenty of time.",
      },
      {
        id: "hvar-faq-q3",
        question: "Do most places in Hvar take cards?",
        answer: "Almost all do, but a bit of cash is useful for small stands or gelato spots.",
      },

      // General Five-Islands Tour Questions
      {
        id: "fiveislands-faq-q1",
        question: "What’s the total duration of this Blue Cave & Five Islands trip?",
        answer: "Plan for a full day—around 10 to 11 hours, including boat rides and all stops.",
      },
      {
        id: "fiveislands-faq-q2",
        question: "Can we tweak the itinerary or skip a stop?",
        answer: "Yes—just let us know your priorities. Shared tours follow a set plan but small adjustments happen if needed.",
      },
      {
        id: "fiveislands-faq-q3",
        question: "Is the ride bumpy? What if I get seasick?",
        answer: "Open-sea stretches can get choppy. If you’re prone to motion sickness, take tablets before departure.",
      },

      {
        id: "fiveislands-faq-q6",
        question: "When do we usually return to Split?",
        answer: "Around 17:00–18:00, give or take, depending on sea conditions and how long we linger at each stop.",
      },
    ],
  },
  {
    id: "hvar-faq",
    title: "Hvar and Pakleni Islands related",
    qa: [
      {
        id: "bol-faq-q1",
        question: "How long does it take to reach Bol and Zlatni Rat from Split?",
        answer: "Roughly 1 hour 15 minutes by speedboat, give or take depending on sea and wind.",
      },
      {
        id: "bol-faq-q2",
        question: "Do we anchor near Zlatni Rat or dock in Bol town?",
        answer: "We usually dock in Bol’s harbor and you walk 10–15 minutes (or take a mini train/taxi boat) to Zlatni Rat beach.",
      },
      {
        id: "bol-faq-q3",
        question: "Is Zlatni Rat sandy?",
        answer: "It’s mostly smooth white pebbles—water shoes help, but the water is crystal clear.",
      },
      {
        id: "bol-faq-q4",
        question: "Can we rent sunbeds or water toys at Zlatni Rat?",
        answer: "Yes, plenty of vendors rent loungers, umbrellas, SUP boards, and more during high season.",
      },
      {
        id: "bol-faq-q5",
        question: "How much free time do we get in Bol?",
        answer: "Usually about 2 hours—enough for a swim, a beach stroll, and a quick drink.",
      },
      {
        id: "bol-faq-q6",
        question: "Are there showers and changing rooms at the beach?",
        answer: "Yes, there are public facilities and beach bars around Zlatni Rat where you can rinse off and change.",
      },

      // --- Hvar Town ---
      {
        id: "hvar-faq-q1",
        question: "What’s the plan in Hvar—guided walk or free exploration?",
        answer: "We give you tips, then you’re free to explore. Private charters can add a guide on request.",
      },
      {
        id: "hvar-faq-q2",
        question: "Can we visit the Španjola Fortress within the stop time?",
        answer: "Yes—budget 15–20 minutes uphill. Go right away if you want the view and still have time for lunch.",
      },
      {
        id: "hvar-faq-q3",
        question: "Is Hvar expensive for food and drinks?",
        answer: "It’s one of the pricier islands, but you’ll find everything from quick pizza slices to upscale dining.",
      },
      {
        id: "hvar-faq-q4",
        question: "Are there beaches in Hvar town itself?",
        answer: "A couple of small spots exist, but for proper swimming we head to the Pakleni Islands just across the channel.",
      },
      {
        id: "hvar-faq-q5",
        question: "Can I shop for local products in Hvar?",
        answer: "Absolutely—look for lavender, olive oil, wines, and skincare made on the island.",
      },
      {
        id: "hvar-faq-q6",
        question: "Will I have mobile signal and ATMs in Hvar?",
        answer: "Yes—coverage is solid and there are plenty of ATMs and card-friendly venues.",
      },

      // --- Pakleni Islands ---
      {
        id: "pakleni-faq-q1",
        question: "Which Pakleni bay do we stop at?",
        answer: "Common picks are Palmižana or a quiet cove nearby—calm water, restaurants, and great swimming.",
      },
      {
        id: "pakleni-faq-q2",
        question: "Is snorkeling good around the Pakleni Islands?",
        answer: "Yes—clear water, rocky bottoms, and plenty of fish. We bring masks; you just jump in.",
      },
      {
        id: "pakleni-faq-q3",
        question: "Can we book a lunch table on Pakleni ahead of time?",
        answer: "Yes, and it’s smart in peak season. Tell us your preference and we’ll reserve a spot.",
      },
      {
        id: "pakleni-faq-q4",
        question: "Are there sandy beaches on Pakleni or mostly rocks/pebbles?",
        answer: "Mostly pebbles and rocks, but with easy water access and ladders at some beach clubs.",
      },
      {
        id: "pakleni-faq-q5",
        question: "Do the Pakleni Islands have shade?",
        answer: "Some beaches are tree-lined, others more exposed—pack sunscreen and a hat just in case.",
      },
      {
        id: "pakleni-faq-q6",
        question: "Will we have time to explore more than one bay?",
        answer: "Typically we focus on one prime stop, but on private trips we can hop between coves if timing allows.",
      },
    ],
  },
];

export default faqs;

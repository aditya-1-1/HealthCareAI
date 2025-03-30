// Comprehensive medications database based on open-source medical information
export const medicationsDatabase = {
  "Acetaminophen (Tylenol)": {
    category: "Analgesic/Antipyretic",
    description:
      "A pain reliever and fever reducer that works by blocking the production of certain natural substances that cause pain and fever.",
    uses: [
      "Mild to moderate pain relief",
      "Fever reduction",
      "Headaches",
      "Muscle aches",
      "Arthritis",
      "Backache",
      "Toothaches",
      "Colds",
      "Flu",
    ],
    sideEffects: [
      "Nausea",
      "Stomach pain",
      "Loss of appetite",
      "Headache",
      "Yellowing of skin or eyes (jaundice) - rare but serious",
      "Liver damage (with high doses or long-term use)",
    ],
    precautions:
      "Do not exceed recommended dose. Liver damage can occur if more than 4,000 mg is taken in 24 hours. Avoid alcohol when taking acetaminophen. Consult a doctor if you have liver disease or take other medications containing acetaminophen.",
  },
  "Ibuprofen (Advil, Motrin)": {
    category: "NSAID (Nonsteroidal Anti-inflammatory Drug)",
    description:
      "A nonsteroidal anti-inflammatory drug that reduces hormones that cause inflammation and pain in the body.",
    uses: [
      "Pain relief",
      "Inflammation reduction",
      "Fever reduction",
      "Headaches",
      "Muscle aches",
      "Arthritis",
      "Menstrual cramps",
      "Minor injuries",
    ],
    sideEffects: [
      "Stomach pain",
      "Heartburn",
      "Nausea",
      "Vomiting",
      "Dizziness",
      "Mild headache",
      "Rash",
      "Stomach bleeding (with long-term use)",
      "Increased risk of heart attack or stroke (with long-term use)",
    ],
    precautions:
      "Take with food to reduce stomach upset. Not recommended for people with heart disease, high blood pressure, or kidney problems. Avoid during the last trimester of pregnancy. Do not take with other NSAIDs. Consult a doctor if you have asthma, liver disease, or a history of stomach problems.",
  },
  Aspirin: {
    category: "NSAID (Nonsteroidal Anti-inflammatory Drug)",
    description: "A salicylate that works by reducing substances in the body that cause pain, fever, and inflammation.",
    uses: [
      "Pain relief",
      "Fever reduction",
      "Inflammation reduction",
      "Prevention of blood clots",
      "Reducing risk of heart attack and stroke",
      "Headaches",
      "Arthritis",
    ],
    sideEffects: [
      "Stomach irritation",
      "Heartburn",
      "Nausea",
      "Vomiting",
      "Stomach bleeding",
      "Tinnitus (ringing in ears) at high doses",
      "Allergic reactions",
    ],
    precautions:
      "Not recommended for children under 12 due to risk of Reye's syndrome. Take with food to reduce stomach upset. Avoid if you have a bleeding disorder or are about to have surgery. Consult a doctor if you have asthma, liver or kidney disease, or a history of stomach problems.",
  },
  Lisinopril: {
    category: "ACE Inhibitor",
    description:
      "An angiotensin-converting enzyme (ACE) inhibitor that helps relax blood vessels, lowering blood pressure and increasing blood flow.",
    uses: [
      "High blood pressure (hypertension)",
      "Heart failure",
      "Improving survival after heart attacks",
      "Preventing kidney problems in people with diabetes",
    ],
    sideEffects: [
      "Dry cough",
      "Dizziness",
      "Headache",
      "Fatigue",
      "Nausea",
      "High potassium levels",
      "Swelling of face, lips, tongue, or throat (rare but serious)",
    ],
    precautions:
      "Avoid if pregnant or planning to become pregnant. Monitor blood pressure regularly. May cause high potassium levels. Consult a doctor if you have kidney disease, liver disease, or diabetes. Do not use salt substitutes containing potassium without consulting your doctor.",
  },
  Metformin: {
    category: "Antidiabetic",
    description:
      "A biguanide that decreases glucose production in the liver, decreases intestinal absorption of glucose, and improves insulin sensitivity.",
    uses: [
      "Type 2 diabetes management",
      "Insulin resistance",
      "Polycystic ovary syndrome (PCOS)",
      "Prevention of diabetes in high-risk individuals",
    ],
    sideEffects: [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Stomach pain",
      "Metallic taste",
      "Vitamin B12 deficiency (with long-term use)",
      "Lactic acidosis (rare but serious)",
    ],
    precautions:
      "Take with meals to reduce stomach upset. Avoid alcohol. Not recommended for people with kidney disease, liver disease, or heart failure. Temporarily stop taking before surgery or medical procedures using contrast dye. Regular monitoring of kidney function is recommended.",
  },
  "Atorvastatin (Lipitor)": {
    category: "Statin",
    description:
      "A statin that blocks an enzyme needed to produce cholesterol in the liver, reducing LDL ('bad') cholesterol and increasing HDL ('good') cholesterol.",
    uses: [
      "High cholesterol",
      "Prevention of heart disease",
      "Reducing risk of heart attack and stroke",
      "Coronary artery disease",
    ],
    sideEffects: [
      "Muscle pain or weakness",
      "Joint pain",
      "Diarrhea",
      "Nausea",
      "Constipation",
      "Elevated liver enzymes",
      "Memory problems or confusion (rare)",
      "Increased blood sugar",
    ],
    precautions:
      "Avoid grapefruit juice while taking this medication. Report muscle pain, tenderness, or weakness to your doctor immediately. Regular liver function tests may be needed. Consult a doctor if you have liver disease, kidney disease, or diabetes.",
  },
  "Levothyroxine (Synthroid)": {
    category: "Thyroid Hormone",
    description: "A synthetic thyroid hormone that replaces the hormone normally produced by the thyroid gland.",
    uses: [
      "Hypothyroidism (underactive thyroid)",
      "Thyroid hormone replacement after thyroid removal",
      "Treatment of some types of goiter",
      "Treatment of some types of thyroid cancer",
    ],
    sideEffects: [
      "Weight loss",
      "Tremors",
      "Headache",
      "Nervousness",
      "Insomnia",
      "Increased appetite",
      "Heat sensitivity",
      "Chest pain (rare)",
      "Irregular heartbeat (rare)",
    ],
    precautions:
      "Take on an empty stomach, 30-60 minutes before breakfast. Avoid taking with calcium, iron, or antacids. Regular thyroid function tests are needed to monitor dosage. Consult a doctor if you have heart disease, diabetes, or adrenal gland problems.",
  },
  Amoxicillin: {
    category: "Antibiotic (Penicillin)",
    description:
      "A penicillin antibiotic that fights bacteria in the body by preventing bacteria from forming cell walls, which causes them to die.",
    uses: [
      "Bacterial infections",
      "Respiratory tract infections",
      "Ear infections",
      "Urinary tract infections",
      "Skin infections",
      "H. pylori infection (stomach ulcers)",
    ],
    sideEffects: [
      "Diarrhea",
      "Stomach upset",
      "Nausea",
      "Vomiting",
      "Rash",
      "Allergic reactions",
      "Oral thrush (yeast infection)",
    ],
    precautions:
      "Take the full prescribed course, even if you feel better. Allergic reactions can be serious - seek emergency help if you develop rash, itching, swelling, severe dizziness, or trouble breathing. Inform your doctor if you have kidney disease, mononucleosis, or allergies to penicillin or cephalosporin antibiotics.",
  },
  "Omeprazole (Prilosec)": {
    category: "Proton Pump Inhibitor (PPI)",
    description:
      "A proton pump inhibitor that decreases the amount of acid produced in the stomach by blocking the enzyme in the wall of the stomach that produces acid.",
    uses: [
      "Gastroesophageal reflux disease (GERD)",
      "Heartburn",
      "Acid reflux",
      "Stomach ulcers",
      "Erosive esophagitis",
      "Zollinger-Ellison syndrome",
      "H. pylori infection (with antibiotics)",
    ],
    sideEffects: [
      "Headache",
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Stomach pain",
      "Vitamin B12 deficiency (with long-term use)",
      "Increased risk of bone fractures (with long-term use)",
      "Increased risk of C. difficile infection",
    ],
    precautions:
      "Long-term use may increase risk of certain health problems. Take before meals. Consult a doctor if you have liver disease or low magnesium levels. May interact with certain medications including blood thinners.",
  },
  "Sertraline (Zoloft)": {
    category: "SSRI (Selective Serotonin Reuptake Inhibitor)",
    description:
      "An antidepressant that works by increasing the levels of serotonin, a natural substance in the brain that helps maintain mental balance.",
    uses: [
      "Depression",
      "Panic disorder",
      "Social anxiety disorder",
      "Post-traumatic stress disorder (PTSD)",
      "Obsessive-compulsive disorder (OCD)",
      "Premenstrual dysphoric disorder (PMDD)",
    ],
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Indigestion",
      "Decreased appetite",
      "Tremor",
      "Insomnia",
      "Sexual problems",
      "Increased sweating",
      "Suicidal thoughts (especially in young adults)",
    ],
    precautions:
      "May take several weeks to become fully effective. Do not stop taking suddenly. Avoid alcohol. Consult a doctor if you have liver or kidney disease, seizures, bipolar disorder, or bleeding problems. May interact with NSAIDs, aspirin, blood thinners, and certain other medications.",
  },
}


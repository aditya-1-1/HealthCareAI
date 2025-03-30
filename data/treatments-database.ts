// Comprehensive treatments database based on open-source medical information
export const treatmentsDatabase = {
  "Physical Therapy": {
    description:
      "A specialized form of healthcare that focuses on evaluating and treating disorders of the musculoskeletal system. Physical therapists use exercises, manual therapy, education, and modalities to help patients restore movement and function.",
    conditions: [
      "Back pain",
      "Neck pain",
      "Sports injuries",
      "Post-surgical rehabilitation",
      "Arthritis",
      "Neurological conditions (stroke, Parkinson's)",
      "Balance disorders",
      "Chronic pain",
      "Pelvic floor dysfunction",
      "Respiratory conditions",
    ],
    procedure:
      "Treatment typically begins with an evaluation, followed by a personalized treatment plan that may include therapeutic exercises, manual therapy techniques, education about body mechanics, and various modalities like heat, cold, ultrasound, or electrical stimulation.",
    effectiveness:
      "Highly effective for many musculoskeletal conditions when patients actively participate in their treatment plan. Success rates vary depending on the condition, severity, patient compliance, and individual factors.",
    risks:
      "Generally very safe. Minor risks may include temporary increase in pain, muscle soreness, or skin irritation from certain modalities. Serious complications are extremely rare.",
  },
  "Cognitive Behavioral Therapy (CBT)": {
    description:
      "A form of psychotherapy that focuses on identifying and changing negative thought patterns that have a harmful influence on behavior and emotions. CBT is structured and goal-oriented, focusing on present problems and practical solutions.",
    conditions: [
      "Depression",
      "Anxiety disorders",
      "Phobias",
      "PTSD (Post-traumatic stress disorder)",
      "OCD (Obsessive-compulsive disorder)",
      "Eating disorders",
      "Substance abuse",
      "Insomnia",
      "Chronic pain",
      "Bipolar disorder",
    ],
    procedure:
      "Typically involves weekly sessions with a therapist, where patients learn to identify, challenge, and change unhelpful thought patterns and behaviors. Homework assignments between sessions help reinforce new skills. Treatment usually lasts 12-20 weeks but can vary.",
    effectiveness:
      "One of the most well-researched and effective forms of psychotherapy. Studies show 50-80% of people with anxiety and depression significantly improve with CBT. Effects are often long-lasting, with many maintaining improvements years after treatment ends.",
    risks:
      "Minimal risks. Some patients may experience temporary emotional discomfort when confronting difficult thoughts or situations. Not effective for all individuals or all mental health conditions.",
  },
  "Insulin Therapy": {
    description:
      "A treatment that involves administering insulin to manage blood glucose levels in people with diabetes. Insulin is a hormone that helps glucose enter cells to be used for energy.",
    conditions: [
      "Type 1 diabetes",
      "Type 2 diabetes (when other treatments aren't sufficient)",
      "Gestational diabetes",
      "Diabetic ketoacidosis",
      "Hyperglycemic hyperosmolar state",
    ],
    procedure:
      "Insulin is typically self-administered via injection using syringes, insulin pens, or insulin pumps. The dosage, timing, and type of insulin (rapid-acting, short-acting, intermediate-acting, long-acting) depend on individual needs, blood glucose levels, and lifestyle factors.",
    effectiveness:
      "Highly effective when properly administered and combined with appropriate diet, exercise, and blood glucose monitoring. For Type 1 diabetes, it is life-saving and essential. For Type 2 diabetes, it can effectively control blood glucose when other treatments fail.",
    risks:
      "Hypoglycemia (low blood sugar) is the most common risk, which can cause symptoms ranging from mild (shakiness, hunger) to severe (confusion, seizures). Other risks include weight gain, lipodystrophy (fat deposits at injection sites), and allergic reactions.",
  },
  "Coronary Artery Bypass Grafting (CABG)": {
    description:
      "A surgical procedure that improves blood flow to the heart by using blood vessels from another part of the body to bypass blocked coronary arteries.",
    conditions: [
      "Severe coronary artery disease",
      "Left main coronary artery disease",
      "Multiple blocked coronary arteries",
      "Diabetes with coronary artery disease",
      "Failed angioplasty or stenting",
      "Angina unresponsive to medication",
    ],
    procedure:
      "During the surgery, a healthy blood vessel (usually from the chest, leg, or arm) is grafted to bypass the blocked coronary artery, creating a new path for blood to flow to the heart muscle. The procedure typically takes 3-6 hours and requires general anesthesia.",
    effectiveness:
      "Very effective for relieving angina symptoms and improving quality of life. Can reduce the risk of heart attack and improve survival rates in appropriate candidates. Benefits may last 10-15 years or longer, though some grafts may eventually develop blockages.",
    risks:
      "Serious risks include bleeding, infection, stroke, heart attack, kidney failure, and death (1-3% mortality risk). Long-term risks include cognitive decline, post-surgery depression, and the need for repeat procedures. Risk factors include age, other medical conditions, and emergency vs. planned surgery.",
  },
  Chemotherapy: {
    description:
      "A type of cancer treatment that uses drugs to kill cancer cells by stopping or slowing their growth. Chemotherapy can be used alone or in combination with other treatments such as surgery, radiation, or immunotherapy.",
    conditions: [
      "Various types of cancer",
      "Leukemia",
      "Lymphoma",
      "Multiple myeloma",
      "Breast cancer",
      "Lung cancer",
      "Colorectal cancer",
      "Ovarian cancer",
      "Prostate cancer",
      "Pancreatic cancer",
    ],
    procedure:
      "Administered in cycles, with treatment periods followed by rest periods. Can be given orally (pills), intravenously (IV), by injection, topically, or directly into a specific area. Treatment schedules vary widely depending on the type of cancer, drugs used, and individual factors.",
    effectiveness:
      "Effectiveness varies greatly depending on the type and stage of cancer. Can be curative for some cancers (like certain leukemias and lymphomas), while for others it may extend life or reduce symptoms without curing the disease. Often most effective when combined with other treatments.",
    risks:
      "Side effects can be significant and include fatigue, hair loss, nausea and vomiting, decreased blood cell counts (leading to infection risk, bleeding, anemia), nerve damage, fertility issues, and organ damage. Long-term risks may include secondary cancers and permanent organ damage.",
  },
  Dialysis: {
    description:
      "A treatment that filters and purifies the blood using a machine when the kidneys can no longer perform this function adequately. Dialysis removes waste, excess salt, and water, and helps control blood pressure.",
    conditions: [
      "End-stage renal disease (ESRD)",
      "Acute kidney injury",
      "Severe electrolyte imbalances",
      "Drug overdose (certain types)",
      "Severe fluid overload",
      "Uremia",
    ],
    procedure:
      "Two main types: Hemodialysis uses a machine to filter blood outside the body, typically 3 times per week for 3-5 hours each session. Peritoneal dialysis uses the lining of the abdomen (peritoneum) as a filter, and can be done at home daily, either during the day (CAPD) or at night while sleeping (APD).",
    effectiveness:
      "Life-sustaining for people with kidney failure. While not a cure for kidney disease, it effectively performs essential kidney functions and allows many patients to live active lives. The average life expectancy on dialysis is 5-10 years, though many live much longer.",
    risks:
      "Hemodialysis risks include low blood pressure, muscle cramps, infection at access site, anemia, fluid overload, and cardiovascular complications. Peritoneal dialysis risks include peritonitis, hernias, weight gain, and metabolic complications. Both have significant lifestyle impacts.",
  },
  "Joint Replacement Surgery": {
    description:
      "A surgical procedure in which parts of a damaged joint are removed and replaced with metal, plastic, or ceramic components that replicate the movement of a healthy joint.",
    conditions: [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Post-traumatic arthritis",
      "Avascular necrosis",
      "Fractures",
      "Failed previous joint replacement",
      "Bone tumors",
    ],
    procedure:
      "During surgery, the damaged bone and cartilage are removed and replaced with prosthetic components. The most common joints replaced are knees and hips, but shoulders, ankles, wrists, and elbows can also be replaced. The procedure requires anesthesia and typically takes 1-3 hours.",
    effectiveness:
      "Highly effective for pain relief and improving function. Success rates for hip and knee replacements exceed 90%. Most modern joint replacements last 15-20 years or more. Patient satisfaction rates are generally high, with significant improvement in quality of life.",
    risks:
      "Risks include infection (1-2%), blood clots, implant loosening or dislocation, nerve damage, unequal leg length, and wear of the prosthetic components over time. Revision surgery may be needed eventually. Risk factors include obesity, smoking, and certain medical conditions.",
  },
  "Radiation Therapy": {
    description:
      "A cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors by damaging their DNA. The radiation can be delivered externally or internally.",
    conditions: [
      "Various types of cancer",
      "Brain tumors",
      "Breast cancer",
      "Lung cancer",
      "Prostate cancer",
      "Head and neck cancers",
      "Gynecologic cancers",
      "Lymphoma",
      "Sarcoma",
      "Thyroid cancer",
    ],
    procedure:
      "External beam radiation delivers radiation from a machine outside the body. Internal radiation (brachytherapy) places radioactive material inside the body near cancer cells. Treatment is typically given 5 days a week for 2-10 weeks, with each session lasting 10-30 minutes.",
    effectiveness:
      "Can be curative for many localized cancers, especially when combined with surgery or chemotherapy. For advanced cancers, it can effectively relieve symptoms and improve quality of life. Success rates vary widely depending on cancer type, stage, and other factors.",
    risks:
      "Side effects depend on the area treated and can include fatigue, skin changes, hair loss in the treatment area, and specific effects related to the treated organ (e.g., dry mouth for head/neck radiation). Long-term risks may include secondary cancers, cardiac toxicity, and damage to surrounding tissues. Modern techniques aim to minimize these risks by precisely targeting tumors.",
  },
  "Cognitive Rehabilitation": {
    description:
      "A therapy process that helps individuals with cognitive impairments restore or compensate for deficits in thinking abilities such as memory, attention, problem-solving, and executive function.",
    conditions: [
      "Traumatic brain injury",
      "Stroke",
      "Dementia",
      "Multiple sclerosis",
      "Parkinson's disease",
      "Brain tumors",
      "Encephalitis",
      "ADHD",
      "Learning disabilities",
      "Post-concussion syndrome",
    ],
    procedure:
      "Typically involves a comprehensive assessment followed by individualized therapy sessions focusing on specific cognitive domains. Approaches include restorative training (exercises to improve function), compensatory strategies (techniques to work around deficits), and environmental modifications.",
    effectiveness:
      "Evidence supports effectiveness for many conditions, particularly traumatic brain injury and stroke. Results vary based on severity of impairment, time since injury, age, and other factors. Most effective when started early and when treatment is intensive and prolonged.",
    risks:
      "Minimal risks. May cause frustration or fatigue during challenging exercises. Some patients may experience emotional distress when confronting cognitive limitations. Not effective for all individuals or all types of cognitive impairment.",
  },
  "Bariatric Surgery": {
    description:
      "A group of surgical procedures that help with weight loss by making changes to the digestive system, either by restricting the amount of food the stomach can hold, reducing nutrient absorption, or both.",
    conditions: [
      "Severe obesity (BMI ≥ 40)",
      "Obesity (BMI ≥ 35) with serious health problems like type 2 diabetes or sleep apnea",
      "Obesity that hasn't responded to other weight-loss methods",
      "Metabolic syndrome",
      "Fatty liver disease",
      "Gastroesophageal reflux disease (GERD)",
    ],
    procedure:
      "Common procedures include gastric bypass (creating a small stomach pouch connected directly to the small intestine), sleeve gastrectomy (removing a portion of the stomach), adjustable gastric band (placing a band around the upper part of the stomach), and biliopancreatic diversion with duodenal switch (more complex procedure with both restrictive and malabsorptive components).",
    effectiveness:
      "Can result in significant and sustained weight loss (50-70% of excess weight). Often leads to improvement or resolution of obesity-related conditions like type 2 diabetes, high blood pressure, and sleep apnea. Success depends on adherence to post-surgery lifestyle changes.",
    risks:
      "Surgical risks include bleeding, infection, blood clots, and leaks in the digestive system. Long-term risks include malnutrition, vitamin deficiencies, gallstones, hernias, ulcers, dumping syndrome, and need for revision surgery. Psychological challenges may also occur.",
  },
}


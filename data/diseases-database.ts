// Comprehensive diseases database based on open-source medical information
export const diseasesDatabase = {
  "Hypertension (High Blood Pressure)": {
    description:
      "A common condition where the long-term force of the blood against artery walls is high enough that it may eventually cause health problems, such as heart disease.",
    symptoms: [
      "Usually no symptoms (hence called the 'silent killer')",
      "Headaches (in severe cases)",
      "Shortness of breath",
      "Nosebleeds",
      "Chest pain",
      "Visual changes",
      "Blood in urine",
    ],
    treatments: [
      "Lifestyle changes (diet, exercise, stress management)",
      "Diuretics",
      "ACE inhibitors",
      "Angiotensin II receptor blockers",
      "Calcium channel blockers",
      "Beta-blockers",
    ],
    prevention:
      "Maintain a healthy weight, exercise regularly, eat a diet rich in fruits, vegetables, and low-fat dairy products, reduce sodium intake, limit alcohol consumption, avoid smoking, and manage stress.",
  },
  "Diabetes Mellitus": {
    description:
      "A group of metabolic disorders characterized by high blood sugar levels over a prolonged period, resulting from defects in insulin secretion, insulin action, or both.",
    symptoms: [
      "Increased thirst",
      "Frequent urination",
      "Extreme hunger",
      "Unexplained weight loss",
      "Fatigue",
      "Irritability",
      "Blurred vision",
      "Slow-healing sores",
      "Frequent infections",
    ],
    treatments: [
      "Type 1: Insulin therapy, carbohydrate counting, frequent blood sugar monitoring",
      "Type 2: Healthy eating, regular exercise, blood sugar monitoring, diabetes medications, insulin therapy",
      "Metformin",
      "Sulfonylureas",
      "Meglitinides",
      "Thiazolidinediones",
      "DPP-4 inhibitors",
      "GLP-1 receptor agonists",
      "SGLT2 inhibitors",
    ],
    prevention:
      "Type 1 cannot be prevented. For Type 2: maintain a healthy weight, be physically active, eat a healthy diet, avoid smoking, and limit alcohol consumption.",
  },
  Asthma: {
    description:
      "A condition in which a person's airways become inflamed, narrow and swell, and produce extra mucus, which makes it difficult to breathe.",
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing when exhaling",
      "Trouble sleeping due to breathing difficulties",
      "Coughing or wheezing attacks worsened by respiratory viruses",
    ],
    treatments: [
      "Quick-relief (rescue) medications: Short-acting beta agonists, anticholinergics, oral and intravenous corticosteroids",
      "Long-term control medications: Inhaled corticosteroids, leukotriene modifiers, long-acting beta agonists, combination inhalers",
      "Bronchial thermoplasty",
      "Allergy medications",
    ],
    prevention:
      "Identify and avoid asthma triggers, get vaccinated for influenza and pneumonia, identify and treat attacks early, take medications as prescribed, monitor breathing, and use an action plan developed with your doctor.",
  },
  "Coronary Artery Disease": {
    description:
      "A condition where the major blood vessels that supply the heart with blood, oxygen, and nutrients (coronary arteries) become damaged or diseased, usually due to plaque buildup (atherosclerosis).",
    symptoms: [
      "Chest pain (angina)",
      "Shortness of breath",
      "Pain in the neck, jaw, throat, upper abdomen, or back",
      "Numbness, weakness, coldness in legs or arms",
      "Heart attack (if blood flow is severely restricted)",
    ],
    treatments: [
      "Lifestyle changes (healthy diet, exercise, stress management, smoking cessation)",
      "Medications: Cholesterol-modifying medications, aspirin, beta-blockers, nitroglycerin, ACE inhibitors, calcium channel blockers",
      "Procedures: Angioplasty and stent placement, coronary artery bypass surgery",
    ],
    prevention:
      "Quit smoking, control blood pressure and cholesterol, maintain a healthy weight, eat a heart-healthy diet, exercise regularly, reduce stress, limit alcohol, and get regular health screenings.",
  },
  "Alzheimer's Disease": {
    description:
      "A progressive neurological disorder that causes brain cells to degenerate and die, leading to a continuous decline in thinking, behavioral and social skills that disrupts a person's ability to function independently.",
    symptoms: [
      "Memory loss that disrupts daily life",
      "Challenges in planning or solving problems",
      "Difficulty completing familiar tasks",
      "Confusion with time or place",
      "Trouble understanding visual images and spatial relationships",
      "New problems with words in speaking or writing",
      "Misplacing things and losing the ability to retrace steps",
      "Decreased or poor judgment",
      "Withdrawal from work or social activities",
      "Changes in mood and personality",
    ],
    treatments: [
      "Cholinesterase inhibitors (Aricept, Exelon, Razadyne)",
      "Memantine (Namenda)",
      "Combination medications",
      "Medications to treat behavioral changes",
      "Occupational therapy",
      "Environmental modifications",
      "Exercise",
    ],
    prevention:
      "No definitive prevention, but risk may be reduced by regular physical exercise, social engagement, healthy diet, mental stimulation, good sleep habits, and management of cardiovascular risk factors.",
  },
  "Rheumatoid Arthritis": {
    description:
      "A chronic inflammatory disorder that affects the lining of joints, causing painful swelling that can eventually result in bone erosion and joint deformity.",
    symptoms: [
      "Tender, warm, swollen joints",
      "Joint stiffness that is usually worse in the mornings",
      "Fatigue, fever, and loss of appetite",
      "Symmetrical pattern of affected joints",
      "Firm bumps of tissue under the skin on arms (rheumatoid nodules)",
    ],
    treatments: [
      "NSAIDs (ibuprofen, naproxen)",
      "Steroids (prednisone)",
      "Disease-modifying antirheumatic drugs (DMARDs): methotrexate, hydroxychloroquine, sulfasalazine, leflunomide",
      "Biologic agents: etanercept, infliximab, adalimumab, certolizumab, golimumab, rituximab, abatacept, tocilizumab",
      "JAK inhibitors: tofacitinib, baricitinib, upadacitinib",
      "Physical therapy",
      "Surgery",
    ],
    prevention: "No known prevention, but early diagnosis and treatment can help prevent joint damage.",
  },
  "Chronic Obstructive Pulmonary Disease (COPD)": {
    description:
      "A chronic inflammatory lung disease that causes obstructed airflow from the lungs, including emphysema and chronic bronchitis.",
    symptoms: [
      "Shortness of breath, especially during physical activities",
      "Wheezing",
      "Chest tightness",
      "Chronic cough that may produce mucus",
      "Frequent respiratory infections",
      "Lack of energy",
      "Unintended weight loss (in later stages)",
      "Swelling in ankles, feet or legs",
    ],
    treatments: [
      "Bronchodilators",
      "Inhaled steroids",
      "Combination inhalers",
      "Oral steroids",
      "Phosphodiesterase-4 inhibitors",
      "Theophylline",
      "Antibiotics",
      "Lung therapies: Oxygen therapy, pulmonary rehabilitation program",
      "Surgery: Lung volume reduction surgery, lung transplant, bullectomy",
    ],
    prevention:
      "Don't smoke or stop smoking, avoid secondhand smoke and chemical fumes, get vaccinated (flu and pneumonia), and avoid air pollution.",
  },
  Depression: {
    description:
      "A mood disorder that causes a persistent feeling of sadness and loss of interest, affecting how you feel, think and behave and can lead to a variety of emotional and physical problems.",
    symptoms: [
      "Feelings of sadness, tearfulness, emptiness or hopelessness",
      "Angry outbursts, irritability or frustration, even over small matters",
      "Loss of interest or pleasure in most or all normal activities",
      "Sleep disturbances, including insomnia or sleeping too much",
      "Tiredness and lack of energy",
      "Reduced appetite and weight loss or increased cravings for food and weight gain",
      "Anxiety, agitation or restlessness",
      "Slowed thinking, speaking or body movements",
      "Feelings of worthlessness or guilt, fixating on past failures or self-blame",
      "Trouble thinking, concentrating, making decisions and remembering things",
      "Frequent or recurrent thoughts of death, suicidal thoughts, suicide attempts or suicide",
      "Unexplained physical problems, such as back pain or headaches",
    ],
    treatments: [
      "Medications: SSRIs, SNRIs, atypical antidepressants, tricyclic antidepressants, MAOIs",
      "Psychotherapy: Cognitive behavioral therapy, interpersonal therapy, psychodynamic therapy",
      "Electroconvulsive therapy (ECT)",
      "Transcranial magnetic stimulation (TMS)",
      "Lifestyle changes: Exercise, healthy diet, stress reduction, sleep hygiene",
    ],
    prevention:
      "Control stress, increase resilience with friends and social activities, get treatment at the earliest sign of a problem, consider long-term maintenance treatment if you've had depression before.",
  },
}


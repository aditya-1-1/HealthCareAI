// Comprehensive nutrition database based on open-source medical information
export const nutritionDatabase = {
  "Vitamin A": {
    description:
      "A fat-soluble vitamin that is important for normal vision, the immune system, reproduction, and growth and development. It also helps the heart, lungs, kidneys, and other organs work properly.",
    benefits: [
      "Essential for vision, especially night vision",
      "Supports immune function",
      "Promotes cell growth and differentiation",
      "Maintains healthy skin and mucous membranes",
      "Supports reproductive health",
      "Acts as an antioxidant",
    ],
    recommendedIntake:
      "Adult males: 900 mcg RAE daily. Adult females: 700 mcg RAE daily. Pregnant women: 770 mcg RAE daily. Breastfeeding women: 1,300 mcg RAE daily.",
    foodSources: [
      "Liver",
      "Sweet potato",
      "Carrots",
      "Spinach",
      "Kale",
      "Broccoli",
      "Eggs",
      "Fortified milk and cereals",
      "Mango",
      "Cantaloupe",
    ],
  },
  "Vitamin C": {
    description:
      "A water-soluble vitamin that acts as an antioxidant, helping protect cells from damage caused by free radicals. It is also vital for the immune system, wound healing, and the absorption of iron from plant-based foods.",
    benefits: [
      "Supports immune function",
      "Promotes wound healing",
      "Enhances iron absorption from plant foods",
      "Acts as an antioxidant",
      "Helps produce collagen for skin, blood vessels, and connective tissues",
      "May reduce risk of chronic diseases",
    ],
    recommendedIntake:
      "Adult males: 90 mg daily. Adult females: 75 mg daily. Pregnant women: 85 mg daily. Breastfeeding women: 120 mg daily. Smokers need 35 mg more per day than non-smokers.",
    foodSources: [
      "Citrus fruits (oranges, grapefruits)",
      "Strawberries",
      "Kiwi",
      "Bell peppers",
      "Broccoli",
      "Brussels sprouts",
      "Tomatoes",
      "Potatoes",
      "Papaya",
      "Guava",
    ],
  },
  "Vitamin D": {
    description:
      "A fat-soluble vitamin that is unique because it can be synthesized in the skin through sunlight exposure. It is essential for calcium absorption, bone health, immune function, and cell growth.",
    benefits: [
      "Promotes calcium absorption for bone health",
      "Supports immune function",
      "Reduces inflammation",
      "Supports neuromuscular function",
      "May help prevent certain cancers",
      "May reduce risk of depression",
    ],
    recommendedIntake:
      "Ages 1-70: 600 IU (15 mcg) daily. Adults over 70: 800 IU (20 mcg) daily. Some experts recommend higher amounts, especially for those with limited sun exposure or darker skin.",
    foodSources: [
      "Fatty fish (salmon, mackerel, tuna)",
      "Cod liver oil",
      "Egg yolks",
      "Mushrooms exposed to UV light",
      "Fortified milk and plant milks",
      "Fortified orange juice",
      "Fortified cereals",
      "Sunlight exposure (not a food but primary source)",
    ],
  },
  Calcium: {
    description:
      "The most abundant mineral in the body, primarily found in bones and teeth. It is essential for bone health, muscle function, nerve transmission, and blood clotting.",
    benefits: [
      "Builds and maintains strong bones and teeth",
      "Supports muscle function",
      "Enables nerve transmission",
      "Helps blood clotting",
      "Regulates heartbeat",
      "May help prevent osteoporosis",
    ],
    recommendedIntake:
      "Adults 19-50: 1,000 mg daily. Women 51+ and men 71+: 1,200 mg daily. Pregnant and breastfeeding women: 1,000-1,300 mg daily depending on age.",
    foodSources: [
      "Dairy products (milk, yogurt, cheese)",
      "Fortified plant milks",
      "Tofu made with calcium sulfate",
      "Canned fish with bones (salmon, sardines)",
      "Leafy greens (kale, collard greens)",
      "Broccoli",
      "Almonds",
      "Fortified orange juice",
      "Fortified cereals",
    ],
  },
  Iron: {
    description:
      "A mineral that is an essential component of hemoglobin, the protein in red blood cells that transfers oxygen from the lungs to the tissues. It is also important for energy metabolism and immune function.",
    benefits: [
      "Essential for oxygen transport in the blood",
      "Supports energy production",
      "Necessary for proper immune function",
      "Important for brain development and function",
      "Helps maintain healthy cells, skin, hair, and nails",
      "Prevents iron deficiency anemia",
    ],
    recommendedIntake:
      "Adult males: 8 mg daily. Adult females 19-50: 18 mg daily. Adult females 51+: 8 mg daily. Pregnant women: 27 mg daily. Breastfeeding women: 9-10 mg daily.",
    foodSources: [
      "Red meat",
      "Poultry",
      "Seafood",
      "Beans and lentils",
      "Spinach and other leafy greens",
      "Tofu",
      "Fortified cereals",
      "Pumpkin seeds",
      "Quinoa",
      "Dried fruits (apricots, raisins)",
    ],
  },
  "Omega-3 Fatty Acids": {
    description:
      "Essential fatty acids that play important roles in brain function, normal growth and development, and inflammation. The three main types are ALA (found in plant oils), EPA and DHA (found in marine oils).",
    benefits: [
      "Reduces inflammation",
      "Supports heart health by lowering triglycerides and blood pressure",
      "Promotes brain health and cognitive function",
      "Supports eye health",
      "May reduce symptoms of depression and anxiety",
      "Important for fetal brain development during pregnancy",
    ],
    recommendedIntake:
      "No established RDA. The Adequate Intake (AI) for ALA is 1.6 g/day for men and 1.1 g/day for women. For EPA and DHA combined, many experts recommend 250-500 mg per day.",
    foodSources: [
      "Fatty fish (salmon, mackerel, sardines, tuna)",
      "Fish oil",
      "Flaxseeds and flaxseed oil",
      "Chia seeds",
      "Walnuts",
      "Soybeans and soybean oil",
      "Algae and algal oil (for vegetarians/vegans)",
      "Fortified foods",
    ],
  },
  Fiber: {
    description:
      "The indigestible part of plant foods that passes through the digestive system, absorbing water along the way and easing bowel movements. There are two types: soluble fiber, which dissolves in water, and insoluble fiber, which doesn't.",
    benefits: [
      "Promotes regular bowel movements and prevents constipation",
      "Helps maintain bowel health",
      "Lowers cholesterol levels",
      "Helps control blood sugar levels",
      "Aids in weight management by increasing fullness",
      "May reduce risk of colorectal cancer",
      "Supports healthy gut microbiome",
    ],
    recommendedIntake:
      "Adult males 50 and younger: 38 g daily. Adult males 51 and older: 30 g daily. Adult females 50 and younger: 25 g daily. Adult females 51 and older: 21 g daily.",
    foodSources: [
      "Whole grains (oats, barley, brown rice)",
      "Fruits (especially with edible skins or seeds)",
      "Vegetables",
      "Legumes (beans, lentils, peas)",
      "Nuts and seeds",
      "Psyllium husk",
      "Chia seeds",
      "Flaxseeds",
      "Bran cereals",
    ],
  },
  Protein: {
    description:
      "A macronutrient composed of amino acids, which are the building blocks of body tissues. It is essential for growth, repair, immune function, making enzymes and hormones, and providing energy.",
    benefits: [
      "Builds and repairs tissues",
      "Supports immune function",
      "Creates enzymes, hormones, and other body chemicals",
      "Maintains fluid balance",
      "Provides structure to skin, hair, nails, bones, and muscles",
      "Helps maintain lean body mass",
      "Promotes satiety and may aid weight management",
    ],
    recommendedIntake:
      "The RDA is 0.8 g per kg of body weight daily for adults. Athletes, older adults, and those recovering from illness may need more (1.2-2.0 g per kg). Pregnant and breastfeeding women need additional protein.",
    foodSources: [
      "Meat (beef, pork, lamb)",
      "Poultry (chicken, turkey)",
      "Fish and seafood",
      "Eggs",
      "Dairy products (milk, yogurt, cheese)",
      "Legumes (beans, lentils, peas)",
      "Tofu and other soy products",
      "Nuts and seeds",
      "Quinoa",
      "Seitan (wheat gluten)",
    ],
  },
  Probiotics: {
    description:
      "Live microorganisms that, when administered in adequate amounts, confer a health benefit on the host. They are often referred to as 'good' or 'friendly' bacteria that help maintain a healthy gut microbiome.",
    benefits: [
      "Supports digestive health",
      "May help prevent and treat diarrhea",
      "Balances gut microbiota after antibiotic use",
      "May improve symptoms of irritable bowel syndrome",
      "Supports immune function",
      "May help with certain allergies and eczema",
      "Potential benefits for mental health",
    ],
    recommendedIntake:
      "No established RDA. Recommendations vary based on the specific strain and condition being addressed. For general gut health, many experts suggest daily consumption of probiotic foods or supplements containing multiple strains.",
    foodSources: [
      "Yogurt with live active cultures",
      "Kefir",
      "Sauerkraut",
      "Kimchi",
      "Miso",
      "Tempeh",
      "Kombucha",
      "Some cheeses (like gouda, mozzarella, cheddar, and cottage cheese)",
      "Pickles (naturally fermented)",
      "Probiotic supplements",
    ],
  },
  Antioxidants: {
    description:
      "Substances that can prevent or slow damage to cells caused by free radicals, which are unstable molecules that the body produces as a reaction to environmental and other pressures. Antioxidants include certain vitamins, minerals, and plant compounds.",
    benefits: [
      "Protects cells from oxidative damage",
      "May reduce risk of chronic diseases like heart disease and cancer",
      "Supports immune function",
      "May slow aspects of the aging process",
      "Supports eye health",
      "Promotes skin health",
      "Reduces inflammation",
    ],
    recommendedIntake:
      "No established RDA for antioxidants as a group. Recommendations exist for specific antioxidant nutrients like vitamins C and E. A diet rich in a variety of fruits, vegetables, and other plant foods is recommended.",
    foodSources: [
      "Berries (blueberries, strawberries, raspberries)",
      "Dark chocolate",
      "Pecans and other nuts",
      "Artichokes",
      "Kale and other leafy greens",
      "Beets",
      "Red cabbage",
      "Beans",
      "Green tea",
      "Coffee",
      "Red wine (in moderation)",
    ],
  },
}


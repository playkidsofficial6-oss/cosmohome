const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/servicesData.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const beforeAfterData = {
  "botox": {
    treatmentName: "Botox Wrinkle Relaxing",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "I wanted to soften my frown lines without looking frozen. The results are subtle, natural, and precisely what I hoped for.",
    patientName: "Priyanka M., 34",
    subtitle: "Dynamic wrinkle relaxation for expression lines"
  },
  "fillers": {
    treatmentName: "Dermal Fillers Volume Restoration",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "My cheeks and jawline feel beautifully contoured and restored. The treatment was comfortable and the results look completely natural.",
    patientName: "Shweta K., 38",
    subtitle: "Hyaluronic acid dermal fillers for volume restoration"
  },
  "vampire-lift": {
    treatmentName: "Vampire Lift Regenerative Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "My acne scars have smoothed out significantly and my skin has a healthy, refreshed glow that I haven't seen in years.",
    patientName: "Aman S., 28",
    subtitle: "Platelet-rich plasma combined with microneedling"
  },
  "thread-lift": {
    treatmentName: "Thread Lift Contour Sculpting",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "I noticed an immediate lift in my lower face and jawline. The recovery was quick and the contours look beautifully defined.",
    patientName: "Renu G., 46",
    subtitle: "Absorbable PDO thread lifting for facial contouring"
  },
  "skin-boosters": {
    treatmentName: "Skin Boosters Deep Hydration",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "My dry skin has transformed completely. It feels hydrated, plump, and has a steady, natural glow every day.",
    patientName: "Divya N., 31",
    subtitle: "Micro-injections of hyaluronic acid for deep skin hydration"
  },
  "mnrf": {
    treatmentName: "MNRF Skin Tightening",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "My skin feels firmer, tighter, and my open pores are much less visible. The improvement in texture is remarkable.",
    patientName: "Vikram R., 35",
    subtitle: "Microneedling Fractional Radiofrequency for skin tightening"
  },
  "dermapen": {
    treatmentName: "Dermapen Collagen Induction",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "A gentle but effective treatment. My acne marks have faded and my skin texture feels incredibly smooth.",
    patientName: "Anjali P., 26",
    subtitle: "Micro-needling therapy for texture and pigmentation"
  },
  "co2-laser": {
    treatmentName: "CO2 Laser Resurfacing",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "The fractional CO2 laser worked wonders on my deep scars. The texture of my skin has improved dramatically.",
    patientName: "Rohan J., 32",
    subtitle: "Fractional CO2 laser resurfacing for deep skin remodelling"
  },
  "dutexome": {
    treatmentName: "Dutexome Exosome Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "Combining exosome therapy with microneedling gave me rapid healing and an incredible boost in skin brightness and firmness.",
    patientName: "Kavitha L., 40",
    subtitle: "Premium dual-chamber exosome therapy for cellular regeneration"
  },
  "hair-mesotherapy": {
    treatmentName: "Scalp Micro-Nutrient Mesotherapy",
    beforeImage: "/services/Hair Mesotherapy/before.webp",
    afterImage: "/services/Hair Mesotherapy/after.webp",
    testimonialText: "The results of my scalp micro-nutrient mesotherapy treatment exceeded my expectations. My hair feels stronger and healthier.",
    patientName: "Rahul A., 30",
    subtitle: "Scalp nutrient infusion for hair shedding and root health"
  },
  "monothreads": {
    treatmentName: "Scalp PDO Monothreads",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "I had significant thinning around my crown. PDO monothreads have anchored my hair roots, reducing fall and improving density.",
    patientName: "Karthik S., 36",
    subtitle: "PDO thread grid vectoring for follicle anchoring and scalp support"
  },
  "exosomes": {
    treatmentName: "Exosomes Regenerative Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "My skin texture is completely renewed. It healed so quickly and feels incredibly soft, hydrated, and youthful.",
    patientName: "Sneha V., 33",
    subtitle: "Exosome cellular therapy for skin rejuvenation"
  },
  "laser-toning": {
    treatmentName: "Laser Toning Brightening",
    beforeImage: "/services/before&after/Laser Pigment Reduction/before.webp",
    afterImage: "/services/before&after/Laser Pigment Reduction/after.webp",
    testimonialText: "My skin tone is much brighter and even. The dullness is gone, and there was zero downtime after the laser sessions.",
    patientName: "Megha S., 29",
    subtitle: "Q-Switched laser toning for skin brightening and pigmentation"
  },
  "mnrf-gfc": {
    treatmentName: "MNRF + GFC Combination Therapy",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "Combining MNRF with GFC was the best decision for my acne scars. The healing was faster and the results are amazing.",
    patientName: "Aditya N., 31",
    subtitle: "Combined microneedling radiofrequency and growth factors"
  },
  "mesopeels": {
    treatmentName: "Mesopeels Skin Renewal",
    beforeImage: "/services/before&after/carbon feel/before.webp",
    afterImage: "/services/before&after/carbon feel/after.webp",
    testimonialText: "My active acne has reduced and the post-acne marks have faded. My skin looks cleaner and refreshed.",
    patientName: "Pooja D., 25",
    subtitle: "Medical-grade peel formulation for skin texture and clarity"
  },
  "carbon-peel": {
    treatmentName: "Carbon Laser Peel",
    beforeImage: "/services/before&after/carbon feel/before.webp",
    afterImage: "/services/before&after/carbon feel/after.webp",
    testimonialText: "I loved the immediate glow. The carbon peel cleared out my pores and left my skin feeling clean and refreshed.",
    patientName: "Neha R., 28",
    subtitle: "Carbon-assisted laser peel for pore purification and glow"
  },
  "led-therapy": {
    treatmentName: "LED Phototherapy",
    beforeImage: "/services/before&after/Phototherapy/before.webp",
    afterImage: "/services/before&after/Phototherapy/after.webp",
    testimonialText: "It's a very relaxing treatment. The red and blue light therapy calmed my skin redness and cleared my breakouts.",
    patientName: "Varun K., 24",
    subtitle: "Narrowband LED light therapy for healing and acne defense"
  },
  "skin-mnrf": {
    treatmentName: "Skin MNRF Tightening",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "My skin elasticity has improved significantly. It feels firmer, smoother, and younger.",
    patientName: "Latha M., 42",
    subtitle: "Microneedling fractional radiofrequency for face and neck tightening"
  },
  "skin-dermapen": {
    treatmentName: "Skin Dermapen Resurfacing",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "I notice a huge difference in my skin texture. Dermapen made my skin look smoother and brighter.",
    patientName: "Nisha T., 27",
    subtitle: "Collagen induction therapy for skin texture and marks"
  },
  "skin-co2-laser": {
    treatmentName: "Skin CO2 Laser Resurfacing",
    beforeImage: "/services/before&after/Laser Scar Reduction/before.webp",
    afterImage: "/services/before&after/Laser Scar Reduction/after.webp",
    testimonialText: "The laser treatment smoothed my uneven skin. The texture has improved and scars are barely noticeable.",
    patientName: "Gaurav B., 34",
    subtitle: "Fractional CO2 laser resurfacing for skin texture improvement"
  },
  "skin-prp": {
    treatmentName: "Skin PRP Rejuvenation",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "My skin has a natural, healthy glow. The texture feels plump and rejuvenated.",
    patientName: "Deepika R., 33",
    subtitle: "Autologous Platelet-Rich Plasma for facial rejuvenation"
  },
  "skin-gfc": {
    treatmentName: "Skin GFC Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "Growth factors really helped my skin. The dullness has completely disappeared and my skin looks radiant.",
    patientName: "Aiswarya J., 30",
    subtitle: "Growth Factor Concentrate for facial brightening and tone"
  },
  "skin-exosomes": {
    treatmentName: "Skin Exosome Rejuvenation",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "This exosome treatment did wonders for my fine lines. My skin looks so refreshed and glowing.",
    patientName: "Malini V., 45",
    subtitle: "Advanced exosome therapy for anti-ageing and cell renewal"
  },
  "hair-prp": {
    treatmentName: "Hair PRP Restoration",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "My hair shedding has reduced substantially, and my hair feels thicker and healthier.",
    patientName: "Siddharth K., 31",
    subtitle: "Platelet-Rich Plasma therapy for hair restoration and growth"
  },
  "hair-gfc": {
    treatmentName: "Hair GFC Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "After 3 sessions of GFC, the density of my hair has improved and the shedding has stopped completely.",
    patientName: "Nikhil P., 29",
    subtitle: "Growth Factor Concentrate therapy for hair density and health"
  },
  "hair-exosome": {
    treatmentName: "Hair Exosome Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "Exosomes gave my hair the ultimate boost. The thinning has reversed and my scalp feels healthier.",
    patientName: "Meera D., 35",
    subtitle: "Regenerative exosome therapy for advanced hair thinning"
  },
  "hair-dutexome": {
    treatmentName: "Hair Dutexome Therapy",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "Dutexome was highly effective for my hair loss. New hair growth is clearly visible and stronger.",
    patientName: "Abhilash S., 33",
    subtitle: "Dual-action exosome therapy for robust hair growth"
  },
  "hair-monothreads": {
    treatmentName: "Hair Monothreads Anchoring",
    beforeImage: "/services/before&after/injections/before.webp",
    afterImage: "/services/before&after/injections/after.webp",
    testimonialText: "PDO threads helped anchor my thinning hair. The crown density has improved and hair fall is minimized.",
    patientName: "Hari Prasad, 37",
    subtitle: "PDO monothreads grid vectors for scalp structural support"
  }
};

const lines = fileContent.split(/\r?\n/);
let outputLines = [];
let currentServiceId = null;
let currentServiceStartLine = -1;
let currentServiceBrackets = 0;
let insideServicesData = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.includes('export const SERVICES_DATA:')) {
    insideServicesData = true;
  }

  if (insideServicesData && currentServiceId === null) {
    // Check if line contains a service declaration like "service-id": {
    const match = line.match(/^\s*"([^"]+)":\s*\{\s*$/);
    if (match) {
      currentServiceId = match[1];
      currentServiceStartLine = outputLines.length; // tracks start index in outputLines
      currentServiceBrackets = 1;
    }
    outputLines.push(line);
    continue;
  }

  if (currentServiceId !== null) {
    // We are inside a service block. Track braces.
    for (let char of line) {
      if (char === '{') currentServiceBrackets++;
      if (char === '}') currentServiceBrackets--;
    }

    if (currentServiceBrackets === 0) {
      // We found the end of the service block!
      const serviceLines = outputLines.slice(currentServiceStartLine);
      const serviceText = serviceLines.join('\n');

      if (beforeAfterData[currentServiceId] && !serviceText.includes('beforeAfter:')) {
        // Find the index of the ctaImage line inside this block
        let ctaIndex = -1;
        for (let j = outputLines.length - 1; j >= currentServiceStartLine; j--) {
          if (outputLines[j].includes('ctaImage:')) {
            ctaIndex = j;
            break;
          }
        }

        if (ctaIndex !== -1) {
          // Check if it already has a comma
          if (!outputLines[ctaIndex].endsWith(',')) {
            outputLines[ctaIndex] = outputLines[ctaIndex].trimEnd() + ',';
          }
          const data = beforeAfterData[currentServiceId];
          const beforeAfterBlock = [
            '    beforeAfter: {',
            `      beforeImage: "${data.beforeImage}",`,
            `      afterImage: "${data.afterImage}",`,
            `      treatmentName: "${data.treatmentName}",`,
            `      testimonialText: "${data.testimonialText}",`,
            `      patientName: "${data.patientName}",`,
            `      subtitle: "${data.subtitle}"`,
            '    },'
          ];
          outputLines.splice(ctaIndex + 1, 0, ...beforeAfterBlock);
          console.log(`Successfully added beforeAfter to ${currentServiceId}`);
        } else {
          console.log(`Warning: ctaImage not found in ${currentServiceId}`);
        }
      } else if (beforeAfterData[currentServiceId]) {
        console.log(`Service ${currentServiceId} already has beforeAfter`);
      }

      currentServiceId = null;
    }
  }

  outputLines.push(line);
}

fs.writeFileSync(filePath, outputLines.join('\n'), 'utf8');
console.log('Finished updating servicesData.ts');

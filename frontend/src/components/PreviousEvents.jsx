import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "../Styles/PreviousEvents.css";

const PreviousEvents = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [legacyVisible, setLegacyVisible] = useState(false);
  const legacyRef = useRef(null);

  const events = [
    {
      year: "2024",
      venue: "HR Excellence Awards at Radisson",
      location: "Pune",
      highlights: [
        "Chief Guest: Shri Harshvardhan Patil - Former Minister of Parliamentary Affairs, Maharashtra",
        "Distinguished Juries from Tech Mahindra, Jade Global, Eclerx Services, Force Motors",
        "50+ Corporate Excellence Award Recipients",
        "Academia Recognition with East Oxford Awards",
      ],
      chiefGuests: [
        {
          name: "Shri Harshvardhan Patil",
          designation: "Former Minister of Parliamentary Affairs, Maharashtra",
          profileImage: "/images/HP.png",
        },
      ],
      notableAwardees: [
        {
          name: "Prashant Kesari",
          company: "Emotorad",
          position: "CFO",
          profileImage: "/images/Pk.png",
        },
        {
          name: "Rohit Gupta",
          company: "Thyssenkrupp",
          position: "MD",
          profileImage: "/images/RG.png",
        },
        {
          name: "Jignesh Patel",
          company: "Jivika Healthcare Pvt Ltd",
          position: "CEO",
          profileImage: "/images/JP.png",
        },
        {
          name: "Sanju Kela",
          company: "Net Protector",
          position: "MD",
          profileImage: "/images/SK.png",
        },
        {
          name: "Ravindra Bharti",
          company: "Bharti Share Market",
          position: "MD",
          profileImage: "/images/RB.png",
        },
        {
          name: "Pallavi Shah",
          company: "Softdel Director",
          position: "HR",
          profileImage: "/images/PS.png",
        },
        // Additional awardees from image_f8f8a9.jpg
        {
          name: "Akashanand Kamik",
          company: "1point Isolutions",
          position: "CEO",
          profileImage: "/images/AkashanandKamik.png",
        },
        {
          name: "Vijay Sharma",
          company: "FEV India Pvt. Ltd",
          position: "MD",
          profileImage: "/images/VijaySharma.png",
        },
        {
          name: "Dr. Ajay Bakshi",
          company: "Metamorphsis Unlimited",
          position: "Managing Director",
          profileImage: "/images/DrAjayBakshi.png",
        },
        {
          name: "Ketan Kapoor",
          company: "Persistent System",
          position: "Consultant",
          profileImage: "/images/KetanKapoor.png",
        },
        {
          name: "Vikrant Gandhi",
          company: "TATTechnologies",
          position: "CB",
          profileImage: "/images/VikrantGandhi.png",
        },
        // Additional awardees from Screenshot 2025-06-08 211845.jpg
        {
          name: "Pravin Sawant",
          company: "63 Moons",
          position: "CHRO",
          profileImage: "/images/PravinSawant.png",
        },
        {
          name: "Nitin Daangal",
          company: "", // Company not specified, only "HR"
          position: "HR",
          profileImage: "/images/NitinDaangal.png",
        },
        {
          name: "Jyoti Menon",
          company: "UBS",
          position: "Country Head -HR",
          profileImage: "/images/JyotiMenon.png",
        },
        {
          name: "Suraj Dhajal",
          company: "DANA Anand India Pvt Ltd",
          position: "Deputy General Manager- HR",
          profileImage: "/images/SurajDhajal.png",
        },
        {
          name: "Anand Dhruv",
          company: "NTT",
          position: "Development Early Careers",
          profileImage: "/images/AnandDhruv.png",
        },
        {
          name: "Hemant Sethia",
          company: "UBS",
          position: "Ex-Director - Talent & Recruiting",
          profileImage: "/images/HemantSethia.png",
        },
        {
          name: "Ashish Singh",
          company: "Om Logistics",
          position: "S", // Position not fully clear in image
          profileImage: "/images/AshishSingh.png",
        },
        {
          name: "Preeti Ahuja",
          company: "Atlas Copco",
          position: "HR Leader",
          profileImage: "/images/PreetiAhuja.png",
        },
        {
          name: "Yogita Sushir",
          company: "DANA",
          position: "Head HR Admin EHS",
          profileImage: "/images/YogitaSushir.png",
        },
        {
          name: "Pradeep Tupe",
          company: "Pune Management Association",
          position: "", // Position not fully clear in image
          profileImage: "/images/PradeepTupe.png",
        },
        // Additional awardees from Screenshot 2025-06-08 211852.jpg
        {
          name: "Ganesh Tilekar",
          company: "HRAOESPL",
          position: "Head-HR",
          profileImage: "/images/GaneshTilekar.png",
        },
        // Pallavi Shah is already added
        {
          name: "Dinesh Gupta",
          company: "HR Interact",
          position: "", // Position not fully clear in image
          profileImage: "/images/DineshGupta.png",
        },
        {
          name: "Archana Handoo Sarda",
          company: "Microlise Telematic sPvt.Ltd.",
          position: "Head HR",
          profileImage: "/images/ArchanaHandooSarda.png",
        },
        {
          name: "Preeti sakhare",
          company: "Divine HR forum",
          position: "", // Position not fully clear in image
          profileImage: "/images/PreetiSakhare.png",
        },
        {
          name: "SATISH KARANJKAR",
          company: "MULSHI INDUSTRIES",
          position: "Association",
          profileImage: "/images/SATISHKARANJKAR.png",
        },
        {
          name: "Shankar Salunkhe",
          company: "Vibrant HR",
          position: "", // Position not fully clear in image
          profileImage: "/images/ShankarSalunkhe.png",
        },
        {
          name: "Amol Chaudhari",
          company: "Sneh Pricast Products, Sneh Resort & Butterfly Trampoline Park",
          position: "", // Position not fully clear in image
          profileImage: "/images/Amol Chaudhari.png",
        },
      ],
      Juries: [
        {
          name: "Ajay Mudliar",
          position: "Head Talent Acquisition",
          institution: "Tech Mahindra",
          profileImage: "/images/AM.png",
        },
        {
          name: "Dinesh Gupta",
          position: "Director RMG",
          institution: "Capgemini",
          profileImage: "/images/DG.png",
        },
        {
          name: "Rahul Bagale",
          position: "Group HR Head",
          institution: "Force Motors Limited",
          profileImage: "/images/RB.png",
        },
      ],
      eventStats: {
        companies: 25,
        awardees: 50,
        attendees: 500,
        juryMembers: 10,
      },
    },
    {
      year: "2024",
      venue: "East Oxford Awards",
      location: "Radisson, Pune",
      highlights: [
        "Keynote Speaker- Dr Parag Kalkar - Pro-Vice Chancellor at Savitribai Phule Pune University",
        "Interactive sessions on future of work and AI in HR",
        "30+ prominent corporate leaders awarded for innovation",
        "Partnerships with leading industry associations",
      ],
      chiefGuests: [
        {
          name: "Dr Parag Kalkar",
          designation: "Pro-Vice Chancellor at Savitribai Phule Pune",
          profileImage: "/images/Parag.png",
        },
      ],
      notableAwardees: [
        {
          name: "Mr. Arjun Kale",
          company: "MIT College",
          position: "Sr. Manager Training & Placement",
          profileImage: "/images/AK.png",
        },
        {
          name: "Dr. Nilesh Uke",
          company: "KJEI's Trinity Academy of Engineering",
          position: "Principal",
          profileImage: "/images/Nilesh.png",
        },
        {
          name: "Mr. Tushar S. Badhe",
          company: "Mauli College of Engineering and Technology Shegaon",
          position: "Head TPO",
          profileImage: "/images/TB.png",
        },
        {
          name: "Dr. Shivajirao Kadam",
          company: "Bharati Vidyapeeth Deemed University",
          position: "Vice Chancellor",
          profileImage: "/images/SK.png",
        },
        {
          name: "Mr. Dnyaneshwar B Rao",
          company: "Unawane MMSI Mertmmcoe Management Institute Pune",
          position: "Head TPO",
          profileImage: "/images/DR.png",
        },
        {
          name: "Dr. Bharat Agarwal",
          company: "VIT University",
          position: "Vice Chancellor",
          profileImage: "/images/BA.png",
        },
        // Additional awardees from image_f89ab3.jpg
        {
          name: "Prof. Viraj Barge",
          company: "Zeal Education Society, Pune",
          position: "Dean Training & Placement",
          profileImage: "/images/ProfVirajBarge.png",
        },
        {
          name: "Dr. Tushar Ram Sangole",
          company: "JSPMI College of Engineeringand Research",
          position: "Head / Training and Placement Department",
          profileImage: "/images/DrTusharRamSangole.png",
        },
        {
          name: "Mr. Faisal A. Khan",
          company: "",
          position: "Director",
          profileImage: "/images/MrFaisalAKhan.png",
        },
        {
          name: "Prof. Touheed Mujawar",
          company: "CCDPS, Sangli",
          position: "Founder and CEO",
          profileImage: "/images/ProfTouheedMujawar.png",
        },
        {
          name: "Mr.Ashish Vilas Jawake",
          company: "Dr. D. Y. Patil Technical Campus, Pune",
          position: "Training Placement officer",
          profileImage: "/images/MrAshishVilasJawake.png",
        },
        {
          name: "Dr zahir alam",
          company: "Thakur College of Engineering and Technology",
          position: "",
          profileImage: "/images/DrZahirAlam.png",
        },
        // Additional awardees from image_f89a92.jpg
        {
          name: "Mr.Sudarshan Sutar",
          company: "",
          position: "DYP Campus training & placementkolhapur",
          profileImage: "/images/MrSudarshanSutar.png",
        },
        {
          name: "Prof. Pramod Dastoorkar",
          company: "MIT",
          position: "",
          profileImage: "/images/ProfPramodDastoorkar.png",
        },
        {
          name: "Dr Sanjeev Wagh",
          company: "Bharati Vidyapeeth", // Assuming Bharati Vidyapeeth from other entries
          position: "Academic Leader Professor & Dean",
          profileImage: "/images/DrSanjeevWagh.png",
        },
        {
          name: "Dr Mahesh Gaudar",
          company: "",
          position: "Academic Leader Director",
          profileImage: "/images/DrMaheshGaudar.png",
        },
        {
          name: "Ms.Minakshi Tyagi",
          company: "",
          position: "",
          profileImage: "/images/MsMinakshiTyagi.png",
        },
        {
          name: "Dr. Shitalkumar Rawandale",
          company: "",
          position: "President of Maharashtra Association of TPOs– Dean",
          profileImage: "/images/DrShitalkumarRawandale.png",
        },
        {
          name: "Dr Ashutosh Misal",
          company: "",
          position: "HR Trainer, Consultant and Professional Anchor",
          profileImage: "/images/DrAshutoshMisal.png",
        },
        {
          name: "Dr.Sachin Vernekar",
          company: "Bharati Vidyapeeth",
          position: "Dean at Bharati Vidyapeeth",
          profileImage: "/images/DrSachinVernekar.png",
        },
        {
          name: "Dr.Aditya Abhyankar",
          company: "Pune University",
          position: "department of technology",
          profileImage: "/images/DrAdityaAbhyankar.png",
        },
        {
          name: "Dr.Aditya Bavadekar",
          company: "",
          position: "MIMA director",
          profileImage: "/images/DrAdityaBavadekar.png",
        },
        // Additional awardees from image_f89a5b.jpg
        {
          name: "Dr.Ganesh Rao",
          company: "PBS",
          position: "",
          profileImage: "/images/DrGaneshRao.png",
        },
        {
          name: "Dr.Sandeep Pachpande",
          company: "IBMR",
          position: "",
          profileImage: "/images/DrSandeepPachpande.png",
        },
        {
          name: "Dr.Ravikumar Chitnis",
          company: "MIT",
          position: "",
          profileImage: "/images/DrRavikumarChitnis.png",
        },
        {
          name: "Mr.Jayesh Katkar",
          company: "",
          position: "",
          profileImage: "/images/MrJayeshKatkar.png",
        },
        {
          name: "dr.Santosh Borde",
          company: "JSPM's Rajarshi Shahu College Of Engineering",
          position: "",
          profileImage: "/images/DrSantoshBorde.png",
        },
        {
          name: "Mr.Anshul sharma",
          company: "",
          position: "",
          profileImage: "/images/MrAnshulSharma.png",
        },
        {
          name: "Dr. Girish Desai",
          company: "Pimpri Chinchwad Education Trust (PCET)",
          position: "Executive Director & Independent Director at Fidel",
          profileImage: "/images/DrGirishDesai.png",
        },
        {
          name: "Dr.Shital Watille",
          company: "",
          position: "",
          profileImage: "/images/DrShitalWatille.png",
        },
        {
          name: "Dr Eknath Khedkar",
          company: "Dr. D. Y. Patil School Of Management, Lohegaon, Pune",
          position: "Director",
          profileImage: "/images/DrEknathKhedkar.png",
        },
        {
          name: "Dr.Rajeev Bhardwaj",
          company: "PCU",
          position: "Vice Principl",
          profileImage: "/images/DrRajeevBhardwaj.png",
        },
        {
          name: "Dr. Atul Kumar Jain",
          company: "D.Y.Patil",
          position: "",
          profileImage: "/images/DrAtulKumarJain.png",
        },
        {
          name: "Dr.Mangesh Karad",
          company: "MIT University",
          position: "Executive President",
          profileImage: "/images/DrMangeshKarad.png",
        },
        // Additional awardees from image_f89a53.jpg
        {
          name: "Dr.Anita Sunil Diwakar",
          company: "VITI Uni.",
          position: "CEO at VJTI TECHNOLOGY BUSINESS INCUBATOR",
          profileImage: "/images/DrAnitaSunilDiwakar.png",
        },
        {
          name: "dr. Ramakrishnan Raman",
          company: "SIBM",
          position: "",
          profileImage: "/images/DrRamakrishnanRaman.png",
        },
        {
          name: "Dr.Suraj Sharma",
          company: "RIMS",
          position: "chairman sponsor",
          profileImage: "/images/DrSurajSharma.png",
        },
        {
          name: "Dr.Chetan Chaudhari",
          company: "Dr D. Y. Patil Vidyapeeth",
          position: "Dean & Director",
          profileImage: "/images/DrChetanChaudhari.png",
        },
      ],
      eventStats: {
        companies: 20,
        awardees: 30,
        attendees: 400,
        juryMembers: 8,
      },
    },
    {
      year: "2023",
      venue: "THE GLOBAL HR SUMMIT AND AWARDS SURYADATTA GROUP OF INSTITUTES",
      location: "MARIGOLD BANQUETS",
      highlights: [
        "Focus on remote work challenges and digital transformation in HR",
        "20+ awards for pioneering virtual HR initiatives",
        "Global participation with attendees from 15+ countries",
      ],
      Juries: [
        {
          name: "Abhijit Puri",
          designation: "Senior Director",
          institution: "LTI-MINDTREE",
          profileImage: "/images/AP.png",
        },
        {
          name: "Sudhir Mateti",
          designation: "Head-HR",
          institution: "SYNTEL TELECOM",
          profileImage: "/images/SM.png",
        },
        {
          name: "Rajendra Raut",
          designation: "Head Talent Acquisition",
          institution: "JADE GLOBAL",
          profileImage: "/images/RR.png",
        },
        {
          name: "Awantika Bharadwaj",
          designation: "Sr. Dir–Culture and People",
          institution: "ENSONO",
          profileImage: "/images/AB.png",
        },
        // Additional juries from image_f88f91.jpg
        {
          name: "SAURABH SHAH",
          designation: "VP -Human Capital",
          institution: "HABER",
          profileImage: "/images/SaurabhShah.png",
        },
        {
          name: "NEERAJ KUMAR GUPTA",
          designation: "HR Director",
          institution: "KNORR-BREMSE",
          profileImage: "/images/NeerajKumarGupta.png",
        },
        {
          name: "SANJAY B CHORDIYA",
          designation: "Founder President & Chairman",
          institution: "SURYADUTTA EDUCATION FOUNDATION",
          profileImage: "/images/SanjayBChordiya.png",
        },
        {
          name: "SANGRAMSINH PAWAR",
          designation: "CHRO",
          institution: "THE DATA TECH LABS",
          profileImage: "/images/SangramsinhPawar.png",
        },
        {
          name: "RAMA SHANKAR PANDEY",
          designation: "CEO",
          institution: "TATA GREEN BATTERIES",
          profileImage: "/images/RamaShankarPandey.png",
        },
      ],
      notableAwardees: [
        {
          name: "Ajay Mudliar",
          company: "TECH MAHINDRA",
          position: "Head-Talent Acquisition",
          profileImage: "/images/AM.png",
        },
        {
          name: "Sangeeta Singh",
          company: "SIMPLIFY HEALTHCARE",
          position: "Sr. Dir.– People Functions",
          profileImage: "/images/Sangeeta.png",
        },
        {
          name: "Swapna Sangari",
          company: "QUICK HEAL",
          position: "Vice President–HR",
          profileImage: "/images/Swapna.png",
        },
        {
          name: "Niloy Bakshi",
          company: "VODAFONE",
          position: "Head–Talent Acquisition",
          profileImage: "/images/NB.png",
        },
        {
          name: "Rahul Bagale",
          company: "FORCE MOTORS",
          position: "Group Head–HR",
          profileImage: "/images/RB.png",
        },
        {
          name: "Raju PS",
          company: "LUMAX INDUSTRIES",
          position: "VP–West Region",
          profileImage: "/images/RP.png",
        },
        // Additional awardees from image_f8927c.jpg
        {
          name: "ANDREW SIMON",
          company: "eCLERX SERVICES LIMITED",
          position: "Head-Talent Acquisition",
          profileImage: "/images/AndrewSimon.png",
        },
        {
          name: "ZARNA TRIVEDI",
          company: "VERSA NETWORKS",
          position: "Head- HR",
          profileImage: "/images/ZarnaTrivedi.png",
        },
        {
          name: "SHANKAR SALUNKHE",
          company: "TM AUTOMOTIVE SEATING SYSTEMS PVT LTD",
          position: "Head- HR",
          profileImage: "/images/ShankarSalunkhe.png",
        },
        {
          name: "RAMAN RAINA",
          company: "Honeywell Automation India Limited",
          position: "Director- HR",
          profileImage: "/images/RamanRaina.png",
        },
        {
          name: "SUDHANSHU PANDIT",
          company: "PREFORCE SOFTWARE",
          position: "Sr. Dir.- HR",
          profileImage: "/images/SudhanshuPandit.png",
        },
        // Additional awardees from image_f89273.jpg
        {
          name: "Dr BRILLIAN S.K.",
          company: "TIMESPRO",
          position: "Exe VP/ Chief People Officer",
          profileImage: "/images/DrBrillianSK.png",
        },
        {
          name: "GAJANAN MORE",
          company: "TATA AUTOCOMP SYSTEM LTD",
          position: "Vice President- HR",
          profileImage: "/images/GajananMore.png",
        },
        {
          name: "SHYAMAKANT MISHRA",
          company: "AMDOLS",
          position: "Global Head- Talent Acquisition",
          profileImage: "/images/ShyamakantMishra.png",
        },
      ],
      eventStats: {
        companies: 15,
        awardees: 20,
        attendees: 700,
        juryMembers: 7,
      },
    },
    {
      year: "2022",
      venue: "HR Excellence Awards",
      location: "Hyatt Regency, Mumbai",
      highlights: [
        "Chief Guest: Shri Chandrakant Patil - Minister of Higher and Technical Education",
        "Discussions on talent acquisition and retention strategies",
        "Recognition of 40+ HR innovators and changemakers",
        "Networking opportunities with HR professionals across India",
      ],
      chiefGuests: [
        {
          name: "Shri Chandrakant Patil",
          designation: "Minister of Higher and Technical Education",
          profileImage: "/images/CP.png",
        },
        {
          name: "Shri Harshvardhan Patil",
          designation: "Former Minister of Parliamentary Affairs, Maharashtra",
          profileImage: "/images/HP.png",
        },
      ],
      notableAwardees: [
        {
          name: "Prafull Jaiswal",
          company: "ENTRATA INDIA",
          position: "HR Director",
          profileImage: "/images/Prafull.png",
        },
        {
          name: "Sachin Aute",
          company: "CUMMINS GENERATOR",
          position: "HR Head",
          profileImage: "/images/SA.png",
        },
        {
          name: "Ruchika Singh Tanwar",
          company: "UST GLOBAL",
          position: "Head Talent Acquisition",
          profileImage: "/images/RST.png",
        },
        {
          name: "Preeti Ahuja",
          company: "ATLAS COPCO",
          position: "HR Leader",
          profileImage: "/images/PA.png",
        },
        {
          name: "Shantanu Ghosal",
          company: "SCHAEFFLER INDIA",
          position: "Vice President-HR",
          profileImage: "/images/SG.png",
        },
        {
          name: "Vaishali Darade",
          company: "MAGNA STYER",
          position: "Lead- Talent Acquisition",
          profileImage: "/images/VD.png",
        },
        // Additional awardees from image_f88b35.jpg
        {
          name: "SANDEEP M PHUKE",
          company: "GODREJ & BOYCE MFG. CO",
          position: "HR Head",
          profileImage: "/images/SandeepMPhuke.png",
        },
        {
          name: "DR. KUNAL KUMAWAT",
          company: "ATLAS COPCO INDIA LIMITED",
          position: "HR Manager",
          profileImage: "/images/DrKunalKumawat.png",
        },
        {
          name: "AVDHUT MUSALE",
          company: "ALFA LAVAL",
          position: "HR Business Partner",
          profileImage: "/images/AvdhutMusale.png",
        },
        {
          name: "VASANT KAMBLE",
          company: "SUMAX ENTERPRISES PVT LTD",
          position: "HR Head",
          profileImage: "/images/VasantKamble.png",
        },
        {
          name: "MAHESH GOSAVI",
          company: "PERSISTENT SYSTEMS",
          position: "Dir.- Talent Acquisition",
          profileImage: "/images/MaheshGosavi.png",
        },
        {
          name: "SAHIL KAPOOR",
          company: "EY INDIA",
          position: "Asst. Dir.-Talent Acquisition",
          profileImage: "/images/SahilKapoor.png",
        },
        {
          name: "ROHIT KALAMKAR",
          company: "MINDPOOL TECHNOLOGIES",
          position: "Assoc. Dir - HR & Operation",
          profileImage: "/images/RohitKalamkar.png",
        },
        {
          name: "SMITA NARKAR",
          company: "INFINITE UPTIME",
          position: "HR Head",
          profileImage: "/images/SmitaNarkar.png",
        },
        {
          name: "PALLAVI SARKAR",
          company: "NORMA GROUP",
          position: "Country HR Head",
          profileImage: "/images/PallaviSarkar.png",
        },
        {
          name: "MOHAN PATIL",
          company: "BOSCH INDIA",
          position: "Corp HR Head & Ind. Relations",
          profileImage: "/images/MohanPatil.png",
        },
        {
          name: "SHILPA NIMBALKAR",
          company: "FUJITSU INDIA",
          position: "Head- L & D",
          profileImage: "/images/ShilpaNimbalkar.png",
        },
        {
          name: "KHUSHNUMA DASTOOR",
          company: "AMAZON",
          position: "Manager - L & D",
          profileImage: "/images/KhushnumaDastoor.png",
        },
        // Additional awardees from image_f88b16.jpg
        {
          name: "VIBHUTI PANDYA",
          company: "ATLAS COPCO",
          position: "Manager- HR",
          profileImage: "/images/VibhutiPandya.png",
        },
        {
          name: "KAVITA TONDON",
          company: "SIMPLIFY HEALTHCARE",
          position: "VP & Global Head - HR",
          profileImage: "/images/KavitaTondon.png",
        },
        {
          name: "MILIND KULKARNI",
          company: "HRBP INDIA HEAD",
          position: "",
          profileImage: "/images/MilindKulkarni.png",
        },
        {
          name: "DAYA OGALE",
          company: "TOM TOM",
          position: "Head HR & Site Leader",
          profileImage: "/images/DayaOgale.png",
        },
        // Preeti Ahuja is already added
        {
          name: "SUSHIL MALWADKAR",
          company: "GENERAL MOTORS",
          position: "Deputy GM",
          profileImage: "/images/SushilMalwadkar.png",
        },
        {
          name: "SUCHITA SINGH BASU",
          company: "ZF FRIDRICHSCHAFEN",
          position: "Head- HR",
          profileImage: "/images/SuchitaSinghBasu.png",
        },
        {
          name: "MILIND MUTALIK",
          company: "ACCOUTE DIGITAL",
          position: "Head- HR",
          profileImage: "/images/MilindMutalik.png",
        },
        // Shantanu Ghosal is already added
        {
          name: "ANAND AMRIT RAJ",
          company: "OKAYA EV PVT. LTD.",
          position: "Vice President- HR",
          profileImage: "/images/AnandAmritRaj.png",
        },
        {
          name: "SUSHIL DARAK",
          company: "MARQUARDT",
          position: "Director- HR",
          profileImage: "/images/SushilDarak.png",
        },
        {
          name: "YOGESH BASOLE",
          company: "CROMPTON",
          position: "Asst. Vice President",
          profileImage: "/images/YogeshBasole.png",
        },
        {
          name: "JYOTI SINGH",
          company: "ULTRA TECH",
          position: "Head- HR & Admin",
          profileImage: "/images/JyotiSingh.png",
        },
        {
          name: "JOY GEORGE",
          company: "CDK GLOBAL INDIA",
          position: "Sr. Dir. & HR Head",
          profileImage: "/images/JoyGeorge.png",
        },
        // Additional awardees from image_f88af8.jpg
        {
          name: "PRASAD KULKARNI",
          company: "CITCO GROUP SERVICES INDIA LLP",
          position: "EVP – HR",
          profileImage: "/images/PrasadKulkarni.png",
        },
        {
          name: "AMIT TIWARI",
          company: "MOTHERSONGROUP",
          position: "Zonal Head- HR",
          profileImage: "/images/AmitTiwari.png",
        },
        {
          name: "AWANTIKA BHARADWAJ",
          company: "ENSONO",
          position: "Sr. Dir.- Culture & People",
          profileImage: "/images/AwantikaBharadwaj.png",
        },
        {
          name: "ANCY NIMSHA SRENIVASAN",
          company: "ENTERPRISE DB SOFTWARE",
          position: "Sr. Dir.- HR",
          profileImage: "/images/AncyNimshaSrenivasan.png",
        },
        {
          name: "SUDIPTA MARJIT",
          company: "TATA AUTO COMP SYSTEMS LTD.",
          position: "Group Head HR",
          profileImage: "/images/SudiptaMarjit.png",
        },
        {
          name: "CDR PRATAP PAWAR",
          company: "GS LAB",
          position: "HR Director",
          profileImage: "/images/CdrPratapPawar.png",
        },
        {
          name: "YUVRAJ SHARMA",
          company: "ANSIRA",
          position: "Head Talent Acquisition",
          profileImage: "/images/YuvrajSharma.png",
        },
        {
          name: "MOHINI KUDTARKAR",
          company: "DEEPAK FERTILISERS AND PETROCHEMICALS CORP. LTD.",
          position: "Assoc. VP & Head HR",
          profileImage: "/images/MohiniKudtarkar.png",
        },
      ],
      Juries: [
        {
          name: "Neeraj Kumar Gupta",
          position: "HR Director",
          institution: "KNORR-BREMSE",
          profileImage: "/images/NKG.png",
        },
        {
          name: "Saurabh Shah",
          position: "VP -Human Capital",
          institution: "HABER",
          profileImage: "/images/SS.png",
        },
        {
          name: "Girish Desai",
          position: "Executive Director",
          institution: "PCET",
          profileImage: "/images/GD.png",
        },
        // Additional juries from image_f88b54.jpg
        {
          name: "SANGRAMSINH PAWAR",
          position: "Head- HR",
          institution: "ATOS",
          profileImage: "/images/SangramsinhPawar.png",
        },
        {
          name: "SUDHIR MATETI",
          position: "Head- HR",
          institution: "SYNTEL TELECOM",
          profileImage: "/images/SudhirMateti.png",
        },
        {
          name: "VAIBHAV DESHMUKH",
          position: "Corporate Manager- HR",
          institution: "VENKY'S (INDIA) PVT LTD",
          profileImage: "/images/VaibhavDeshmukh.png",
        },
        {
          name: "Dr GEETIKA MADAN",
          position: "Group Head TM & OD & HRBP",
          institution: "WEIKFIELD",
          profileImage: "/images/DrGeetikaMadan.png",
        },
        {
          name: "VINOD BIDWAIK",
          position: "VP- HR & CHRO",
          institution: "ALFA LAVAL",
          profileImage: "/images/VinodBidwaik.png",
        },
      ],
      eventStats: {
        companies: 30,
        awardees: 40,
        attendees: 600,
        juryMembers: 12,
      },
    },
  ];

  // Safe fallback to avoid undefined errors
  const currentEvent = events[activeEvent] || events[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLegacyVisible(true);
      },
      { threshold: 0.3 }
    );
    if (legacyRef.current) observer.observe(legacyRef.current);
    return () => {
      if (legacyRef.current) observer.unobserve(legacyRef.current);
    };
  }, []);

  return (
    <section className="events-section">
      <div className="container">
        <h2 className="section-title">Our Legacy of Excellence</h2>

        <div className="events-main-container">
          {/* Timeline Navigation */}
          <nav className="events-timeline-nav">
            {events.map((event, idx) => (
              <button
                key={idx}
                className={`timeline-item ${
                  idx === activeEvent ? "active" : ""
                }`}
                onClick={() => setActiveEvent(idx)}
              >
                <span className="timeline-year">{event.year}</span>
                <span className="timeline-venue">{event.venue}</span>
              </button>
            ))}
          </nav>

          {/* Event Details */}
          <div className="event-details-content">
            <div className="event-header">
              <div className="event-meta">
                <span className="event-year-highlight">
                  {currentEvent.year}
                </span>
                <h3 className="event-title">{currentEvent.venue}</h3>
                <p className="event-location">{currentEvent.location}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="event-highlights">
              <h4>Highlights</h4>
              <ul>
                {currentEvent.highlights?.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Chief Guests */}
            {currentEvent.chiefGuests?.length > 0 && (
              <div className="chief-guests-section">
                <h4>Chief Guest</h4>
                <div className="guests-grid">
                  {currentEvent.chiefGuests.map((g, i) => (
                    <div key={i} className="guest-card">
                      <img
                        src={g.profileImage}
                        alt={g.name}
                        className="guest-photo"
                      />
                      <p className="guest-name">{g.name}</p>
                      <p className="guest-designation">{g.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notable Awardees */}
            {currentEvent.notableAwardees?.length > 0 && (
              <div className="awardees-section">
                <h4>Notable Awardees</h4>
                <div className="awardees-grid">
                  {currentEvent.notableAwardees.map((a, i) => (
                    <div key={i} className="awardee-card">
                      <img
                        src={a.profileImage}
                        alt={a.name}
                        className="awardee-photo"
                      />
                      <p className="awardee-name">{a.name}</p>
                      <p className="awardee-company">{a.company}</p>
                      <p className="awardee-position">{a.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Juries */}
            {currentEvent.Juries?.length > 0 && (
              <div className="academic-guests-section">
                <h4>Juries</h4>
                <div className="guests-grid">
                  {currentEvent.Juries.map((j, i) => (
                    <div key={i} className="guest-card">
                      <img
                        src={j.profileImage}
                        alt={j.name}
                        className="guest-photo"
                      />
                      <p className="guest-name">{j.name}</p>
                      <p className="guest-designation">
                        {j.position}, {j.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Statistics */}
            <div className="event-stats-section">
              <h4>Event Statistics</h4>
              <div className="event-stats">
                {["attendees", "awardees", "companies", "juryMembers"].map(
                  (statKey) => (
                    <div key={statKey} className="stat-item">
                      <span className="stat-number">
                        {currentEvent.eventStats[statKey]}+
                      </span>
                      <span className="stat-label">
                        {statKey.charAt(0).toUpperCase() +
                          statKey.slice(1).replace(/([A-Z])/g, " $1")}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Legacy Section with CountUp */}
        <div className="legacy-section" ref={legacyRef}>
          <h3>Our Legacy in Numbers</h3>
          <div className="legacy-stats">
            <div className="legacy-item">
              <h4>
                {legacyVisible ? <CountUp end={2000} duration={2} /> : 0}+
              </h4>
              <p>Total Awardees</p>
            </div>
            <div className="legacy-item">
              <h4>{legacyVisible ? <CountUp end={100} duration={2} /> : 0}+</h4>
              <p>Corporate Partners</p>
            </div>
            <div className="legacy-item">
              <h4>{legacyVisible ? <CountUp end={50} duration={2} /> : 0}+</h4>
              <p>Academic Institutions</p>
            </div>
            <div className="legacy-item">
              <h4>{legacyVisible ? <CountUp end={5} duration={2} /> : 0}+</h4>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
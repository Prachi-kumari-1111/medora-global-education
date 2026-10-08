export const slides = [
  {
    eyebrow: "WELCOME TO",
    title: "Medora Global Education",
    text: "Personalised online education for students across India and the world.",
    image: "https://images.pexels.com/photos/6936022/pexels-photo-6936022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Learn from Anywhere",
    accent: "blue"
  },
  {
    eyebrow: "1:1 LEARNING",
    title: "One Teacher. One Student. Complete Attention.",
    text: "A customised learning journey built around your child's pace, goals and learning style.",
    image: "https://images.pexels.com/photos/32773027/pexels-photo-32773027.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Personalised Support",
    accent: "violet"
  },
  {
    eyebrow: "SMALL GROUP",
    title: "5 Students. 1 Expert Teacher. Better Interaction.",
    text: "Small, engaging batches where every learner gets meaningful attention.",
    image: "https://images.pexels.com/photos/37827719/pexels-photo-37827719.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Interactive Learning",
    accent: "green"
  },
  {
    eyebrow: "SMART GROUP CLASSES",
    title: "Learn Together. Grow Together.",
    text: "Structured live classes for groups of up to 20 students with assessments and doubt support.",
    image: "https://images.pexels.com/photos/7742816/pexels-photo-7742816.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Up to 20 Students",
    accent: "orange"
  },
  {
    eyebrow: "GLOBAL CURRICULUM",
    title: "CBSE • ICSE • International Curriculums",
    text: "Learn from anywhere with a curriculum-aware academic plan for your child.",
    image: "https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Global Learning",
    accent: "cyan"
  }
];

export const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`).concat(["Foundation", "Special Programs"]);

export const classSubjects = {
  "Class 1": ["Mathematics", "English", "EVS", "Computer"],
  "Class 2": ["Mathematics", "English", "EVS", "Computer"],
  "Class 3": ["Mathematics", "Science", "English", "Social Studies", "Computer"],
  "Class 4": ["Mathematics", "Science", "English", "Social Studies", "Computer"],
  "Class 5": ["Mathematics", "Science", "English", "Social Studies", "Computer"],
  "Class 6": ["Mathematics", "Science", "English", "Social Science", "Computer"],
  "Class 7": ["Mathematics", "Science", "English", "Social Science", "Computer"],
  "Class 8": ["Mathematics", "Science", "English", "Social Science", "Computer", "Other Curriculum Subjects"],
  "Class 9": ["Mathematics", "Science", "English", "Social Science", "Computer"],
  "Class 10": ["Mathematics", "Science", "English", "Social Science", "Computer"],
  "Class 11": ["Mathematics", "Physics", "Chemistry", "English", "Computer"],
  "Class 12": ["Mathematics", "Physics", "Chemistry", "English", "Computer"],
  "Foundation": ["Concept Building", "Olympiad Prep", "Reasoning", "Study Skills"],
  "Special Programs": ["Academic Mentoring", "Exam Prep", "Doubt Support", "Study Skills"]
};

export const learningModels = [
  {
    id: "1:1",
    title: "1:1 Personalised Learning",
    ratio: "1 Teacher : 1 Student",
    description: "Complete personal attention with a learning plan designed around one learner.",
    bullets: ["Complete personal attention", "Customised study plan", "Individual doubt solving", "Flexible scheduling", "Regular progress monitoring", "Parent updates"],
    cta: "Enquire for 1:1",
    tone: "blue",
    image: "https://images.pexels.com/photos/32773027/pexels-photo-32773027.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "5:1",
    title: "Small Group Learning",
    ratio: "1 Teacher : 5 Students",
    description: "Small interactive batches that balance personal attention, peer learning and affordability.",
    bullets: ["Small interactive batch", "Better teacher-student interaction", "Individual attention", "Peer learning", "Regular assessments", "Affordable personalised learning"],
    cta: "Join 5:1 Batch",
    tone: "violet",
    image: "https://images.pexels.com/photos/8197511/pexels-photo-8197511.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "20:1",
    title: "Group Learning",
    ratio: "1 Teacher : Up to 20 Students",
    description: "Structured live classrooms with expert faculty, assessments and doubt solving.",
    bullets: ["Structured online classroom", "Expert faculty", "Live interactive classes", "Tests & assessments", "Doubt solving", "Performance tracking"],
    cta: "Explore Group Classes",
    tone: "green",
    image: "https://images.pexels.com/photos/8423125/pexels-photo-8423125.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export const curricula = [
  ["CBSE", "India", "🇮🇳"], ["ICSE", "India", "🇮🇳"], ["State Boards", "India", "🇮🇳"],
  ["UK Curriculum", "United Kingdom", "🇬🇧"], ["UAE Schools", "UAE", "🇦🇪"], ["US Curriculum", "United States", "🇺🇸"],
  ["Australian Curriculum", "Australia", "🇦🇺"], ["Other", "International", "🌍"]
];

export const benefits = [
  ["🎯", "Personalised Learning", "Every child's learning requirement is unique."],
  ["👨‍🏫", "Expert Teachers", "Experienced and subject-specialist educators."],
  ["💬", "Live Interactive Classes", "Students can ask questions and participate actively."],
  ["🧑‍💼", "Special Mentor Support", "Academic guidance and regular mentoring."],
  ["📊", "Progress Tracking", "Regular tests, assessments and performance monitoring."],
  ["👨‍👩‍👦", "Parent Updates", "Stay informed about your child's academic progress."],
  ["🌎", "Global Accessibility", "Learn from anywhere in India or overseas."],
  ["🕐", "Flexible Scheduling", "Classes across different time zones."]
];

export const countries = ["India", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "USA", "Canada", "Australia", "UK", "Singapore", "Other"];

export const successStories = [
  ["Aarav Sharma", "Dubai, UAE", "Class 8 | CBSE", "1:1 Learning", "Before joining Medora, I struggled with Maths. Now I understand concepts clearly and my grades have improved a lot.", ["Improved Grades", "Better Confidence"], "https://images.pexels.com/photos/37811262/pexels-photo-37811262.jpeg?auto=compress&cs=tinysrgb&w=900"],
  ["Sara Khan", "Abu Dhabi, UAE", "Class 6 | British Curriculum", "5:1 Small Group", "The teachers are amazing and classes are very interactive. I feel more confident now.", ["Better Interaction", "Concept Clarity"], "https://images.pexels.com/photos/6936015/pexels-photo-6936015.jpeg?auto=compress&cs=tinysrgb&w=900"],
  ["Riyan Patel", "London, UK", "Class 10 | ICSE", "20:1 Group Batch", "Live classes and regular tests have helped me stay consistent and perform better in exams.", ["Consistent Performance", "Improved Grades"], "https://images.pexels.com/photos/10643463/pexels-photo-10643463.jpeg?auto=compress&cs=tinysrgb&w=900"]
];

export const testimonials = [
  ["Priya Mehta", "Parent of Class 7 Student", "New York, USA", "The personalised attention and regular feedback have made a huge difference in my child's learning journey."],
  ["Ahmed Al Mansoori", "Parent of Class 9 Student", "Dubai, UAE", "Excellent teachers, flexible timings and great support. Highly recommended for overseas students."],
  ["Neha Kapoor", "Parent of Class 5 Student", "Singapore", "My daughter enjoys the classes and has shown great improvement in her grades and confidence."]
];

export const programs = [
  {
    title: "Core School Programs",
    tag: "Classes 1–12",
    description: "Strong subject foundations, homework support, concept clarity and regular assessments for everyday school success.",
    points: ["Maths & Science", "English & Social Studies", "Computer support", "School-aligned assessments"],
    image: "https://images.pexels.com/photos/10614240/pexels-photo-10614240.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Foundation & Olympiad",
    tag: "Build Ahead",
    description: "Challenge-led learning for curious students who want deeper concepts, reasoning and competitive preparation.",
    points: ["Concept strengthening", "Logical reasoning", "Olympiad preparation", "Advanced practice"],
    image: "https://images.pexels.com/photos/18506750/pexels-photo-18506750.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Exam Preparation",
    tag: "High Focus",
    description: "Structured revision, mock tests and doubt support designed around important school and entrance milestones.",
    points: ["Revision plans", "Mock tests", "Doubt-solving sessions", "Performance review"],
    image: "https://images.pexels.com/photos/5676667/pexels-photo-5676667.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Academic Mentoring",
    tag: "Beyond Classes",
    description: "A guided support layer that helps students plan, stay consistent and build better learning habits.",
    points: ["Goal setting", "Study planning", "Progress reviews", "Parent feedback"],
    image: "https://images.pexels.com/photos/8617741/pexels-photo-8617741.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

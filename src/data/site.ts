export const SOCIETY = {
  name: "Amrapali Silicon City",
  aoa: "Apartment Owners Association",
  phase: "Phase 1",
  address: "Amrapali Silicon City, Phase 1, Sector 76, Noida, Uttar Pradesh 201301",
  phone: "+91 120 400 0000",
  email: "office@amrapalisiliconcityaoa.org",
  hours: "Mon – Sat, 10:00 AM – 6:00 PM (Sunday closed)",
  whatsapp: "911204000000",
  mapEmbed:
    "https://www.google.com/maps?q=Amrapali+Silicon+City+Sector+76+Noida&output=embed",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About AOA", to: "/about-aoa" },
  { label: "About Society", to: "/about-society" },
  { label: "Committee", to: "/committee" },
  { label: "Services", to: "/services" },
  { label: "Resident Corner", to: "/resident-corner" },
  { label: "Notices", to: "/notices" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Vendors", to: "/vendors" },
  { label: "Complaints", to: "/complaints" },
  { label: "Emergency", to: "/emergency-contacts" },
  { label: "Downloads", to: "/downloads" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: 2500, suffix: "+", label: "Families" },
  { value: 12, suffix: "+", label: "Residential Towers" },
  { value: 24, suffix: "x7", label: "Security & Support" },
  { value: 100, suffix: "%", label: "Community Driven" },
];

export const QUICK_SERVICES = [
  { title: "Raise Complaint", desc: "Log a ticket and track it end to end.", to: "/complaints", icon: "wrench" },
  { title: "Maintenance Info", desc: "Billing cycle, dues and receipts.", to: "/resident-corner", icon: "receipt" },
  { title: "Emergency Numbers", desc: "Police, fire, ambulance, lift help.", to: "/emergency-contacts", icon: "phone" },
  { title: "Visitor Guidelines", desc: "Entry rules and QR visitor pass.", to: "/resident-corner", icon: "userCheck" },
  { title: "Download Forms", desc: "Membership, NOC, transfer forms.", to: "/downloads", icon: "download" },
  { title: "Society Rules", desc: "Bylaws, parking and pet rules.", to: "/about-aoa", icon: "scale" },
  { title: "Book Community Hall", desc: "Reserve the clubhouse or lawn.", to: "/resident-corner", icon: "calendar" },
  { title: "Lost & Found", desc: "Report or claim lost belongings.", to: "/resident-corner", icon: "search" },
  { title: "Vendor Directory", desc: "Verified plumbers, electricians, more.", to: "/vendors", icon: "hammer" },
  { title: "Resident Login", desc: "Access your member dashboard.", to: "/login", icon: "lock" },
];

export const NOTICES = [
  { title: "Annual General Meeting – Notice & Agenda", date: "2 Aug 2026", category: "AOA Meeting", excerpt: "The AGM for FY 2026-27 will be held at the Community Hall, Tower C. Agenda and audited accounts enclosed." },
  { title: "Scheduled Electricity Shutdown – Towers D, E, F", date: "29 Jul 2026", category: "Electricity Shutdown", excerpt: "Preventive maintenance of transformers on 31 Jul from 10:00 AM to 2:00 PM." },
  { title: "Revised Maintenance Charges w.e.f. 1 Aug 2026", date: "22 Jul 2026", category: "Maintenance", excerpt: "Revised per sq. ft. rates approved by the Executive Committee along with the payment schedule." },
  { title: "Independence Day Celebration – Volunteer Signup", date: "18 Jul 2026", category: "Events", excerpt: "Flag hoisting at 8:00 AM in the central park followed by cultural programmes." },
  { title: "Water Tanker Schedule for Summer Months", date: "10 Jul 2026", category: "General", excerpt: "Additional tankers arranged for peak-hour demand across all towers." },
  { title: "Status Update – Hon'ble Court Matter & NBCC Handover", date: "1 Jul 2026", category: "Legal", excerpt: "Summary of the last hearing and progress on pending construction works." },
];

export const EVENTS = [
  { title: "Independence Day Celebration", date: "15 Aug 2026", time: "8:00 AM", venue: "Central Park", tag: "Upcoming" },
  { title: "Janmashtami Utsav", date: "26 Aug 2026", time: "6:00 PM", venue: "Community Hall", tag: "Upcoming" },
  { title: "Society Sports Day", date: "12 Sep 2026", time: "7:00 AM", venue: "Sports Complex", tag: "Upcoming" },
  { title: "Blood Donation Camp", date: "28 Sep 2026", time: "9:00 AM", venue: "Clubhouse Lobby", tag: "Upcoming" },
  { title: "Diwali Mela & Cultural Night", date: "8 Nov 2026", time: "5:00 PM", venue: "Central Park", tag: "Upcoming" },
  { title: "Morning Yoga Session", date: "Every Sunday", time: "6:30 AM", venue: "Green Lawn", tag: "Recurring" },
  { title: "Quarterly Resident Meeting", date: "20 Jun 2026", time: "11:00 AM", venue: "Community Hall", tag: "Past" },
  { title: "Holi Milan Samaroh", date: "14 Mar 2026", time: "10:00 AM", venue: "Tower B Lawn", tag: "Past" },
];

export const COMMITTEE = [
  { name: "Rajeev Sharma", role: "President", phone: "+91 98100 00001", email: "president@ascaoa.org", bio: "Resident of Tower C since 2014. Leads AOA governance, legal coordination and NBCC liaison.", duties: ["Overall governance", "Legal & authority liaison", "Committee oversight"] },
  { name: "Neha Verma", role: "Vice President", phone: "+91 98100 00002", email: "vp@ascaoa.org", bio: "Focused on resident welfare, events and community engagement programmes.", duties: ["Resident welfare", "Events & culture", "Women's safety"] },
  { name: "Amit Nagpal", role: "Secretary", phone: "+91 98100 00003", email: "secretary@ascaoa.org", bio: "Handles notices, meeting minutes, records and official correspondence.", duties: ["Notices & minutes", "Records & bylaws", "Membership"] },
  { name: "Sunita Rathi", role: "Treasurer", phone: "+91 98100 00004", email: "treasurer@ascaoa.org", bio: "Manages maintenance collections, audits and transparent financial reporting.", duties: ["Accounts & audit", "Maintenance billing", "Budgets"] },
  { name: "Vikram Singh", role: "Executive Member – Security", phone: "+91 98100 00005", email: "security@ascaoa.org", bio: "Coordinates guarding agency, CCTV coverage and visitor management.", duties: ["Security & CCTV", "Visitor management", "Parking discipline"] },
  { name: "Pooja Mehta", role: "Executive Member – Housekeeping", phone: "+91 98100 00006", email: "housekeeping@ascaoa.org", bio: "Oversees cleaning, waste segregation and horticulture across the campus.", duties: ["Housekeeping", "Waste management", "Horticulture"] },
];

export const EMERGENCY = [
  { label: "Police Control Room", number: "112", group: "Emergency" },
  { label: "Fire Brigade", number: "101", group: "Emergency" },
  { label: "Ambulance", number: "102", group: "Emergency" },
  { label: "Sector 76 Police Chowki", number: "+91 120 245 6789", group: "Local" },
  { label: "Nearest Hospital (Felix / Kailash)", number: "+91 120 411 1111", group: "Local" },
  { label: "Electricity Complaint (NPCL)", number: "+91 120 663 2222", group: "Utility" },
  { label: "Lift Support (24x7)", number: "+91 98110 22334", group: "Society" },
  { label: "Water Supply Team", number: "+91 98110 22335", group: "Society" },
  { label: "Security Office – Main Gate", number: "+91 98110 22336", group: "Society" },
  { label: "Maintenance Helpdesk", number: "+91 98110 22337", group: "Society" },
];

export const VENDORS = [
  { name: "Ramesh Electricals", trade: "Electrician", phone: "+91 98110 44001", rating: 4.8, availability: "8 AM – 9 PM" },
  { name: "Sai Plumbing Works", trade: "Plumber", phone: "+91 98110 44002", rating: 4.6, availability: "24x7 on call" },
  { name: "ShinePro Housekeeping", trade: "Housekeeping", phone: "+91 98110 44003", rating: 4.7, availability: "7 AM – 7 PM" },
  { name: "Kumar Carpentry", trade: "Carpenter", phone: "+91 98110 44004", rating: 4.5, availability: "9 AM – 8 PM" },
  { name: "Airtel / JioFiber Support", trade: "Internet Provider", phone: "+91 98110 44005", rating: 4.3, availability: "9 AM – 8 PM" },
  { name: "Aqua Fresh Water Supply", trade: "Water Supplier", phone: "+91 98110 44006", rating: 4.4, availability: "24x7" },
  { name: "Noida Gas Agency", trade: "Gas Agency", phone: "+91 98110 44007", rating: 4.2, availability: "9 AM – 6 PM" },
  { name: "SpeedLink Courier", trade: "Courier", phone: "+91 98110 44008", rating: 4.5, availability: "10 AM – 8 PM" },
  { name: "City Ride Cabs", trade: "Cab Service", phone: "+91 98110 44009", rating: 4.6, availability: "24x7" },
  { name: "FreshFold Laundry", trade: "Laundry", phone: "+91 98110 44010", rating: 4.4, availability: "8 AM – 8 PM" },
];

export const DOWNLOADS = [
  { title: "AOA Membership Form", size: "PDF · 220 KB", group: "Forms" },
  { title: "No Objection Certificate (NOC) Request", size: "PDF · 180 KB", group: "Forms" },
  { title: "Flat Transfer Application", size: "PDF · 240 KB", group: "Forms" },
  { title: "Tenant Registration Form", size: "PDF · 190 KB", group: "Forms" },
  { title: "AOA Registered Bylaws", size: "PDF · 1.4 MB", group: "Governance" },
  { title: "Minutes of Last AGM", size: "PDF · 620 KB", group: "Governance" },
  { title: "Maintenance Circular – Aug 2026", size: "PDF · 150 KB", group: "Circulars" },
  { title: "Parking Rules & Sticker Policy", size: "PDF · 210 KB", group: "Circulars" },
  { title: "Emergency SOP & Evacuation Plan", size: "PDF · 480 KB", group: "Safety" },
];

export const TESTIMONIALS = [
  { name: "Anjali Gupta", tower: "Tower B, Flat 704", quote: "Complaints that used to take weeks are now closed in days. The ticket tracking keeps everyone accountable." },
  { name: "Suresh Iyer", tower: "Tower F, Flat 1102", quote: "Transparent accounts and regular notices have completely changed how we trust the association." },
  { name: "Farhan Ali", tower: "Tower J, Flat 305", quote: "Festivals here feel like a big family gathering. The events team does a wonderful job every year." },
  { name: "Kavita Joshi", tower: "Tower D, Flat 902", quote: "Getting the visitor pass and hall booking online saves so much time for working residents like me." },
];

export const NEWS = [
  { title: "Central park re-landscaping completed", date: "5 Aug 2026", tag: "Society Update", body: "New jogging track surface, seating pods and drip irrigation are now live across the central green." },
  { title: "Tower G lift modernisation begins", date: "30 Jul 2026", tag: "Construction", body: "Phase-wise controller replacement with a temporary schedule shared on the notice board." },
  { title: "NBCC progress review meeting held", date: "24 Jul 2026", tag: "NBCC Update", body: "AOA representatives reviewed pending structural works and finishing timelines for remaining towers." },
  { title: "Noida Authority water tariff circular", date: "16 Jul 2026", tag: "Government", body: "Revised tariff slabs applicable from the next billing cycle; impact on maintenance explained." },
];

export const FAQS = [
  { q: "Who can become a member of the AOA?", a: "Every registered apartment owner of Amrapali Silicon City Phase 1 is eligible for membership. Submit the membership form along with proof of ownership and a copy of your ID at the AOA office or through Resident Corner." },
  { q: "How is the monthly maintenance calculated?", a: "Maintenance is charged on a per sq. ft. super-area basis as approved in the general body meeting, plus applicable sinking fund and utility components. The current rate card is published under Downloads." },
  { q: "How do I raise and track a complaint?", a: "Use the Complaint Portal, pick a category, attach a photo and submit. You receive a ticket number instantly and can track status changes, with email and SMS updates at each stage." },
  { q: "What is the process for tenant registration?", a: "Owners must submit the tenant registration form with the rent agreement, police verification and tenant ID proof. Access cards and vehicle stickers are issued after verification." },
  { q: "How do I book the community hall?", a: "Raise an amenity booking request in Resident Corner at least 7 days in advance. Booking is confirmed after availability check and refundable deposit payment." },
  { q: "Are pets allowed in the society?", a: "Yes, subject to the pet policy in the bylaws — leashing in common areas, use of designated lifts where notified, and owner responsibility for cleanliness." },
  { q: "How do visitors and delivery staff get entry?", a: "Residents can generate a QR visitor pass from their dashboard. Guards verify the code at the gate; unregistered visitors are called in for approval before entry." },
  { q: "Where can I see AOA accounts and meeting minutes?", a: "Audited statements, budgets and AGM minutes are published under Downloads and presented at every general body meeting." },
];

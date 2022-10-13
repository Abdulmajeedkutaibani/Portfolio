export const projects = [
  {
    id: 0,
    title: 'Diamonds Group',
    category: 'Featured',
    subtitle: [
      'React.js',
      'Tailwind CSS',
      'Currency Exhange Widget',
      'React-i18next',
      'React-Hook-Form',
      'Yuo Form Verification',
      'Email.js',
      'React-icons',
      'yup form verification',
      'Animate.CSS',
    ],
    description: `This project is a freelancing project.
    
    the client requested a business card, Logo, Professional Emails, Domain name and a website for his company and requested that there be a contact form and the ability to navigate the website in English and Arabic Versions, and the client also requested a widget in the webiste that allows visitors to check live Currency Exchange prices.
    
    developing this webiste allowed me to use the i18next react translation library and have fun with translating the website to arabic and use conditioned rendering to detect the language selected by the user and render text from right to left or the opposite.
    
    I also enjoyed developing the currency exchange widget which is super useful for visitors and shows many currencies.`,
    image: './diamondsgroup-website.webp',
    link: 'https://www.diamondsgroupsite.com/',
    github: '#',
  },
  {
    id: 1,
    category: 'Featured',
    title: 'AK Portfolio',
    subtitle: [
      'React.js',
      'Tailwind CSS',
      'Framer motion Animation',
      'React-icons',
      'Material UI',
      'Email.js',
      'React-hook-form',
      'yup form verification',
      'THREE.js',
    ],
    description: `This portfolio 😁`,
    image: './AKPORTFOLIO-LOGO.png',
    link: 'https://www.abdulmajeedk.com/',
    github: 'https://github.com/Abdulmajeedkutaibani/Portfolio',
  },
  {
    id: 2,
    category: 'Learning Milestones',
    title: 'Product Page',
    subtitle: ['React.js', 'Styled Components', 'Redux Toolkit', 'React-icons'],
    description: `This is a small product webpage that I've built to practice my knowledge of Redux toolkit and styled components.

Users are able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Switch the large product image by clicking on the small thumbnail images.
- Add items to the cart.
- View the shopping cart and remove items from it.

What I learned:
- Learned how to create an e-commerce shopping cart with Redux.
- Learned Styled components and did not use any extra css files or css libraries.

check it out! and any feedback is much appreciated.`,
    image: './desktop-preview.jpg',
    link: 'https://product-page-alpha-coral.vercel.app/',
    github: 'https://github.com/Abdulmajeedkutaibani/Product-page',
  },
  {
    id: 3,
    category: 'Learning Milestones',
    title: 'AKNotes',
    subtitle: [
      'React.js',
      'Material UI',
      'React-hooks',
      'React-router',
      'Firebase (Firestore, Authentication, Storage)',
    ],
    description: `AK Notes is a Full-Stack Web-App for taking and saving Notes and Reminders that everyone can benefit from.

This project helped me solidify my Material UI and Firebase knowledge and practice Form building and validation.

To build this project I used:
-React.js
-React-hooks
-React-router
-Material UI
-Firebase (Firestore, Authentication, Storage)
-React-hook-form
-Yup form validation

Users are able to:
- View the optimal layout for the app depending on their device's screen size.
- The Simplicity of the app makes it easy for everyone to use it.
- See hover states for all interactive elements on the page.
- Know the date through the app.
- Create an account in the app using Email and Password.
- Login to the app with their Email and password.
- View their account information.
- Upload a user profile photo.
- Delete the account.
- Create new notes/reminders.
- When choosing a note category, the notecard will have a border color indicating the selected category.
- All user information and data are stored on the server and not lost when the app is reloaded.
- Users can Delete their notes.
- Only the users can view their own notes.
- None-users are required to Sign up to use the app.

check it out! and any feedback is much appreciated.`,
    image: './AKNotes.png',
    link: 'https://aknotes.vercel.app/',
    github: 'https://github.com/Abdulmajeedkutaibani/Notes-app',
  },
  {
    id: 4,
    category: 'Featured',

    title: 'AKAudio',
    subtitle: ['React.js', 'Tailwind CSS', 'React-hooks', 'React-router'],
    description: `AKAudio is an all-in-one stop to fulfill your audio needs.

This website has been my biggest project so far. I had to solve many problems that I had'nt encountered before and also needed to pay much attention to the smallest of details.

check it out! and any feedback is much appreciated. 😁 👍🏼`,
    image: './AKAudio.png',
    link: 'https://akaaudio-ecommerce.vercel.app/',
    github: 'https://github.com/Abdulmajeedkutaibani/AKAudio',
  },
  {
    id: 5,
    title: 'Planets',
    category: 'Learning Milestones',
    subtitle: ['React.js', 'SASS'],
    description: `This is an 8-page planets fact site that is fun for everyone to visit. 
    The user is able to:
-View the optimal layout for the app depending on their device's screen size
-See hover states for all interactive elements on the page
-View each planet page and toggle between the "Overview", "Internal Structure", and "Surface Geology" tabs.`,
    image: './planets-image.jpeg',
    link: 'https://planets-dusky.vercel.app/',
    github: 'https://github.com/Abdulmajeedkutaibani/planets',
  },
  //   {
  //     id: 5,
  //     title: 'Clock-App',

  //     subtitle: ['React.js', 'CSS', 'API'],
  //     description: `I challenged myself to build a clock application. it looks simple but it has a lot of details. I used React.js and React Custom Hooks to build this application, and I used external APIs to set the data based on the visitor's location and generate random programming quotes.`,
  //     image: './clock-app-home.jpeg',
  //     link: 'https://majeed-clock-app.netlify.app',
  //     github: 'https://github.com/Abdulmajeedkutaibani/Clock-App',
  //   },
  {
    id: 6,
    title: 'MajeedPay',
    category: 'Freelancing Projects',
    subtitle: ['React.js', 'CSS'],
    description: `This project is a 4-page website built with HTML, CSS, JavaScript, React.Js.
I used React.js for rendering the view and creating the #UI and I used #react_router for routing and I also used #Yup for form building and form validation.`,
    image: './majeedpay-image.webp',
    link: 'https://majeed-pay.vercel.app/',
    github: 'https://github.com/Abdulmajeedkutaibani/Majeed-Pay',
  },
];

// projects navigation
export const projectsNav = [
  {
    name: 'Featured',
  },
  {
    name: 'Freelancing Projects',
  },
  {
    name: 'Learning Milestones',
  },
];

export const skills = [
  'HTML/CSS',
  'Material UI',
  'SASS',
  'Tailwind CSS Framework',
  'Bootstrap 5',
  'JavaScript',
  'React.js',
  'Git',
  'GitHub',
  'Responsive Design',
  'Fast Learner',
];

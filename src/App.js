import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/DocplannerNavbar.css';
import './components/DocplannerIntro.css';
import './components/DocplannerCards.css';
import './components/DocplannerInfo.css';
import './components/DocplannerCountries.css';
import './components/DocplannerFooter.css';
import './components/DocplannerStat.css'
import DocplannerNavBar from './components/DocplannerNavBar';
import DocplannerIntro from './components/DocplannerIntro';
import DocplannerCards from './components/DocplannerCards';
import DocplannerInfo from './components/DocplannerInfo';
import DocplannerCountries from './components/DocplannerCountries';
import DocplannerFooter from './components/DocplannerFooter';
import DocplannerStat from './components/DocplannerStat';


const NavItems = [{ title: 'About us', link: '' },
{ title: 'Career', link: '' },
{
  title: 'Departments', link: '',
  subMenu: ['Marketing & PR', 'Custumer sucess & Sales', 'IT, Product, Design & UX Data', 'Finance & Administration', 'HR & more']
}]

const IntroText = [{
  text: "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care.Anytime, anywhere."
}, { text: "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients." }]

const CardsText = [{ title: 'For patients', text: 'Find a doctor, book a visit and \n solve any health-related doubt', imglink: 'https://www.docplanner.com/img/screen-marketplace@2x.png', options: ['CHOOSE COUNTRY', 'Argentina', 'Australia', 'Brazil', 'Chilie', 'Colombia', 'Czech', 'France', 'Italy', 'Mexico', 'Peru', 'Poland', 'Portugal', 'Spain', 'Turkey', 'UK'] }, { title: 'For doctors', text: 'Save time managing visits and cut no-shows by half', imglink: 'https://www.docplanner.com/img/screen-saas@2x.png' }]

const DocInfo = [{ logo: 'https://www.docplanner.com/img/sygnet.png', title: 'ZnanyLekarz' }, { logo: 'https://www.docplanner.com/img/sygnet.png', title: 'Doctoralia' }, { logo: 'https://www.docplanner.com/img/sygnet.png', title: 'MioDottore' }, { logo: 'https://www.docplanner.com/img/sygnet.png', title: 'DoktorTakvimi' }, { logo: 'https://www.docplanner.com/img/sygnet.png', title: 'ZnamyLekar' }]

const DocCount = [{ imgctrlink: 'https://www.docplanner.com/images/warsaw.png', title: 'Warsaw' }, { imgctrlink: 'https://www.docplanner.com/images/barcelona.png', title: 'Barcelona' }, { imgctrlink: 'https://www.docplanner.com/images/istanbul.png', title: 'Istanbul' }, { imgctrlink: 'https://www.docplanner.com/images/rome.png', title: 'Rome' }, { imgctrlink: 'https://www.docplanner.com/images/mexico-city.png', title: 'Mexico City' }, { imgctrlink: 'https://www.docplanner.com/images/curitiba.png', title: 'Curitiba' }]

const DocStat = [{
  logoLink: 'https://www.docplanner.com/img/flag.png', title: 'Leader in 10 countries',
  text: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
},{ logoLink: 'https://www.docplanner.com/img/visits.png', title: '1.5 million appointments', text: 'booked last month' },{ logoLink: 'https://www.docplanner.com/img/patients.png', title: '30 million unique patients', text: 'visit us every month' },
{ logoLink: 'https://www.docplanner.com/img/doctors.png', title: '2 million active doctors', text: 'trust in our solutions' }]
const footerInfo = [{ ConName: 'Poland, '}, { ConName: 'Turkey, ' }, { ConName: 'Spain, ' }, { ConName: 'Italy, ' }, { ConName: 'Czech Republic, ' }, { ConName: 'Mexico, '}, { ConName: 'Colombia, '}, { ConName: 'Brazil, ' }, { ConName: 'Argentina, '}, { ConName: 'and Chilie. '}]
function App() {
  return (
    <div className="App">
      <DocplannerNavBar data={NavItems} />
      <div className='container'>
      <DocplannerIntro data={IntroText} />
      <DocplannerCards data={CardsText} />
      <DocplannerInfo data={DocInfo} />
    </div>
    <DocplannerStat data={DocStat} />
    <div className='container'>
      <DocplannerCountries data={DocCount} />
    </div>
    <DocplannerFooter data={footerInfo} />
    </div>
  )
}

export default App;

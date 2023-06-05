
import './App.css';

function App() {
  return (
    
 <div class="main-grid">
   <main>
   <p className='eyebrow'>Skills & Experience</p>
   <h1 className='page-title'>MY Resume</h1>
   <p className='intro'>
   As an individual with exquisite taste in the finest componies,
   I've helped both client and employee highest degree.
   </p>
   <div className='job-experience'>
    <div className='job'>
      <p className='year'>2021</p>
      <div className='job-info'>
        <h2 className='role'>Sales engineer</h2>
        <span className='company'>Invinex LLC</span>
        
      </div>
      <p>
          This job involved the engineering of sales,which I'am not totally sure what that means,but it's important.
        </p>
    </div>
    <div className='job'>
      <p className='year'>2019</p>
      <div className='job-info'>
        <h2 className='role'>Sales Team Lead</h2>
        <span className='company'>Ready Call Center ltd</span>
      
      </div>
      <p>
          Working as the sales team lead  involved a lot of sales calls, as well as supporting the toher people on the sales team.
        </p>
    </div>
    <div className='job'>
      <p className='year'>2017</p>
      <div className='job-info'>
        <h2 className='role'>IT Recruiter/Support Specialist</h2>
        <span className='company'>Belize Virtual Center ltd</span>
       
      </div>
      <p>
          This job involved helping recruit people and supporting the support team
        </p>
    </div>
   
   </div>
   </main>
    <aside>
    <h2 className='visually-hidden'>My skills</h2>
      <ul className='icon-list' role='list'>
      <li>
      <p className='visually-hidden'></p>
        <img src='html.svg' alt='' />
      </li>
      <li>
      <p className='visually-hidden'></p>
      <img src='css.svg' alt='' />
      </li>
      <li>
      <p className='visually-hidden'></p>
      <img src='scss.svg' alt='' />
      </li>
      <li>
      <p className='visually-hidden'></p>
      <img src='js.svg' alt='' />
      </li>
      <li>
      <p className='visually-hidden'></p>
      <img src='react.svg' alt='' />
      </li>
      </ul>
    </aside>
 </div>
    
  
  );
}

export default App;

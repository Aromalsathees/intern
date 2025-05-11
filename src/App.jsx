import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarLayout from './components/NavbarLayout'
import FooterLayout from './components/FooterLayout'
import Getstarted from './components/Getstarted'
import Analatics from './components/Analatics'
import Footer from './components/Footer'
import Home from './pages/Home'
// import Paidcourse from './pages/Paidcourse'
// import Paidcourse1 from './pages/Paidcourse1'
// import Paidcourse2 from './pages/Paidcourse2'
import Contactus from './pages/Contactus'
import Home1 from './pages/Home1'
import Materialsearch1 from './pages/Materialsearch1'
import Materialresorses from './components/Materialresorses'
import Materialexams from './components/Materialexams'
import Materialcourses from './components/Materialcourses'
import Subjects from './pages/Subjects'
import Subsubjects from './pages/Subsubjects'
import Minorsubject from './pages/Minorsubject'
import Exams from './pages/Exams'
import Subexams from './pages/Subexams'
import Minorexam from './pages/Minorexam'
import Courses from './pages/Courses'
import Subcourses from './pages/Subcourses'
import Minorcourse from './pages/Minorcourse'
import Allsearch from './components/Allsearch'
import Aboutus from './components/Aboutus'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

  {/* paid job courses */}
        <Route
          path="/home"
          element={
            <>
              
              <NavbarLayout/>
              <Home />
              <Home1 />
              <Footer/>
            
            </>
          }
        />
 {/* paid job courses */}


{/* 
about */}
 <Route path="/about" element={<Aboutus />} />
{/* about */}


         
{/* subjects routeds starts here  */}
            <Route
          path="/subjects"
          element={
            <>
              <NavbarLayout/>
              <Subjects/>
              <Footer />
            </>          
          }
        />
     



<Route path="/subjects/:id" element={
  <>
  <NavbarLayout/>
  <Subsubjects />
  <Footer/>
  </>
  } /> 

<Route path="/minorsubject/:id" element={
  <>
  <NavbarLayout/>
  <Minorsubject />
  <Footer/>
  </>

} />


<Route path="/materialresorses/:id" element={
  <>
  <NavbarLayout/>
  <Materialresorses/>
  <Footer/>
  </>
  }  />

{/* subjects routes ends here */}


  

{/* search routes */}
<Route path="/allsearch" element={ <Allsearch/> }/>
{/* search routes */}


        <Route
        path="/materialsearch"
        element={
          <>
           <Materialsearch1 />
          </>
         
        }
        />

      
{/* courses routes starts here*/}  
      <Route
        path='/course'
        element={
          <>
          <NavbarLayout/>
          <Courses/>
          <Footer/>
          </>
        }
        />

        
<Route path="/courses/:id" element={
  <>
  <NavbarLayout/>
  <Subcourses />
  <Footer/>
  </>
  } />


<Route path="/minorcourse/:id" element={
  <>
  <NavbarLayout/>
  <Minorcourse />
  <Footer/>
  </>
} />



<Route path="/materialcourses/:id" element={
  <>
  <NavbarLayout/>
  <Materialcourses/>
  <Footer/>
  </>
  }  /> 

{/* courses routes ends here*/}  





{/* 
exams routes starts here */}
      
<Route
  path='/exams'
  element={
      <>
       <NavbarLayout/>
      <Exams />
      <Footer/>
      </>
   
  }
/>


<Route path="/exams/:id" element={
  <>
  <NavbarLayout/>
  <Subexams />
  <Footer/>
  </>
  } />

  
<Route path="/minorexam/:id" element={
  <>
  <NavbarLayout/>
  <Minorexam />
  <Footer/>
  </>
} />



<Route path="/materialexams/:id" element={
  <>
  <NavbarLayout/>
  <Materialexams/>
  <Footer/>
  </>
  }  />

{/* Exams routes ends here */}
  


        {/* Contact Us page */}
        <Route path="/contactus" element={<Contactus />} />
        {/* contact us page */}



        {/* main first page */}
        <Route
          path="/"
          element={
            <>
              <NavbarLayout/>
              <Getstarted />
              <Analatics />
              <FooterLayout/>
            </>
          }
        />
        {/* main first page */}


        
{/*       
        <Route
          path="/paidcourse"
          element={
            <>
             <NavbarLayout/>
              <Paidcourse />
              <Paidcourse1 />
              <Paidcourse2/>
              <FooterLayout />

            </>          
           
          }
        /> */}



      </Routes>
    </BrowserRouter>
  )
}

export default App

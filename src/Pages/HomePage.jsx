import { Button, Spinner} from 'flowbite-react'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar';
import '../CSS/HomePage.css'
import SchemeCard from '../Components/SchemeCard';
import FooterCom from '../Components/Footer';



function HomePage() {
  const [message, setMessage] = useState('');
  const [loading,setLoading]=useState(false);
  const [policy,setPolicy]=useState('');
  const [recommendations,setRecommendations]=useState('')
  const [user_tags,setUserTags]=useState('')
  const [age,setAge]=useState('')
  const [day,setDay]=useState('')
  const [city,setcity]=useState('')
  const [cuisine,set_cuisine]=useState('')
  const words = ['RestaurantsDelivery', 'OutdoorSeating',
  'BusinessAcceptsCreditCards', 'BusinessParking', 'BikeParking', 'RestaurantsTakeOut',
  'ByAppointmentOnly', 'WiFi', 'Alcohol', 'Caters',
  'WheelchairAccessible', 'GoodForKids', 'RestaurantsAttire',
  'RestaurantsReservations', 'Ambience', 'CoatCheck', 'DogsAllowed',
  'RestaurantsTableService', 'RestaurantsGoodForGroups', 'HasTV',
  'HappyHour', 'DriveThru', 'GoodForMeal', 'NoiseLevel',
  'BusinessAcceptsBitcoin', 'Smoking', 'Music', 'GoodForDancing',
  'BestNights', 'BYOB', 'Corkage', 'BYOBCorkage',
  'AcceptsInsurance', 'RestaurantsCounterService', 'Open24Hours',
  'AgesAllowed', 'DietaryRestrictions'];

  const cuisines = [ 'Restaurants', ' Food', ' Bubble Tea', ' Coffee & Tea',
           ' Bakeries', 'Brewpubs', ' Breweries', 'Burgers', ' Fast Food',
           ' Sandwiches', ' Ice Cream & Frozen Yogurt', ' Restaurants',
          'Ice Cream & Frozen Yogurt', ' Burgers', 'Vietnamese',
          ' Food Trucks', 'American (Traditional)', ' Diners',
          ' Breakfast & Brunch', 'Sushi Bars', ' Japanese', 'Korean',
          'Steakhouses', ' Asian Fusion', ' Italian', 'Pizza',
          ' Chicken Wings', 'Eatertainment', ' Arts & Entertainment',
          ' Brewpubs', ' American (Traditional)', ' Specialty Food',
          ' Steakhouses', ' Pizza', ' Pasta Shops', 'Arts & Entertainment',
          ' Music Venues', ' Internet Service Providers', ' Nightlife',
          ' Jazz & Blues', ' Professional Services', ' Internet Cafes',
          'Specialty Food', ' Health Markets', 'Food', ' Grocery',
          ' Convenience Stores', 'Vitamins & Supplements',
          ' Juice Bars & Smoothies', ' Shopping', 'Sports Bars',
          ' American (New)', ' Bars', 'Chocolatiers & Shops',
          ' Candy Stores', 'Food Trucks', ' Sports Bars', ' Salad',
          ' Beer Bar', ' Lounges', ' Wraps', ' Beer', ' Wine & Spirits',
          ' Automotive', ' Delis', ' Gas Stations', 'Nightlife', ' Pubs',
          ' Event Planning & Services', ' Wine Bars', ' Gastropubs',
          ' Venues & Event Spaces', 'Juice Bars & Smoothies',
          ' Fruits & Veggies', 'Sporting Goods', ' Sports Wear', ' Fashion',
          'Seafood', ' Seafood', ' Cajun/Creole', 'Mexican', ' French',
          ' Moroccan', ' Mediterranean', 'Bars', ' Beer Gardens', ' Tours',
          ' Wine Tours', ' Beer Tours', ' Hotels & Travel', 'Grocery',
          ' Drugstores', ' Department Stores', ' Discount Store',
          ' Electronics', 'Couriers & Delivery Services', ' Local Services',
          ' Food Delivery Services', 'Sandwiches', ' Chinese',
          'Custom Cakes', ' Desserts', ' Cupcakes', 'Discount Store',
          ' Mobile Phones', ' Organic Stores', 'Desserts',
          ' Do-It-Yourself Food', ' Patisserie/Cake Shop', 'Live/Raw Food',
          ' Mexican', ' Barbeque', 'Italian', 'Pharmacy',
          ' Health & Medical', 'Venues & Event Spaces', ' Performing Arts',
          ' Beauty & Spas', ' Museums', ' Hotels', ' Cinema', ' Resorts',
          ' Day Spas', ' Shaved Ice', 'Coffee & Tea', 'Fast Food',
          ' Chicken Shop', 'Shopping', ' Furniture Stores', ' Home & Garden',
          'Japanese', ' Thai', ' Caterers', ' Bagels', ' Southern', 'Donuts',
          'Drugstores', ' Sushi Bars', ' Irish', ' Tobacco Shops',
          ' Hookah Bars', ' Vegan', ' Cocktail Bars', ' Tapas/Small Plates',
          'Cupcakes', ' Street Vendors', 'Irish Pub', ' Coffee Roasteries',
           ' Pharmacy', ' Caribbean', ' Trinidadian', ' Cafes', 'Caribbean',
          ' Comfort Food', ' Donuts', ' Acai Bowls', ' Vegetarian',
          ' Pakistani', ' Indian', ' Soup', ' Halal', 'Street Vendors',
          ' Greek', ' Food Stands'];
  const [recommendations_on_user_Inputs,set_recommendations_on_user_Inputs]=useState('')
  const [selectedWords, setSelectedWords] = useState([]);
  const [response, setResponse] = useState('');
  const [showWords, setShowWords] = useState(false);

  const cuisineDropdownRef = useRef(null);
  const wordDropdownRef = useRef(null);

  // Close dropdown on outside click
useEffect(() => {
  const handleOutsideClick = (e) => {
    if (cuisineDropdownRef.current && !cuisineDropdownRef.current.contains(e.target)) {
      setShowCuisines(false); // Close the dropdown
    }
  };
  document.addEventListener('mousedown', handleOutsideClick);

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);


  const handleSelectCuisine = (selected) => {
    set_cuisine(selected); // Set the selected cuisine
    setShowCuisines(false); 
  };
  
  // Toggle showing the cuisine list (similar to features)
  const [showCuisines, setShowCuisines] = useState(false);
  const toggleCuisineSelection = () => {
    setShowCuisines(!showCuisines);
  };

  const handleSelectWord = (word) => {
    if (selectedWords.includes(word)) {
      const newSelectedWords = selectedWords.filter(w => w !== word);
      setSelectedWords(newSelectedWords);
      setResponse(newSelectedWords.join(' ')); 
    } else {
      
      const newSelectedWords = [...selectedWords, word];
      setSelectedWords(newSelectedWords);
      setResponse(newSelectedWords.join(' ')); 
    }
  };

  const toggleWordSelection = () => {
    setShowWords(!showWords);
  };



  useEffect(() => {
    setLoading(false)
    axios.get('https://unique-arda-chandan1971-b4d1758e.koyeb.app/hello-world/')
      .then(response => {
        
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange=(e)=>{
    setPolicy(e.target.value);
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios
    .get(`http://localhost:8000/result?policy=${policy}`)
    .then((response)=>{
     
      response.data=response.data.slice(1,-1);
      console.log(response.data.split('+'));
      setRecommendations(response.data.split("+"));
    })
    
  }
  
  const handleUserInput=(e)=>{
    setLoading(true);
    e.preventDefault();
    // console.log(response);
    // console.log(response.toLowerCase());
    console.log(response);
    console.log(day);
    console.log(city);
    console.log(cuisine);
    axios
    .get(`http://localhost:8000/recommend?user_tags=${response.toLowerCase()}&day=${day}&city=${city.toLowerCase()}&cuisine=${cuisine.toLowerCase()}`)
    .then((response)=>{
      response.data=response.data.slice(1,-1);
      response.data=response.data.split('+');
      console.log(response.data);
      const schemes=[];
      console.log(response.data.length);
      for(let i=0;i<response.data.length;i+=3){
        const scheme={};
        console.log(i);
        scheme.id=response.data[i];
        scheme.description=response.data[i+1];
        scheme.name=response.data[i+2];
        schemes.push(scheme);
      }
      console.log(response.data);
      console.log(schemes);

      console.log(JSON.stringify(schemes));
      set_recommendations_on_user_Inputs(schemes);
      setLoading(false);
    })
    
  }



  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 m-0 p-0 '> 
        <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
        </div>
        <Navbar></Navbar>
        {/* <hr  className='text-white'/> */}
        {/* <div class="form-section">
        <div class="box">
          <form action="">
            <h2>Sign In</h2>
              <div class="InputBox">
                <input type='text' required="required"></input><span>Username</span>
                <i></i>
              </div>
              <div class="InputBox">
                <input type='text' required="required"></input><span>Password</span>
                <i></i>
              </div>
              {/* <div className='InputBox'>
              <label >Choose a Policy:</label>
                <select name="policy" onChange={handleChange} >
                  <option value="Pre-Matric Scholarship for ST (VI to VIII)">Pre-Matric Scholarship for ST (VI to VIII)</option>
                  <option value="Mukhyamantri Yuba Yogajog Yojana">Mukhyamantri Yuba Yogajog Yojana</option>
                  <option value="Pre-Matric Scholarship Class VI to VIII for SC Students">Pre-Matric Scholarship Class VI to VIII for SC Students</option>
                  <option value="Dr. B. R. Ambedkar Merit Award">Dr. B. R. Ambedkar Merit Award</option>
              </select>
              <i></i>
              </div> */}
              {/* <div class="links">
                <a href="#">Forgot Password</a>
                <a href="#">Sign up</a>
              </div>
            <input type="submit"value="login" className='cursor-pointer'></input>
          </form> */}
        {/* </div> */}
      {/* </div>  */}
        {/* <div>{message}</div>
        <h1 className="text-3xl font-bold underline">BMS Recommendation System</h1> */}
        {/* <form onSubmit={handleSubmit} >
            <label >Choose a Policy:</label>
            <select name="policy" onChange={handleChange} >
                <option value="Pre-Matric Scholarship for ST (VI to VIII)">Pre-Matric Scholarship for ST (VI to VIII)</option>
                <option value="Mukhyamantri Yuba Yogajog Yojana">Mukhyamantri Yuba Yogajog Yojana</option>
                <option value="Pre-Matric Scholarship Class VI to VIII for SC Students">Pre-Matric Scholarship Class VI to VIII for SC Students</option>
                <option value="Dr. B. R. Ambedkar Merit Award">Dr. B. R. Ambedkar Merit Award</option>
            </select> 
            <Button type='submit'>Submit</Button>
        </form>  */}
      <br />
        {recommendations &&
          recommendations.map((keyy) => (
            
            <p>{keyy}</p>
          ))} 
          
      <div class="form-section">
        <div class="box">

       
      <form onSubmit={handleUserInput}>
          <h2>Restaurant Recommendation System</h2>
          <div className="features-container">
          <div>Features :</div>
          <input 
            value={response}
            readOnly
            rows="4"
            cols="50"
            style={{ width: '100%', marginTop: '10px' }}
            onClick={toggleWordSelection} 
          />
        </div>
        <div>
        {showWords && ( 
          <div>
            <div>Select Features:</div>
            {words.map((word) => (
              <button
                type="button"
                key={word}
                onClick={() => handleSelectWord(word)}
                className={`word-button ${selectedWords.includes(word) ? 'selected' : ''}`}
              >
                {word}
              </button>
            ))}
            </div>
        )}
          </div>
        
    
          {/* <div class="InputBox">
                <input type='text' required="required" onChange={(e)=>{setUserTags(e.target.value)}}></input><span>Enter the description of the scheme :</span>
                <i></i>
          </div> */}
          {/* <div class="InputBox">
                <input type='text' required="required" onChange={(e)=>{setAge(e.target.value)}}></input><span>Enter Your Age :</span>
                <i></i>
          </div> */}
          <div class="InputBox">
            <label>Choose today's day:</label>
            <select onChange={(e)=>setDay(e.target.value)} >
                <option value="">Anyday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
            </select>
            <i></i>
          </div>
          <div class="InputBox">
          <label >Choose a City:</label>
          <select onChange={(e)=>setcity(e.target.value)} >
              <option value="">Click here to Select</option>
              <option value="Philadelphia">Philadelphia</option>
              <option value="Green Lane">Green Lane</option>
              <option value="Ashland City">Ashland City</option>
              <option value="Nashville">Nashville</option>
              <option value="Tampa Bay">Tampa Bay</option>
              <option value="Indianapolis">Indianapolis</option>
              <option value="White House">White House</option>
              <option value="Reno">Reno</option>
              <option value="Ardmore">Ardmore</option>
              <option value="Alton">Alton</option>
              <option value="Edmonton">Edmonton</option>
              <option value="Bala Cynwyd">Bala Cynwyd</option>
              <option value="Tampa">Tampa</option>
              <option value="Tucson">Tucson</option>
              <option value="Fernley">Fernley</option>
              <option value="Williamstown">Williamstown</option>
              <option value="Glenolden">Glenolden</option>
              <option value="Wesley Chapel">Wesley Chapel</option>
              <option value="Santa Barbara">Santa Barbara</option>
              <option value="New Orleans">New Orleans</option>
              <option value="Camden">Camden</option>
              <option value="Fairview Heights">Fairview Heights</option>
              <option value="Wilmington">Wilmington</option>
              <option value="Treasure Island">Treasure Island</option>
              <option value="Saint Louis">Saint Louis</option>
              <option value="Tarpon Springs">Tarpon Springs</option>






          </select> 
          <i></i>
          </div>
          <div className="InputBox" ref={cuisineDropdownRef}>
  <label>Select Cuisine:</label>
  <input
    value={cuisine}
    readOnly
    placeholder="Click here to Select Cuisine"
    onClick={toggleCuisineSelection}
    className="cursor-pointer"
  />
  {showCuisines && (
    <div className="cuisine-selection">
      {cuisines.map((cuisineOption) => (
        <button
          type="button"
          key={cuisineOption}
          onClick={() => {
            handleSelectCuisine(cuisineOption.trim()); // Remove any leading/trailing spaces
            setShowCuisines(false); // Close the dropdown
          }}
          className={`word-button ${cuisine === cuisineOption.trim() ? 'selected' : ''}`}
        >
          {cuisineOption.trim()}
        </button>
      ))}
    </div>
  )}
</div>

          <Button gradientDuoTone="purpleToBlue" type='submit' disabled={loading} className='mt-5'>
              {
                loading?(
                  <>
                  <Spinner size='sm'></Spinner>
                  <span>Loading...</span>
                  </>
                ):'Submit'
              }
            </Button>
          {/* <Button type='submit' className='mt-5'>Submit</Button> */}
        </form>
        </div>
      </div>
        
        <br />
        {/* {recommendations_on_user_Inputs &&
          recommendations_on_user_Inputs.map((keyy) => (
            <p>{keyy}</p>
          ))}  */}
      <hr></hr>
      <div className='mx-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {
          recommendations_on_user_Inputs  && (
            <div className='flex flex-col gap-6 '>
              <h2 className='text-2xl font-semibold text-center'>Recommended Schemes</h2>
              <div className='flex flex-wrap gap-4 justify-center'>
                {
                  recommendations_on_user_Inputs.map((schemes,index)=>(
        
                      <SchemeCard key={schemes.id} scheme={schemes}></SchemeCard>
                  ))
                }
              </div>
              
            </div>
          )
        }
      </div>
      <FooterCom></FooterCom>
     
    </div>
  )
}

export default HomePage



// 'Restaurants', ' Food', ' Bubble Tea', ' Coffee & Tea',
//        ' Bakeries', 'Brewpubs', ' Breweries', 'Burgers', ' Fast Food',
//        ' Sandwiches', ' Ice Cream & Frozen Yogurt', ' Restaurants',
//        'Ice Cream & Frozen Yogurt', ' Burgers', 'Vietnamese',
//        ' Food Trucks', 'American (Traditional)', ' Diners',
//        ' Breakfast & Brunch', 'Sushi Bars', ' Japanese', 'Korean',
//        'Steakhouses', ' Asian Fusion', ' Italian', 'Pizza',
//        ' Chicken Wings', 'Eatertainment', ' Arts & Entertainment',
//        ' Brewpubs', ' American (Traditional)', ' Specialty Food',
//        ' Steakhouses', ' Pizza', ' Pasta Shops', 'Arts & Entertainment',
//        ' Music Venues', ' Internet Service Providers', ' Nightlife',
//        ' Jazz & Blues', ' Professional Services', ' Internet Cafes',
//        'Specialty Food', ' Health Markets', 'Food', ' Grocery',
//        ' Convenience Stores', 'Vitamins & Supplements',
//        ' Juice Bars & Smoothies', ' Shopping', 'Sports Bars',
//        ' American (New)', ' Bars', 'Chocolatiers & Shops',
//        ' Candy Stores', 'Food Trucks', ' Sports Bars', ' Salad',
//        ' Beer Bar', ' Lounges', ' Wraps', ' Beer', ' Wine & Spirits',
//        ' Automotive', ' Delis', ' Gas Stations', 'Nightlife', ' Pubs',
//        ' Event Planning & Services', ' Wine Bars', ' Gastropubs',
//        ' Venues & Event Spaces', 'Juice Bars & Smoothies',
//        ' Fruits & Veggies', 'Sporting Goods', ' Sports Wear', ' Fashion',
//        'Seafood', ' Seafood', ' Cajun/Creole', 'Mexican', ' French',
//        ' Moroccan', ' Mediterranean', 'Bars', ' Beer Gardens', ' Tours',
//        ' Wine Tours', ' Beer Tours', ' Hotels & Travel', 'Grocery',
//        ' Drugstores', ' Department Stores', ' Discount Store',
//        ' Electronics', 'Couriers & Delivery Services', ' Local Services',
//        ' Food Delivery Services', 'Sandwiches', ' Chinese',
//        'Custom Cakes', ' Desserts', ' Cupcakes', 'Discount Store',
//        ' Mobile Phones', ' Organic Stores', 'Desserts',
//        ' Do-It-Yourself Food', ' Patisserie/Cake Shop', 'Live/Raw Food',
//        ' Mexican', ' Barbeque', 'Italian', 'Pharmacy',
//        ' Health & Medical', 'Venues & Event Spaces', ' Performing Arts',
//        ' Beauty & Spas', ' Museums', ' Hotels', ' Cinema', ' Resorts',
//        ' Day Spas', ' Shaved Ice', 'Coffee & Tea', 'Fast Food',
//        ' Chicken Shop', 'Shopping', ' Furniture Stores', ' Home & Garden',
//        'Japanese', ' Thai', ' Caterers', ' Bagels', ' Southern', 'Donuts',
//        'Drugstores', ' Sushi Bars', ' Irish', ' Tobacco Shops',
//        ' Hookah Bars', ' Vegan', ' Cocktail Bars', ' Tapas/Small Plates',
//        'Cupcakes', ' Street Vendors', 'Irish Pub', ' Coffee Roasteries',
//        ' Pharmacy', ' Caribbean', ' Trinidadian', ' Cafes', 'Caribbean',
//        ' Comfort Food', ' Donuts', ' Acai Bowls', ' Vegetarian',
//        ' Pakistani', ' Indian', ' Soup', ' Halal', 'Street Vendors',
//        ' Greek', ' Food Stands']

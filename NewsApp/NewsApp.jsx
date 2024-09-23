import React from 'react';
import Card from './card';

const NewsApp = () => {
  const [search, setSearch]=useState("india");
  const[newsData, setNewsData]=useState(null)
  const API_KEY="2193f8645b01428997092067b57f3bf5";
  const getData=async()=>{
    //data will be found
    //const response =await fetch('https://newsapi.org/v2/everything?q=india&apiKey=${API_KEY}')
   
   
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);

    const jsonData= await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
    //data will not be found
    //data will be in pending condition
  }
  useEffect(()=>{
    getData()
  },[])

  const handleinput=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  const userInput=(Event)=>{
    setSearch(Event.target.value)
  }
  
  return (
    <div>
     <nav>
        <div>
            <h1>Trending News</h1>
        </div> 
        <ul>
            <a> All News</a>
            <a> Trending</a>
        </ul>
        <div className='SearchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleinput}/>
            <button onClick={getData}>Search</button>
        </div>
     </nav>
     <div>
      <p className='head'>Stay Updated with  Trending News</p>
     </div>
     <div className='categoryBtn'>
        <button onClick={userInput} value="Sports">Sports</button>
        <button onClick={userInput} value="Politics">Politics</button>
        <button onClick={userInput} value="Business">Business</button>
        <button onClick={userInput} value="Entertainment">Entertainment</button>
        <button onClick={userInput} value="Health">Health</button>
     </div>
     <div>
      {newsData? <Card data ={newsData}/>: null}
        
     </div>
    </div>
  );
}

export default  NewsApp;


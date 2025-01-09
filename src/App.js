import { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime]=useState('');
  const [description,setDescripition]=useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url  = process.env.REACT_APP_API_URL+'/transaction';
    fetch(url,{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({name,description,datetime})
    }).then(response=>{
      response.json().then(json=>{
        console.log('result',json);
      })
    });
  }

  return (
   <main>
    <h1>$400<span>.00</span></h1>
    <form onSubmit={addNewTransaction}>
      <div className="basic">
      <input type="text" value={name} 
      onChange={ev=>setName(ev.target.value)}
      placeholder={'samsung tv'}/>
      <input type="datetime-local" value={datetime} onChange={ev=>setDatetime(ev.target.value)}/>
      </div>
      <div>
      <input type="text" placeholder={'description'} value={description} onChange={ev=>setDescripition(ev.target.value)}/>
      </div>
      <button type="submit">Add new transaction</button>
    </form>
    <div className='transactions'>
      <div className='transaction'>
        <div className='left'>
          <div className="name">New Tv</div>
          <div className="description">New Tv time</div>


        </div>
        <div className='right'>
        <div className="price red">-$500</div>
        <div className="datetime">2025-01-07 15:45</div>

        </div>
        
      </div>
      <div className='transaction'>
        <div className='left'>
          <div className="name">Gig Job</div>
          <div className="description">New Tv time</div>


        </div>
        <div className='right'>
        <div className="price green">+$400</div>
        <div className="datetime">2025-01-07 15:45</div>

        </div>
        
      </div>
      <div className='transaction'>
        <div className='left'>
          <div className="name">iphone</div>
          <div className="description">New Tv time</div>


        </div>
        <div className='right'>
        <div className="price red">-$500</div>
        <div className="datetime">2025-01-07 15:45</div>

        </div>
        
      </div>
    </div>
   </main>
  );
}

export default App;

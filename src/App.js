import './App.css';

function App() {
  return (
   <main>
    <h1>$400<span>.00</span></h1>
    <form>
      <div className="basic">
      <input type="text" placeholder={'samsung tv'}/>
      <input type="datetime-local"/>
      </div>
      <div>
      <input type="text" placeholder={'description'}/>
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

import React from 'react';

function AddNews() {
  
  return (
    <section>
      <div className='section-header'>
        <h2>Dodaj v News:</h2>
        <p>Dokler ni funkcijonalnosti za odstranjevanje sekcij novic sledi navodilom, če ne lahko cela sekcija zgleda narobe!</p>
      </div>

      <div className='adding'>
        <p>Varjanta 1:</p>
        <h3>Napoved za koncert z flijerju:</h3>
        <form>
          <label htmlFor='link' style={{width: '100%'}}>Link do slike za dogodek. lahko je tudi link slike na facebooku:</label>
          <input type='text' id='link' placeholder='Image URL' />
          <label htmlFor='link' style={{width: '100%'}}>Opis dogodka, napoved dogodka, datum, lokacija, kje, kdaj, zakaj...:</label>
          <textarea placeholder='Text Description...'/>
          <button>DODAJ</button>
        </form>
      </div>

      <div className='adding'>
        <p>Varjanta 2:</p>
        <h3>Novi Video upload</h3>
        <form>
          <label htmlFor='link' style={{width: '100%'}}>Link do videa na youtubu. 'react-player' uporablja samo youtube:</label>
          <input type='text' id='link' placeholder='Youtube URL' />
          <label htmlFor='link' style={{width: '100%'}}>Opis videa, dogodka, datum, lokacija, kje, kdaj, zakaj...:</label>
          <textarea placeholder='Text Description...'/>
          <button>DODAJ</button>
        </form>
      </div>
      
      <div className='adding'>
        <p>Varjanta 2:</p>
        <h3>Novi Video upload</h3>
        <form>
          <label htmlFor='link' style={{width: '100%'}}>Naslov novice:</label>
          <input type='text' id='link' placeholder='News Heading Text' />
          <label htmlFor='link' style={{width: '100%'}}>Opis dogodka, datum, lokacija, kje, kdaj, zakaj...:</label>
          <textarea placeholder='Text Description...'/>
          <button>DODAJ</button>
        </form>
      </div>


    </section>
  )
}

export default AddNews;

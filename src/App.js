import './App.css';
import { useState } from 'react';
import axios from 'axios'


function App() {
  // set state
  const [photo, setPhoto] = useState("")
  const [result, setResult] = useState([])



  // changephoto function
  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=9Tjy-tjr32I8LLfFZhL2xIbyFcPF2AxqiYl6upUb0lc`)
      .then((res) => {
        console.log(res.data)
        setResult(res.data.results)
      })
  }


  // return default app function
  return (
    <>
      <div className="hero text-center">
        <h1 className='heading'>Find image</h1>
        <input
          className='input_box'
          type="search"
          placeholder='Search for image...'
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className='btn btn-primary py-1 mb-1'
          onClick={changePhoto}>
          Search
        </button>
      </div>

      <div className="container">
        <div className="row text-center text-lg-start">
          {result.map((value) => {
            return (
              <div className="col-lg-3 col-md-4 col-6 pt-3">
                <a href="#" className='d-block mb-4 h-100'>
                  <img src={value.urls.small} alt="" className='img-fluid img-thumbnail' />
                </a>
              </div>
            )
          })}
        </div>
      </div>



    </>
  );
}

export default App;

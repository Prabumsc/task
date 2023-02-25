import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import './App.css'

function App() {

  const styles = {
    background: "black",
    color: "white"
  };
  const colors = {
    color: "#a8a4a4"
  };
  const [show, setShow] = useState(true);

  return (
    <div >
      <div className="nav">

        <div className="navbar">
          <a href="#">Start Bootstrap</a>
          <a href="#home">Home</a>
          <a href="#news">About</a>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => setShow(!show)}>Shop

              {show ? <ArrowDropDownIcon style={{ height: "10px" }} /> : <ArrowDropDownIcon style={{ height: "10px" }} />}

            </button>
            <div className="dropdown-content">
              <a href="#">All Products</a>
              <hr></hr>
              <a href="#">Popular Item</a>
              <a href="#">New Arrivales</a>
            </div>
          </div>
          <div className="shop">
            <button variant="outlined">{<ShoppingCartIcon />}
              <span style={{ marginBottom: "20px !important" }}> Cart </span><CircleOutlinedIcon /> </button>

          </div>
        </div>




      </div>
      <div className='content1'>
        <div className='content'>
          <p> <span style={{ fontSize: "60px", fontFamily: "sans-serif" }}>Shop in style</span></p>
          <p style={colors}> With this shop homepage template </p>
        </div>

      </div>
      <div className='from'>
        <div className="card">

          <div className='card11'>


            <div className='price'>
              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>

            <div className='paras'>
              <h3 className='pass'>Fancy Product</h3>
              <p className='lines'>$40.00 - $80.00</p>
            </div>
            <div className='btns'>

              <button type="button" href="/">View options</button>

            </div>
          </div>
          <div className='card11'>
            <div className='sale'>
              <button style={styles}>sale</button>
            </div>

            <div className='price1'>

              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='para'>

              <h3 className='pass'>Special Item</h3>

              <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
              <p className='line'><s>$20.00</s> $18.00</p>

              <div className='btn'>

                <button type="button" href="/">Add to Card</button>
              </div>
            </div>
          </div>
          <div className='card11'>
            <div className='sale'>
              <button style={styles}>sale</button>
            </div>
            <div className='price1'>
              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='paras'>
              <h3 className='pass'>Sale Item</h3>
              <p className='line'><s>$50.00</s> $25.00</p>
              <div className='btns'>

                <button type="button" href="/">Add to Card</button>
              </div>
            </div>
          </div>
          <div className='card11'>
            <div className='price'>
              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='para'>
              <h3 className='pass'>Popular Item</h3>
              <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
              <p className='line'>$40.00</p>
              <div className='btn'>

                <button type="button" href="/">Add to Card</button>
              </div>
            </div>
          </div>
          <div className='card11'>
            <div className='sale'>
              <button style={styles}>sale</button>
            </div>
            <div className='price1'>

              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='paras'>
              <h3 className='pass'>Sale Item</h3>
              <p className='lines'><s>$50.00</s> $25.00</p>
              <div className='btns'>

                <button type="button" href="/">Add to Card</button>
              </div>
            </div>
          </div>
          <div className='card11'>
            <div className='price'>
              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='paras'>
              <h3 className='pass'>Fancy Product</h3>
              <p className='lines'>$120.00 - $280.00</p>
              <div className='btns'>

                <button type="button" href="/">View options</button>
              </div>
            </div>
          </div>
          <div className='card11'>
            <div className='sale'>
              <button style={styles}>sale</button>
            </div>
            <div className='price1'>
              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='para'>
              <div>
                <h3 className='pass'>Special Item</h3>
                <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
                <p className='line'><s>$20.00</s> $18.00</p>
              </div>
              <div className='btn'>

                <button type="button" href="/">Add to Card</button>
              </div>
            </div>
          </div>
          <div className='card11'>
            <div className='price'>
              <p className='size'> 450<ClearIcon style={{ fontSize: "20px" }} />300</p>
            </div>
            <div className='para'>
              <h3 className='pass'>papular item</h3>
              <p className='star'><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /><StarIcon style={{ color: "orange", fontSize: "15px" }} /></p>
              <p className='line'>$40.00</p>
              <div className='btn'>

                <button type="button" href="/">Add to Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


export default App

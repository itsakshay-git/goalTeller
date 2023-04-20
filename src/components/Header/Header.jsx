import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material";


const url = "https://api.mfapi.in/mf";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fundData, setfundData] = useState([]);
  const [selectedFunds, setselectedFunds] = useState([]);
  const [schemeData, setschemeData] = useState({
    data: {
      data:[
        {
        date: '05-07-2006',
        nav: '0.00000'
      }
    ],
      meta: {
        fund_house: "initial",
        scheme_category: "initial",
        scheme_code: 1,
        scheme_name: "intial",
        scheme_type: "initial"
      }
    }
  });
  const [number, setnumber] = useState(0)
  const [open, setOpen] = useState(false)
  // const [totalU, settotalU] = useState(0)
  // const [value, setvalue] = useState({
  //   meta: ""
  // })
  // const newValue = useRef(0)

  let totalArr = [];

  const getMtualFunds = async () => {
    const MatualFunds = await axios.get(`${url}/search?q=${searchInput}`);
    setfundData(MatualFunds.data);
  };

  // const getDetail = async () => {
  //   const matualFunds = await axios.get(`${url}/${value}`);
  //   console.log(matualFunds)
  //   setschemeData(value)
  // }

  // useEffect(() => {
  // setschemeData(value)
  // }, [value])
  

  // useEffect(() => {
  //   newValue.current = selectedFunds
  // }, [selectedFunds])
  

  useEffect(() => {
    getMtualFunds();
    // eslint-disable-next-line
  }, [searchInput]);

  
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    // return matualFunds;
  };
  
  const handleFundsDetails = async (value) => {
    const matualFunds = await axios.get(`${url}/${value}`);
    setselectedFunds(selectedFunds => ([...selectedFunds, matualFunds]));

  };
  
  
  const handleScheme = (value) => {
    // setvalue(value)
    setschemeData(value)
    setOpen(true)
    console.log(schemeData)

  }

  const handleClose = () => {
    setOpen(false);
  };


  const decrement = () => {
    if(number > 0){
      setnumber(number - 1)
      totalArr.push(number)
      // totalUnits()
    }else{
      alert("limit reached")
      setnumber(0)
    }
  }

  const increment = () => {
    setnumber( number + 1)
    totalArr.push(number)
    // totalUnits()
  }

  // const totalUnits = () => {
  //   let total = totalArr.reduce((previous, current) => {
  //       return previous + current;
  //   }, 0)
  //   settotalU(total)
  // }

  return (
    <>
      <section className={styles.portfolio}>
        <Search handleChange={handleChange} searchInput={searchInput} />
        <List sx={{ maxWidth: 530, bgcolor: "background.paper" }}>
          {fundData.map((value, index) => (
            <ListItem
              key={index}
              disableGutters
              className={styles.list}
              onClick={() => handleFundsDetails(value.schemeCode)}
            >
              <ListItemText primary={value.schemeName} />
            </ListItem>
          ))}
        </List>
      </section>
      <div className={styles.portfolioA}>
        <h1>Portfolio</h1>
        {selectedFunds.map((value, index) => (
          <List
          key={index}
            sx={{
              width: "100%",
              maxWidth: 550,
              bgcolor: "background.paper",
              display: "flex",
            }}
            // onClick={() => handleScheme(value)}
          >
            <ListItem 
            alignItems="flex-start"
            onClick={() => handleScheme(value)}
            >
              {/* <ListItemText primary={value.data.meta.scheme_name} /> */}
              <ListItemText primary={value.data.meta.scheme_name} />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
            <Box
              sx={{
                padding: "8px",
                width: 200,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              className={styles.counter}
            >
              <h5>units</h5>
              <button onClick={decrement}>-</button>
              <span> {number} </span>
              <button onClick={increment}>+</button>
            </Box>
          </List>
        ))}
            <Box className={styles.total}>
              <button>Total : {number}</button>
            </Box>
      </div>
      {/* {dialogBox ? <DialogBox schemeData={schemeData} dialogBox={dialogBox}/> : undefined} */}
      {/* <DialogBox schemeData={schemeData} dialogBox={dialogBox}/> */}
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {schemeData.data.meta.scheme_name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <b>Scheme Name: </b><span>{schemeData.data.meta.scheme_category} </span>
        <b>Scheme Type: </b><span>{schemeData.data.meta.scheme_type} </span><br/>
        <b>Fund House: </b><span> {schemeData.data.meta.fund_house}</span><br/>
        <span>Nav :</span><span>{schemeData.data.data[0].nav}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <Button sx={{backgroundColor:"green", color: "white"}} onClick={handleClose}>Sell</Button>
        <Button sx={{backgroundColor:"red", color: "white"}} onClick={handleClose} autoFocus>
          Buy
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default Header;

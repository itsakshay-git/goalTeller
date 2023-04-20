import React from 'react';
import styles from './PortfolioList.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';

const PortfolioList = ({portfolioData}) => {
    // console.log(portfolioData[1].data.meta.scheme_name, "test")
  return (
<div className={styles.portfolio}>
        <h1>Portfolio</h1>
        {portfolioData.map((value) => (
          <List
            sx={{
              width: "100%",
              maxWidth: 550,
              bgcolor: "background.paper",
              display: "flex",
            }}
          >
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText primary={value.data.meta.scheme_name} />
            </ListItem>
            <Box
              sx={{
                padding: "8px",
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              abcd
            </Box>
          </List>
        ))}
      </div>
  )
}

export default PortfolioList
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ProductData from '../data/productdata';
import SingleProduct from './SingleProduct.component';
import Container from '@material-ui/core/Container';




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <Container >
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">LETs EAT Nom Noms</ListSubheader>
        </GridListTile>
        {ProductData.map(({title, price, img, link}) => (
          <GridListTile key={img}>
            <img src={img} alt={title} />
          <SingleProduct title={title} img={img} link={link} price={price} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Container>

  );
}
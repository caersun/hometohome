 // src/screens/FoodItems.js
 import React, {Component} from 'react';
 import {View, Button, Alert} from 'react-native';

 import NavHeaderRight from '../components/NavHeaderRight';
 import PageCard from '../components/PageCard';

 import {AppContext} from '../../Global';

 class FoodItems extends Component {
   static navigationOptions = ({navigation}) => {
     return {
       title: navigation.getParam('item').name.substr(0, 12) + '...',
       headerRight: <NavHeaderRight />,
     };
   };

   static contextType = AppContext; // set from the global app context

   state = {
     qty: 1,
   };

   constructor(props) {
     super(props);
     const {navigation} = this.props;
     this.item = navigation.getParam('item'); // get the item passed from the FoodList screen
   }

   qtyChanged = value => {
     const nextValue = Number(value);
     this.setState({qty: nextValue});
   };

   render() {
     const {qty} = this.state;
     return (
       <PageCard
         item={this.item}
         qty={qty}
         qtyChanged={this.qtyChanged}
         addToCart={this.addToCart}
       />
     );
   }
 }

 export default FoodItems;
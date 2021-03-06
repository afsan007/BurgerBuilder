import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [{
  label: 'Salad',
  type: 'salad'
}, {
  label: 'Bacon',
  type: 'bacon'
}, {
  label: 'Cheese',
  type: 'cheese'
}, {
  label: 'Meat',
  type: 'meat'
}]
const buildControls = (props) => (
  <div className={classes.BuildControls}>
  <p> Price: <strong> {props.price.toFixed(2)} $ </strong></p> 
    {controls.map(ctrl => ( 
      <BuildControl 
        key = {ctrl.label}
        type = {ctrl.label}
        added = {() => props.ingredientAdded(ctrl.type)}
        removed = {() => props.ingredientRemoved(ctrl.type)}
        disabled = {props.disabled[ctrl.type]}
      />
    ))
  } 
  <button 
    className = {classes.OrderButton} 
    disabled = {!props.purchaseble}
    onClick={props.orderd} 
    > {props.isAuth ?'Order Now':'Sign In To Order'}</button> </div>
)
export default buildControls;

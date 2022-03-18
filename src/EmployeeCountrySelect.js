import React, { Component } from "react";
import { UIComponent, Constants } from "flexicious-react-datagrid";
import Select from "react-select";
import Employee from "./EmployeeDetails";

export default class EmployeeCountrySelect extends UIComponent {
  state = {
    selectedOption: null,
  };


  constructor() {
    super();
    this.value = null;
    this.editorType = "Select";
    this.addEventListener(this, Constants.EVENT_CHANGE, this.onChange);
  }

  getClassNames() {
    return ["EmployeeCountrySelect", "UIComponent"];
  }

  initialize() {
    UIComponent.prototype.initialize.apply(this);
  }

  // initialize() {
  //   const data = this.grid;
  //   console.log('data', data)
  //   if (data != undefined) {
  //     const cell = this.grid.getCurrentEditCell();
  //     const List = cell._column.getDistinctValues(Employee);
  //     const value = cell.getRowInfo().getData().country;
  //     this.setState({ countryList: List, selectedOption: value });
  //     this.options = List
  //   }
  // }



  getOptions = () => {
    const data = this.grid;
    console.log('data', data)
    if (data != undefined) {
      const cell = this.grid.getCurrentEditCell();
      const List = cell._column.getDistinctValues(Employee);
      const value = cell.getRowInfo().getData().country;
      this.setState({ selectedOption: value });
      // this.setState(value);
      this.options = List;
    }

    return this.options
  }

  getSelected=()=>{
    console.log(this.state.selectedOption)
    return this.state.selectedOption;
  }

  // selectedOption=()=>{
  //   const cell = this.grid.getCurrentEditCell();
  //   const List = cell._column.getDistinctValues(Employee);
  //   const value = cell.getRowInfo().getData().country;
  //   this.setState({ countryList: List, selectedOption: value });

  //   return this.value;
  // }

  handleChange = (selectedOption) => {
    // this.setState({ selectedOption }, () =>
    //   console.log(`Option selected:`, this.state.selectedOption)
    // );
    this.grid.getCurrentEditCell().getRowInfo().getData().country= selectedOption.label;
  };


  render() {
    const { selectedOption } = this.state;

    this.children = [
      <div> 
      <Select
  
        onChange={this.handleChange}
        // defaultInputValue="South"
        options={this.getOptions()}
        defaultValue  = {{label: 'India', data: 'India'}}
        // value  = {{label: 'India', data: 'India'}}
      />
      </div>
    ];

    return super.render();
  }
}

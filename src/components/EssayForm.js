// import React, { useState } from 'react'

// const SelectOption = () => {
//     const [kitab,setKitab] = useState([])
//     const [defter,setDefter] = useState([])
//     const [qelem,setQelem] = useState([])
//     return (
//         <div>
//             <select>
//                 <option id={1}>Kitab</option>
//                 <option id={2}>Defter</option>
//                 <option id={3}>Qelem</option>
//             </select>
//             <input type='text'/>
//             <select>
//                 <option>Artemis</option>
//             </select>
//             <select>
//                 <option>Artemis</option>
//             </select>
//             <select>
//                 <option>Artemis</option>
//             </select>
//         </div>
//     )
// }
// export default SelectOption;

// class EssayForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Bu kısma bir şeyler yazınız.'
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Gönderilen değer: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Gönder" />
//         </form>
//       );
//     }
//   }










// ////////////////////////
// //////////////////////////////////////////////
// import React from "react";


// class Task2 extends React.Component {


//     render() {

//         function insertValue() {
//             let book = document.getElementById("book"),
//                 notebook = document.getElementById("notebook"),
//                 pen = document.getElementById("pen"),

//                 txtVal = document.getElementById("val").value,
//                 newOption = document.createElement("OPTION"),
//                 newOptionVal = document.createTextNode(txtVal)
//                 newOption.appendChild(newOptionVal);
			
           
// 			let selectedValue;
// 			function getSelectValue(){
// 				selectedValue = document.getElementById("select").value;
// 				// console.log(selectedValue)
// 			}
// 			getSelectValue();

// 			if(book.name == selectedValue){
// 				console.log(book.name, selectedValue)
//                 book.insertBefore(newOption, book.lastChild)
// 			}
// 			if(notebook.name == selectedValue){
// 				console.log(notebook.name, selectedValue)
//                 notebook.insertBefore(newOption, notebook.lastChild)
// 			}
// 			if(pen.name == selectedValue){
// 				console.log(pen.name, selectedValue)
//                 pen.insertBefore(newOption, pen.lastChild)
// 			}
//         }

//         return (

//             <div className="container-fluid">

//                 <div className="row">

//                     <div className="col-md-6">
//                         <div className="col-sm-4">
//                             <label>Kitab: </label>
//                             <select className="form-control" name="book" id="book">
//                                 <option value=""></option>
//                             </select>
//                         </div>

//                         <br/>
//                         <div className="col-sm-4">
//                             <label>Dəftər: </label>
//                             <select className="form-control" name="notebook" id="notebook">
//                                 <option value=""></option>
//                             </select>
//                         </div>

//                         <br/>
//                         <div className="col-sm-4">
//                             <label>Qələm: </label>
//                             <select className="form-control" name="pen" id="pen">
//                                 <option value=""></option>
//                             </select>
//                         </div>

//                     </div>

//                     <div className="col-md-6">


//                         <div className="col-sm-4">
//                             <label>Input Value:</label>
//                             <input className="form-control" type="text" name="inputValue" id="val"
//                             />
//                         </div>

//                         <div className="col-sm-4">
//                             <label>ValueType: </label>
//                             <select onchange="getSelectValue();" id='select' className="form-control">
//                                 <option value="book">Kitab</option>
//                                 <option value="notebook">Defter</option>
//                                 <option value="pen">Qelem</option>

//                             </select>
//                         </div>
//                         <br/>

//                         <div className="col-sm-4">
//                             <button className="" onClick={insertValue}>Add</button>
//                         </div>
//                     </div>


//                 </div>
//             </div>


//         )


//     }
// }

// export default Task2;




// //////////////////////////

// const AnotherTask =()=>{
//     const [bookoptions,setBookOptions] = useState([{id:5,value:"Ferrum"}]);
//     const [copyBookoptions,setCopyBookoptions] = useState([]);
//     const [penOptions,setPenOptions] = useState([]);



//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(e);
//         console.log(e.target[1].value);
//         switch (e.target[1].value) {
//             case "1":
//                 setBookOptions([...bookoptions,{id:Math.random(),value:e.target[0].value}])
//                 break;
//             case "2":
//                 setPenOptions([...penOptions,{id:Math.random(),value:e.target[0].value}])
//                 break;
//             case "3":
//                 setCopyBookoptions([...copyBookoptions,{id:Math.random(),value:e.target[0].value}])
//                 break;
//         }

//     }

//     return(
//       <>
//          <section>
//              <label>Books</label>
//              <select name={"bookOptions"}>
//                  {bookoptions.map(x => <option value={x.id} key={x.id} >{x.value}</option>)}
//              </select>
//              <label>CopyBooks</label>

//              <select name={"copBookOptions"}>
//                  {copyBookoptions.map(x => <option value={x.id} key={x.id} >{x.value}</option>)}
//              </select>
//              <label>Pens</label>

//              <select name={"penOptions"}>
//                  {penOptions.map(x => <option value={x.id} key={x.id} >{x.value}</option>)}
//              </select>
//          </section>

//          <form onSubmit={e=>handleSubmit(e)}>
//              <input type={"text"} />
//              <section>
//                  <select>
//                      <option value={1}>Kitab</option>
//                      <option value={2}>Qelem</option>
//                      <option value={3}>Defter</option>
//                  </select>
//              </section>
//              <button type={"submit"}>Submit</button>
//          </form>
//       </>
//     )
// }
// export default AnotherTask;
// ////////////////////////////////////


















// //////////////////////////
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Bu kısma bir şeyler yazınız.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Gönderilen değer: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Gönder" />
//       </form>
//     );
//   }
// }

// export default App;
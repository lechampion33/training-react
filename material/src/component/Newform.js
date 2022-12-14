// class Loginform extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             fields:{},
//             errors:{}
//         }
//         this.handleChange =this.handleChange.bind(this);
//         this.submituserLoginform = this.submituserLoginform
//     }

// handleChange(e){
//     let fields = this.state.fields;
//     fields[e.target.name] = e.target.value;
//     this.setState({
//         fields
//     });
// }
// submituserLoginform(e){
//     console.log(this.validateForm){
//         let fields={};
//         fields["username"]="";
//         fields["password"]="";
//     }
// }

//     render(){
//         return(
//             <div id="login-container">
//                 <div id="login">
//                     <h2>SIGN IN</h2>
//                     <form method="post" name="loginform" onSubmit={this.submituserLoginform}>
//                         <label for="username"> username</label>
//                         <input type="text" name="username" id="username" value={this.state.fields.username} onChange={} />   
//                         <label for="pass">password</label>
//                         <input type="password" name="password" id="pass" value={this.state.fields.username}  />  
//                     </form>
//                 </div>

//             </div>
//         );
//     }
// }
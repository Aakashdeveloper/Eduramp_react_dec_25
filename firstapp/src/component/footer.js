import React from 'react';

const Footer = (props) => {
    const {month,year} = props
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {month} {year}</h3>
            </center>
        </React.Fragment>
    )
}

// class Footer extends Component {
//     render(){
//         const {month,year} = this.props
//         return(
//             <React.Fragment>
//                 <hr/>
//                 <center>
//                     {/* <h3>&copy; Developer Funnel {this.props.month} {this.props.year}</h3> */}
//                     <h3>&copy; Developer Funnel {month} {year}</h3>
//                 </center>
//             </React.Fragment>
//         )
//     }
    
// }
export default Footer
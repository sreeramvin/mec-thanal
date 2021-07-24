import "./Events.css"
export default function DonationOverlay(props){
    return(
        <div className = "overlay">
            {props.success ? (<div className = "overlay-box" style = {{justifyContent: 'center'}}>
            <div onClick = {() => props.closeOverlay()} style = {{position:'absolute', top: '5px', right: '20px', cursor: 'pointer'}}>
                    x
                </div>
                Thank you for your kind donation
            </div>) : 
            (<div className = "overlay-box">
                <div onClick = {() => props.closeOverlay()} style = {{position:'absolute', top: '5px', right: '20px', cursor: 'pointer'}}>
                    x
                </div>
                Donation
                <input className = "overlay-input" placeholder = "Name" style = {{width: '60%'}} onChange = {(e) => props.changeName(e.target.value)}/>
                <div style = {{width: '100%', alignSelf: 'center'}}>
                    ₹
                    <input className = "overlay-input" placeholder = "Amount" style = {{width: '40%', marginLeft: '20px', height: '40px', fontSize: '32px'}} defaultValue = "20" onChange = {(e) => props.changeAmount(e.target.value)} />
                </div>
                <div onClick = {() => props.donate()} style = {{marginTop:'5%', height: '40px', width: '40%', backgroundColor: '#24424C', color: '#fff', textAlign: 'center', display: 'flex', justifyContent:'center', alignItems: 'center', borderRadius: '60px', cursor: 'pointer'}}>
                    Donate
                </div>
            </div>)}
        </div>
    )
}
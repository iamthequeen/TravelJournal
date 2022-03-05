export default function Travel(props) {
    return (
        <div className="travel" >
        <img className="main-img" src={props.imageUrl} alt="" />
            <div className="text-content">
                <div className="location-info">
                    <img className="location-icon" src="https://cdn-icons.flaticon.com/png/512/186/premium/186250.png?token=exp=1646468394~hmac=b114e6a518d1291606354bef85ed6bbd" alt="" />
                    <h3 className="location">{props.location} </h3>
                    <a className="maps-link" href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1 className="title" >{props.title}</h1>
                <h4 className="date">{props.startDate} - {props.endDate}</h4>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
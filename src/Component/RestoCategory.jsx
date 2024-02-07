import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const RestoCategory = ({ data }) => {
    console.log(data);
    return (
        <div className="restoData">
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ fontSize: 4 }}
                >
                    {/* title */}
                    <Typography sx={{ fontSize: 24 }}>{data.title}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography  >
                        <ul className="Menu-list">
                            {data.itemCards.map((item) => (
                                <>
                                    <div className="listItem">
                                        <li key={item.card.info.id} className="carditem">
                                            <ul><h4>{item.card.info.name} </h4></ul>
                                            <ul><h5>Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h5></ul>
                                            <ul> <p> {(item.card.info.ratings.aggregatedRating.rating)}<StarIcon sx={{ fontSize: '10px', color: 'green' }} />
                                            </p>
                                            </ul>
                                        </li>
                                        <li>
                                            <img
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                                                alt="product Image" />
                                            <Button variant="outlined" className="ADDBTN" >ADD</Button>
                                        </li>
                                    </div>
                                    <div>
                                        <hr />
                                    </div>
                                </>
                            ))}
                        </ul>
                    </Typography>

                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default RestoCategory;


// <span style={{ textAlign: "left", fontWeight: 600, padding: " 10px 40px " }}>{itemCards[0].card.info.category}</span>
// <ul className="Menu-list">
//     {itemCards.map((item) => (
//         <>
//             <div className="listItem">
//                 <li key={id} className="carditem">
//                     <ul><h4>{item.card.info.name} </h4></ul>
//                     <ul><h6>Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h6></ul>
//                     {/* <ul> <p> {txtTrim(item.card.info.description)} </p></ul> */}
//                 </li>
//                 <li>
//                     <img
//                         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
//                         alt="product Image" />
//                     <Button variant="outlined" className="ADDBTN" >ADD</Button>
//                 </li>
//             </div>
//             <div>
//                 <hr />
//             </div>
//         </>
//     ))}

// </ul>
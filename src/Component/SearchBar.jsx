import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const SearchBar = ({ data }) => {
    const [filterdata, setFilteredData] = useState(data);
    const [showList, setShowlisst] = useState(false);
    const [FilterRest, setFilterRest] = useState([]);

    // whenever  state variable update react trigger a reconciltion cycle (re rendering componenet )

    const handlerFilter = (e) => {
        const value = e.target.value;
        const filtered = data.filter((data) => data.info.name.toLowerCase().includes(value));
        setFilteredData(filtered);
        // setFilterRest(filtered);
        console.log(setFilterRest(filtered));
    };

    const inputStyle = {
        display: showList ? 'grid' : 'none',
        "border": "1px solid rgb(17, 4, 4)"
    }

    return (
        <>
            <div className="search_bar" >
                <TextField id="fullWidth" label="Search..." variant="outlined"
                    className="searchRest"
                    type="text"
                    // value={searchText}
                    onChange={handlerFilter}
                    onClick={
                        () => {
                            showList === false ? setShowlisst(true) : setShowlisst(false)
                        }
                    }
                />
                <ul className="listCont"
                    style={inputStyle}>
                    {filterdata.map((data) => (

                        <div className="ListRest"
                            key={data.info.id} >
                            <Link to={"/restaurant/" + data.info.id} style={{ textDecoration: 'none' }}>
                                <List>
                                    <ListItem className="ItemRest" disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={data.info.name}
                                                primaryTypographyProps={{ fontSize: '18px', fontWeight: '600' }}
                                            />
                                            <ListItemAvatar >
                                                <Avatar alt="Travis Howard" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + data.info.cloudinaryImageId} sx={{ width: 66, height: 66 }}
                                                />
                                            </ListItemAvatar>
                                        </ListItemButton>
                                    </ListItem>
                                </List >
                            </Link>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SearchBar;

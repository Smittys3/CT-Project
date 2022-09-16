import React from "react";
import "./style.css";

const Mealitem = (getMeal) => {
  console.log(getMeal.data);

  return (
    <>
      <div className="card">
            <img src={getMeal.data.strMealThumb} alt="meal" />
            <div className="info">
                <h3>{getMeal.data.strMeal}</h3>
                <p>{getMeal.data.strArea} food</p>
            </div>
            <div className="recipe">
                <h4>Recipe</h4>
                <p>{getMeal.data.strInstructions}</p>
                <a href={"https://www.themealdb.com/meal/" + getMeal.data.idMeal} target="_blank" rel="noreferrer">Prep Details</a>
                <br></br>
                <a href={getMeal.data.strYoutube} target="_blank" rel="noreferrer">Watch the Video</a>
            </div>
      </div>
    </>
  );
};
export default Mealitem;


// --- THE CODE WORKS BELOW I JUST HAVE TO FIX THE LINKS TO OPEN A SEPERATE WEBPAGE ---

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';



// const ExpandMore = styled((props) => {
// const { expand, ...other } = props;
// return <IconButton {...other} />;
// })(({ theme, expand }) => ({
// transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// marginLeft: 'auto',
// transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
// }),
// }));

// const Mealitem = (getMeal) => {
// const [expanded, setExpanded] = React.useState(false);
// console.log(getMeal.data);

// const handleExpandClick = () => {
//     setExpanded(!expanded);
// };

// return (
//     <div>
//         <Card elevation={3} sx={{ maxWidth: 345 }}>
//         <CardHeader
//             avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                 R
//             </Avatar>
//             }
//             action={
//             <IconButton aria-label="settings">
//                 <MoreVertIcon />
//             </IconButton>
//             }
//             title={getMeal.data.strMeal}
  
//         />
//         <CardMedia
//         component="img"
//         height="194"
//         image={getMeal.data.strMealThumb}
//         alt=""
//       />


//         <CardContent>
//             <Typography variant="body2" color="text.secondary">
//             {getMeal.data.strArea} food 
//             </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//                 <ShareIcon />
//             </IconButton>
//             <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//             >
//             <ExpandMoreIcon />
//             </ExpandMore>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//             <Typography paragraph>Instructions:</Typography>
//             <Typography paragraph>
//                 {getMeal.data.strInstructions}
//             </Typography>
//             </CardContent>
//         </Collapse>
//         </Card>
//     </div>
//   );
// };

// export default Mealitem;














































// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
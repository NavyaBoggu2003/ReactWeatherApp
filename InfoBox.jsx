import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./Infobox.css";
function InfoBox({ info }){
    return(
        <div className="Infobox">
            <h3>Weather</h3>
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 ,height:400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/dustyweather.png"
          alt="dustyweather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2"  color= 'text.secondary' component={"span"}>
            <div>Temperature={info.temp}</div><br/>
            <div>Humidity={info.humidity}</div>
            <p>Min Temp={info.tempMin}</p>
            <p>Max Temp={info.tempMax}</p>
            <p>The Weather can be described as {info.weather} and  feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    )
}
export default InfoBox;
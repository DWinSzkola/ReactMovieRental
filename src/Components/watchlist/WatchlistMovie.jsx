import { AspectRatio, Button, Card, CardContent, FormControl, IconButton, MenuItem, Select, Typography } from "@mui/joy";
import "../../Styles/watchlistMovie.css"
import imageUnavailable from "../../assets/NoImageAvailable.png"
import prices from "../../assets/priceData/prices.json"
import { InputLabel } from "@mui/material";
import { useState } from "react";
const WatchlistMovie = (props) =>{
    const movieInfo = props.movie;
    const audioPrices = prices["audio"];
    const [AudioOption, setAudioOption] = useState(audioPrices["mono"]["price"]);



    return <Card sx={{ width: 600 }} variant="solid" orientation="horizontal" invertedColors color="neutral" className="watchlistCard" >
    
    <AspectRatio ratio="1" sx={{width: 90}} minHeight={200}>
        
        <img className="WLCImage"
            src={movieInfo.Poster}
            
            loading="lazy"
            
        />
    </AspectRatio>
    <CardContent orientation="horizontal" className="m-2">
      <div>
        <Typography level="body-xs">{movieInfo.Title}</Typography>
        <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}></Typography>
      </div>
      <div>
      <FormControl>
        <InputLabel className="text-light">Audio</InputLabel>
        <Select
            
            id="Audio"
            label="Audio"
            value={AudioOption}
            onChange={(e)=>setAudioOption(e)}
        >
            <MenuItem defaultChecked value={audioPrices["mono"]["price"]}>{audioPrices["mono"]["name"]}</MenuItem>
            <MenuItem value={audioPrices["stereo"]["price"]}>{audioPrices["stereo"]["name"]}</MenuItem>
            <MenuItem value={audioPrices["5_1-surround"]["price"]}>{audioPrices["5_1-surround"]["name"]}</MenuItem>
        </Select>
    </FormControl>
      </div>
      {AudioOption.toString}
      <Button
        variant="solid"
        size="md"
        color="primary"
        aria-label="Explore Bahamas Islands"
        sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
      >
        Explore
      </Button>
    </CardContent>
  </Card>

}
export default WatchlistMovie;
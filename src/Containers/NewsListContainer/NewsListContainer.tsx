import { Grid, Typography } from "@mui/joy"
import { dummyNews } from "../../utils/constants";

const NewsListContainer = () => {
    console.log('pageloaded');
    return <Grid container>
        <Grid sm={12}>
            <Typography>
                News
            </Typography>
        </Grid>
        <Grid container sm={12}>
            {
                dummyNews.map(aNews=> (
                <Grid sm={12}>{aNews.description}</Grid>
                ))
            }
            </Grid>
    </Grid>
}

export default NewsListContainer;
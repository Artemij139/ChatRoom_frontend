import { CircularProgress, Container, Grid } from "@mui/material";



const Loader = () => {
   
    return (

        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <CircularProgress color="secondary" />
                </Grid>
            </Grid>
        </Container>
    )
}
export default Loader;
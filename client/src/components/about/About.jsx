
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxr45ZaZv0_73HzUU9QKXlAy7PScjlLimPg&usqp=CAU);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: black;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Link sx={{ textDecoration: 'none' }}>
                    <Typography variant="h3" sx={{textAlign: "center" }}>Abot Me</Typography>
                    <Typography variant="h5" sx={{ color: "orange"}}>Md IntezarAlam</Typography>
                </Link>
                <Text variant="h5">I'm A front-end & backend developer with good experience in web designing and development and I have skills in this field which is Html,Css, JavaScript, React Js, Git, GitHub, Node Js, Express Js & MongoDB
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/MdIntezarAlam" color="inherit" target="_blank">
                   <br />
                   GitHub  <GitHub />
                        </Link>
                    </Box>
                </Text>
                <Text variant="h5">Visit site
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Box component="span" style={{ marginLeft: 5 }}>
                            <Link href="https://intezar-dev.netlify.app/" color="inherit" target="_blank" sx={{color:'blue'}}>intezar-dev.com </Link>
                        </Box>
                    </Box>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
  display:flex;
  align-items:center;
  margin:10px;
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5" >
                    Contact me on Instagram
                    <Link sx={{ color: 'red' , margin:'10px'}} href="https://www.instagram.com/mdintezar123/" color="inherit" target="_blank">
                        <Instagram />
                    </Link>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
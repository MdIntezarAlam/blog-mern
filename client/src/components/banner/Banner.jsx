
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aexl2xrNDftmaHJRfJEnC5FwBM-SkQfVCQ&usqp=CAU) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background:orange;
    padding:10px;
    border-radius:5px;
    margin-top:5px;
`;

const Banner = () => {

    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Welcome to Blog website...</SubHeading>
        </Image>
    )
}

export default Banner;
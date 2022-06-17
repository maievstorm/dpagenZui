import PropTypes from 'prop-types';
import React, { Component } from "react";

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { DropzoneArea } from "material-ui-dropzone";

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IconCloudDownload,IconTrash,IconUpload} from '@tabler/icons';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

const icons = {
    IconCloudDownload,
    IconTrash,
    IconUpload
};

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //


const Bucketupload = ({ isLoading }) => {
    const theme = useTheme();
    

    return (
        <>
         
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.primary[800],
                                            color: '#fff'
                                        }}
                                    >
                                        <CloudUploadIcon  fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                {/* <DropzoneArea ></DropzoneArea> */}
                                
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

Bucketupload.propTypes = {
    isLoading: PropTypes.bool
};

export default Bucketupload;


// export default class extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         files: []
//       };
//     }
//     handleChange(files) {
//       console.log(files);
//       this.setState({
//         files: files
//       });
//     }
//     render() {
//       return <DropzoneArea onChange={this.handleChange.bind(this)} />;
//     }
//   }

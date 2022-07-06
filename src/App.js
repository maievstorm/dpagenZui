import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';



// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import RenderOnAuthenticated from 'components/RenderOnAuthenticated';
import RenderOnAnonymous from 'components/RenderOnAnonymous';
import Welcome from 'components/welcome';



// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        
       
        <StyledEngineProvider injectFirst>
             <RenderOnAnonymous>
                <Welcome />               
             </RenderOnAnonymous>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    {/* <RenderOnAuthenticated> */}
                        <Routes />
                    {/* </RenderOnAuthenticated> */}
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
     
        
    );
};
export default App;

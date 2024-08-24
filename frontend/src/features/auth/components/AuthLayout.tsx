import { ReactNode } from "react";
import {
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from "@mui/material";

const defaultTheme = createTheme();

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        // <Grid container component="main" sx={{ height: "100vh" }}>
        //     <Grid
        //         item
        //         xs={false}
        //         sm={4}
        //         md={7}
        //         sx={{
        //             backgroundImage: `url(${loginBg})`,
        //             backgroundRepeat: "no-repeat",
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //             filter: "blur(1.5px)",
        //         }}
        //     />
        //     <Grid
        //         item
        //         xs={12}
        //         sm={8}
        //         md={5}
        //         component={Paper}
        //         elevation={6}
        //         square
        //     >
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {children}
            </Container>
        </ThemeProvider>
        //     {/* </Grid>
        // </Grid> */}
    );
};

export default AuthLayout;

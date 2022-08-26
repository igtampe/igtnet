import React, { useState } from "react";
import Grid from "@mui/material/Grid"
import { Typography, Card, CardContent, createTheme, ThemeProvider, IconButton, Link, Dialog, DialogContent, DialogTitle, DialogContentText, Divider } from "@mui/material";
import { QuestionMark } from "@mui/icons-material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#DDDDDD', },
        secondary: { main: '#009800', },
    },
})

export default function App(props) {

    const [aboutOpen, setAboutOpen] = useState(false)

    return (
        <>
            <Typography>
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '98vh' }}>
                    <Grid item xs={12} style={{ width: '75%', maxWidth: '800px' }}>
                        <Card style={{ width: '100%' }}>
                            <CardContent>
                                <table width='100%'>
                                    <tr>
                                        <td><img alt='IGTNET Logo' src='shade.png' height='50px' /></td>
                                        <td width='1'><IconButton onClick={() => setAboutOpen(true)} style={{ marginBottom: '10px' }}><QuestionMark /></IconButton></td>
                                    </tr>
                                </table>
                            </CardContent>
                            <CardContent style={{ background: '#444444', color: '#FFFFFF' }}>
                                <ThemeProvider theme={darkTheme}>
                                    <CardDisplay /><br />
                                    <div style={{ textAlign: 'center', background: '#222222', padding: '2px' }}></div><br />
                                    <ServerDisplay /><br />
                                </ThemeProvider>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Typography>

            <ThemeProvider theme={darkTheme}>
                <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
            </ThemeProvider>
        </>
    );
}

function AboutDialog(props) {

    return (
        <Dialog fullWidth maxWidth='sm' {...props}>
            <DialogTitle>About The Igtampe Computer Network</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    The Igtampe Comptuer Network is a collection of resources for the Nexus Discord server. This is the third iteration of the site.
                    <Divider style={{marginTop:'20px'}}/>
                    <table>
                        <tr>
                            <td width='1'><img src='https://avatars.githubusercontent.com/u/49919240?v=4' width='50px' style={{ margin: '25px' }} /></td>
                            <td>This website and all programs linked from it were programmed by Chopo. Learn more about him on his <Link href='https://sites.google.com/view/igtampe'>site</Link></td>
                        </tr>
                    </table>
                    <Divider style={{marginBottom:'20px'}}/>
                    The IGTNET is (C)2022 Igtampe, no rights reserved. Long live Artemis. Its service isn't done, but its time as a web server is done.
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )

}

function CardDisplay(props) {

    return (<Grid container spacing={2}>

        <IGTNETCard title='Server Resources' headerBG='#3F0037'>
            <Link href="/resources/Nexousse3.0.zip">Nexousse</Link><br />
            <Link href="https://github.com/igtampe/SimpleElevator/releases/tag/2.0">SimpleElevator</Link><br />
            <Link href="https://github.com/igtampe/MirrorHelper/releases/tag/V1.1">MirrorHelper</Link> and<> </> {/* That actually works */}
            <Link href="https://github.com/igtampe/RotateHelper/releases/tag/V1.0">RotateHelper</Link><br />
        </IGTNETCard>

        <IGTNETCard title='Handbooks' headerBG='#3F0000'>
            <Link href="https://docs.google.com/document/d/1kKtXkHwkvgFcONN0F0Bf9D3M0auYXTh3URV60Ipeo5o/edit">Nexus General Handbook</Link><br />
            <Link href="https://docs.google.com/document/d/1tJXNMCxMvC1oRl2sRyapNzQ1zWjMqeTLxP7RxngI0u0/edit">UMS Government Handbook</Link><br />
            <Link href="https://docs.google.com/document/d/1Kpe3iXSkhzRtPp5sYkF8hms5aP2vwr9jxjknxyJe7b4/edit">UMS Economy Handbook</Link><br />
        </IGTNETCard>

        <IGTNETCard title='UMS' headerBG='#3F1900'>
            <Link href="https://umswiki.onrender.com/">UMS Wiki</Link><br />
            <Link href="http://nexusums.my.pebble.host:8037/?worldname=MSM.UMS&mapname=surface">UMS Live Map</Link><br />
            <Link href="/maps/umt.png">UMT Public Transit Map</Link><br />
            <Link href="/maps/velox.png">Velox (EPT/LPT) Map</Link><br />
        </IGTNETCard>

        <IGTNETCard title='Economy' headerBG='#3F3500'>
            <Link href="https://neco.igtampe.com">Neco (.Net Economy)</Link><br />
            <Link href="https://docs.google.com/spreadsheets/d/1E5XBO7P6N-PYZ2V87v55amE2wD1S2lrAJ6KM5heZpRU/edit">GAH Item Registry</Link><br />
            <Link href="https://docs.google.com/spreadsheets/d/18d-MSWSFSJelNZ9Zphm2WkOrVFolM7IZDUAUlImGEuA/edit">SDC Company Registry</Link><br />
            <Link href="https://docs.google.com/spreadsheets/d/1DNQtjKvKYqI9diTD2_7_lYWeZ9oUucpt24tLBEcF8aM/edit">Planes Catalogue</Link><br />
        </IGTNETCard>

    </Grid>)

}

function IGTNETCard(props) {

    let style = props.headerBG
        ? { background: props.headerBG }
        : { background: '#001100' }

    style = props.headerFG
        ? { ...style, color: props.headerFG }
        : { ...style, color: '#FFFFFF' }

    return (<Grid item xs={6}>
        <Card>
            <CardContent style={style}>
                <b>{props.title}</b>
            </CardContent>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    </Grid>)


}

function ServerDisplay(props) {

    return (<Grid container spacing={2}>

        <ServerCard name='Nexus' link='https://discord.com/invite/2RPNKWd' image='/servericons/nexus.jpg'>
            Nexus is the hub of our communication network</ServerCard>

        <ServerCard name='Nexus Corporate' link='https://discord.com/invite/ZDBtwNA' image='/servericons/nexuscorp.png'>
            Nexus Corp. holds offices for corporations in the UMS</ServerCard>

        <ServerCard name='UMS Government'
            link='https://discord.com/invite/5MC5nBe'
            image='/servericons/umsgov.png'>
            The UMS Model Nation's Government Server</ServerCard>

    </Grid>)

}

function ServerCard(props) {

    return (<Grid item xs={4}>
        <a href={props.link}>
            <Card>
                <CardContent style={{ textAlign: 'center' }}>
                    <img src={props.image} alt={props.name} width='30%' /><br />
                    <b>{props.name}</b><br />
                    {props.children}
                </CardContent>
            </Card>
        </a>
    </Grid>)

}

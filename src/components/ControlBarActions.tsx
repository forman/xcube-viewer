import MyLocationIcon from '@material-ui/icons/MyLocation';
import * as React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { WithLocale } from '../util/lang';


// noinspection JSUnusedLocalSymbols
const styles = (theme: Theme) => createStyles(
    {
        formControl: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginLeft: 'auto',
        },
    });

interface ControlBarActionsProps extends WithStyles<typeof styles>, WithLocale {
    visible: boolean;
    flyToSelectedObject: () => void;
    infoCardOpen: boolean;
    showInfoCard: (open: boolean) => void;
}

const ControlBarActions: React.FC<ControlBarActionsProps> = ({
                                                           classes,
                                                           visible,
                                                           flyToSelectedObject,
                                                           infoCardOpen,
                                                           showInfoCard,
                                                       }) => {

    if (!visible) {
        return null;
    }

    const flyToButton = (
        <IconButton onClick={flyToSelectedObject}>
            <MyLocationIcon/>
        </IconButton>
    );

    let infoButton;
    if (!infoCardOpen) {
        infoButton = (
            <IconButton onClick={() => showInfoCard(true)}>
                {<InfoIcon/>}
            </IconButton>
        );
    }

    return (
        <FormControl className={classes.formControl}>
            <Box>
                {flyToButton}
                {infoButton}
            </Box>
        </FormControl>
    );
};

export default withStyles(styles)(ControlBarActions);

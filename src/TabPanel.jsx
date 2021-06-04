import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Learning from './Learning';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormData from './FormData'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Exam from './Exam.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <TabPanel value={value} index={0}>
       <FormData />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Learning />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
       <Exam />
      </TabPanel>
      <TabPanel value={value} index={7}>
     <h1>Item Seven</h1>
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Seven
      </TabPanel>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Account" {...a11yProps(0)} />
        <Tab label="Learning Language" {...a11yProps(1)} />
        <Tab label="Profile" {...a11yProps(2)} />
        <Tab label="Password" {...a11yProps(3)} />
        <Tab label="Duolingo Plue" {...a11yProps(4)} />
        <Tab label="Notification" {...a11yProps(5)} />
        <Tab label="Coach" {...a11yProps(6)} />
        <Tab label="Progress Sharing" {...a11yProps(7)} />
        <Tab label="Privacy" {...a11yProps(8)} />
      </Tabs>
    </div>
  );
}

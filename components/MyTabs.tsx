import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface TabPanelPropsData {
    category_id: number;
    tour_name: string;
    description: string;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function MyTabs(props) {
    const { data } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    {data.map((item: TabPanelPropsData, key: number) => {
                        return <Tab key={key} label={item.tour_name} {...a11yProps(key)} />;
                    })}
                </Tabs>
            </Box>
            {data.map((item: TabPanelPropsData, key: number) => {
                return (
                    <CustomTabPanel key={key} value={value} index={key}>
                        {item.tour_name}
                    </CustomTabPanel>
                );
            })}
        </Box>
    );
}
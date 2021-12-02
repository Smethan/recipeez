import React from "react";
import Typography from "@mui/material/Typography"
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import RecipeForm from "./RecipeForm";
import RecipeDisplay from "./RecipeDisplay";

const NavBar = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    }
    
    
    return (
        <div>
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label='Recipe Form' />
                <Tab label='View Recipes'/>
            </Tabs>
            {selectedTab == 0 && <RecipeForm />}
            {selectedTab == 1 && <RecipeDisplay/>}
               
        </div>
    )
}

export default NavBar;